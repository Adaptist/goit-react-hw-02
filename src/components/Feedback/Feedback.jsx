import s from "./Feedback.module.css";

const Feedback = ({ updateFeedback, totalFeedback, resetFeedback }) => (
  <div className={s.feedbackContainer}>
    <button className={s.feedbackButton} onClick={() => updateFeedback('good')}>Good</button>
    <button className={s.feedbackButton} onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button className={s.feedbackButton} onClick={() => updateFeedback('bad')}>Bad</button>

    {totalFeedback > 0 && (
      <button className={`${s.feedbackButton} ${s.resetButton}`} onClick={resetFeedback}>Reset</button>
    )}
  </div>
);

export default Feedback;