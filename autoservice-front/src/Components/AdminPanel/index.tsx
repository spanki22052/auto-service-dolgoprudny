import React from 'react';
import { AdminBlock, BlueButton, InputElement } from '../MainPage/styled';
const AdminPanel = () => {
  return (
    <AdminBlock>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          console.log('ADS');
        }}
      >
        <InputElement placeholder="Логин" />
        <InputElement type="password" placeholder="Пароль" />
        <BlueButton>Войти</BlueButton>
      </form>
    </AdminBlock>
  );
};

export default AdminPanel;
