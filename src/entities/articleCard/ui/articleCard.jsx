"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./articleCard.module.scss";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useLayoutClickClose } from "../../../features/useLayoutClickClose/hooks/useLayoutClickClose";
import Image from "next/image";
import Link from "next/link";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";

export default function ArticleCard() {
  const [layoutClickClose, ref] = useLayoutClickClose();

  useEffect(() => {
    layoutClickClose();
  }, []);

  const dataArr = [
    {
      name: "Карта водителя СКЗИ",
      image: card1,
      _id: "711e2b93-76fa-48d1-ba7e-ea2c1c56d985",
    },
    {
      name: "Карта водителя ЕСТР",
      image: card2,
      _id: "84339d21-4962-44d0-9cf6-bdeb3edd3efa",
    },
    {
      name: "Карта водителя тех.регламент",
      image: card3,
      _id: "68a91cd5-82d1-445d-bdbc-55a5baaa0382",
    },
    {
      name: "Карта предприятия СКЗИ",
      image: card4,
      _id: "078ffebd-2b5c-4709-952e-1d2ed749c1ff",
    },
    {
      name: "Карта предприятия ЕСТР",
      image: card5,
      _id: "f7371b20-9a4b-417a-a6ad-17f259c01ec0",
    },
    {
      name: "Карта предприятия тех.регламент",
      image: card6,
      _id: "e05b7ff8-6e0c-44b9-a224-69ba37e49202",
    },
  ];

  return (
    <>
      <div className={styles.wrapperAbsolute}></div>
      <div className={styles.modal} ref={ref}>
        <Link href="/articles">
          <IconButton className={styles.buttonClose}>
            <CloseIcon />
          </IconButton>
        </Link>
        <h3 className={styles.title}>Карты для тахографов</h3>
        <p className={styles.subtitle}>
          Согласно Техническому регламенту транспортные средства категорий
          N2,N3,M2,M3, выполняющие грузовые и пассажирские перевозки по
          территории страны и з ее пределами должны быть оснащены прибором учета
          режимов работы водителей. Это требование вызвано необходимостью
          снижения аварийности на дорогах, вызванных человеческим фактором.
        </p>
        <p className={styles.subtitle}>
          Тахографы получают сигнал от GPS и ГЛОНАСС, благодаря чему могут
          фиксировать местоположение ТС в конкретный момент времени и его
          скорость. А значит, всегда можно понять, отдыхал ли водитель либо
          работал. Для идентификации водителя, были введены в эксплуатацию карты
          водителя на тахограф. Надо отметить, что тахограф без карты водителя
          прибором учета не является.
        </p>
        <p className={styles.subtitle}>
          Современные тахографы отечественного производства оснащены блоком
          защиты информации – СКЗИ. Для работы таких тахографов нужна
          соответствующая карта водителя СКЗИ. Автомобили, оснащенные тахографом
          с СКЗИ, не могут выезжать за пределы страны. Автомобиль, выполняющий
          международные рейсы, в том числе в страны Таможенного Союза –
          Казахстан и Беларусь, должен быть оснащен тахографом европейского
          образца – ЕСТР. К нему соответственно нужны карты ЕСТР. Впрочем, до 1
          января 2018 года по дорогам страны еще могут ездить автомобили,
          оснащенные немного устаревшей версией тахографа – без СКЗИ. К нему
          также нужна карта водителя (по Техрегламенту).
        </p>
        <p className={styles.subtitle}>
          Кроме карт водителя СКЗИ, ЕСТР, для эксплуатации приборы нужны карты
          предприятия. Данные тахографа – это собственность
          предприятия-владельца ТС. И доступ к этим данным может иметь только
          владелец или держатель карты, назначенный по Приказу. Чип карта
          тахографа для предприятия является ключом к данным прибора, которые
          могут интересовать также контролирующие органы и ГИБДД.
        </p>
        <p className={styles.subtitle}>
          Аналогично картам водителя, карточка тахографа для предприятия должна
          соответствовать модели тахографа – ЕСТР или СКЗИ.
        </p>
        <p className={styles.subtitle}>
          Если вас интересует, как получить карту водителя для тахографа, —
          обращайтесь к нам. Наша компания имеет лицензию и может взять на себя
          оформление документов для получения карт водителя и предприятия. На
          нашем сайте вы можете познакомиться со списком документов и образцом
          заявления. Если у вас есть возможность, то приезжайте в наш офис. Наш
          менеджер поможет заполнить заявление, сделает копии документов и
          подготовить все к отправке на производство. Если возможности приехать
          в офис нет, то можете прислать документы по почте.
        </p>
        <p className={styles.subtitle}>
          Изготовление карт водителя, предприятия для тахографа составляет не
          больше 20 рабочих дней, после чего мы связываемся с вами и
          договариваемся о передаче.
        </p>
        <div className={styles.gridContainer}>
          {dataArr.map((item) => (
            <div className={styles.gridItem} key={item._id}>
              <h4 className={styles.gridSubtitle}>{item.name}</h4>
              <Image
                className={styles.gridImage}
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
