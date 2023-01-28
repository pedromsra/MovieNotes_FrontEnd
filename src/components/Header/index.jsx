import { Link } from "react-router-dom"

import { Container, Profile } from "./styles"

import { Input } from "../../components/Input"


export function Header(){
    return(
        <Container>
            <Link to="/">RocketMovies</Link>
            <Input placeholder = "Pesquisar pelo título" />
            <Profile>
                <div>
                    <Link to="/profile">Pedro de Araújo</Link>
                    <button>sair</button>
                </div>
                <Link to="/profile"><img src="https://github.com/pedromsra.png" alt="Avatar" /></Link>
            </Profile>
        </Container>
    )
}