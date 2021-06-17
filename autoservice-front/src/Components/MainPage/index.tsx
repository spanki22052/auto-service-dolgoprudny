import { useWindowDimensions } from '../../Functions';
import { GadgetNavbar, PCNavbar } from '../NavbarElement';
import { Button } from 'react-bootstrap';
import CarouselElement from '../Carousel';
import {
  MainBlock,
  InfoAppointmentBlock,
  BigInfoText,
  SmallInfoText,
  MakeAppointmentBlock,
  AppointmentInput,
} from './styled';

const ButtonStyle = {
  backgroundColor: '#429EC9',
  color: 'white',
  fontFamily: 'Roboto',
  border: '0',
  padding: '8px 35px 8px 35px',
};

const MainPage = () => {
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
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
          {
            title: 'Замена колес',
            price: 2200,
            description: 'Сезонная замена колес',
            image:
              'https://opt-922625.ssl.1c-bitrix-cdn.ru/upload/iblock/b27/b27c2096709dc3221f4b1c497fa1db1c.jpg?1577432909565715',
          },
        ]}
      />
    </MainBlock>
  );
};

export default MainPage;
