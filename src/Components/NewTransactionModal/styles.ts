import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
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

export const TransactionTypeContainer = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) => 
    props.isActive 
      ? transparentize(0.9, colors[props.activeColor]) 
      : 'transparent'
    };
  
  border: 1px solid #D7D7D7; 

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }

  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;

  img {
    width: 28px;
    height: 28px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;

    font-size: 1rem;
    color: var(--titles);
  }
`;