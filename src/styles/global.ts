import styled, { createGlobalStyle } from "styled-components";

import marvelBackground from "../assets/images/marvel-background.png";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
 body {
  background: linear-gradient(90deg, black 50%, rgba(0, 0, 0, 0.3) 90%), url(${marvelBackground}) no-repeat 120% top;
  background-size: contain;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100vh;
 }

.bg-gradiente {
  width: 100%;
  height: 100vh;
  background: black;
  transition: all 2s;
  animation-delay: 0.2s;
  animation-name: gradient;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  position: relative;
}
  
@keyframes gradient{
  0% {
    background: black;
  }

  100% {
    background: transparent;
  }
}

 #root {
   height: 100%;
 }

 button {
   cursor: pointer;
 }

 @font-face {
   font-family: 'Axiforma';
   src: local('Axiforma'), url(./assets/fonts/Kastelov-AxiformaBlackItalic.otf) format('opentype');
 }

`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .max-container {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 90px;
    padding-bottom: 50px;
    position: relative;
    .content {
      &.active {
        position: relative;
        z-index: 3;
        .item {
          width: 675px;
          max-width: 675px;
          min-height: 445px;
          max-height: 445px;
          transition: linear 0.2s;
          .item-content {
            .item-img {
              .item-bg-img {
                .item-description {
                  h3,
                  p,
                  div {
                    opacity: 0;
                  }

                  height: 0;
                  padding: 0;
                }
              }
            }
            .item-content-description {
              opacity: 1;
              border-radius: 30px;
            }
          }
        }
      }
      .item {
        cursor: pointer;
        max-width: 289px;
        position: relative;
        min-height: 445px;
        max-height: 445px;
        .item-content {
          .item-img {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;

            .item-bg-img {
              position: relative;
              height: 100%;
              img {
                display: block;
                object-fit: cover;
                height: 100%;
              }
              .item-description {
                display: flex;
                flex-direction: column;
                text-align: center;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 235px;
                padding: 25px 25px 5px;
                border-radius: 30px;
                background: linear-gradient(
                  180deg,
                  #ff0000 0%,
                  rgba(128, 0, 0, 0.7) 100%
                );
                color: white;
                transition: all 0.3s;
                h3 {
                  font-size: 20px;
                  font-family: "axiforma", sans-serif;
                  font-weight: bold;
                  text-align: center;
                }
                p {
                  font-size: 12px;
                  font-family: "axiforma", sans-serif;
                  font-weight: lighter;
                  text-align: left;
                }
                div {
                  font-size: 20px;
                  font-family: "axiforma", sans-serif;
                  font-weight: lighter;
                  text-align: center;
                  margin: auto 0 0;
                }
              }
            }
          }

          .item-content-description {
            opacity: 0;
            min-height: 445px;
            width: 100%;
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            background: linear-gradient(90deg, #ff0000 0%, #400e0e 104.7%),
              #ffd1e5;
            padding: 50px 70px;
            color: white;
            .item-content-description-texts {
              h3 {
                font-size: 30px;
                font-family: "axiforma", sans-serif;
                font-weight: bold;
              }
              h6 {
                font-size: 18px;
                font-family: "axiforma", sans-serif;
                font-weight: bold;
              }
              ul {
                list-style: none;
                li {
                  font-size: 18px;
                  font-family: "axiforma", sans-serif;
                  font-weight: lighter;
                }
              }
              h5 {
                font-size: 26px;
                font-family: "axiforma", sans-serif;
                font-weight: normal;
                padding: 15px 0;
              }
              img {
                height: 25px;
                width: 25px;
                object-fit: contain;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
`;
