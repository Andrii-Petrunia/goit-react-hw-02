import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ message }) => (
  <p className={styles.description}>{message}</p>
);

Description.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Description;
