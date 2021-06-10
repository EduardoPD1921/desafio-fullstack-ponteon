import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../static/css/appStyle.css';

import FormNameInput from '../components/Form/FormNameInput';
import FormPhoneInput from '../components/Form/FormPhoneInput';
import FormStateSelecter from '../components/Form/FormStateSelecter';
import FormCitySelecter from '../components/Form/FormCitySelecter';
import FormBusinessFatherInput from '../components/Form/FormBusinessFatherInput';

import { 
    Title, 
    RegisterForm
} from '../static/StyledComponents';

const App = props => {
    const [cities, setCities] = useState();
    const [businessFatherOptions, setBusinessFatherOptions] = useState();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [businessFather, setBusinessFather] = useState('');
    const [businessFatherId, setBusinessFatherId] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/empresarios')
            .then(resp => setBusinessFatherOptions(resp.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Title>
                Cadastro de Empresários
            </Title>
            <RegisterForm>
                <FormNameInput setName={setName} />
                <FormPhoneInput setPhone={setPhone} />
                <FormStateSelecter setState={setState} setCities={setCities} />
                <FormCitySelecter cities={cities} setCity={setCity} />
                <FormBusinessFatherInput 
                    setBusinessFather={setBusinessFather} 
                    setBusinessFatherId={setBusinessFatherId} 
                    businessFatherOptions={businessFatherOptions} 
                />
                {/* <button onClick={() => console.log(businessFatherId, businessFatherId)}>test</button> */}
            </RegisterForm>
        </div>
    );
};

export default App;