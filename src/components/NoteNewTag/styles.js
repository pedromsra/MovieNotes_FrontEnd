import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    height: 5.6rem;

    display: flex;
    align-items: center;

    padding: 1.6rem;

    border: ${({theme, newtag}) => newtag ? `.2rem dashed ${theme.COLORS.GRAY_200}` : `none`};
    border-radius: 1rem;

    background-color: ${({theme, newtag}) => newtag ? `transparent` : `${theme.COLORS.BACKGROUND_400}`};

    > .input {
        width: 100%;
        height: 5.6rem;

        padding: 1.6rem;

        background: transparent;
        border: 0;

        color: ${({theme}) => theme.COLORS.GRAY_100};

        &[contenteditable]:empty::before {
            content: "Novo marcador";
            color: ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    button {
        background: transparent;
        border: 0;

        svg {
        color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`;