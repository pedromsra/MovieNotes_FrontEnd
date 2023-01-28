import { Link } from "react-router-dom"

import { Container, Header, UserImage, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiUser, FiCamera, FiMail, FiLock, FiUnlock, FiArrowLeft } from "react-icons/fi"

export function Profile(){
    return(
        <Container>
            <Header>
                <Link to="/"><FiArrowLeft />Voltar</Link>
            </Header>
                <UserImage>
                    <img src="https://github.com/pedromsra.png" alt="User image" />
                    <button><FiCamera /></button>
                </UserImage>
            <Form>
                    <Input icon={FiUser} placeholder="Pedro de Araújo" />
                    <Input icon={FiMail} placeholder="pedromsra@gmail.com" />
                    <Input icon={FiLock} placeholder="Senha Atual" />
                    <Input icon={FiUnlock} placeholder="Nova Senha" />
                    <Button title="Salvar" disabled />
            </Form>
        </Container>
    )
}