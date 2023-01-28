import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 14.4rem 19rem auto;
    grid-template-areas:
        "header"
        "image"
        "form"
    ;
    place-items: center;
    align-items: flex-start;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 14.4rem;
    background: ${({theme}) => theme.COLORS.BACKGROUND_300};

    padding: 6.4rem 14.4rem;
    
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 700px) {
        padding: 6.4rem 2rem;
    }

`;

export const UserImage = styled.div`
    grid-area: image;
    position: relative;
    > img {
        border-radius: 50%;
    }

    > button {
        position: absolute;
        bottom: 2rem;
        right: 0;
        border: none;
        border-radius: 50%;
        width: 4.8rem;
        height: 4.8rem;
        background: ${({theme}) => theme.COLORS.PINK};

        svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND_300};
            width: 2.2rem;
            height: 2.2rem;
        }
    }
    top: -10.2rem;
`;

export const Form = styled.form`
    grid-area: form;
    max-width: 34rem;

    padding: 0 2rem;

    > div:nth-child(2) {
        margin-bottom: 1.8rem;
    }
`;