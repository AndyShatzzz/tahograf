"use client";

import styles from "./aboutCard.module.scss";
import { SpeedDial } from "@mui/material";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import FeedBack from "../../../widgets/feedBack/ui/feedBack";
import { useState } from "react";
import ArticleCard from "../../../entities/articleCard/ui/articleCard";
import Header from "../../../widgets/header/ui/header";

export default function Home2() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section
      className={styles.main}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <Header />
      <ArticleCard />

      {isOpenModal && (
        <FeedBack isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
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
