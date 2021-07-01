import { useEffect, useState } from 'react';
import { FeedbacksInterface } from '../MainPage';
import firebase, { firebaseAuth } from '../Firebase';
import { FeedbacksBlock, RedRemoveButton } from '../MainPage/styled';
import FeedbackBlock from '../MainPage/FeedbackBlock';
import { GadgetNavbar, PCNavbar } from '../NavbarElement';
import { useWindowDimensions } from '../../Functions';
import { TrashIcon } from '../Icons';

const FeedbacksPage = () => {
  const [feedbacksList, setFeedbacksList] = useState<FeedbacksInterface[]>([]);
  const [user, setUser] = useState(false);

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
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        setUser(true);
      } else {
        setUser(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const { width } = useWindowDimensions();

  const removeFeedback = (indx: number) => {
    const newFeedbacks = [...feedbacksList];
    newFeedbacks.splice(indx, 1);
    firebase
      .collection('services')
      .doc('feedbacksList')
      .set({ feedbacks: [...newFeedbacks] });
    setFeedbacksList(newFeedbacks);
  };

  return (
    <div className="feedbacks-holder" style={{ width: '100%' }}>
      {width > 575 ? <PCNavbar /> : <GadgetNavbar />}
      <FeedbacksBlock>
        {feedbacksList !== undefined && feedbacksList.length !== 0 ? (
          feedbacksList.map((el, index) => {
            return (
              <div
                key={index}
                className="feedback-holder"
                style={{ position: 'relative' }}
              >
                <FeedbackBlock
                  feedback={el.feedback}
                  stars={el.stars}
                  date={el.date}
                  name={el.name}
                />

                {user && (
                  <RedRemoveButton
                    onClick={() => removeFeedback(index)}
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                    }}
                  >
                    <TrashIcon />
                  </RedRemoveButton>
                )}
              </div>
            );
          })
        ) : (
          <div
            className="spinner-border text-light"
            role="status"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              translate: 'transform(-50%, -50%)',
            }}
          >
            <span className="sr-only"></span>
          </div>
        )}
      </FeedbacksBlock>
    </div>
  );
};

export default FeedbacksPage;
