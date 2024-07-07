"use client";

import styles from "./goodsStore.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlick.css";
import Image from "next/image";
import atolSmart from "../image/atolSmart.png";
import atol5 from "../image/atol5.png";
import card from "../image/card.png";
import speed from "../image/speed.webp";
import blockNKM from "../image/NKMBlock.webp";
import FeedBack from "../../../widgets/feedBack/ui/feedBack";
import { useEffect, useLayoutEffect, useState } from "react";

export default function GoodsStore() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const data = [
    {
      image: atolSmart,
      name: "Тахограф Атол Смарт",
      _id: "645cbe78-b498-4a49-b3ad-981188889253",
      description1: "Усовершенствованная модель",
      description2: "Повышенная электрическая защита",
      description3:
        "Допущен к установке на автомобили для перевозки опасных грузов",
      description4: "Высокая надежность и низкое энергопотребление",
      price: "от 46000 рублей",
    },
    {
      image: atol5,
      name: "Тахограф Атол 5",
      _id: "382d8c1b-e38c-48d6-b066-ab97e673d66e",
      description1: "Настраиваемая многоцветная подсветка",
      description2: "GSM-модем",
      description3: "USB- и k-line интерфейсы",
      description4: "Слот расширения для установки дополнительного модуля",
      price: "от 24000 рублей",
    },
    {
      image: card,
      name: "Карта водителя",
      _id: "645cbe78-b498-4a49-b3ad-981188889253",
      price: "от 5000 рублей",
    },
    {
      image: speed,
      name: "Датчики скорости",
      _id: "645cbe78-b498-4a49-b3ad-981188889573",
      // description1: "Датчик скорости динамический в ассортименте",
      description2: "Датчик скорости импульсный (19,8 мм) ",
      description3: "Датчик скорости импульсный (25 мм)",
      description4: "Датчик скорости импульсный (35 мм)",
      description5: "Датчик скорости импульсный (63,2 мм)",
      description6: "Датчик скорости импульсный (90 мм)",
      price: "от 5000 рублей",
    },
    {
      image: blockNKM,
      name: "Замена блока НКМ",
      _id: "382d8c1b-e38c-48d6-b066-ab97e673d43t",
      description1: "Производится один раз в 3 года",
      description2: "Соответствует законодательству РФ",
      description3: "Работа под ключ с настройкой и обновлением ПО",
      price: "от 35000 рублей",
    },
    // {
    //   image: card,
    //   name: "Карта водителя",
    //   _id: "645cbe78-b498-4a49-b3ad-981188889253",
    //   price: "от 3000 рублей",
    // },
  ];

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const [counterSliderToShow, setCounterSliderToShow] = useState(3);

  useEffect(() => {
    if (window.innerWidth > 920) {
      setCounterSliderToShow(3);
    } else if (window.innerWidth < 930 && window.innerWidth > 630) {
      setCounterSliderToShow(2);
    } else {
      setCounterSliderToShow(1);
    }
  }, [size]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: counterSliderToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    className: "containerWrapper",
    centerPadding: "100px",
  };
  return (
    <section className={styles.mainContainer}>
      <div className={`slider-container ${styles.container}`}>
        <Slider {...settings}>
          {data &&
            data.map((item) => (
              <div className={styles.wrapper} key={item._id}>
                <div className={styles.wrapper2}>
                  <Image
                    className={styles.img}
                    src={item.image}
                    alt={item.name}
                  />
                  <h3 className={styles.subtitle}>{item.name}</h3>
                  <p className={styles.text}>{item.description1}</p>
                  <p className={styles.text}>{item.description2}</p>
                  <p className={styles.text}>{item.description3}</p>
                  <p className={styles.text}>{item.description4}</p>
                  <p className={styles.text}>{item.description5}</p>
                  <p className={styles.text}>{item.description6}</p>
                  <p className={styles.price}>{item.price}</p>
                  <button
                    className={styles.button}
                    onClick={() => setIsOpenModal(true)}
                  >
                    Заказать
                  </button>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      {isOpenModal && (
        <FeedBack isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </section>
  );
}
