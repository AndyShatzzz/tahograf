"use client";

import styles from "./articles.module.scss";
import { SpeedDial } from "@mui/material";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { useState } from "react";
import Header from "../../widgets/header/ui/header";
import Articles from "../../widgets/articles/ui/articles";
import Feedback from "../../widgets/feedBack/ui/feedBack";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section
      className={styles.main}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <Header />
      <Articles />

      {isOpenModal && (
        <Feedback isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
      <SpeedDial
        className={styles.speedDeal}
        ariaLabel="social-media"
        sx={{ position: "fixed", bottom: "50px", right: "50px" }}
        title="Заказать звонок"
        icon={<PhoneForwardedIcon />}
        onClick={() => setIsOpenModal(true)}
      ></SpeedDial>
    </section>
  );
}
