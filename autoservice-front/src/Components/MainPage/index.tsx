import { useWindowDimensions } from '../../Functions';
import { GadgetNavbar, PCNavbar } from '../NavbarElement';
import { Button } from 'react-bootstrap';
import CarouselElement from '../Carousel';
import ourServices from '../img/our-services.png';
import smallOurServices from '../img/small-our-services.png';
import galleryImg from '../img/gallery.png';
import yandexMapImage from '../img/yandex-map-place.png';
import DatePicker from 'react-datepicker';
import mapBlockImage from '../img/image-map-block.png';
import { useState, useEffect } from 'react';
import { Car, Money, StarEmpty, StarFilled, StopWatch } from '../Icons';
import FeedbackBlock from './FeedbackBlock';
import firebase from '../Firebase/';

import {
  MainBlock,
  InfoAppointmentBlock,
  BigInfoText,
  SmallInfoText,
  MakeAppointmentBlock,
  AppointmentInput,
  OurServicesImg,
  ServicesBlock,
  MapBlock,
  FeedBack,
  CenterBlueLine,
  BlueButton,
} from './styled';
import { RequestsInterface } from '../Admin/services/requests';

const ButtonStyle = {
  backgroundColor: '#429EC9',
  color: 'white',
  fontFamily: 'Roboto',
  border: '0',
  padding: '8px 35px 8px 35px',
};

export interface FeedbacksInterface {
  feedback: string;
  stars: number;
  date: string;
  name: string;
}

const ReturnStringDate = (PickDate: Date): string => {
  const day: string = PickDate.toString().split(' ')[2];
  const month: string =
    PickDate.getMonth().toString().length === 1
      ? PickDate.getMonth() + 1 === 0
        ? '0'
        : `0${PickDate.getMonth() + 1}`
      : `${PickDate.getMonth() + 1}`;

  return `${day}.${month}.${PickDate.getFullYear()}`;
};

const MainPage = () => {
  const [InputsState, setInputsState] = useState<RequestsInterface>({
    service: '',
    phoneNumber: '',
    autoModel: '',
    name: '',
  });
  const { width } = useWindowDimensions();
  const [requestsList, setRequestsList] = useState<RequestsInterface[]>([]);
  const [feedbacksList, setFeedbacksList] = useState<FeedbacksInterface[]>([]);
  const [feedbacksInput, setFeedbacksInput] = useState<FeedbacksInterface>({
    feedback: '',
    stars: 1,
    date: ReturnStringDate(new Date()),
    name: '',
  });

  useEffect(() => {
    firebase
      .collection('services')
      .doc('requestsList')
      .get()
      .then((doc) => {
        if (doc.exists) {
          const docData = doc.data();
          docData !== undefined
            ? setRequestsList(docData.requests)
            : console.log('is undefined');
        } else {
          console.log('No such document!');
        }
      });
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

  const updateRequestsList = () => {
    firebase
      .collection('services')
      .doc('requestsList')
      .set({ requests: [...requestsList, InputsState] });
    setRequestsList([...requestsList, InputsState]);
    setInputsState({
      service: '',
      phoneNumber: '',
      autoModel: '',
      name: '',
    });
  };

  const updateFeedbacksList = () => {
    firebase
      .collection('services')
      .doc('feedbacksList')
      .set({ feedbacks: [...feedbacksList, feedbacksInput] });
    setFeedbacksList([...feedbacksList, feedbacksInput]);
    setFeedbacksInput({
      date: ReturnStringDate(new Date()),
      feedback: '',
      stars: 1,
      name: '',
    });
  };

  return (
    <MainBlock>
      {width > 575 ? <PCNavbar /> : <GadgetNavbar />}

      <InfoAppointmentBlock>
        <div className="left-side">
          <BigInfoText>
            ???????????????????????????????? ???????????? ?? ?????????????????????? ???????????????????????? ??????????????????????
          </BigInfoText>
          <SmallInfoText>
            ???? ?????????????????????????? ???? ???????????????????????????? ?????????? ???????????????? ???????????? ????????????????
            ???????????? ???????????????? ?? ???????????????? ?????????????????? ????????????????.
          </SmallInfoText>
        </div>

        <div className="right-side">
          <MakeAppointmentBlock id="service">
            <form
              className="nun"
              onSubmit={(e: React.SyntheticEvent) => {
                InputsState.service.length > 3 &&
                  InputsState.phoneNumber.length === 11 &&
                  InputsState.autoModel.length > 4 &&
                  InputsState.name.length > 4 &&
                  updateRequestsList();

                e.preventDefault();
              }}
            >
              <h1>???????????? ????????????</h1>
              <AppointmentInput
                value={InputsState.name}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputsState({ ...InputsState, name: e.target.value });
                }}
                placeholder="??????"
              />
              <AppointmentInput
                value={InputsState.phoneNumber}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputsState({
                    ...InputsState,
                    phoneNumber: e.target.value,
                  });
                }}
                placeholder="?????????? ????????????????"
              />
              <AppointmentInput
                value={InputsState.service}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputsState({ ...InputsState, service: e.target.value });
                }}
                placeholder="????????????"
              />
              <AppointmentInput
                type="text"
                value={InputsState.autoModel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputsState({ ...InputsState, autoModel: e.target.value });
                }}
                placeholder="???????????? ????????????????????"
              />
              <Button type="submit" style={ButtonStyle}>
                ????????????????????
              </Button>
            </form>
          </MakeAppointmentBlock>
        </div>
      </InfoAppointmentBlock>

      <CarouselElement />

      {width > 500 ? (
        <OurServicesImg src={ourServices} alt="ds" />
      ) : (
        <OurServicesImg src={smallOurServices} alt="ds" />
      )}

      <ServicesBlock>
        <div className="top-block">
          <h1>???????????????????????? ?? ???????????? ??????????????????????</h1>
        </div>

        <div className="icons-block">
          <div className="icon-block">
            <Money />
            <h1>?????????????? ?????????????? </h1>
            <p>???????????????????????? ???????????? ???? ?????????????????? ????????.</p>
          </div>
          <div className="icon-block">
            <StopWatch />
            <h1>?????????????? ???????????? </h1>
            <p>
              ???????????????????????????? ???????????? ?? ???????????????? ??????????! ?????????????? ?????? ?????????????????????? ??
              ????????????!
            </p>
          </div>
          <div className="icon-block">
            <Car />
            <h1>???????????????? ?????????? </h1>
            <p>???????????????? ?? ???????????????????????? ???????? ?????????? ?? ?????????????? ????????????????????????????.</p>
          </div>
        </div>

        <div className="gallery-block">
          <img src={galleryImg} alt="gallery-img" />
        </div>
      </ServicesBlock>

      <MapBlock>
        <div className="left-block">
          <h1>???? ???? ?????????? </h1>
          <p>?????????????????????? ????-??, 12, ????????????????????????, ???????????????????? ??????., 141707</p>
          <img src={mapBlockImage} alt="map-block" />
        </div>
        <img className="yandex-map" src={yandexMapImage} alt="yandex-map" />
      </MapBlock>

      <FeedBack>
        {width > 700 && (
          <div className="left-side">
            {feedbacksList.map((el, index) => {
              return (
                index < 3 && (
                  <FeedbackBlock
                    feedback={el.feedback}
                    stars={el.stars}
                    date={el.date}
                    name={el.name}
                    key={index}
                  />
                )
              );
            })}
          </div>
        )}

        {width > 700 && <CenterBlueLine />}

        <div className="right-side">
          <h1>???????????????? ??????????</h1>
          <input
            value={feedbacksInput.name}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFeedbacksInput({ ...feedbacksInput, name: e.target.value });
            }}
            placeholder="??????"
          />
          <h1>????????????: </h1>
          <div
            className="stars-block"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <div
              className="star"
              onClick={() => setFeedbacksInput({ ...feedbacksInput, stars: 1 })}
            >
              {feedbacksInput.stars > 0 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div
              className="star"
              onClick={() => setFeedbacksInput({ ...feedbacksInput, stars: 2 })}
            >
              {feedbacksInput.stars > 1 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div
              className="star"
              onClick={() => setFeedbacksInput({ ...feedbacksInput, stars: 3 })}
            >
              {feedbacksInput.stars > 2 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div
              className="star"
              onClick={() => setFeedbacksInput({ ...feedbacksInput, stars: 4 })}
            >
              {feedbacksInput.stars > 3 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div
              className="star"
              onClick={() => setFeedbacksInput({ ...feedbacksInput, stars: 5 })}
            >
              {feedbacksInput.stars > 4 ? <StarFilled /> : <StarEmpty />}
            </div>
          </div>
          <input
            type="text"
            value={feedbacksInput.feedback}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFeedbacksInput({
                ...feedbacksInput,
                feedback: e.target.value,
              });
            }}
            placeholder="??????????????????????"
          />
          <DatePicker
            value={feedbacksInput.date}
            onChange={(e: Date): void => {
              setFeedbacksInput({
                ...feedbacksInput,
                date: ReturnStringDate(e),
              });
            }}
          />
          <BlueButton
            onClick={() => {
              feedbacksInput.name.length > 3 &&
                feedbacksInput.feedback.length > 10 &&
                updateFeedbacksList();
            }}
          >
            ??????????????????
          </BlueButton>
        </div>
        {width < 700 && (
          <div className="left-side">
            {feedbacksList.map((el, index) => {
              return (
                index < 3 && (
                  <FeedbackBlock
                    feedback={el.feedback}
                    stars={el.stars}
                    date={el.date}
                    name={el.name}
                    key={index}
                  />
                )
              );
            })}
          </div>
        )}
      </FeedBack>
    </MainBlock>
  );
};

export default MainPage;
