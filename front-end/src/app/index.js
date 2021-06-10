import React, { useState } from 'react';
// import axios from 'axios';
import '../static/css/appStyle.css';

import FormNameInput from '../components/Form/FormNameInput';
import FormPhoneInput from '../components/Form/FormPhoneInput';
import FormStateSelecter from '../components/Form/FormStateSelecter';
import FormCitySelecter from '../components/Form/FormCitySelecter';

import { 
    Title, 
    RegisterForm
} from '../static/StyledComponents';

const App = props => {
    const [cities, setCities] = useState();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

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
            </RegisterForm>
        </div>
    );
};

export default App;