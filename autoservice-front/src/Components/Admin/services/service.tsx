import { useEffect, useState } from 'react';
import Firebase from '../../Firebase';
import {
  AdminServicesBlock,
  BlueButton,
  InputElement,
} from '../../MainPage/styled';

interface ServicesInterface {
  description: string;
  title: string;
  image: string;
  price: string;
}

const ServiceElement = () => {
  const [InputState, setInputState] = useState<ServicesInterface>({
    description: '',
    title: '',
    image: '',
    price: '',
  });
  const [servicesState, setServicesState] = useState<ServicesInterface[]>([]);

  useEffect(() => {
    Firebase.collection('services')
      .doc('servicesList')
      .get()
      .then((el) => {
        if (el.exists) {
          const elData = el.data();
          elData !== undefined
            ? setServicesState(elData.service)
            : console.log('no doc');
        } else {
          console.log('No such document!');
        }
      });
  }, []);

  const updateServicesList = (updateElement: ServicesInterface) => {
    Firebase.collection('services')
      .doc('servicesList')
      .set({ service: [...servicesState, updateElement] });
    setServicesState([...servicesState, updateElement]);
  };

  return (
    <AdminServicesBlock>
      <div className="service-block">
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            InputState.title.length > 3 &&
              InputState.description.length > 3 &&
              InputState.price.length > 1 &&
              updateServicesList(InputState);
            setInputState({
              description: '',
              title: '',
              image: '',
              price: '',
            });
            e.preventDefault();
          }}
          className="nun"
        >
          <InputElement
            value={InputState.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputState({ ...InputState, title: e.target.value });
            }}
            placeholder="Сервис"
          />
          <InputElement
            value={InputState.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputState({ ...InputState, description: e.target.value });
            }}
            placeholder="Комментарий к сервису"
          />
          <InputElement
            value={InputState.image}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputState({ ...InputState, image: e.target.value });
            }}
            placeholder="Ссылка на картинку"
          />
          <InputElement
            value={InputState.price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputState({ ...InputState, price: e.target.value });
            }}
            placeholder="Цена от"
          />
          <BlueButton>Добавить</BlueButton>
        </form>
      </div>
    </AdminServicesBlock>
  );
};

export default ServiceElement;
