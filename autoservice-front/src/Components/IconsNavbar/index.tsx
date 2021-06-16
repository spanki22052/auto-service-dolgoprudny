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

  svg {
    margin-bottom: 5px;
  }

  .left-side,
  .right-side {
    display: flex;
    margin: 5px 15px 5px 15px;
    .time {
      display: none;
    }
  }

  .left-side {
    align-items: flex-end;
  }

  .right-side {
    align-items: center;
  }

  @media screen and (max-width: 750px) {
    height: 40px;

    .right-side {
      p {
        display: none;
        margin-bottom: 2px;
      }
    }
  }
`;

const PWhite = styled.p`
  color: white;
  font-size: 0.8em;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  margin-left: 5px;
  display: ${(props) => props.theme.display === 'show' && 'block !important'};
  margin-bottom: 0;
`;

const WhiteLine = styled.div`
  height: 25px;
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
        <PWhite theme={{ display: 'show' }}> 8:00 - 20:00</PWhite>
      </div>
    </Navbar>
  );
};

export default IconsNavbar;
