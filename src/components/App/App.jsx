import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = name => {
    setOptions(lastState => {
      return {
        ...lastState,
        [name]: lastState[name] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = key => {
    const total = countTotalFeedback();
    return Math.round((options.good * 100) / total);
  };

  const { good, neutral, bad } = options;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.box}>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(options)}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
