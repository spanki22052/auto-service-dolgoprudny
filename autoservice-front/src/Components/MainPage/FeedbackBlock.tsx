import { FeedBackBlock } from './styled';
import { FC } from 'react';

interface PropsObj {
  feedback: string;
  stars: number;
  date: string;
  name: string;
}

const FeedbackBlock = (feedback: PropsObj) => {
  return (
    <FeedBackBlock className="feedback-block">
      <h1 className="name">{feedback.name}</h1>
      <h1 className="score">Оценка: {'⭐'.repeat(feedback.stars)}</h1>
      <h1 className="feedback">{feedback.feedback}</h1>
      <h1 className="date">Дата визита в сервис: {feedback.date}</h1>
    </FeedBackBlock>
  );
};

export default FeedbackBlock;
