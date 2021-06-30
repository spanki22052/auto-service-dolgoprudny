import { useState } from 'react';
import { firebaseAuth } from '../Firebase';
import { AdminPageBlock, BlueButton, ChooseElement } from '../MainPage/styled';
import RequestsElement from './services/requests';
import ServiceElement from './services/service';
import { useHistory } from 'react-router-dom';

interface servicesStyle {
  services: boolean;
  requests: boolean;
}

const AdminPage = () => {
  const [styledServices, setServicesStyle] = useState<servicesStyle>({
    services: true,
    requests: false,
  });

  const history = useHistory();

  return (
    <AdminPageBlock>
      <BlueButton
        style={{ marginLeft: '20px', width: '50px' }}
        onClick={() => history.push('/')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
          <path
            fill-rule="evenodd"
            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
          />
        </svg>
      </BlueButton>
      <BlueButton
        style={{ marginLeft: '20px', width: '130px', marginBottom: '20px' }}
        onClick={() => firebaseAuth.signOut()}
      >
        Выйти из админки
      </BlueButton>
      <div className="choose-block">
        <ChooseElement
          onClick={() => setServicesStyle({ services: true, requests: false })}
          choosed={styledServices.services}
        >
          Услуги
        </ChooseElement>
        <ChooseElement
          choosed={styledServices.requests}
          onClick={() => setServicesStyle({ services: false, requests: true })}
        >
          Заявки
        </ChooseElement>
      </div>

      <div className="info-block">
        {styledServices.services === true ? (
          <ServiceElement />
        ) : (
          <RequestsElement />
        )}
      </div>
    </AdminPageBlock>
  );
};

export default AdminPage;
