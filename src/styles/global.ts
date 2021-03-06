import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #f0f2f5;
      --green: #33CC95;
      --blue: #5429CC;
      --red: #E62E4D;

      --shape-principal: #FFFFFF;
      --blue-light: #6933FF;


      --titles: #363F5F;
      --texts: #969CB3;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 93.75%;
      }

      @media (max-width: 720px) {
          font-size: 87.5%;
      }
  }

  body {
    font-family: 'Poppins', sans-serif;

    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background: #f0f2f5;

    position: relative;

    width: 100%;
    max-width: 576px;

    padding: 3rem;

    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;

    top: 1.5rem;
    right: 1.5rem;

    border: none;

    background-color: transparent;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(.8);
    }
  }
`;