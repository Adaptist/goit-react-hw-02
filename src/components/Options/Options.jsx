import s from "./Options.module.css";

const Options = ({ feedback, totalFeedback, positiveFeedbackPercent }) => (
  <div className={s.optionsContainer}>
    <p className={s.optionsText}>Good: {feedback.good}</p>
    <p className={s.optionsText}>Neutral: {feedback.neutral}</p>
    <p className={s.optionsText}>Bad: {feedback.bad}</p>
    <p className={s.optionsText}>Total Feedback: {totalFeedback}</p>
    <p className={s.optionsText}>Positive Feedback: {positiveFeedbackPercent}%</p>
  </div>
);

export default Options;