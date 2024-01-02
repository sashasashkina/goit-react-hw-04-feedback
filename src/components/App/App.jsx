import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = key => {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.box}>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            handleFeedback={this.handleFeedback}
            options={options}
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
  }
}
