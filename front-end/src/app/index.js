import React, { useState, useEffect } from 'react';
import VMasker from 'vanilla-masker';
import axios from 'axios';
import Bootbox from 'bootbox-react';
import '../static/css/appStyle.css';

import FormNameInput from '../components/Form/FormNameInput';
import FormPhoneInput from '../components/Form/FormPhoneInput';
import FormStateSelecter from '../components/Form/FormStateSelecter';
import FormCitySelecter from '../components/Form/FormCitySelecter';
import FormBusinessFatherInput from '../components/Form/FormBusinessFatherInput';

import { 
    Title, 
    RegisterForm,
    CustomButton,
    ErrorList,
    EmpresariosTable,
    TableValue,
    TableTitle
} from '../static/StyledComponents';

const App = props => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [registerToDelete, setRegisterToDelete] = useState('');

    const [cities, setCities] = useState();
    const [empresarios, setEmpresarios] = useState();
    const [errors, setErrors] = useState([]);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [businessFatherId, setBusinessFatherId] = useState('');

    const [paiEmpresarialSelected, setPaiEmpresarialSelected] = useState('');
    const [editEmpresario, setEditEmpresario] = useState('');

    const [familyTree, setFamilyTree] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/empresario/show-all')
            .then(resp => setEmpresarios(resp.data))
            .catch(error => console.log(error));
    }, []);

    const onSubmitForm = () => {
        const unFormattedPhone = VMasker.toPattern(phone, '99999999999');

        const data = {
            nome: name,
            celular: unFormattedPhone,
            estado: state,
            cidade: city,
            pai_empresarial_id: businessFatherId
        };

        axios.post('http://127.0.0.1:8000/api/empresario/register', data)
            .then(resp => console.log(resp))
            .then(() => window.location.reload())
            .catch(error => onSubmitErrorForm(error.response.data));
    };

    const onSubmitErrorForm = error => {
        setErrors([]);

        const errorList = [
            error.celular,
            error.cidade,
            error.estado,
            error.nome
        ];

        const errorsListed = [];

        errorList.map(element => {
            if (element !== undefined) {
                return errorsListed.push(element[0]);
            }

            return false;
        });

        setErrors(errorsListed);
    };

    const renderErrors = () => {
        return (
            <ErrorList>
                {errors.map(element => {
                    return <li>{element}</li>
                })}
            </ErrorList>
        );
    };

    const deleteEmpresario = () => {
        const data = {
            id: registerToDelete
        };

        axios.delete('http://127.0.0.1:8000/api/empresario/delete', {
            params: data
        })
            .then(resp => {
                window.location.reload();
            })
            .catch(error => console.log(error.response));
    };

    const onDelete = registerId => {
        setShowConfirmation(true);
        setRegisterToDelete(registerId);
    };

    const onChange = (nome, valor) => {
        if (nome === 'celular') {
            return setEditEmpresario({
                ...editEmpresario,
                [nome]: phoneFormatter(valor)
            });
        }

        return setEditEmpresario({
            ...editEmpresario,
            [nome]: valor
        });
    }

    const phoneFormatter = (phoneValue) => {
        const formattedPhoneValue = VMasker.toPattern(phoneValue, '(99) 99999-9999');
        return formattedPhoneValue;
    }

    const onCancelEdit = () => {
        setEditEmpresario('');
        setPaiEmpresarialSelected('');
    }

    const onSaveChanges = () => {
        const unmaskedPhone = VMasker.toPattern(editEmpresario.celular, '99999999999');
        editEmpresario.celular = unmaskedPhone;
        editEmpresario.pai_empresarial_id = paiEmpresarialSelected;

        axios.put('http://127.0.0.1:8000/api/empresario/update', editEmpresario)
            .then(() => window.location.reload())
            .catch(error => onSubmitErrorForm(error.response.data));
    }

    const test = (empresarioId) => {
        axios.get('http://127.0.0.1:8000/api/empresario/show-family-tree', {
            params: {
                id: empresarioId
            }
        })
            .then(resp => setFamilyTree(resp.data))
            .catch(error => console.log(error.response));
    }

    const renderTree = () => {
        if (familyTree) {
            return (
                <ul>
                    <li>{familyTree.nome}</li>
                    {renderChildrens(familyTree.children)}
                </ul>
            )
        }
    }

    const renderChildrens = (children) => {
        return (
            <ul>
                {children.map(element => {
                    return (
                        <React.Fragment>
                            <li>{element.nome}</li>
                            {element.children && renderChildrens(element.children)}
                        </React.Fragment>
                    )
                })}
            </ul>
        )
    }

    const renderEditForm = () => {
        if (editEmpresario) {
            return (
                <EmpresariosTable>
                    <tr>
                        <TableTitle>Nome Completo</TableTitle>
                        <TableTitle>Celular</TableTitle>
                        <TableTitle>Cidade</TableTitle>
                        <TableTitle>UF</TableTitle>
                        <TableTitle>Pai Empresarial</TableTitle>
                        <TableTitle>x</TableTitle>
                        <TableTitle>-</TableTitle>
                    </tr>
                    <tr>
                        <TableValue>
                            <input 
                                onChange={e => onChange('nome', e.target.value)}
                                placeholder="Nome"
                                value={editEmpresario.nome}
                            />
                        </TableValue>
                        <TableValue>
                            <input
                                onChange={e => onChange('celular', e.target.value)} 
                                placeholder="Celular"
                                value={phoneFormatter(editEmpresario.celular)}
                            />
                        </TableValue>
                        <TableValue>
                            <input
                                onChange={e => onChange('cidade', e.target.value)}
                                placeholder="Cidade"
                                value={editEmpresario.cidade}
                            />
                        </TableValue>
                        <TableValue>
                            <input
                                onChange={e => onChange('estado', e.target.value)} 
                                placeholder="Estado"
                                value={editEmpresario.estado} 
                            />
                        </TableValue>
                        <TableValue>
                            <select>
                                <option onClick={() => setPaiEmpresarialSelected('')}>Nenhum</option>
                                {empresarios && empresarios.map(element => {
                                    if (element.id !== editEmpresario.id) {
                                        return (
                                            <option onClick={() => setPaiEmpresarialSelected(element.id)}>
                                                {element.nome}
                                            </option>
                                        )
                                    }

                                    return '';
                                })}
                            </select>
                        </TableValue>
                        <TableValue>
                            <CustomButton onClick={() => onCancelEdit()}>Cancelar</CustomButton>
                        </TableValue>
                        <TableValue>
                            <CustomButton onClick={() => onSaveChanges()}>Salvar</CustomButton>
                        </TableValue>
                    </tr>
                </EmpresariosTable>
            )
        }

        return;
    }

    return (
        <div>
            <Title>
                Cadastro de Empresários
            </Title>
            <RegisterForm>
                <FormNameInput setName={setName} />
                <FormPhoneInput value={phone} setPhone={setPhone} />
                <FormStateSelecter setState={setState} setCities={setCities} />
                <FormCitySelecter cities={cities} setCity={setCity} />
                <FormBusinessFatherInput 
                    setBusinessFatherId={setBusinessFatherId} 
                    businessFatherOptions={empresarios} 
                />
                <CustomButton marginTop="30px" width="15%" onClick={() => onSubmitForm()}>Cadastrar</CustomButton>
            </RegisterForm>
            {renderErrors()}
            <Bootbox
                type="confirm"
                message="Tem certeza que deseja excluir esse cadastro?"
                show={showConfirmation}
                onSuccess={() => deleteEmpresario()}
                onCancel={() => setShowConfirmation(false)}
                onClose={() => setShowConfirmation(false)}
            />
            <EmpresariosTable>
                <tr>
                    <TableTitle>Nome Completo</TableTitle>
                    <TableTitle>Celular</TableTitle>
                    <TableTitle>Cidade/UF</TableTitle>
                    <TableTitle>Cadastrado em</TableTitle>
                    <TableTitle>Pai Empresarial</TableTitle>
                    <TableTitle>Rede</TableTitle>
                    <TableTitle> - </TableTitle>
                    <TableTitle>Edição</TableTitle>
                </tr>
                {empresarios && empresarios.map(element => {
                    const maskedPhone = VMasker.toPattern(element.celular, '(99) 99999-9999');
                    const data = new Date(element.created_at);

                    const dataHours = data.getHours();
                    const dataMinutes = data.getMinutes();

                    const dataDay = data.getDate();
                    const dataMonth = data.getMonth() + 1;
                    const dataYear = data.getFullYear();

                    return (
                        <tr>
                            <TableValue>{element.nome}</TableValue>
                            <TableValue>{maskedPhone}</TableValue>
                            <TableValue>{`${element.cidade} / ${element.estado}`}</TableValue>
                            <TableValue>{`${dataDay}/${dataMonth}/${dataYear} ${dataHours}:${dataMinutes}`}</TableValue>
                            <TableValue>{element.parent ? element.parent.nome : '-'}</TableValue>
                            <TableValue>
                                <CustomButton onClick={() => test(element.id)}>Ver rede</CustomButton>
                            </TableValue>
                            <TableValue>
                                <CustomButton onClick={() => onDelete(element.id)} width="100%">Excluir</CustomButton>
                            </TableValue>
                            <TableValue>
                                <CustomButton width="100%" onClick={() => setEditEmpresario(element)}>Editar</CustomButton>
                            </TableValue>
                        </tr>
                    );
                })}
            </EmpresariosTable>
            {renderTree()}
            {renderEditForm()}
        </div>
    );
};

export default App;