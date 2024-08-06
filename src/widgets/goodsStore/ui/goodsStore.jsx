"use client";

import styles from "./goodsStore.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlick.css";
import Image from "next/image";
import atolSmart from "../image/atolSmart.png";
import mercuriy from "../image/mercuriy-001.webp";
import dtco from "../image/dtco.webp";
import dt001 from "../image/dt-101.webp";
import egkls from "../image/egk_ls.webp";
import ls1319 from "../image/ls1319.webp";
import speed1224 from "../image/speed-12_24.webp";
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
      price: "от 46 000 рублей",
    },
    {
      image: mercuriy,
      name: "Меркурий ТА-001",
      _id: "382d8c1b-e38c-48d6-b066-ab97e673d66e",
      description1:
        "Обеспечивает непрерывную, некорректируемую регистрацию информации о скорости и маршруте движения транспортных средств",
      description2:
        "Предназначен для установки на колёсные транспортные средства категории М2, М3, N2 и N3",
      // description3: "USB- и k-line интерфейсы",
      // description4: "Слот расширения для установки дополнительного модуля",
      price: "от 44 000 рублей",
    },
    {
      image: dt001,
      name: "Pars DT-101",
      _id: "322d8c1a-e38a-48d6-b062-ab97e333d63a",
      description1: "Цифровой тахограф с одобрением типа Европейского союза",
      description2:
        "Сертифицирован для пользования как внутри России, так и для международных перевозках",
      description3:
        "Разработан в соответствии с Приложением-1В Регламента Европейской комиссии 3821/85",
      // description4: "Слот расширения для установки дополнительного модуля",
      price: "от 80 000 рублей",
    },
    {
      image: dtco,
      name: "Continental VDO DTCO 1381",
      _id: "322d8c1a-e38a-48d6-b062-ab97e673d63e",
      description1:
        "Контрольное устройство, применяемое и предназначенное для осуществления международных перевозок в рамках Соглашения ЕСТР. ",
      description2:
        "Устанавливается на конвейерах европейских заводов-производителей транспортных средств",
      // description3: "USB- и k-line интерфейсы",
      // description4: "Слот расширения для установки дополнительного модуля",
      price: "от 120 000 рублей",
    },
    {
      image: card,
      name: "Карта водителя",
      _id: "645cbe78-b498-4a49-b3ad-981188889253",
      price: "от 4 500 рублей",
    },
    {
      image: egkls,
      name: "Индикаторная панель EGK LS",
      _id: "645cbe78-b498-4a49-b3ad-981188489341",
      description1:
        "Это прибор, который указывает скорость и обороты двигателя, но не является тахографом, поэтому его необходимо подключить к тахографу",
      description2:
        "Панель EGK-LS работает со всеми типами тахографов которые поддерживают протокол CAN",
      price: "от 22 000 рублей",
    },
    {
      image: ls1319,
      name: "Индикаторная панель LS 1319",
      _id: "645cbe78-b498-4a49-b3ad-983588489341",
      description1:
        "Индикаторная панель LS 1319 в составе с тахографом (DTCO) заменяет тахограф 1319",
      description2:
        "Спидометр вставляется вместо тахографа 1319 и работает с цифровым тахографом",
      price: "от 16 000 рублей",
    },
    {
      image: speed1224,
      name: "Спидометр 12/24V 140мм",
      _id: "645cbe78-b498-4a49-b3ad-983588489341",
      description1:
        "Предназначен для отображения скорости движения автомобиля, общего и суточного пробега",
      description2:
        "Сигнализирует о превышении предельно допустимой скорости движения автомобиля",
      price: "от 6 500 рублей",
    },
    {
      image: speed1224,
      name: "Спидометр 12/24V 100мм",
      _id: "645cbe78-b498-4a49-b3ad-983588489341",
      description1:
        "Предназначен для отображения скорости движения автомобиля, общего и суточного пробега",
      description2:
        "Сигнализирует о превышении предельно допустимой скорости движения автомобиля",
      price: "от 6 000 рублей",
    },
    {
      image: blockNKM,
      name: "Замена блока НКМ",
      _id: "382d8c1b-e38c-48d6-b066-ab97e673d43t",
      description1: "Производится один раз в 3 года",
      description2: "Соответствует законодательству РФ",
      description3: "Работа под ключ с настройкой и обновлением ПО",
      price: "от 31 000 рублей",
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
      price: "от 5 000 рублей",
    },
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
