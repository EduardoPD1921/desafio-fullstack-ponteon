import React from 'react';

import {
    RowSection,
    SectionTitle,
    RedAsterisk,
    CustomSelecter
} from '../../static/StyledComponents';

const FormCitySelecter = props => {
    return (
        <React.Fragment>
            <RowSection>
                <SectionTitle>Cidade</SectionTitle>
                <RedAsterisk>*</RedAsterisk>
            </RowSection>
            <CustomSelecter disabled={props.cities ? false : true} onChange={e => props.setCity(e.target.value)}>
                <option disabled selected value>Selecione uma cidade</option>
                {props.cities && props.cities.map((element, key) => {
                    return <option value={element.nome} key={element.id}>{element.nome}</option>
                })}
            </CustomSelecter>
        </React.Fragment>
    );
};

export default FormCitySelecter;