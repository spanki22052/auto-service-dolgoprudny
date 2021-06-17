import styled from 'styled-components';
import { useWindowDimensions } from '../../Functions';
import blockimg from '../img/main-photo.png';
import { GadgetNavbar, PCNavbar } from '../NavbarElement';
import { Button } from 'react-bootstrap';
import CarouselElement from '../Carousel';

const MainBlock = styled.div`
  width: 100%;
  height: 60vh;
  background: linear-gradient(
      90.28deg,
      #0c1326 0.27%,
      rgba(12, 19, 38, 0) 12.83%
    ),
    linear-gradient(0deg, #0c1326 3.17%, rgba(12, 19, 38, 0.18) 39.17%),
    url(${blockimg});
  background-repeat: no-repeat;
  background-size: cover;

  .navbar-toggler {
    background-color: #429ec9;
  }
  .navbar {
    padding: 0 10px 0 10px;
  }
  .navbar-nav {
    background-color: #0c1326;
  }

  .mr-auto {
    * {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 750px) {
    height: 65vh !important;
  }
`;

const InfoAppointmentBlock = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  margin: auto;
  flex-wrap: wrap;

  h1 {
    font-family: Scada;
    font-style: normal;
  }

  @media screen and (max-width: 750px) {
    .left-side,
    .right-side {
      width: 90vw !important;
    }

    .left-side {
      h1 {
        font-size: 1.9em;
      }

      h2 {
        font-size: 1.1em;
        width: 100%;
      }
    }
  }

  .left-side {
    width: 55%;

    button {
      &:hover {
        background-color: #2794c7 !important;
      }
    }
  }

  .right-side {
    width: auto;
  }
`;

const BigInfoText = styled.h1`
  font-weight: bold;
  font-size: 34px;

  color: #ffffff;
`;

const SmallInfoText = styled.h2`
  font-weight: normal;
  font-size: 18px;
  width: 75%;

  color: #ffffff;
`;

const MakeAppointmentBlock = styled.div`
  width: 300px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 5px 50px 5px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    color: #224a67;
  }
`;

const AppointmentInput = styled.input`
  width: 250px;
  height: 40px;

  background: #e6e6e6;
  border-radius: 5px;

  font-family: Scada;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  padding: 0 10px 0 10px;
  border: 0;

  color: #acaaaa;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

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

      <CarouselElement></CarouselElement>
    </MainBlock>
  );
};

export default MainPage;