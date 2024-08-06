"use client";

import styles from "./footer.module.scss";
import { Avatar } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import mail from "../images/mail.svg";
import call from "../images/call.svg";
import mesto from "../images/mesto.svg";

export default function Footer() {
  return (
    <section id="contacts" className={styles.footerContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Контакты</h2>
          <div className={styles.contactContainer}>
            <Image src={call} alt="Трубка" />
            <div className={styles.phNumber}>
              <a className={styles.text} href="tel:+74742715185">
                +7(4742) 71-51-85{" "}
              </a>
              <a className={styles.text} href="tel:+74742391205">
                +7(4742) 39-12-05
              </a>
              <a className={styles.text} href="tel:+79107391205">
                +7(910) 739-12-05
              </a>
              <a className={styles.text} href="tel:+79005963293">
                +7(900) 596-32-93
              </a>
              <a className={styles.text} href="tel:+79158510255">
                +7(915) 851-02-55
              </a>
            </div>
          </div>
          <div className={styles.contactContainer}>
            <Image src={mail} alt="Письмо" />
            <a
              className={styles.text}
              href="mailto:TAHODRAYVER@MAIL.RU"
              target="blank"
            >
              TAHODRAYVER@MAIL.RU
            </a>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Обратная связь</h2>
          <div className={styles.socials}>
            <a
              className={styles.link}
              href="https://wa.me/79005963293"
              target="blank"
            >
              <Avatar sx={{ bgcolor: "#2cb742" }}>
                <WhatsAppIcon />
              </Avatar>
            </a>
            <a
              className={styles.link}
              href="https://t.me/Anton391205"
              target="blank"
            >
              <Avatar sx={{ bgcolor: "#27a7e7" }}>
                <TelegramIcon />
              </Avatar>
            </a>
            <a
              className={styles.link}
              href="mailto:TAHODRAYVER@MAIL.RU"
              target="blank"
            >
              <Avatar sx={{ bgcolor: "#3e65cf" }}>
                <EmailIcon />
              </Avatar>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.bottomText}>Copyright ©2024</p>
        <p className={styles.bottomText}>ТАХО ДРАЙВЕР - установка тахографов</p>
      </div>
    </section>
  );
}
