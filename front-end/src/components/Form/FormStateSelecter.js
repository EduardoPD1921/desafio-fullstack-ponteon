import React from 'react';

import StateSelecter from '../StateSelecter';

import {
    RowSection,
    SectionTitle,
    RedAsterisk
} from '../../static/StyledComponents';

const FormStateSelecter = props => {
    return (
        <React.Fragment>
            <RowSection>
                <SectionTitle>Estado</SectionTitle>
                <RedAsterisk>*</RedAsterisk>
            </RowSection>
            <StateSelecter setState={props.setState} setCities={props.setCities} />
        </React.Fragment>
    );
};

export default FormStateSelecter;