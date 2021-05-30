import React, { useState } from "react";
import { SlideData } from "./slideData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import {
  ContainerSlide,
  ContainerArrow,
  TextWrapper,
  TextSlide,
  Illustration,
  Row,
} from "./styled";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <ContainerArrow onClick={nextSlide}>
        <FaArrowAltCircleLeft className="left-arrow" />
      </ContainerArrow>
      <ContainerSlide>
        {SlideData.map((slide, index) => {
          return (
            <Row
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <Illustration
                  src={slide.illustration}
                  alt="Illustration"
                  className="illustration"
                />
              )}
              {index === current && (
                <TextWrapper>
                  <TextSlide>{slide.text}</TextSlide>
                </TextWrapper>
              )}
            </Row>
          );
        })}
      </ContainerSlide>
      <ContainerArrow onClick={prevSlide}>
        <FaArrowAltCircleRight className="right-arrow" />
      </ContainerArrow>
    </>
  );
};

export default Slider;
