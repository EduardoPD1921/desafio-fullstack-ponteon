import styled from 'styled-components';

export const Title = styled.h2`
    margin-left: 15px;
`;

export const SectionTitle = styled.h4`
`;

export const CustomSelecter = styled.select`
    width: 10%;
`;

export const CustomButton = styled.button`
    width: 15%;
    margin-top: 30px;
`;

export const RedAsterisk = styled.h3`
    color: red;
    margin-left: 5px;
`;

export const RegisterInput = styled.input`
    width: ${(props) => props.width};
`;

export const RegisterForm = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2%;
`;

export const RowSection = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
`;

export const ColumnSection = styled.div`
    display: flex;
    flex-direction: column;
`;