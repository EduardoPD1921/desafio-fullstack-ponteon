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

export const ErrorList = styled.ul`
    font-style: italic;
    color: red;
    margin-left: 15px;
`;

export const EmpresariosTable = styled.table`
    width: 50%;
    border-collapse: collapse;
    margin-top: 5%;
    margin-left: 15px;
`;

export const TableTitle = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

export const TableValue = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
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