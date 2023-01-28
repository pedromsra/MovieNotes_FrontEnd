import {Link} from "react-router-dom"

import { Container, Head, Form, Footer, RouteButtons } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteNewTag } from "../../components/NoteNewTag"
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi"

export function NewMovieNote(){
    return(
        <Container>
            <Header />
            <main>
                <Head>
                    <Link to="/"><FiArrowLeft />Voltar</Link>
                    <h1>Novo Filme</h1>
                </Head>
                <Form>
                    <div>
                        <Input type="text" placeholder="Título" />
                        <Input type="text" placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    <TextArea placeholder="Observações" />
                </Form>
                <p>Marcadores</p>
                <Footer>
                    <NoteNewTag isNew = "false" value="React" />
                    <NoteNewTag isNew = "false" value="Node" />
                    <NoteNewTag isNew = "true" placeholder="Novo Marcador" />
                </Footer>
                <RouteButtons>
                    <Button title="Excluir Filme" />
                    <Button title="Salvar alterações" />
                </RouteButtons>
            </main>
        </Container>
    )
}