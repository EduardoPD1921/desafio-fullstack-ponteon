import React from 'react';

import {
    RowSection,
    SectionTitle,
    RedAsterisk,
    RegisterInput
} from '../../static/StyledComponents';

const FormInputSection = props => {
    return (
        <React.Fragment>
            <RowSection>
                <SectionTitle>Celular</SectionTitle>
                <RedAsterisk>*</RedAsterisk>
            </RowSection>
            <RegisterInput onChange={e => props.setPhone(e.target.value)} width="20%" />
        </React.Fragment>
    );
};

export default FormInputSection;