"use client";

import styles from "./tahoCardStore.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlick.css";
import img1 from "../../../entities/articleCard/images/card1.png";
import img2 from "../../../entities/articleCard/images/card2.png";
import img3 from "../../../entities/articleCard/images/card3.png";
import img4 from "../../../entities/articleCard/images/card4.png";
import img5 from "../../../entities/articleCard/images/card5.png";
import img6 from "../../../entities/articleCard/images/card6.png";

import FeedBack from "../../feedBack/ui/feedBack";
import { useState } from "react";

export default function TahoCardStore() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const imgData = [img1, img2, img3, img4, img5, img6];

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    className: "containerContentCard",
    adaptiveHeight: true,
  };

  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Slider {...settings}>
            {imgData &&
              imgData.map((item, i) => (
                <Image
                  key={i}
                  className={styles.img}
                  src={item}
                  alt="Картинка"
                />
              ))}
          </Slider>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Карта водителя</h2>
          <p className={styles.price}>от 5 000 ₽</p>
          <button
            className={styles.button}
            onClick={() => setIsOpenModal(true)}
          >
            Заказать
          </button>
          <p className={styles.text}>
            Для идентификации личности водителю коммерческого и пассажирского
            транспорта (как юридических, так физических лиц) необходимо оформить
            карту тахографа. Водитель обязан использовать карту во время своей
            смены, регистрируя время своего движения, труда и отдыха.
          </p>
        </div>
      </div>
      <div className={styles.orderContainer}>
        <h2 className={styles.orderTitle}>
          Для заказа карты тахографа необходимы скан-копии следующих документов:
        </h2>
        <div className={styles.listWrapper}>
          <div className={styles.listContainer}>
            <ul className={styles.table}>
              <li className={styles.listItem}>
                Паспорт (разворот с фото и разворот с пропиской)
              </li>
              <li className={styles.listItem}>
                Скан имеющейся карты водителя (если уже есть карта)
              </li>
              <li className={styles.listItem}>ИНН</li>
            </ul>
          </div>
          <div className={styles.listContainer}>
            <ul className={styles.table}>
              <li className={styles.listItem}>СНИЛС</li>
              <li className={styles.listItem}>
                Водительское удостоверение (с обеих сторон)
              </li>
              <li className={styles.listItem}>Фото 3,5 х 4,5</li>
            </ul>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <FeedBack isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </section>
  );
}
