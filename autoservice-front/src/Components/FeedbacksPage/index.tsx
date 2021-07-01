import { useEffect, useState } from 'react';
import { FeedbacksInterface } from '../MainPage';
import firebase from '../Firebase';
import { FeedbacksBlock } from '../MainPage/styled';
import FeedbackBlock from '../MainPage/FeedbackBlock';
import { GadgetNavbar, PCNavbar } from '../NavbarElement';
import { useWindowDimensions } from '../../Functions';

const FeedbacksPage = () => {
  const [feedbacksList, setFeedbacksList] = useState<FeedbacksInterface[]>([]);

  useEffect(() => {
    firebase
      .collection('services')
      .doc('feedbacksList')
      .get()
      .then((el) => {
        if (el.exists) {
          const docData = el.data();
          docData !== undefined
            ? setFeedbacksList(docData.feedbacks)
            : console.log('is undefined');
        } else {
          console.log('No such document!');
        }
      });
  }, []);
  const { width } = useWindowDimensions();

  return (
    <div className="feedbacks-holder" style={{ width: '100%' }}>
      {width > 575 ? <PCNavbar /> : <GadgetNavbar />}
      <FeedbacksBlock>
        {feedbacksList !== undefined ? (
          feedbacksList.map((el, index) => {
            return (
              <FeedbackBlock
                feedback={el.feedback}
                stars={el.stars}
                date={el.date}
                name={el.name}
                key={index}
              />
            );
          })
        ) : (
          <h1>Загрузка</h1>
        )}
      </FeedbacksBlock>
    </div>
  );
};

export default FeedbacksPage;
