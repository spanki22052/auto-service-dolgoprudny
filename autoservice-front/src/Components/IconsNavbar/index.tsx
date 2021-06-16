import styled from 'styled-components';

const whiteFifty = 'rgba(255, 255, 255, 0.5)';

const Navbar = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${whiteFifty};
  display: flex;
  // justify-content: space-between;
  padding: 5px 10px 5px 10px;
  align-items: center;

  @media screen and (max-width: 600px) {
    height: 40px;
  }
`;

const PWhite = styled.p`
  color: white;
  font-size: 1.3em;
  font-family: Scada, sans-serif;
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
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01467 15 6 12.9853 6 10.5C6 8.01467 8.01467 6 10.5 6C12.9853 6 15 8.01467 15 10.5Z"
          fill="white"
        />
        <path
          d="M20.4844 2.94632C20.2792 2.39021 19.9518 1.88684 19.5263 1.47367C19.1132 1.04825 18.6101 0.72084 18.0537 0.515615C17.6024 0.34034 16.9244 0.131712 15.6757 0.0748748C14.3249 0.0132733 13.9199 0 10.5002 0C7.08009 0 6.67509 0.0129329 5.32462 0.0745345C4.07591 0.131712 3.39761 0.34034 2.94666 0.515615C2.39021 0.72084 1.88684 1.04825 1.47401 1.47367C1.04859 1.88684 0.72118 2.38987 0.515615 2.94632C0.34034 3.39761 0.131712 4.07591 0.0748748 5.32462C0.0132733 6.67509 0 7.08009 0 10.5002C0 13.9199 0.0132733 14.3249 0.0748748 15.6757C0.131712 16.9244 0.34034 17.6024 0.515615 18.0537C0.72118 18.6101 1.04825 19.1132 1.47367 19.5263C1.88684 19.9518 2.38987 20.2792 2.94632 20.4844C3.39761 20.66 4.07591 20.8686 5.32462 20.9255C6.67509 20.9871 7.07975 21 10.4998 21C13.9202 21 14.3253 20.9871 15.6754 20.9255C16.9241 20.8686 17.6024 20.66 18.0537 20.4844C19.1707 20.0535 20.0535 19.1707 20.4844 18.0537C20.6597 17.6024 20.8683 16.9244 20.9255 15.6757C20.9871 14.3249 21 13.9199 21 10.5002C21 7.08009 20.9871 6.67509 20.9255 5.32462C20.8686 4.07591 20.66 3.39761 20.4844 2.94632ZM10.5002 17.0766C6.86772 17.0766 3.9231 14.1323 3.9231 10.4998C3.9231 6.86738 6.86772 3.9231 10.5002 3.9231C14.1323 3.9231 17.0769 6.86738 17.0769 10.4998C17.0769 14.1323 14.1323 17.0766 10.5002 17.0766ZM17.3369 5.20006C16.4881 5.20006 15.7999 4.51189 15.7999 3.66308C15.7999 2.81427 16.4881 2.1261 17.3369 2.1261C18.1857 2.1261 18.8739 2.81427 18.8739 3.66308C18.8736 4.51189 18.1857 5.20006 17.3369 5.20006Z"
          fill="white"
        />
      </svg>
      <WhiteLine />
      <PWhite>Hello</PWhite>
    </Navbar>
  );
};

export default IconsNavbar;
