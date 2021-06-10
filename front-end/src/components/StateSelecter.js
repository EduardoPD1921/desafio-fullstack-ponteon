import React from 'react';
import axios from 'axios';

import { StateSelect } from '../static/StyledComponents';

const StateSelecter = props => {
    const setSelectedState = (value) => {
        props.setSelectedState(value);

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/municipios`)
            .then(resp => props.setCities(resp.data))
            .catch(error => console.log(error));
    }

    return (
        <StateSelect onChange={event => setSelectedState(event.target.value)}>
            <option disabled selected value>Selecione um estado</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
        </StateSelect>
    );
};

export default StateSelecter;