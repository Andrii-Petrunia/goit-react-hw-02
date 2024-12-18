import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ title, text }) => (
  <div className={styles.description}>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Description;
