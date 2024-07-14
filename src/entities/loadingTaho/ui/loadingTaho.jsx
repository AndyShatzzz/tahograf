"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./loadingTaho.module.scss";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useLayoutClickClose } from "../../../features/useLayoutClickClose/hooks/useLayoutClickClose";
import Link from "next/link";
import Image from "next/image";
import translaterCard from "../imges/translater.webp";

export default function LoadingTaho() {
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
        <h3 className={styles.title}>
          Требования к загрузке и выгрузке данных цифрового тахографа
        </h3>
        <p className={styles.subtitle}>
          Информацияс регистрирующего устройства транспортного средства
          (тахографа) ис карты водителя должна периодически загружаться на
          компьютер. Что необходимо предпринять, если предприятие находится в
          другом регионе? Загрузка – это копирование всего массива данных,
          записанных в блоке памяти цифрового тахографа или в блоке памяти
          карточки водителя с цифровым кодом. При загрузке информация не должна
          быть уничтожена или изменена. Загрузчики – это устройства позволяющие
          производить выгрузку данных с карты водителя или из блока памяти
          тахографа. Они позволяют оперативно проводить проверку на
          достоверность и целостность данных, хранение и перенос данных для
          контролирующих органов в требуемом формате (*.ddd)., а также
          совместимость с программами для просмотра. Процедура выгрузки данных
          очень простая –необходимо подключить прибор к разъему тахографа, или
          установить карточку в считыватель, и выполнить загрузку с помощью
          нажатия клавиши или автоматически. Загрузчики являются промежуточным
          звеном для переноса и хранения данных в памяти компьютера. Принцип их
          работы прост и одинаков, но возможности и конструктивные особенности
          очень разнообразны, также как и цены.Рекомендуется использовать
          специальное программное обеспечение для работы с загрузчиками и
          обработке данных получаемых с карты водителя и тахографа. Формат
          данных в загрузчиках один и совместим со всеми предлагаемыми
          программами.
        </p>

        <h3 className={styles.title}>Карта водителя</h3>
        <p className={styles.subtitle}>
          В соответствии с требованиями законодательства, информация с карты
          водителя должна быть выгружена не реже 28 дней. Данные должны
          храниться в течение года и быть доступны для проверки контролирующими
          органами. Законодательством определена обязанность автоперевозчика,
          сохранять в течение года регистрационные листки и электронные данные
          из цифрового контрольного устройства и памяти карточки водителя. Для
          этого требуется выполнять соответствующую загрузку и выгрузку данных,
          и предоставлять их инспектирующим органам по их требованию. Водитель
          обязан сам выгрузить информацию с цифрового тахографа и иметь её при
          себе, либо дать разрешение компании на право загрузки и выгрузки, а
          также хранения информации.Следует помнить, что карточка водителя
          хранит информацию только за последние 28 суток, а диаграммный
          (тахографический) диск может храниться длительное время.
        </p>
        <h3 className={styles.title}>
          Регистрирующее устройство транспортного средства
        </h3>
        <p className={styles.subtitle}>
          Обязательным требованием выгрузки данных с цифрового тахографа
          является выгрузка данных с регистрирующего устройства транспортного
          средства каждые 90 суток и их хранение в течение года.Нарушение
          данного требования влечет за собой серьезные штрафы и является
          экстерриториальным - то есть независимо от того на территории, какой
          страны произошло нарушение.При этом сумма взыскания будет
          соответствовать тем нормам, которые применяются в данной стране.
          Другими словами российский автоперевозчики будут платить штраф по
          европейским стандартам. Водитель, работающий по найму и осуществляющий
          перевозки на транспортном средстве ему не принадлежащем, не должен
          загружать данные тахографа. Этим занимаются владельцы транспортного
          средства, либо должностные лица компаний, которым принадлежит
          транспортное средство.
        </p>
        <h3 className={styles.title}>
          Основные требования для транспортных предприятий и индивидуальных
          предпринимателей - автоперевозчиков:
        </h3>
        <p className={styles.subtitle}>
          Для успешного ведения бизнеса владельцам транспортных предприятий и
          индивидуальным предпринимателям необходимо: выгружать данные из
          карточки водителя раз в 28 дней, а из памяти тахографа раз в 90 дней.
          Анализировать и принимать меры по факту зафиксированных тахографом
          нарушений с целью их профилактики.Вести постоянный учет и обеспечить
          хранение распечаток данных цифрового тахографа либо диаграммных
          (тахографических) дисков, а также хранение выгруженной информации в
          электронном виде на цифровых носителях и выдавать эту информацию по
          требованию заинтересованных лиц и контролирующих организаций.
        </p>
        <h3 className={styles.title}>
          Пример расшифровки распечатки цифрового тахографа
        </h3>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={translaterCard} alt="Талон" />
          <ol>
            <li className={styles.listItem}>ФИО: Егоров В.А.</li>
            <li className={styles.listItem}>
              Дата и время распечатки, указанное во времени UTC
            </li>
            <li className={styles.listItem}>Формат времени</li>
            <li className={styles.listItem}>
              Информация о владельце карты (только в случае если карта находится
              в тахографе)
            </li>
            <li className={styles.listItem}>
              Идентификационный номер транспортного средства
            </li>
            <li className={styles.listItem}>
              Идентификационный номер тахографа
            </li>
            <li className={styles.listItem}>
              Дата последней калибровки тахографа
            </li>
            <li className={styles.listItem}>
              Режимы деятельности водителя, упорядоченные по дате
            </li>
            <li className={styles.listItem}>
              Период, когда карта не была установлена
            </li>
            <li className={styles.listItem}>
              Ввод карты водителя в слот 1 или слот 2
            </li>
            <li className={styles.listItem}>
              Деятельность, зарегистрированная устройством в период, когда карта
              водителя была установлена
            </li>
            <li className={styles.listItem}>Время извлечения карты водителя</li>
            <li className={styles.listItem}>Ежедневная сводка</li>
            <li className={styles.listItem}>Место ввода карты</li>
            <li className={styles.listItem}>
              {`Сводка по "общим данным деятельности" водителя`}
            </li>
          </ol>
        </div>
        <p className={styles.subtitle}>
          По завершению работ аналоговое устройство является полностью пригодным
          к использованию на территории Российской Федерации, стран СНГ и ЕС.
          Специалисты также проверяют, соответствует ли установленный тахограф
          требованиям российского законодательства и имеется ли он в списке
          Минтранса.
        </p>
        <h3 className={styles.title}>Ввод информации вручную</h3>
        <p className={styles.subtitle}>
          Водителям иногда приходится самостоятельно записывать некоторые
          данные. Это может быть необходимо в двух случаях: тахограф повреждён
          или информация в распечатке неточно отражает деятельность водителя.
        </p>
      </div>
    </>
  );
}
