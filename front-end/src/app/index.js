import React, { useState } from 'react';
import axios from 'axios';
import '../static/css/appStyle.css';

import StateSelecter from '../components/StateSelecter';

import { Title, RegisterForm, RowSection, SectionTitle, RedAsterisk, RegisterInput } from '../static/StyledComponents';

const App = props => {
    const [state, setState] = useState();
    const [cities, setCities] = useState();

    return (
        <div>
            <Title>
                Cadastro de Empresários
            </Title>
            <RegisterForm>
                <RowSection>
                    <SectionTitle>Nome</SectionTitle>
                    <RedAsterisk>*</RedAsterisk>
                </RowSection>
                <RegisterInput width="20%" />
                <RowSection>
                    <SectionTitle>Celular</SectionTitle>
                    <RedAsterisk>*</RedAsterisk>
                </RowSection>
                <RegisterInput width="20%" />
                <RowSection>
                    <SectionTitle>Estado</SectionTitle>
                    <RedAsterisk>*</RedAsterisk>
                </RowSection>
                <StateSelecter setSelectedState={setState} setCities={setCities} />
                <RowSection>
                    <SectionTitle>Cidade</SectionTitle>
                    <RedAsterisk>*</RedAsterisk>
                </RowSection>
                {/* <select>
                    {test && test.map((element: any, key: any) => {
                        return <option value={element.id} key={element.id}>{element.nome}</option>
                    })}
                </select> */}
                <select>
                    {cities && cities.map((element, key) => {
                        return <option value={element.nome} key={element.id}>{element.nome}</option>
                    })}
                </select>
            </RegisterForm>
            {/* <button onClick={() => console.log(state)} /> */}
        </div>
    );
};

export default App;