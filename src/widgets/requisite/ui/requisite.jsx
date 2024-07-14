"use client";

import { Container } from "../../../shared/styledComponent/ui/imageAnimation";
import { Title } from "../../../shared/styledComponent/ui/titleAnimation";
import styles from "./requisite.module.scss";
import carLicense from "../../licenses/images/carLicense.webp";
import Image from "next/image";
import { useState } from "react";
import FullscreenImage from "../../../features/fullscreenImage/ui/fullscreenImage";

export default function Requisite() {
  const [imgClick, setImgClick] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = (img) => {
    setImgClick(img);
    setIsOpenModal(true);
  };

  return (
    <>
      <Container
        className={styles.container}
        style={{
          background: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), url(${carLicense.src})`,
        }}
      >
        <Title className={styles.title} style={{ marginBottom: "40px" }}>
          Реквизиты
        </Title>
        <div className={styles.mainContainer}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Наименование:</td>
                <td>{`ООО "ТахоДрайвер"`}</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Юридический адрес:</td>
                <td>
                  399151, Россия, Липецкая Область, Добровский Район, село
                  Трубетчино, улица Ильича, дом 91
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Фактический адрес:</td>
                <td>
                  {`399774, Липецкая область, город Елец, Московское шоссе, дом
                  18, корпус "а"`}
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Почтовый адрес:</td>
                <td>
                  398024, Липецкая область, город Липецк, проспект Победы, дом
                  51/3, кв. 85
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Контактный телефон:</td>
                <td>+79107391205, 8(4742)715185</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Адрес электронной почты:</td>
                <td>tahodrayver@mail.ru</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>ОГРН:</td>
                <td>1124813001411</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>ИНН:</td>
                <td>4805005658</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>КПП:</td>
                <td>480501001</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Наименование банка:</td>
                <td>{`Банк АО "АЛЬФА-БАНК"`}</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Расчётный счёт:</td>
                <td>№ счёта 40702810902930002103</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>БИК:</td>
                <td>044525593</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>Корреспондентский счёт:</td>
                <td>30101810200000000593</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.leftRow}>
                  Генеральный директор ООО «ТахоДрайвер»:
                </td>
                <td>Третьяков Антон Владимирович</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
