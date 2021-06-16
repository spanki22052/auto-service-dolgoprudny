import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { useWindowDimensions } from '../../Functions';
import { Wheel } from '../Icons';
import blockimg from '../img/main-photo.png';
import { GadgetNavbar, PCNavbar } from '../NavbarElement';

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

const MainPage = () => {
  const { width } = useWindowDimensions();
  return <MainBlock>{width > 575 ? <PCNavbar /> : <GadgetNavbar />}</MainBlock>;
};

export default MainPage;
