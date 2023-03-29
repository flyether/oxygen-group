import styles from './AboutUs.module.css';

export const Member: React.FC<{
  pic: string;
  key?: number;
  text?: string;
  title?: string;
  post?: string;
}> = ({ text, pic, title, post }) => {
  return (
    <div className={styles.team__members__member__wrapper_carousel}>
      <img src={pic} alt="котик" />
      {title ? (
        <p className={styles.about__bold}>{title}</p>
      ) : (
        <p className={styles.about__bold}>Дмитрий Кушкин</p>
      )}
      {post ? (
        <p className={styles.about__bold_gray}>{post}</p>
      ) : (
        <p className={styles.about__bold}>Frontend</p>
      )}
      {text ? (
        <p style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>{text}</p>
      ) : (
        <p>СуперМега крутой специалист с опытом 20 лет. Любит кабачки </p>
      )}
    </div>
  );
};
