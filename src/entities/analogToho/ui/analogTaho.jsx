"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./analogTaho.module.scss";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useLayoutClickClose } from "../../../features/useLayoutClickClose/hooks/useLayoutClickClose";
import Link from "next/link";
import Image from "next/image";
import analogTaho from "../images/analog.webp";

export default function AnalogTaho() {
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
        <h3 className={styles.title}>Аналоговые тахографы</h3>
        <p className={styles.subtitle}>
          Аналоговые тахографы практически полностью вышли из использования в
          России. Согласно последним изменениям законодательства, с начала 2015
          года все транспортные средства, выполняющие рейсы как по территории
          страны, так и за ее пределами, обязаны быть оборудованы либо
          тахографами с блоком СКЗИ, либо цифровыми тахографами, которые
          соответствуют требованиям и срокам действия Европейского Союза.
        </p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={analogTaho}
            alt="Аналоговый тахограф"
          />
        </div>
        <p className={styles.subtitle}>
          Исключение распространяется только на автомобили, оборудованные
          аналоговыми тахографами до 2010 года.
        </p>
        <p className={styles.subtitle}>
          Важно отметить, что данный вопрос регулируется тремя разными
          нормативными актами, и пока нет единого мнения относительно того,
          нужно ли обязательно переходить на цифровой тахограф с 1 апреля 2015
          года или можно продолжать использовать аналоговый до 1 января 2018
          года.
        </p>
        <p className={styles.subtitle}>
          Если у вас установлено такое устройство, его необходимо регулярно
          калибровать. Калибровка выполняется в следующих случаях:
        </p>
        <ul>
          <li className={styles.listItem}>
            максимум через два года после предыдущего осмотра;
          </li>
          <li className={styles.listItem}>
            в ситуациях, когда проводился ремонт коробки передач, были внесены
            изменения в конструкцию транспортного средства, ремонтировался
            датчик скорости или само контрольное устройство.
          </li>
          <li className={styles.listItem}>
            проводилась замена дисков и шин, приведшая к изменению радиуса
            колес;
          </li>
          <li className={styles.listItem}>
            часы отстают или спешат более, чем на 20 минут.
          </li>
        </ul>
        <p className={styles.subtitle}>
          После выполнения работ аналоговое устройство считается полностью
          пригодным для эксплуатации в России, странах СНГ и ЕС. Кроме того,
          специалисты проверяют, соответствует ли тахограф требованиям
          российского законодательства и включен ли он в список, утвержденный
          Минтрансом.
        </p>
      </div>
    </>
  );
}
