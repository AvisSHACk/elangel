import styled from "styled-components";

const Formulario = styled.form`
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
`

const Contenedor = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    border: 0;
    outline: 0;
    padding: .6rem .8rem;
    border: 1px solid #000;
    margin-bottom: 1rem;
`

const Button = styled.button`
    background-color: green;
    padding: .6rem .8rem;
    outline: 0;
    border: 0;
    color: #fff;
    cursor: pointer;
`

const Parrafo = styled.p `
    text-align: center;
    a {
        text-decoration: none;
        color: green;

        &:hover {
            text-decoration: underline;
        }
    }
`

export { Formulario, Contenedor, Input, Button, Parrafo };