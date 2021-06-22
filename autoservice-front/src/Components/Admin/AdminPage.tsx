import { useState } from 'react';
import { firebaseAuth } from '../Firebase';
import { AdminPageBlock, ChooseElement } from '../MainPage/styled';
import RequestsElement from './services/requests';
import ServiceElement from './services/service';

interface servicesStyle {
  services: boolean;
  requests: boolean;
}

const AdminPage = () => {
  const [styledServices, setServicesStyle] = useState<servicesStyle>({
    services: true,
    requests: false,
  });

  return (
    <AdminPageBlock>
      <button onClick={() => firebaseAuth.signOut()}> go out</button>
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
