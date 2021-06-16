import styled from 'styled-components';
import { Instagram21px, Phone25px, Mail20px, Time28px } from '../Icons';

const whiteFifty = 'rgba(255, 255, 255, 0.5)';

const Navbar = styled.div`
  width: 100%;
  height: auto;
  justify-content: space-between;
  border-bottom: 1px solid ${whiteFifty};
  display: flex;
  align-items: center;

  .left-side,
  .right-side {
    align-items: center;
    display: flex;
    margin: 10px 15px 10px 15px;
  }

  @media screen and (max-width: 600px) {
    padding: 5px 10px 5px 10px;
    height: 40px;
  }
`;

const PWhite = styled.p`
  color: white;
  font-size: 1.1em;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  margin-left: 5px;
  margin-top: 5px;
`;

const WhiteLine = styled.div`
  height: 35px;
  display: block;
  margin-right: 10px;
  margin-left: 10px;
  border-right: 1px solid ${whiteFifty};
`;

const IconsNavbar = () => {
  return (
    <Navbar>
      <div className="left-side">
        <Instagram21px />
        <WhiteLine />
        <Instagram21px />
        <WhiteLine />
        <Instagram21px />
      </div>
      <div className="right-side">
        <WhiteLine />
        <Phone25px />
        <PWhite> +9876543210 </PWhite>
        <WhiteLine />
        <Mail20px />
        <PWhite> mashini@gmail.com</PWhite>
        <WhiteLine />
        <Time28px />
        <PWhite> 8:00 - 20:00</PWhite>
      </div>
    </Navbar>
  );
};

export default IconsNavbar;
