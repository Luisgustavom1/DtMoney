import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;

    color: var(--titles);

    margin-bottom: 2rem;
  }

  input {
    width: 100%;

    padding: 1rem 1.5rem;

    outline: none;
    border: 1px solid #D7D7D7; 
    
    background: #E7E9EE;

    border-radius: 0.24rem;
    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--texts);
    }
  }

  button[type='submit'] {
    width: 100%;

    padding: 1.4rem 0;
    margin-top: 1.5rem;

    color: var(--shape-principal);
    background-color: var(--green);

    border-radius: 0.24rem;
    border: none;
    
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(.9);
    }
  }
`;
