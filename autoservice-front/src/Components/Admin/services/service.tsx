import {
  AdminServicesBlock,
  BlueButton,
  InputElement,
} from '../../MainPage/styled';

const ServiceElement = () => {
  return (
    <AdminServicesBlock>
      <div className="service-block">
        <form className="nun">
          <InputElement placeholder="Сервис" />
          <InputElement placeholder="Комментарий к сервису" />
          <InputElement placeholder="Ссылка на картинку" />
          <BlueButton>Добавить </BlueButton>
        </form>
      </div>
    </AdminServicesBlock>
  );
};

export default ServiceElement;
