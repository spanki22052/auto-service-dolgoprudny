import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';

interface Props {
  title: string;
  price: number;
  image: string;
  description: string;
}

interface PropsList {
  list: Props[];
}

const CarouselBlock = styled.div`
  height: auto;
  cursor: pointer;
  max-width: 500px;

  background-color: white;
  display: flex;
  margin-left: 30px;
  justify-content: space-between;
  align-items: center;

  .right-side {
    display: flex;
    jusify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 20px;
    height: 170px;
  }

  @media screen and (min-width: 400px) and (max-width: 910px) {
    margin: auto;
    width: 310px;

    img {
      width: 150px !important;
      height: 250px !important;
    }

    .right-side {
      h1 {
        font-size: 1em;
      }
      p {
        font-size: 0.6em;
        height: auto;
      }

      div {
        width: 100px;
      }

      button {
        width: 120px;
        height: 40px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 290px;

    img {
      width: 130px !important;
      height: 200px !important;
    }

    .right-side {
      h1 {
        font-size: 1em;
      }
      p {
        font-size: 0.6em;
        height: auto;
      }

      div {
        width: 100px;
      }

      button {
        width: 120px;
        height: 40px;
      }
    }
  }
`;

const ImageBlock = styled.img`
  border: 2px solid #ffffff;
  box-sizing: border-box;

  width: 230px !important;
  height: 290px !important;
  object-fit: cover;
`;

const BlueButton = styled.button`
  width: 157px;
  height: 40px;

  background: #429ec9;
  border-radius: 5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
  border: 0;

  &:hover {
    background-color: #045e88 !important;
  }
`;

const TitleText = styled.h1`
  font-family: Scada;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;

  color: #000000;
`;

const DescriptionText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */
  letter-spacing: 0.06em;

  color: #5a5a5a;
`;

const BlueLine = styled.div`
  width: 90%;
  height: 0;

  border-bottom: 1px solid #429ec9;
`;

const CarouselElement: FC<PropsList> = ({ list, children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1400, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="holder" style={{ marginTop: '20px' }}>
      <Carousel
        showDots={true}
        autoPlaySpeed={2500}
        autoPlay={true}
        responsive={responsive}
      >
        {list.map((el, index) => {
          return (
            <CarouselBlock key={index}>
              <ImageBlock
                src={el.image}
                style={{ width: '100px', height: '100px' }}
                alt="dsa"
              />
              <div className="right-side">
                <TitleText>{el.title}</TitleText>
                <BlueLine />
                <DescriptionText>{el.description}</DescriptionText>
                <BlueButton>Записаться</BlueButton>
              </div>
            </CarouselBlock>
          );
        })}
      </Carousel>
      {children}
    </div>
  );
};
export default CarouselElement;
