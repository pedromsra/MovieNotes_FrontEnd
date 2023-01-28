import { Container } from "./styles"

import { FiPlus, FiX } from "react-icons/fi"

export function NoteNewTag({value, onClick, isNew = "false", ...rest}){
    let tagicon
    let newtag
    if(isNew === "true") {
        tagicon = <FiPlus />;
        newtag = true;
    } else {
        tagicon = <FiX />;
        newtag = false;
    }

    return(
        <Container isNew = {isNew} newtag = {newtag}>
            <span className = "input" 
                role = "textbox"
                contentEditable = {isNew}
                {...rest}
                suppressContentEditableWarning={true}
            >{value}</span>

            <button
                onClick = {onClick}
                type = "button"
            >
                {tagicon}
            </button>
        </Container>
    )
}