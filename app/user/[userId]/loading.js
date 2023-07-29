import Loader from "@/app/components/Loader/Loader";
import styles from "../../styles/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  );
};

export default Loading;
