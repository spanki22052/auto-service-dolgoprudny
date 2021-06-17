import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Wheel } from '../Icons';

const MainBlockNavbar = styled.div`
  display: flex;
  width: 80%;
  padding-top: 20px;
  margin: auto;
  height: auto;
  justify-content: space-between;
  flex-wrap: wrap;

  .left-side,
  .right-side {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
    width: 100%;
    .right-side {
      * {
        margin-top: 20px;
      }
    }
  }

  @media screen and (min-width: 750px) and (max-width: 850px) {
    width: 90%;
  }
`;

const Logo = styled.h1`
  font-family: Scada;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: -2px;
  line-height: 37px;

  color: #ffffff;
`;

const NavElement = styled.h1`
  font-family: Scada;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;

  color: rgba(255, 255, 255, 0.8);
  width: auto;
  cursor: pointer;
  padding: 5px 20px 5px 20px;
  margin-bottom: 0;

  &:hover {
    background-color: #429ec9;
    border-bottom: 1px solid white;
  }
`;

export const PCNavbar = () => {
  return (
    <MainBlockNavbar>
      <div className="left-side">
        <Wheel />
        <Logo>
          Авто<span style={{ color: '#429EC9' }}>Сервис</span>
        </Logo>
      </div>
      <div className="right-side">
        <NavElement>Главная</NavElement>
        <NavElement>Услуги</NavElement>
        <NavElement>Галерея</NavElement>
        <NavElement>Контакты</NavElement>
      </div>
    </MainBlockNavbar>
  );
};

export const GadgetNavbar = () => {
  return (
    <Navbar style={{ background: 'red !important' }} expand="sm">
      <Navbar.Brand
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        href="#home"
      >
        <Wheel />
        <Logo>
          Авто<span style={{ color: '#429EC9' }}>Сервис</span>
        </Logo>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavElement>Главная</NavElement>
          <NavElement>Услуги</NavElement>
          <NavElement>Галерея</NavElement>
          <NavElement>Контакты</NavElement>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};