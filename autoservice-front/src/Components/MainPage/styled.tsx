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
    width: 100%;
    * {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

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

export const CenterBlueLine = styled.div`
  border-right: 1px solid #429ec9;
`;

export const FeedBack = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  margin-top: 20px;
  justify-content: space-around;

  flex-wrap: wrap;

  .left-side {
    width: 65%;
  }

  @media screen and (max-width: 700px) {
    .left-side,
    .right-side {
      width: 90%;
    }

    .right-side {
      justify-content: center;
      width: 100% !important;
      align-items: center;
      display: flex;
    }
  }

  .right-side {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      font-family: Scada;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;

      margin-bottom: 0;
      margin-top: 10px;

      color: #ffffff;
    }

    input {
      background: rgba(196, 196, 196, 0.1);
      font-family: Scada;
      font-style: italic;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      opacity: 0.5;
      border: 0;
      width: 290px;
      height: 30px;
      padding-right: 10px;
      padding-left: 10px;
      margin-top: 10px;
    }
  }

  .top {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 50px 0 50px 10vw;

    h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-transform: uppercase;

      color: #ffffff;
    }
  }
`;

export const FeedBackBlock = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 20px;

  background: rgba(66, 158, 201, 0.4);
  border-radius: 5px;

  h1 {
    font-family: Scada;
    font-style: normal;
  }

  .name,
  .score,
  .date {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;

    color: #ffffff;
  }

  .feedback {
    font-family: Roboto;
    font-style: italic;
    font-weight: 200;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
  }
`;

export const AdminBlock = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    form {
      width: 90% !important;
    }
  }

  form {
    display: flex;
    justify-content: center;
    width: 50%;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    padding: 30px 20px 30px 20px !important;
  }
`;

export const BlueButton = styled.button`
  width: 157px;
  height: 40px;

  background: #429ec9;
  border-radius: 5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;

  border: 0;

  cursor: pointer;

  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
  margin-top: 20px;

  &:hover {
    background-color: #176c94;
  }
`;

export const InputElement = styled.input`
  background: rgba(196, 196, 196, 0.4);
  border: 1px solid rgba(196, 196, 196, 0.7);

  font-family: Scada;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
  opacity: 0.6;

  border: 0;
  max-width: 500px;
  height: 30px;

  padding-right: 10px;
  padding-left: 10px;
  margin-top: 10px;

  ::placeholder {
    color: white;
  }
`;
