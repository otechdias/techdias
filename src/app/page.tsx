import NewCellphone from "../../components/NewCellPhone";
import NewFooter from "../../components/NewFooter";
import NewForm from "../../components/NewForm";
import NewOffers from "../../components/NewOffers";
import NewQuestions from "../../components/NewQuestions";
import NewSection1 from "../../components/NewSection1";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <NewSection1 />
      <NewOffers />
      <NewForm />
      <NewQuestions />
      <NewCellphone />
      <NewFooter />
    </div>
  );
}
