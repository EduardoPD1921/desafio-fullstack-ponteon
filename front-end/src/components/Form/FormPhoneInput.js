import React from 'react';
import VMasker from 'vanilla-masker';

import {
    RowSection,
    SectionTitle,
    RedAsterisk,
    RegisterInput
} from '../../static/StyledComponents';

const FormInputSection = props => {
    const phoneFormatter = data => {
        const dataFormatted = VMasker.toPattern(data, "(99) 99999-9999");
        props.setPhone(dataFormatted);
    }

    return (
        <React.Fragment>
            <RowSection>
                <SectionTitle>Celular</SectionTitle>
                <RedAsterisk>*</RedAsterisk>
            </RowSection>
            <RegisterInput 
                value={props.value} 
                onChange={e => phoneFormatter(e.target.value)} 
                width="10%"
                placeholder="(00) 00000-0000"
            />
        </React.Fragment>
    );
};

export default FormInputSection;