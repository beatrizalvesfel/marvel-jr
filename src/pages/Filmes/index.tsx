import React, { useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import homemDeFerro from "../../assets/images/cards/homem-de-ferro.png";
import homemDeFerro2 from "../../assets/images/cards/homem-de-ferro-2.png";
import thor from "../../assets/images/cards/Thor.png";
import capitao from "../../assets/images/cards/capitao.png";
import capita from "../../assets/images/cards/capita.png";
import star from "../../assets/images/star.svg";
import starOff from "../../assets/images/star-off.svg";
import { Container } from "../../styles/global";
import Menu from "../../components/Menu";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        margin: 20,
      },
      "& svg": {
        fill: "#FF0000",
        margin: "0px 15px 0px 0px",
      },
    },

    input: {
      borderRadius: 10,
      position: "relative",
      backgroundColor: "#000000",
      border: "1px solid #FF0000",
      color: "#FF0000",
      fontSize: 16,
      fontWeight: "bold",
      padding: "15px 20px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: ["Axiforma"].join(","),
      "&:focus": {
        borderRadius: 10,
        borderColor: "#FF0000",
        background: "#000000",
        boxShadow: "0px 3px 6px rgba(255, 0, 0, 0.5)",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: 0,
    },
  })
);

SwiperCore.use([Navigation]);

const Filmes: React.FC = () => {
  const [isActive, setActive] = useState(false);

  const clickToggle = () => {
    setActive((prevState) => !isActive);
  };
  const classes = useStyles();
  const [state, setState] = React.useState<{
    filtro: string;
    name: string;
  }>({
    filtro: "",
    name: "hai",
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <>
      <Menu>
        <Container>
          <div className="max-container">
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="">
                  Filtrar por
                </option>
                <option value="Lançamento">Lançamento</option>
                <option value="Cronologia">Cronologia</option>
              </NativeSelect>
            </FormControl>
            <Swiper spaceBetween={50} slidesPerView={3} navigation>
              <SwiperSlide>
                <div
                  className={`content ${isActive ? "active" : ""}`}
                  onClick={clickToggle}
                >
                  <div className="item">
                    <div className="item-content">
                      <div className="item-img">
                        <div className="item-bg-img">
                          <img src={homemDeFerro} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Homem de Ferro</h3>
                            <p>
                              Tony Stark (Robert Downey Jr.) é um industrial
                              bilionário, que também é um brilhante inventor, ao
                              ser sequestrado, ele é obrigado a construir uma
                              arma devastadora, mas ao invés disso, cria uma
                              armadura capaz de mudar a história.
                            </p>
                            <div>ver detalhes</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-content-description">
                        <div className="item-content-description-texts">
                          <h3>Homem de Ferro</h3>
                          <h6>Aparições</h6>
                          <ul>
                            <li>Vingadores - Era de Ultron</li>
                            <li>Capitão América - Guerra Civil</li>
                            <li>Vingadores - Guerra Infinita</li>
                            <li>Vingadores - Ultimato</li>
                            <li>WandaVision</li>
                          </ul>
                          <h5>Avaliações dos Fãs</h5>
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={starOff} alt="start rate" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="content"
                  // className={`content ${isActive ? "active" : ""}`}
                  // onClick={clickToggle}
                >
                  <div className="item">
                    <div className="item-content">
                      <div className="item-img">
                        <div className="item-bg-img">
                          <img src={homemDeFerro2} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Homem de Ferro 2</h3>
                            <p>
                              O mundo já sabe que o inventor bilionário Tony
                              Stark (Robert Downey Jr.) é o super-herói blindado
                              Homem de Ferro. Sofrendo pressão do governo, da
                              mídia e do público para compartilhar sua
                              tecnologia com as forças armadas
                            </p>
                            <div>ver detalhes</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-content-description">
                        <div className="item-content-description-texts">
                          <h3>Homem-Aranha</h3>
                          <h6>Aparições</h6>
                          <ul>
                            <li>Vingadores - Era de Ultron</li>
                            <li>Capitão América - Guerra Civil</li>
                            <li>Vingadores - Guerra Infinita</li>
                            <li>Vingadores - Ultimato</li>
                            <li>WandaVision</li>
                          </ul>
                          <h5>Avaliações dos Fãs</h5>
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={starOff} alt="start rate" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="content"
                  // className={`content ${isActive ? "active" : ""}`}
                  // onClick={clickToggle}
                >
                  <div className="item">
                    <div className="item-content">
                      <div className="item-img">
                        <div className="item-bg-img">
                          <img src={thor} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Thor</h3>
                            <p>
                              Quando é banido do reino de Asgard e exilado na
                              Terra, o arrogante guerreiro Thor (Chris
                              Hemsworth) é obrigado a lutar para reaver seus
                              poderes perdidos.
                            </p>
                            <div>ver detalhes</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-content-description">
                        <div className="item-content-description-texts">
                          <h3>Homem-Aranha</h3>
                          <h6>Aparições</h6>
                          <ul>
                            <li>Vingadores - Era de Ultron</li>
                            <li>Capitão América - Guerra Civil</li>
                            <li>Vingadores - Guerra Infinita</li>
                            <li>Vingadores - Ultimato</li>
                            <li>WandaVision</li>
                          </ul>
                          <h5>Avaliações dos Fãs</h5>
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={starOff} alt="start rate" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="content"
                  // className={`content ${isActive ? "active" : ""}`}
                  // onClick={clickToggle}
                >
                  <div className="item">
                    <div className="item-content">
                      <div className="item-img">
                        <div className="item-bg-img">
                          <img src={capitao} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Capitão América</h3>
                            <p>
                              Em Capitão América: O Primeiro Vingador,
                              conhecemos a história de Steve Rogers (Chris
                              Evans) e como ele se tornou o melhor soldado do
                              mundo.
                            </p>
                            <div>ver detalhes</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-content-description">
                        <div className="item-content-description-texts">
                          <h3>Homem-Aranha</h3>
                          <h6>Aparições</h6>
                          <ul>
                            <li>Vingadores - Era de Ultron</li>
                            <li>Capitão América - Guerra Civil</li>
                            <li>Vingadores - Guerra Infinita</li>
                            <li>Vingadores - Ultimato</li>
                            <li>WandaVision</li>
                          </ul>
                          <h5>Avaliações dos Fãs</h5>
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={starOff} alt="start rate" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="content"
                  // className={`content ${isActive ? "active" : ""}`}
                  // onClick={clickToggle}
                >
                  <div className="item">
                    <div className="item-content">
                      <div className="item-img">
                        <div className="item-bg-img">
                          <img src={capita} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Capitã Marvel</h3>
                            <p>
                              Capitã Marvel, parte do exército de elite dos
                              Kree, uma raça alienígena, encontra-se no meio de
                              uma batalha entre seu povo e os Skrulls.
                            </p>
                            <div>ver detalhes</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-content-description">
                        <div className="item-content-description-texts">
                          <h3>Homem-Aranha</h3>
                          <h6>Aparições</h6>
                          <ul>
                            <li>Vingadores - Era de Ultron</li>
                            <li>Capitão América - Guerra Civil</li>
                            <li>Vingadores - Guerra Infinita</li>
                            <li>Vingadores - Ultimato</li>
                            <li>WandaVision</li>
                          </ul>
                          <h5>Avaliações dos Fãs</h5>
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={star} alt="start rate" />
                          <img src={starOff} alt="start rate" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
        {/* <Overlay className="overlay active"></Overlay> */}
      </Menu>
    </>
  );
};
export default Filmes;
