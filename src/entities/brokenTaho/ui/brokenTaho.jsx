"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./brokenTaho.module.scss";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useLayoutClickClose } from "../../../features/useLayoutClickClose/hooks/useLayoutClickClose";
import Link from "next/link";
import Image from "next/image";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.webp";
import img5 from "../images/img5.webp";

export default function BrokenTaho() {
  const [layoutClickClose, ref] = useLayoutClickClose();

  useEffect(() => {
    layoutClickClose();
  }, [layoutClickClose]);

  return (
    <>
      <div className={styles.wrapperAbsolute}></div>
      <div className={styles.modal} ref={ref}>
        <Link href="/articles">
          <IconButton className={styles.buttonClose}>
            <CloseIcon />
          </IconButton>
        </Link>
        <h3 className={styles.title}>Если сломался тахограф - что делать?</h3>
        <p className={styles.subtitle}>
          {`Во-первых, важно отметить, что ответственность за работу тахографа лежит на водителе. Поэтому оправдания типа "Я не заметил" или "Я не следил" при проверке контролером не помогут. Если тахограф выходит из строя после того, как транспортное средство выехало на линию, водитель должен немедленно начать регистрировать режим труда и отдыха вручную. С неисправным тахографом транспортное средство может двигаться только к ближайшей мастерской или месту регистрации транспортного средства, но не более 7 дней. Список мастерских и их местоположение можно найти на сайте ФБУ "РОСАВТОТРАНС"."`}
          .
        </p>

        <h3 className={styles.title}>
          Итак, как регистрировать работу вручную?
        </h3>
        <p className={styles.subtitle}>
          Для этого нам нужна специальная форма бланка. Выглядит примерно вот
          так:
        </p>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={img1} alt="Талон" />
        </div>
        <p className={styles.subtitle}>
          Это форма может быть нанесена на обратной стороне печатающей ленты в
          цифровых тахографах:
        </p>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={img2} alt="Талон" />
        </div>
        <p className={styles.subtitle}>
          Это форма может быть также нанесена на обратной стороне таходиска:
        </p>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={img3} alt="Талон" />
        </div>
        <p className={styles.subtitle}>
          Заполнять данные можно как на термобумаге цифрового тахографа, так и
          на обратной стороне тахошайбы, или перенести информацию на отдельный
          лист бумаги и отмечать её там. Принцип оформления такой же, как и при
          заполнении таходисков перед рейсом, но вместо царапания иглой
          аналогового тахографа, периоды труда и отдыха вносятся ручкой. При
          этом используются те же пиктограммы тахографа, которые являются
          общепринятыми и утвержденными.
        </p>
        <p className={styles.subtitle}>
          В соответствующие поля необходимо внести следующие данные:
        </p>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={img4} alt="Талон" />
        </div>
        <p className={styles.subtitle}>
          Важно! Регистрацию режима труда и отдыха следует вести в едином
          формате времени - UTC (время по Гринвичу).
        </p>
        <p className={styles.subtitle}>
          Каждый час необходимо обновлять данные о режиме труда и отдыха
          водителя следующим образом:
        </p>
        <h3 className={styles.title}>Порядок заполнения</h3>
        <p className={styles.subtitle}>
          Заполнение делится на два этапа: первый этап выполняется в начале
          рабочей смены, а второй – в конце рабочей смены.
        </p>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={img5} alt="Талон" />
        </div>
        <p className={styles.subtitle}>
          Что обозначает этот рисунок? Мы находимся в Московском времени,
          которое отличается от UTC на +3 часа. Поэтому будем делать комментарии
          с учетом нашего местного времени. Комментируем:
        </p>
        <ul>
          <li className={styles.listItem}>ФИО: Егоров В.А.</li>
          <li className={styles.listItem}>
            С полуночи до 5 утра по времени UTC (или до 8 утра по нашему
            местному времени) водитель находился на отдыхе.
          </li>
          <li className={styles.listItem}>
            С 5 до 6 утра по UTC (или с 8 до 9 по нашему времени) водитель был в
            режиме экипажа, занимая место пассажира в автомобиле и выполняя роль
            запасного водителя.
          </li>
          <li className={styles.listItem}>
            С 6 до 8 утра по UTC (или с 9 до 11 по нашему времени) водитель
            управлял автомобилем в течение 2 часов.
          </li>
          <li className={styles.listItem}>
            С 8 до 9 утра по UTC (или с 11 до 12 по нашему времени) водитель
            выполнял другие задачи, не связанные с управлением автомобилем,
            например, занимался погрузкой.
          </li>
          <li className={styles.listItem}>
            С 9 до 10 утра по UTC (или с 12 до 13 по нашему времени) водитель
            отдыхал, например, обедал.
          </li>
          <li className={styles.listItem}>
            С 10 до 12:30 по UTC (или с 13 до 15:30 по нашему времени) водитель
            управлял автомобилем, перевозя груз.
          </li>
          <li className={styles.listItem}>
            С 12:30 до 15:00 по UTC (или с 15:30 до 18:00 по нашему времени)
            водитель выполнял другие задачи, не связанные с управлением
            автомобилем, например, занимался разгрузкой.
          </li>
          <li className={styles.listItem}>
            С 15:00 до 24:00 по UTC (или с 18:00 до 3:00 следующего дня по
            нашему времени) водитель отдыхал, находясь дома и спя.
          </li>
        </ul>
        <p className={styles.subtitle}>
          Таким образом, учет ведется в течение 7 дней, каждый день на новом
          бланке, до ремонта тахографа. При дорожном контроле инспектор имеет
          право требовать предъявления всех регистрационных листков с момента
          выхода тахографа из строя. На момент остановки инспектором, бланк
          учета труда и отдыха вручную должен быть заполнен до текущего времени,
          с отставанием не более часа назад, и ни в коем случае не на весь день
          вперед! После ремонта тахографа, бланки сдаются в архив предприятия,
          где их должны хранить в течение 1 года. Будьте внимательны!
        </p>
        <h3 className={styles.title}>
          Что будет, если не вести регистрацию режима труда и отдыха вручную
          после поломки тахографа?
        </h3>
        <p className={styles.subtitle}>
          Штраф от 1 000 до 3 000 рублей на водителя и от 5 000 до 10 000 рублей
          на должностное лицо согласно ч 2 статьи 11.23 КоАП РФ
        </p>
        <h3 className={styles.title}>
          Что будет, если не вести регистрацию режима труда и отдыха вручную во
          времени UTC?
        </h3>
        <p className={styles.subtitle}>
          Штраф от 1 000 до 3 000 рублей на водителя и от 5 000 до 10 000 рублей
          на должностное лицо согласно ч 2 статьи 11.23 КоАП РФ
        </p>
        <h3 className={styles.title}>
          Ведение контроля режима труда и отдыха в ручную в ином формате не
          допускается!
        </h3>
        <p className={styles.subtitle}>
          Иначе так же Штраф от 1 000 до 3 000 рублей на водителя и от 5 000 до
          10 000 рублей на должностное лицо согласно ч 2 статьи 11.23 КоАП РФ
        </p>
      </div>
    </>
  );
}
