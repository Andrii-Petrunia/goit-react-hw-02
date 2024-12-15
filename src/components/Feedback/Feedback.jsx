import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ children }) => (
  <div className={styles.feedback}>{children}</div>
);

Feedback.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Feedback;
