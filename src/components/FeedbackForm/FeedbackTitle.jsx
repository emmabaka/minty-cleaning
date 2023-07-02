import PropTypes from "prop-types";
import css from "./FeedbackForm.module.css";

const FeedbackTitle = ({ title, accent }) => {
  return (
    <h2 className={css.title}>
      {title[0]} <span className="accent">{accent}</span>
      {title[1]}
    </h2>
  );
};

FeedbackTitle.propTypes = {
  title: PropTypes.array.isRequired,
  accent: PropTypes.string.isRequired,
};

export default FeedbackTitle;
