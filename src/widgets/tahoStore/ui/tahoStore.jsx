"use client";

import styles from "./tahoStore.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlick.css";
import img1 from "../images/Frame16.png";
import img2 from "../images/Frame17.png";
import img3 from "../images/Frame18.png";
import img4 from "../images/Frame19.png";
import FeedBack from "../../feedBack/ui/feedBack";
import { useState } from "react";
import PlayMarket from "../../playMarket/ui/playMarket";

export default function TahoStore() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const imgData = [img1, img2, img3, img4];

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
    className: "containerContent",
    adaptiveHeight: true,
  };

  return (
    <section id="shop" className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Slider {...settings}>
            {imgData &&
              imgData.map((item, i) => (
                <Image
                  key={i}
                  className={styles.img}
                  src={item}
                  alt="Изображение Тахографа АТОЛ Смарт"
                />
              ))}
          </Slider>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.title}>Тахограф АТОЛ Drive Smart</h2>
          <p className={styles.subtitle}>Надежность. Качество. Технология</p>
          <p className={styles.price}>от 46 000 ₽</p>
          <button
            className={styles.button}
            onClick={() => setIsOpenModal(true)}
          >
            Заказать
          </button>
          <p className={styles.text}>
            Тахограф Drive Smart является улучшенной в техническом и
            эксплуатационном плане моделью от компании АТОЛ ДРАЙВ. В данной
            модели контрольного устройств, наряду с увеличенными надежностью и
            функционалом, реализована технология удаленного считывания данных с
            тахографа и карты водителя различными методами: со смартфона, через
            сети передачи данных Wi-Fi или GPRS. Данные технологии существенно
            экономят время и денежные средства предприятия. В тахографе Drive
            Smart реализованы актуальные решения в области ГЛОНАСС мониторинга
            транспорта, которые позволяют интегрировать бортовое устройство в
            систему по контролю за парком машин предприятия.
          </p>
        </div>
      </div>
      <PlayMarket />
      <div className={styles.orderContainer}>
        <h2 className={styles.orderTitle}>
          Для установки тахографа необходимо:
        </h2>
        <div className={styles.listWrapper}>
          <div className={styles.listContainer}>
            <h3 className={styles.orderSubtitle}>
              Если владелец автомобиля Юридическое лицо:
            </h3>
            <ul className={styles.table}>
              <li className={styles.listItem}>
                Скан-копии ПТС с обеих сторон (в случае электронного ПТС также
                необходим скан СТС)
              </li>
              <li className={styles.listItem}>
                Карточка предприятия владельца ТС
              </li>
            </ul>
          </div>
          <div className={styles.listContainer}>
            <h3 className={styles.orderSubtitle}>
              Если владелец автомобиля Физическое лицо:
            </h3>
            <ul className={styles.table}>
              <li className={styles.listItem}>
                Паспорт владельца (разворот с фото и разворот с пропиской)
              </li>
              <li className={styles.listItem}>СНИЛС владельца</li>
              <li className={styles.listItem}>ИНН владельца</li>
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
