import React, { useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import surfista from "../../assets/images/cards/surfista-hq.png";
import wolverine from "../../assets/images/cards/wolverine-hq.png";
import thor from "../../assets/images/cards/thor-hq.png";
import star from "../../assets/images/star.svg";
import starOff from "../../assets/images/star-off.svg";
import { Container } from "../../styles/global";
import Menu from "../../components/Menu";

SwiperCore.use([Navigation]);

const Hqs: React.FC = () => {
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
                          <img src={thor} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Thor: Vikings</h3>
                            <p>
                              Garth Ennis e sua violência atacam novamente na HQ
                              que leva a violência das histórias de Thor ao
                              limite! Na minissérie de 2003 vemos vikings de um
                              passado distante voltando a vida.
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
                          <img src={surfista} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Surfista Prateado: Parábola</h3>
                            <p>
                              O único oponente do Devorador de Mundos é o herói
                              que ele aprisionou na Terra: o Surfista Prateado,
                              Galactus jurou não consumir o planeta, mas e se,
                              em vez disso, ele transformar a civilização em
                              seus adoradores?
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
                          <img src={wolverine} alt="Homem Aranha" />
                          <div className="item-description">
                            <h3>Wolverine: Origens</h3>
                            <p>
                              Origem é uma minissérie em quadrinhos publicada
                              pela Marvel Comics em seis edições, entre 2001 e
                              2002. A história conta a revelação do passado do
                              personagem Wolverine.
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
export default Hqs;
