import { FeedBackBlock } from './styled';
import { FC } from 'react';

interface PropsObj {
  feedback: string;
  stars: number;
  date: string;
  name: string;
}

const FeedbackBlock: FC<PropsObj> = ({ feedback, stars, date, name }) => {
  return (
    <FeedBackBlock style={{ paddingBottom: '20px' }} className="feedback-block">
      <h1 className="name">{name}</h1>
      <h1 className="score">Оценка: {'⭐'.repeat(stars)}</h1>
      <h1 className="feedback">{feedback}</h1>
      <h1 className="date">Дата визита в сервис: {date}</h1>
    </FeedBackBlock>
  );
};

export default FeedbackBlock;
