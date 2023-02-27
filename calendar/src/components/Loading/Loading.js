import Spinner from '../imagens/Spinner.svg'
import styles from "./LoadingStyle.css";

const Load = () => {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader_container} src={Spinner} alt="Loading"/>
    </div>
  );
};

export default Load;