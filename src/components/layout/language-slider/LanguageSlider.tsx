import React from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import python from "../../../assets/images/python.png";
import javascript from "../../../assets/images/javascript.png";
import node from "../../../assets/images/node.png";
import express from "../../../assets/images/express.png";
import mongodb from "../../../assets/images/mongodb.svg";
import "./language-slider.scss";
import { Autoplay } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";

const images = [python, javascript, node, express, mongodb];

export default function LanguageSlider() {
  return (
    <div className="language-slider-container">
      <Container>
        <Row>
          <Col>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              freeMode={true}
              autoplay={{ delay: 2000 }}
              loop={true}
              className="mySwiper"
            >
              {images.map((image) => (
                <SwiperSlide>
                  <img src={image} alt="" className="slider-image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
