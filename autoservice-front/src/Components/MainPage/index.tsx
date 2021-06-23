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
import { Car, Money, StopWatch } from '../Icons';
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

const ButtonStyle = {
  backgroundColor: '#429EC9',
  color: 'white',
  fontFamily: 'Roboto',
  border: '0',
  padding: '8px 35px 8px 35px',
};

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

  const { width } = useWindowDimensions();

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
            <h1>Запись онлайн</h1>
            <AppointmentInput placeholder="Имя" />
            <AppointmentInput placeholder="Номер телефона" />
            <AppointmentInput placeholder="Услуга" />
            <AppointmentInput placeholder="Модель автомобиля" />
            <Button style={ButtonStyle}>Записаться</Button>
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
            <FeedbackBlock />
            <FeedbackBlock />
            <FeedbackBlock />
          </div>
        )}

        {width > 700 && <CenterBlueLine />}

        <div className="right-side">
          <h1>Оставить отзыв</h1>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Услуга" />
          <h1>Оценка: </h1>
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
            <FeedbackBlock />
            <FeedbackBlock />
            <FeedbackBlock />
          </div>
        )}
      </FeedBack>
    </MainBlock>
  );
};

export default MainPage;
