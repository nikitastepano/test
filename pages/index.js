import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import logo from "../public/logo.jpg";
import monkey from "../public/monkey.webp";
import tournaments from "../public/tournaments.png";
import cashouts from "../public/cashouts.png";
import support from "../public/support.png";
import money from "../public/money.png";
import zeus from "../public/Zeus.gif";
import gates from "../public/Gates.gif";
import mental from "../public/Mental.gif";
import sweet from "../public/Sweet.gif";
import dog from "../public/Dog.png";
import footer from "../public/footer.jpg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const texts = ["Турниры", "Выплаты", "Поддержка"];
const images = [tournaments, cashouts, support];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleRegisterClick = () => {
    window.location.href = "https://play-leebet-one.com/d644e94e6";
  };

  return (
    <>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <Image 
              className={styles.logo}
              src={logo}
              alt="LEEBET logo"
              width={50}
              height={50}
              priority
              onClick={handleRegisterClick}
            />
            <h1 className={styles.title} onClick={handleRegisterClick}>LEEBET</h1>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleRegisterClick}>Вход</button>
            <button className={styles.button} onClick={handleRegisterClick}>Регистрация</button>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.bonusText}>
            <h2 className={styles.bonusTextTitle}>БОНУС 175% <span className={styles.bonusTextTitlePlus}>+</span> 325ФС</h2>
            <div className={styles.bonusContainer}>
              <button className={styles.bonusButton} onClick={handleRegisterClick}>Забрать</button>
              <Image 
                className={styles.bonusImage}
                src={money}
                alt="LEEBET bonus"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
          <Image 
            className={styles.monkey}
            src={monkey}
            alt="LEEBET monkey"
            width={150}
            height={125}
            priority
          />
          <div className={styles.textContainer}>
            <h2 className={styles.text}>{texts[currentIndex]}</h2>
            <div className={styles.dotsContainer}>
              <div className={styles.dots}>
                {texts.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                    onClick={() => handleDotClick(index)}
                  >•</span>
                ))}
              </div>
              <Image 
                className={styles.image}
                src={images[currentIndex]}
                alt={texts[currentIndex]}
                width={90}
                height={60}
                priority
              />
            </div>
          </div>
        </main>
        <div className={styles.bonus}>
          <div className={styles.bonusText}>
            <h2 className={styles.bonusTextTitle}>БОНУС 175% <span className={styles.bonusTextTitlePlus}>+</span> 325ФС</h2>
            <button className={styles.bonusButton} onClick={handleRegisterClick}>Забрать</button>
          </div>
          <Image 
            className={styles.bonusImage}
            src={money}
            alt="LEEBET bonus"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className={styles.topGames}>
          <div className={styles.topGamesContainer}>
            <h2 className={styles.topGamesTitle}>Топ Игры</h2>
          </div>
          <div className={styles.topGamesImages}>
            <Image 
              className={styles.topGamesImage}
              src={zeus}
              alt="LEEBET top game"
              width={150}
              height={150}
              priority
              onClick={handleRegisterClick}
            />
            <Image 
              className={styles.topGamesImage}
              src={gates}
              alt="LEEBET top game"
              width={150}
              height={150}
              priority
              onClick={handleRegisterClick}
            />
            <Image 
              className={styles.topGamesImage}
              src={mental}
              alt="LEEBET top game"
              width={150}
              height={150}
              priority
              onClick={handleRegisterClick}
            />
            <Image 
              className={styles.topGamesImage}
              src={sweet}
              alt="LEEBET top game"
              width={150}
              height={150}
              priority
              onClick={handleRegisterClick}
            />
            <Image 
              className={styles.topGamesImage}
              src={dog}
              alt="LEEBET top game"
              width={150}
              height={150}
              priority
              onClick={handleRegisterClick}
            />
          </div>
        </div>
        <div className={styles.thisIs}>
          <h2 className={styles.thisIsTitle}>Leebet казино - новейшая крипто игровая платформа в России, предлагающая широкий ассортимент игр от ведущих провайдеров, таких как NetEnt и Microgaming, включая слоты, настольные игры и живое казино. Поддержка множества криптовалют обеспечивает анонимные и безопасные платежи, выделяя Leebet на фоне других онлайн казино. С приветственными бонусами, турнирами и программой лояльности, Leebet обещает захватывающий игровой опыт с поддержкой клиентов 24/7, делая его привлекательным выбором для игроков, ценящих комфорт, безопасность и разнообразие азартных развлечений.</h2>
          <p className={styles.thisIsText}>
            Поддерживаемые криптовалюты:
            <br />
            - Ethereum (ETH)
            <br />
            - Bitcoin (BTC)
            <br />
            - Litecoin (LTC)
            <br />
            - Ripple (XRP)
            <br />
            - Dogecoin (DOGE)
          </p>
        </div>
        <div className={styles.footer}>
          <p className={styles.footerText}>LEEBET © 2024</p>
        </div>
        <h3 className={styles.footerTitle}>LEEBET - лучший сайт для онлайн-казино</h3>
        <p className={styles.footerText}>
          Для начала игры в ЛиБет казино необходимо зарегистрироваться:
          <br />
          Перейдите на официальный сайт Leebet Casino: Откройте браузер и введите адрес онлайн казино Leebet, чтобы попасть на главную страницу.
          <br />
          Нажмите на кнопку Регистрация: На главной странице сайта найдите и нажмите на кнопку "Регистрация", обычно расположенную в верхней части экрана.
          <br />
          Заполните регистрационную форму: Введите необходимые данные, такие как электронная почта, пароль, выберите валюту счета и, если есть, введите промокод.
          <br />
          Подтвердите электронную почту: После заполнения формы проверьте свою электронную почту на наличие письма от Leebet с ссылкой для подтверждения регистрации. Перейдите по ссылке для активации аккаунта.
          <br />
          Завершите профиль: Заполните оставшиеся данные в профиле пользователя, такие как личная информация и контактные данные.
          <br />
          Верификация аккаунта (при необходимости): В некоторых случаях казино может запросить верификацию аккаунта, для чего потребуется загрузить документы, подтверждающие вашу личность и адрес проживания.
          <br />
          Внесите депозит и начните играть: После регистрации и верификации аккаунта, если она требуется, вы можете внести свой первый депозит, воспользоваться приветственным бонусом и начать играть в любимые игры.
        </p>
        <Image 
          className={styles.footerImage}
          src={footer}
          alt="LEEBET top game"
          priority
        />
      </div>
    </>
  );
}
