import { FeedBackBlock } from './styled';

const FeedbackBlock = () => {
  return (
    <FeedBackBlock className="feedback-block">
      <h1 className="name">Вика</h1>
      <h1 className="score">Оценка: ⭐⭐⭐</h1>
      <h1 className="feedback">
        Мне сделали машину, была замена турбины. Все заняло три дня. Была
        небольшая очередь. Я осталась довольна Центром. Все работают слажено,
        единым механизмом. Мои комплименты.
      </h1>
      <h1 className="date">Дата визита в сервис: 28.05.2021</h1>
    </FeedBackBlock>
  );
};

export default FeedbackBlock;
