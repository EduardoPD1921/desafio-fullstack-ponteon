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
            <CustomSelecter onChange={e => props.setCity(e.target.value)}>
                {props.cities && props.cities.map((element, key) => {
                    return <option value={element.nome} key={element.id}>{element.nome}</option>
                })}
            </CustomSelecter>
        </React.Fragment>
    );
};

export default FormCitySelecter;