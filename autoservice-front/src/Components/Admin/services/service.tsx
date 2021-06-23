import { useState } from 'react';
import Firebase from '../../Firebase';
import {
  AdminServicesBlock,
  BlueButton,
  InputElement,
} from '../../MainPage/styled';

interface InputsInterface {
  description: string;
  title: string;
  image: string;
  price: number;
}

const ServiceElement = () => {
  const [InputState, setInputState] = useState<InputsInterface[]>([]);

  Firebase.collection('services')
    .doc('servicesList')
    .get()
    .then((el) => {
      if (el.exists) {
        const elData = el.data();
        elData !== undefined
          ? setInputState(elData.services)
          : console.log('no doc');
      } else {
        console.log('No such document!');
      }
    });

  return (
    <AdminServicesBlock>
      <div className="service-block">
        <form className="nun">
          <InputElement placeholder="Сервис" />
          <InputElement placeholder="Комментарий к сервису" />
          <InputElement placeholder="Ссылка на картинку" />
          <BlueButton>Добавить</BlueButton>
        </form>
      </div>
    </AdminServicesBlock>
  );
};

export default ServiceElement;
