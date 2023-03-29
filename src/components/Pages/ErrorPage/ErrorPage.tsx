import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.text}>404</h1>
        <h2 className={styles.text}>There is nothing here!</h2>
      </div>
    </main>
  );
}

export default ErrorPage;
