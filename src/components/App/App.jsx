import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Statistics from "../Statistics/Statistics";
import styles from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    setFeedback(savedFeedback);
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prevState) => ({
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={styles.app}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options onFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Feedback>
      ) : (
        <Description message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;
