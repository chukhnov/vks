import Head from "next/head";
import styles from "./index.module.css";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import logoImg from "../public/vks-logo.png";
import carouselImgFirst from "../public/carousel-img-first.png";
import carouselImgSecond from "../public/carousel-img-second.png";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>VKS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <CardMedia image={logoImg} className={styles.logo} />
        <div>
          <Button>Оплата и доставка</Button>
          <Button>Контакты</Button>
          <Button>О нас</Button>
        </div>
      </div>
      <Slider {...settings}>
        <div className={styles["carousel-container-img"]}>
          <CardMedia
            image={carouselImgFirst}
            className={`${styles["carousel-img"]} ${styles["carousel-img-right"]}`}
          />
          <CardMedia
            image={logoImg}
            className={`${styles["carousel-logo"]} ${styles["carousel-logo-left"]}`}
          />
        </div>
        <div className={styles["carousel-container-img"]}>
          <CardMedia
            image={carouselImgSecond}
            className={`${styles["carousel-img"]} ${styles["carousel-img-left"]}`}
          />
          <CardMedia
            image={logoImg}
            className={`${styles["carousel-logo"]} ${styles["carousel-logo-right"]}`}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
