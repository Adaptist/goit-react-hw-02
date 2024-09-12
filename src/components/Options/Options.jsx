const Options = ({ feedback }) => (
  <div>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
  </div>
);

export default Options;