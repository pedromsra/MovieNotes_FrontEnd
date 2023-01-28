import { Container } from "./styles"

import { Tag } from "../Tag"

export function NoteTag({data, ...rest}){
    let countKey = 0
    return(
        <Container {...rest}>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key = {tag.id} title = {tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}