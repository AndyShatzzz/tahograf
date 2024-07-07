"use client";

import styles from "./page.module.scss";
import { SpeedDial } from "@mui/material";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { useState } from "react";
import Header from "../widgets/header/ui/header";
import About from "../widgets/about/ui/about";
import FeedBack from "../widgets/feedBack/ui/feedBack";
import GoodsStore from "../widgets/goodsStore/ui/goodsStore";
import WhyMe from "../widgets/whyMe/ui/whyMe";
import TahoCardStore from "../widgets/tahoCardStore/ui/tahoCardStore";
import BlockSkzi from "../widgets/blockSkzi/ui/blockSkzi";
import TahoStore from "../widgets/tahoStore/ui/tahoStore";
import Footer from "../widgets/footer/ui/footer";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <main
      className={styles.main}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <Header />
      <About />
      {isOpenModal && (
        <FeedBack isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
      <WhyMe />
      <TahoStore />
      <TahoCardStore />
      <BlockSkzi />
      <GoodsStore />
      <Footer />

      <SpeedDial
        className={styles.speedDeal}
        ariaLabel="social-media"
        sx={{ position: "fixed", bottom: "50px", right: "50px" }}
        title="Заказать звонок"
        icon={<PhoneForwardedIcon />}
        onClick={() => setIsOpenModal(true)}
      ></SpeedDial>
    </main>
  );
}
