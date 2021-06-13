import React from 'react';

import {
    RowSection,
    SectionTitle,
    CustomSelecter
} from '../../static/StyledComponents';

const FormBusinessFatherInput = props => {
    const setBusinessFatherId = element => {
        props.setBusinessFatherId(element.id);
    };

    const setNoneBusinessFather = () => {
        props.setBusinessFatherId('');
    };

    return (
        <React.Fragment>
            <RowSection>
                <SectionTitle>Pai empresarial</SectionTitle>
            </RowSection>
            <CustomSelecter>
                <option disabled selected value>Selecione um pai empresarial</option>
                {props.businessFatherOptions && props.businessFatherOptions.map((element, key) => {
                    return (
                        <option
                            key={element.id}
                            onClick={() => setBusinessFatherId(element)}
                        >
                            {element.nome}
                        </option>
                    );
                })}
                <option onClick={() => setNoneBusinessFather()}>Nenhum</option>
            </CustomSelecter>
        </React.Fragment>
    );
};

export default FormBusinessFatherInput;