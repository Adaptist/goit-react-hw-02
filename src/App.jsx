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

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div>
      <Description />
      <Feedback onFeedback={handleFeedback} />
      <Options feedback={feedback} />
    </div>
  );
};

export default App;