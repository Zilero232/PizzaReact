import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      Ничего не найдено
      <span>К сожалению данная страница отсуствует в нашем интернет-магазине</span>
    </h1>
  );
};

export default NotFoundBlock;
