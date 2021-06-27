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
import { ServiceInterface } from '../Interfaces';
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
  const [pickedDate, setDate] = useState(new Date());
  const [DbData, DbDataSet] = useState<ServiceInterface[]>([]);
  const [InputsState, setInputsState] = useState<RequestsInterface>({
    service: '',
    phoneNumber: '',
    autoModel: '',
    name: '',
  });
  const [starsState, setStarsState] = useState(1);
  const { width } = useWindowDimensions();
  const [requestsList, setRequestsList] = useState<RequestsInterface[]>([]);
  const [feedbacksList, setFeedbacksList] = useState<FeedbacksInterface[]>([]);

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
    console.log([...requestsList, InputsState]);
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

  useEffect(() => {
    firebase
      .collection('services')
      .doc('servicesList')
      .get()
      .then((doc) => {
        if (doc.exists) {
          const docData = doc.data();
          docData !== undefined
            ? DbDataSet(docData.service)
            : console.log('is undefined');
        } else {
          console.log('No such document!');
        }
      });
  }, []);

  return (
    <MainBlock>
      {width > 575 ? <PCNavbar /> : <GadgetNavbar />}

      <InfoAppointmentBlock>
        <div className="left-side">
          <BigInfoText>
            Профессиональный ремонт и техническое обслуживание автомобилей
          </BigInfoText>
          <SmallInfoText>
            Мы сосредоточены на предоставлении нашим клиентам самого высокого
            уровня качества и отличной поддержки клиентов.
          </SmallInfoText>
          <Button style={ButtonStyle}>Подробнее</Button>
        </div>

        <div className="right-side">
          <MakeAppointmentBlock>
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
              <h1>Запись онлайн</h1>
              <AppointmentInput
                value={InputsState.name}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputsState({ ...InputsState, name: e.target.value });
                }}
                placeholder="Имя"
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
                placeholder="Номер телефона"
              />
              <AppointmentInput
                value={InputsState.service}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputsState({ ...InputsState, service: e.target.value });
                }}
                placeholder="Услуга"
              />
              <AppointmentInput
                type="text"
                value={InputsState.autoModel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputsState({ ...InputsState, autoModel: e.target.value });
                }}
                placeholder="Модель автомобиля"
              />
              <Button type="submit" style={ButtonStyle}>
                Записаться
              </Button>
            </form>
          </MakeAppointmentBlock>
        </div>
      </InfoAppointmentBlock>

      <CarouselElement list={DbData} />

      {width > 500 ? (
        <OurServicesImg src={ourServices} alt="ds" />
      ) : (
        <OurServicesImg src={smallOurServices} alt="ds" />
      )}

      <ServicesBlock>
        <div className="top-block">
          <h1>Обслуживание и ремонт автомобилей</h1>
        </div>

        <div className="icons-block">
          <div className="icon-block">
            <Money />
            <h1>Ценовой сегмент </h1>
            <p>Качественная услуга по невысокой цене.</p>
          </div>
          <div className="icon-block">
            <StopWatch />
            <h1>Быстрый ремонт </h1>
            <p>
              Предоставление услуги с короткие сроки! Сделаем всё качественно и
              быстро!
            </p>
          </div>
          <div className="icon-block">
            <Car />
            <h1>Перечень услуг </h1>
            <p>Работаем с автомобилями всех марок и мировых производителей.</p>
          </div>
        </div>

        <div className="gallery-block">
          <img src={galleryImg} alt="gallery-img" />
        </div>
      </ServicesBlock>

      <MapBlock>
        <div className="left-block">
          <h1>Мы на карте </h1>
          <p>Лихачевский пр-д, 12, Долгопрудный, Московская обл., 141707</p>
          <img src={mapBlockImage} alt="map-block" />
        </div>
        <img className="yandex-map" src={yandexMapImage} alt="yandex-map" />
      </MapBlock>

      <FeedBack>
        {width > 700 && (
          <div className="left-side">
            {feedbacksList.map((el, index) => {
              console.log(el);
              return (
                <FeedbackBlock
                  feedback={el.feedback}
                  stars={el.stars}
                  date={el.date}
                  name={el.name}
                  key={index}
                />
              );
            })}
          </div>
        )}

        {width > 700 && <CenterBlueLine />}

        <div className="right-side">
          <h1>Оставить отзыв</h1>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Услуга" />
          <h1>Оценка: </h1>
          <div
            className="stars-block"
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <div className="star" onClick={() => setStarsState(1)}>
              {starsState > 0 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div className="star" onClick={() => setStarsState(2)}>
              {starsState > 1 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div className="star" onClick={() => setStarsState(3)}>
              {starsState > 2 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div className="star" onClick={() => setStarsState(4)}>
              {starsState > 3 ? <StarFilled /> : <StarEmpty />}
            </div>
            <div className="star" onClick={() => setStarsState(5)}>
              {starsState > 4 ? <StarFilled /> : <StarEmpty />}
            </div>
          </div>
          <input type="text" placeholder="Комментарий" />
          <DatePicker
            value={ReturnStringDate(pickedDate)}
            onChange={(e: Date): void => {
              setDate(e);
            }}
          />
        </div>
        {width < 700 && (
          <div className="left-side">
            {feedbacksList.map((el, index) => {
              console.log(el);
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
