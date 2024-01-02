import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnBox}>
      {options.map(name => (
        <button
          className={css.btn}
          key={name}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
