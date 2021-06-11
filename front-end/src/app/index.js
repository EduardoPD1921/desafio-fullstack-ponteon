import React, { useState, useEffect } from 'react';
import VMasker from 'vanilla-masker';
import axios from 'axios';
import '../static/css/appStyle.css';

import FormNameInput from '../components/Form/FormNameInput';
import FormPhoneInput from '../components/Form/FormPhoneInput';
import FormStateSelecter from '../components/Form/FormStateSelecter';
import FormCitySelecter from '../components/Form/FormCitySelecter';
import FormBusinessFatherInput from '../components/Form/FormBusinessFatherInput';

import { 
    Title, 
    RegisterForm,
    CustomButton
} from '../static/StyledComponents';

const App = props => {
    const [cities, setCities] = useState();
    const [businessFatherOptions, setBusinessFatherOptions] = useState();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [businessFatherId, setBusinessFatherId] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/empresario/show-all')
            .then(resp => setBusinessFatherOptions(resp.data))
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
            .catch(error => console.log(error.response));
    };

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
                    businessFatherOptions={businessFatherOptions} 
                />
                <CustomButton onClick={() => onSubmitForm()}>Cadastrar</CustomButton>
            </RegisterForm>
        </div>
    );
};

export default App;