"use client";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function Header() {
  const [headClass, setHeadClass] = useState(styles.header);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(styles.linksContainer);
  const [wrapperStyle, setWrapperStyle] = useState(styles.opacityWrapper);
  useEffect(() => {
    window.addEventListener("scroll", (evt) => {
      if (window.scrollY > 30) {
        setHeadClass(styles.headerSticky);
      } else {
        setHeadClass(styles.header);
      }
    });
  });

  const handleOpenMenu = () => {
    if (window.scrollY > 30) {
      setWrapperStyle(styles.opacityWrapperStikyActive);
    } else {
      setWrapperStyle(styles.opacityWrapperActive);
    }
    setMenuStyle(styles.linksContainerOpen);
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    if (window.scrollY > 30) {
      setHeadClass(styles.headerSticky);
    } else {
      setHeadClass(styles.header);
    }
    setMenuStyle(styles.linksContainer);
    setWrapperStyle(styles.opacityWrapper);
    setIsMenuOpen(false);
  };

  return (
    <header className={headClass}>
      <div className={wrapperStyle}></div>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          <span className={styles.logo}>ТАХО</span>{" "}
          <span className={styles.logoText}>ДРАЙВЕР</span>
        </Link>
        <div className={menuStyle}>
          <Link href="/services" className={styles.links}>
            УСЛУГИ
          </Link>
          <Link href="/articles" className={styles.links}>
            СТАТЬИ
          </Link>
          <Link href="/license" className={styles.links}>
            ЛИЦЕНЗИИ
          </Link>
          <Link href="/requisites" className={styles.links}>
            РЕКВИЗИТЫ
          </Link>
          <a href="/#shop" className={styles.links}>
            МАГАЗИН
          </a>
          <a href="/#contacts" className={styles.links}>
            КОНТАКТЫ
          </a>
          <a className={styles.links}></a>
        </div>
        <div className={styles.containerFeedback}>
          <a className={styles.linkPhone} href="tel:+79103571205">
            +7(910) 357-12-05
          </a>
          <div className={styles.socials}>
            <a
              className={styles.linkSocial}
              href="https://wa.me/79005963293"
              target="blank"
            >
              <Avatar>
                <WhatsAppIcon />
              </Avatar>
            </a>
            <a
              className={styles.linkSocial}
              href="https://t.me/Anton391205"
              target="blank"
            >
              <Avatar>
                <TelegramIcon />
              </Avatar>
            </a>
            <a
              className={styles.linkSocial}
              href="mailto:TAHODRAYVER@MAIL.RU"
              target="blank"
            >
              <Avatar>
                <EmailIcon />
              </Avatar>
            </a>
          </div>
        </div>
        {!isMenuOpen && (
          <Avatar
            sx={{ margin: 0, padding: 0 }}
            className={styles.menuButton}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </Avatar>
        )}
        {isMenuOpen && (
          <Avatar className={styles.menuButton} onClick={handleCloseMenu}>
            <CloseIcon />
          </Avatar>
        )}
      </div>
    </header>
  );
}
