import styled from "styled-components";

export const Form_styles = styled.div`
  box-sizing: border-box;
  
  .wrapper {
    margin: 5em auto 2em auto;
    padding: 3em 5em;
    max-width: 20em;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
    border-radius: 2em;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        margin-bottom: 1em;
      }
      button {
        position: relative;
        left: 5em;
      }
    }
  }

  .warning {
    display: none;
    position: fixed;

    &.active {
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
    &_wrapper {
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    &__div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      padding: 2em;
      border-radius: 30px;

      background: white;
    }
  }
`;
