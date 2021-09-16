import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: var(--texts);

    th {
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-weight: 400;
    }

    td {
      border: 0;
      background: var(--shape-principal);

      padding: 1rem 2rem;

      &:first-child {
        color: var(--titles);
      }

      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--green);
      }
    }
  } 
`;
