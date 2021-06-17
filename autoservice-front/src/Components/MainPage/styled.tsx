import blockimg from '../img/main-photo.png';
import mapBackground from '../img/map-background.png';
import styled from 'styled-components';

export const MainBlock = styled.div`
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

export const InfoAppointmentBlock = styled.div`
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
    justify-content: center;

    .left-side {
      width: 90vw !important;
    }

    .right-side {
      margin-top: 20px;
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

export const BigInfoText = styled.h1`
  font-weight: bold;
  font-size: 34px;

  color: #ffffff;
`;

export const SmallInfoText = styled.h2`
  font-weight: normal;
  font-size: 18px;
  width: 75%;

  color: #ffffff;
`;

export const MakeAppointmentBlock = styled.div`
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

export const AppointmentInput = styled.input`
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

export const OurServicesImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-top: 30px;
`;

export const ServicesBlock = styled.div`
  width: 100%;

  padding: 50px 10% 50px 10%;

  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .icons-block,
  .gallery-block {
    width: 50%;
    height: auto;
  }

  .gallery-block {
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    .icons-block,
    .gallery-block {
      width: 100%;
    }
  }

  .icons-block {
    .icon-block {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;

      h1 {
        font-family: Scada;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;

        color: #ffffff;
      }

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.06em;
        max-width: 250px;
        text-align: center;

        color: #858585;
      }
    }
  }
  .top-block {
    width: 100%;
    padding-bottom: 20px;

    h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-transform: uppercase;

      color: #ffffff;
      text-align: center;
    }
  }
`;

export const MapBlock = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${mapBackground});

  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: space-around;

  .left-block {
    margin-top: 20px;
    width: 45%;
    margin-right: 5%;
    h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-transform: uppercase;

      color: #ffffff;
    }

    p {
      font-family: Scada;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;

      color: #ffffff;
    }
    img {
      width: 100%;
      object-fit: cover;

      border: 1px solid white;
    }
  }

  .yandex-map {
    width: 50%;
    height: 300px;
    margin-top: 90px !important;
    object-fit: cover;
    margin-top: 20px;

    border: 1px solid white;
  }

  @media screen and (max-width: 700px) {
    padding: 20px;
    width: 90%;

    justify-content: center;
    .left-block {
      width: 100%;
      margin: 0;
    }

    .yandex-map {
      width: 100%;
      margin-top: -30px !important;
      height: 160px;
    }
  }
`;
