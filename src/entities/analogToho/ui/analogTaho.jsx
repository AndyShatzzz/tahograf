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
          Аналоговые тахографы уже практически полностью вышли из употребления в
          Российской Федерации. На основании последних изменений с начала 2015
          года все категории транспортных средств, выполняющих различные рейсы
          по нашим дорогам, а также и за пределами границ, должны быть оснащены
          либо тахографами с блоком СКЗИ, либо цифровыми тахографами, которые
          соответствуют регламенту и сроку действия Европейского Союза.
        </p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={analogTaho}
            alt="Аналоговый тахограф"
          />
        </div>
        <p className={styles.subtitle}>
          Исключение делается только для автомобилей, которые были оснащены
          аналоговыми тахографами до 2010 года.
        </p>
        <p className={styles.subtitle}>
          Стоит также отметить, что данный вопрос регулируется тремя
          нормативными актами и на данный момент нет единства относительно того,
          обязательно ли переходить на цифровой тахограф в срок с 1-го апреля
          2015 года или можно пользоваться аналоговым до 1-го января 2018 года.
        </p>
        <p className={styles.subtitle}>
          Если у вас установлено подобное устройство, необходимо проводить его
          калибровку. Калибровка проводится:
        </p>
        <ul>
          <li className={styles.listItem}>
            максимум через два года после предыдущего осмотра;
          </li>
          <li className={styles.listItem}>
            в тех случаях, если ремонтировали коробку перемены передач, вносили
            изменения в конструкции транспортного средства, проводился ремонт
            датчика скорости и самого контрольного прибора;
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
          По завершению работ аналоговое устройство является полностью пригодным
          к использованию на территории Российской Федерации, стран СНГ и ЕС.
          Специалисты также проверяют, соответствует ли установленный тахограф
          требованиям российского законодательства и имеется ли он в списке
          Минтранса.
        </p>
      </div>
    </>
  );
}
