import { useState } from "react";
import Description from "./components/Description/Description.jsx"
import Feedback from "./components/Feedback/Feedback.jsx"
import Options from "./components/Options/Options.jsx"

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

  return (
    <div>
      <Description />
      <Feedback updateFeedback={updateFeedback} />
      <Options feedback={feedback} />
    </div>
  );
};

export default App;