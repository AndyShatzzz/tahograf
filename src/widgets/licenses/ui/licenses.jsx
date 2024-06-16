"use client";

import { Container } from "../../../shared/styledComponent/ui/imageAnimation";
import { Title } from "../../../shared/styledComponent/ui/titleAnimation";
import styles from "./licenses.module.scss";
import carLicense from "../images/carLicense.webp";
import Image from "next/image";
import license1 from "../images/license-1.webp";
import license2 from "../images/license-2.webp";
import license3 from "../images/license-3.webp";
import license4 from "../images/license-4.webp";
import license5 from "../images/license-5.webp";
import license6 from "../images/license-6.webp";
import { useState } from "react";
import FullscreenImage from "../../../features/fullscreenImage/ui/fullscreenImage";

export default function License() {
  const arr = [license1, license2, license3, license4, license5, license6];

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
          Лицензии
        </Title>
        <div className={styles.mainContainer}>
          <div className={styles.licenseContainer}>
            {arr.map((item, i) => (
              <Image
                className={styles.img}
                src={item}
                alt="Картинка"
                key={i}
                onClick={() => handleClick(item)}
              />
            ))}
          </div>
        </div>
      </Container>
      {isOpenModal && (
        <FullscreenImage imgProps={imgClick} setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
}
