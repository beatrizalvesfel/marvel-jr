import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h2`
  color: #ff0000;
  font-size: 30px;
  font-family: "axiforma", sans-serif;
  font-weight: bold;
  text-align: center;
  margin-top: 60px;
`;

export const Img = styled.img`
  object-fit: contain;
  max-width: 240px;
  max-height: 95px;
  margin: 0 auto;
  display: block;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: logo;
  animation-delay: 0.2;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes logo {
    0% {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    5% {
      top: 50%;
      left: 54%;
    }

    40% {
      top: 50%;
      left: 22%;
    }

    80% {
      top: 50%;
      left: 22%;
    }

    100% {
      top: 18%;
      left: 22%;
    }
  }
`;
export const LoginDiv = styled.div`
  padding-left: 150px;
  width: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 20px;
    font-family: "axiforma", sans-serif;
    color: #84848d;
    font-weight: lighter;
    padding-bottom: 20px;
  }
  h4 {
    color: #84848d;
    font-size: 15px;
    font-family: "axiforma", sans-serif;
    font-weight: medium;
    text-align: center;
    margin-top: 30px;
    cursor: pointer;
    span {
      color: #ff0000;
    }
  }
  div {
    opacity: 0;
    transition: all 1.5s;
    animation-delay: 0.5s;
    animation-name: form;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    @keyframes form {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    outline: none;
    background: white;
    border: none;
    border-radius: 2rem;
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
    ::placeholder {
      opacity: 0.6;
    }
  }
  .login-options {
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: baseline;
      cursor: pointer;
      input {
        border: 1px solid #ff0000;
        border-radius: 4px;
        appearance: none;
        height: 13px;
        width: 13px;
        padding: 0;
        margin-right: 4px;
      }
      .login-options-salvar {
        font-size: 15px;
        font-family: "axiforma", sans-serif;
        color: #84848d;
        font-weight: medium;
        display: block;
        position: relative;
        display: block;
        padding-left: 20px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkmark {
          position: absolute;
          top: 2px;
          left: 0;
          height: 15px;
          width: 15px;
          border: 1px solid #ff0000;
          border-radius: 4px;
          background-color: white;
        }
        input:checked ~ .checkmark {
          background-color: #ff0000;
        }
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
          left: 9px;
          top: 5px;
        }
        input:checked ~ .checkmark:after {
          display: block;
        }
      }
    }
    .login-options-esqueci {
      font-size: 15px;
      font-family: "axiforma", sans-serif;
      color: #84848d;
      font-weight: medium;
      border-bottom: 1px solid #ff0000;
      cursor: pointer;
    }
  }
  button {
    background-color: #ff0000;
    color: white;
    font-size: 28px;
    font-family: "axiforma", sans-serif;
    font-weight: medium;
    outline: none;
    padding: 0.4rem;
    border: none;
    border-radius: 2rem;
    width: 100%;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.3, "#ff0000")};
    }
  }
`;
