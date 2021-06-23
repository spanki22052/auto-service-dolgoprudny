import { useEffect, useState } from 'react';
import Firebase from '../../Firebase';
import { BlueButton, RequestsBlocks } from '../../MainPage/styled';

interface RequestsInterface {
  service: string;
  phoneNumber: string;
  autoModel: string;
  name: string;
}

const RequestsElement = () => {
  const [requestsList, setRequestsList] = useState<RequestsInterface[]>([]);
  useEffect(() => {
    Firebase.collection('services')
      .doc('requestsList')
      .get()
      .then((doc) => {
        if (doc.exists) {
          const docData = doc.data();
          docData !== undefined
            ? setRequestsList(docData.requests)
            : console.log('is undefined');
        } else {
          console.log('No such document!');
        }
      });
  }, []);

  return (
    <RequestsBlocks>
      {requestsList.map((el, index) => {
        const x: string = el.phoneNumber;
        return (
          <div className="request-block" key={index}>
            <h1 className="name">Имя: {el.name}</h1>
            <h1 className="phone-number">
              Тел:{' '}
              <a
                href={`tel:${el.phoneNumber}`}
                style={{ textDecoration: 'none', color: 'white' }}
              >{`+7-${x[1] + x[2] + x[3]}-${
                x[4] + x[5] + x[6] + x[7] + x[8] + x[9] + x[10]
              }`}</a>
            </h1>
            <h1 className="auto-model">Модель авто: {el.autoModel}</h1>
            <h1 className="service">Услуга: {el.service}</h1>
            <BlueButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </BlueButton>
          </div>
        );
      })}
    </RequestsBlocks>
  );
};

export default RequestsElement;
