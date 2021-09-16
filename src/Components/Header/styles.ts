import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    width: 100vw;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 1rem 10rem;

    button {
        border: 0;
        border-radius: 0.25rem;

        background-color: var(--blue-light);
        color: #FFF;

        font-size: 1rem;

        padding: 0 2rem;

        height: 3rem;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
