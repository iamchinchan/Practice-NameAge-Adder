import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import styles from "../css/ErrorModal.module.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.removeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.removeModal}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop removeModal={props.removeModal}/>,
        document.getElementById("backdrop-root")
      )}
      {
        ReactDom.createPortal(
          <ModalOverlay title={props.title} message={props.message} removeModal={props.removeModal} />,
          document.getElementById("overlay-root")
        )
      }
    </Fragment>
  );
};
export default ErrorModal;
