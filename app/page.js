import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TodoWrapper from "./components/TodoWrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
     <TodoWrapper/>
    </div>
  );
}
