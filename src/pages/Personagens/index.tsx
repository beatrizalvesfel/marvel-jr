import React, { useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import homemAranha from "../../assets/images/cards/homem-aranha.png";
import wanda from "../../assets/images/cards/wanda.png";
import thanos from "../../assets/images/cards/thanos.png";
import hulk from "../../assets/images/cards/hulk.png";
import star from "../../assets/images/star.svg";
import starOff from "../../assets/images/star-off.svg";
import { Container } from "../../styles/global";
import Menu from "../../components/Menu";

SwiperCore.use([Navigation]);

const Personagens: React.FC = () => {
  const [isActive, setActive] = useState(false);

  const clickToggle = () => {
    setActive((prevState) => !isActive);
  };

  return (
    <>
      <Menu>
        <Container>
          <div className="max-container">
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
                          <img src={homemAranha} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Homem-Aranha</h3>
                            <p>
                              Após ser mordido por uma aranha radioativa, Peter
                              Parker se torna o amigo da vizinhança, o
                              Homem-Aranha.
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
                          <img src={wanda} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Wanda Maximoff</h3>
                            <p>
                              Wanda Maximoff foi sequestrada da Sérvia e trazida
                              para a Montanha Wundagore, base do Alto
                              Evolucionário. Durante anos, ela e seu irmão
                              gêmeo, Pietro, acreditavam que eram filhos de um
                              casal de ciganos.
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
                          <img src={thanos} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Thanos</h3>
                            <p>
                              A lua Titã era governada por Mentor (A'Lars),
                              quando então reinava paz e tecnologia. Mentor
                              tinha dois filhos: Eros e Thanos. Ao contrário do
                              irmão, Thanos, era bem mais poderoso e almejava
                              ainda mais.
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
                          <img src={hulk} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Hulk</h3>
                            <p>
                              Na história original dos quadrinhos, o Hulk é um
                              selvagem e poderoso alter ego do Dr. Robert Bruce
                              Banner, um cientista que foi atingido por raios
                              gama enquanto salvava um adolescente durante o
                              teste militar.
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
export default Personagens;
