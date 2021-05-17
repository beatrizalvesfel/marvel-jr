import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  background-color: black;
  height: 115px;
  box-shadow: 0px 3px 6px rgba(255, 0, 0, 0.5);
  .imgHeader {
    display: block;
    margin: auto 0;
    img {
      width: 120px;
      height: 55px;
      object-fit: contain;
    }
  }
  nav {
    display: flex;
    ul {
      display: flex;
      list-style: none;
      font-size: 30px;
      font-family: "axiforma", sans-serif;
      color: white;
      font-weight: bold;
      margin: auto 0;
      .active {
        color: #ff0000;
      }
      a {
        color: white;
        text-decoration: none;
        li {
          padding-right: 80px;
        }
      }
    }
  }
  .imgPerfil {
    display: flex;
    align-items: center;
    margin: auto 0;
    img {
      width: 55px;
      height: 55px;
      object-fit: contain;
    }
    a {
      margin-left: 15px;
      font-size: 20px;
      font-family: "axiforma", sans-serif;
      color: #707070;
      font-weight: lighter;
      text-decoration: none;
    }
  }

  @media (max-width: 900px) {
    padding: 0 30px;
    .imgHeader {
      img {
        width: 100px;
        height: 50px;
      }
    }
    nav {
      ul {
        font-size: 18px;
        a {
          color: white;
          text-decoration: none;
          li {
            padding-right: 70px;
          }
        }
      }
    }
  }
  @media (max-width: 760px) {
  }
`;
