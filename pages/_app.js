import "../styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Component {...pageProps} />
    </div>
  );
}
