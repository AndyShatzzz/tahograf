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
        <h3 className={styles.title}>Что такое тахошайбы</h3>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={tahoShim} alt="Тахо Шайба" />
        </div>
        <p className={styles.subtitle}>
          Информация, отображаемая на поверхности этого диска, отражает
          характеристики движения транспортного средства, такие как скорость,
          пройденный путь, а также периоды остановок и движения.
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
          Заполнение делится на два этапа: первый этап — это заполнение в начале
          рабочей смены, а второй — завершение заполнения в конце рабочей смены.
        </p>
        <h3 className={styles.title}>
          Этап №1: В начале рабочей смены водитель, прежде чем вставить
          диаграммный диск в тахограф, заполняет следующие поля:
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
            Показания одометра на начало рабочей смены составляют 10520.
            Обратите внимание, что эти показания вписываются в среднее поле,
            чтобы упростить вычисление общего пройденного пути в конце смены.
          </li>
        </ul>
        <p className={styles.subtitle}>
          Затем водитель начинает движение в соответствии с графиком режима
          труда и отдыха.
        </p>
        <h3 className={styles.title}>
          Этап №2: После завершения рабочей смены водитель извлекает диаграммный
          диск из тахографа и заполняет оставшиеся поля.
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
          Внимание: Согласно действующему законодательству, диаграммные диски,
          используемые в течение 28 календарных дней, должны храниться в кабине
          транспортного средства у водителя и быть доступны для проверки
          инспекционными органами, включая 29-й диск, находящийся в тахографе.
          По истечении 28 дней, диски необходимо передать на хранение в
          предприятие или индивидуальному предпринимателю, владельцу
          транспортного средства. Срок хранения диаграммных дисков составляет 3
          года, после чего их можно утилизировать. Несоблюдение этих требований
          влечет за собой денежные штрафы в соответствии с законодательством по
          статье о предоставлении данных о работе тахографа.
        </p>
        <h3 className={styles.title}>
          Проверка на маршруте сотрудниками инспекционных органов
        </h3>
        <p className={styles.subtitle}>
          При проверке транспортного средства инспектор имеет право потребовать
          у водителя диск тахографа, находящийся в устройстве, а также диски за
          последние 28 дней. После проверки инспектор должен поставить свой
          личный штамп на тахографические диски.
        </p>
      </div>
    </>
  );
}
