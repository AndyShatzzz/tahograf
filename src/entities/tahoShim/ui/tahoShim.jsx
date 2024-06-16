"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./tahoShim.module.scss";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useLayoutClickClose } from "../../../features/useLayoutClickClose/hooks/useLayoutClickClose";
import Link from "next/link";
import Image from "next/image";
import tahoShim from "../images/zapolnenie.png";

export default function TahoShim() {
  const [layoutClickClose, ref] = useLayoutClickClose();

  useEffect(() => {
    layoutClickClose();
  }, []);

  return (
    <>
      <div className={styles.wrapperAbsolute}></div>
      <div className={styles.modal} ref={ref}>
        <Link href="/articles">
          <IconButton className={styles.buttonClose}>
            <CloseIcon />
          </IconButton>
        </Link>
        <h3 className={styles.title}>Что такое тахошайбы</h3>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={tahoShim} alt="Тахо Шайба" />
        </div>
        <p className={styles.subtitle}>
          Информация отображаемая на поверхности данного диска, является
          характеристикой движения транспортного средства, скорость ТС,
          пройденный путь, периоды остановки и движения ТС.
        </p>
        <h3 className={styles.title}>
          Заполнение диаграмного диска тахографа (тахошайбы)
        </h3>
        <ol>
          <li className={styles.listItem}>
            Указание фамилии водителя управлявшего ТС
          </li>
          <li className={styles.listItem}>
            Указание начального пункта выезда ТС
          </li>
          <li className={styles.listItem}>
            Указание конечного пункта приезда ТС (заполняется в конце рабочей
            смены)
          </li>
          <li className={styles.listItem}>
            Указание дат, начало и конец рабочей смены
          </li>
          <li className={styles.listItem}>
            Указание государственного номера регистрации ТС
          </li>
          <li className={styles.listItem}>
            Указание конечного значения пробега ТС
          </li>
          <li className={styles.listItem}>
            Указание конечного значения пробега ТС 7. Указание начального
            значения пробега ТС
          </li>
          <li className={styles.listItem}>
            Указания разности пробегов, пройденного пути
          </li>
        </ol>
        <h3 className={styles.title}>Порядок заполнения</h3>
        <p className={styles.subtitle}>
          Заполнение делится на два этапа, заполнение в начале рабочей смены -
          Завершение заполнения в конце рабочей смены
        </p>
        <h3 className={styles.title}>
          Этап №1 Водитель в начале рабочей смены перед тем как вставить
          Диаграмный диск в тахограф заполняет поля:
        </h3>
        <ul>
          <li className={styles.listItem}>ФИО: Егоров В.А.</li>
          <li className={styles.listItem}>
            Место отправления транспортного средства: Москва
          </li>
          <li className={styles.listItem}>
            Дата начала рабочей смены: 03.06.2013
          </li>
          <li className={styles.listItem}>
            Гос. Номер транспортного средства: М307ВУ199
          </li>
          <li className={styles.listItem}>
            Показания одометра на начало рабочей смены: 10520, обратите внимание
            показания вписываются в среднее поле. Это сделано для удобства
            вычисления общего пройденного пути в конце рабочей смены
          </li>
        </ul>
        <p className={styles.subtitle}>
          Далее Водитель начинает движение согласно графику режима труда и
          отдыха водителя.
        </p>
        <h3 className={styles.title}>
          Этап №2 После окончания рабочей смены Водитель извлекает Диаграмный
          диск из тахографа и заполняет оставшиеся поля
        </h3>
        <ul>
          <li className={styles.listItem}>
            Место прибытия транспортного средства: Владимир
          </li>
          <li className={styles.listItem}>
            Дата конца рабочей смены: 03.06.2013
          </li>
          <li className={styles.listItem}>
            Показания одометра на конец рабочей смены: 10706
          </li>
          <li className={styles.listItem}>
            Общий пройденный путь за рабочую смену: 186
          </li>
        </ul>
        <h3 className={styles.title}>Хранение Диаграмных дисков (Тахошайб)</h3>
        <p className={styles.subtitle}>
          Внимание: хранение в кабине ТС, у водителя, на протяжении 28
          календарных дней используемых диаграммных дисков и предоставление
          инспекционным органам, согласно действующего законодательства,
          обязательно, включая 29 диск находящийся в тахографе. По истечению
          28-ми календарных дней, диаграммные диски необходимо хранить на
          предприятии либо индивидуальным предпринимателем, владельца ТС. Срок
          хранения диаграммных дисков составляет 3 года, по истечению которых,
          диски могут быть утилизированы. Несоблюдения указанных действий влечет
          наложения денежных штрафов, в соответствии с действующим
          законодательством, в части статьи о предоставлении данных о работе
          тахографа.
        </p>
        <h3 className={styles.title}>
          Проверка на маршруте сотрудниками инспекционных органов
        </h3>
        <p className={styles.subtitle}>
          При проверке транспортного средства инспектор в праве потребовать от
          водителя диск тахографа находящегося в тахографе, а так же диски за
          последние 28 дней. После проверки инспектор обязан поставить свой
          личный штамп на дисках тахографа.
        </p>
      </div>
    </>
  );
}
