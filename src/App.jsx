import { useState } from "react";
import Description from "./components/Description/Description.jsx"
import Feedback from "./components/Feedback/Feedback.jsx"
import Options from "./components/Options/Options.jsx"
import Notification from "./components/Notification/Notification.jsx"

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({good:0, neutral:0, bad: 0})
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercent =
    totalFeedback > 0 ? Math.round((feedback.good / (feedback.good + feedback.bad)) * 100) : 0;

  return (
    <div>
      <Description />
      <Feedback 
        updateFeedback={updateFeedback} 
        totalFeedback={totalFeedback} 
        resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <>
          <Options 
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedbackPercent={positiveFeedbackPercent} />
        </>
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;