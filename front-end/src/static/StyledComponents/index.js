import styled from 'styled-components';

export const Title = styled.h2`
    margin-left: 15px;
`;

export const SectionTitle = styled.h4`
`;

export const CustomSelecter = styled.select`
    width: 10%;
    margin-bottom: 10px;
`;

export const CustomButton = styled.button`
    width: ${(props) => props.width};
    margin-top: ${(props) => props.marginTop || '0px'};
`;

export const RedAsterisk = styled.h3`
    color: red;
    margin-left: 5px;
`;

export const ErrorList = styled.ul`
    font-style: italic;
    color: red;
    margin-left: 15px;
`;

export const EmpresariosTable = styled.table`
    width: 70%;
    border-collapse: collapse;
    margin-top: 5%;
    margin-left: 15px;
`;

export const TableTitle = styled.th`
    border: 1px solid #dddddd;
    text-align: center;
`;

export const TableValue = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    text-align: center;
`;

export const RegisterInput = styled.input`
    width: ${(props) => props.width};
    margin-bottom: 10px;
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