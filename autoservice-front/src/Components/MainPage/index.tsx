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
import { useState } from 'react';

import { Car, Money, StopWatch } from '../Icons';
import FeedbackBlock from './FeedbackBlock';

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
  return `0${PickDate.getDay()}.0${PickDate.getMonth()}.${PickDate.getFullYear()}`;
};

const MainPage = () => {
  const [pickedDate, setDate] = useState(new Date());

  const { width } = useWindowDimensions();
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
            <Button style={ButtonStyle}>Записаться</Button>
          </MakeAppointmentBlock>
        </div>
      </InfoAppointmentBlock>

      <CarouselElement
        list={[
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена масла',
            price: 1200,
            description: 'Замена масла самого лучшего качества',
            image:
              'https://cdnimg.rg.ru/img/content/193/16/27/iStock-928323870_d_850.jpg',
          },
          {
            title: 'Диагностика',
            price: 3000,
            description: 'Быстрая диагностика вашего авто',
            image:
              'http://reaktor154.ru/wp-content/uploads/2018/12/dscf8301-edit-1024x683.jpg',
          },
          {
            title: 'Кузовой ремонт',
            price: 4000,
            description: 'Ремонт кузова высшего качества',
            image:
              'http://krasnodar-n1.ru/wp-content/uploads/2015/03/Kuzovn_rem_copy2.jpg',
          },
          {
            title: 'Шиномонтаж',
            price: 1300,
            description: 'Быстрый демонтаж автомобиля',
            image:
              'https://krasnodar.virbacavto.ru/upload/iblock/1f1/%D0%A8%D0%B8%D0%BD%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%201%20621.png',
          },
          {
            title: 'Заправка кондиционера',
            price: 1550,
            description: 'Заправка кондиционера лучшими средствами',
            image:
              'https://www.viktorymotor.com/wp-content/uploads/2019/06/kondic.jpg',
          },
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена масла',
            price: 1200,
            description: 'Замена масла самого лучшего качества',
            image:
              'https://cdnimg.rg.ru/img/content/193/16/27/iStock-928323870_d_850.jpg',
          },
          {
            title: 'Диагностика',
            price: 3000,
            description: 'Быстрая диагностика вашего авто',
            image:
              'http://reaktor154.ru/wp-content/uploads/2018/12/dscf8301-edit-1024x683.jpg',
          },
          {
            title: 'Кузовой ремонт',
            price: 4000,
            description: 'Ремонт кузова высшего качества',
            image:
              'http://krasnodar-n1.ru/wp-content/uploads/2015/03/Kuzovn_rem_copy2.jpg',
          },
          {
            title: 'Шиномонтаж',
            price: 1300,
            description: 'Быстрый демонтаж автомобиля',
            image:
              'https://krasnodar.virbacavto.ru/upload/iblock/1f1/%D0%A8%D0%B8%D0%BD%D0%BE%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%201%20621.png',
          },
          {
            title: 'Заправка кондиционера',
            price: 1550,
            description: 'Заправка кондиционера лучшими средствами',
            image:
              'https://www.viktorymotor.com/wp-content/uploads/2019/06/kondic.jpg',
          },
        ]}
      />

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
        <div className="left-side">
          <FeedbackBlock />
        </div>

        <CenterBlueLine />

        <div className="right-side">
          <h1>Оставить отзыв</h1>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Услуга" />
          <h1>Оценка: </h1>
          <input type="text" placeholder="Комментарий" />
          <DatePicker
            value={ReturnStringDate(pickedDate)}
            onChange={(e: Date): void => {
              console.log(e);
              setDate(e);
            }}
          />
        </div>
      </FeedBack>
    </MainBlock>
  );
};

export default MainPage;
