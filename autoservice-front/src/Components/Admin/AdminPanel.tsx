import React, { useState } from 'react';
import { AdminBlock, BlueButton, InputElement } from '../MainPage/styled';
import { firebaseAuth } from '../Firebase';

interface loginPasswordInterface {
  login: string;
  password: string;
}

const AdminPanel = () => {
  const [user, setUser] = useState<loginPasswordInterface>({
    login: '',
    password: '',
  });

  const firebaseLogIn = () => {
    firebaseAuth
      .signInWithEmailAndPassword(user.login, user.password)
      .then((result) => console.log(user))
      .catch((error) => console.log('error'));
    console.log(firebaseAuth.currentUser);
  };

  return (
    <AdminBlock>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          firebaseLogIn();
        }}
      >
        <InputElement
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setUser({ ...user, login: e.currentTarget.value });
          }}
          value={user.login}
          placeholder="Логин"
        />
        <InputElement
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setUser({ ...user, password: e.currentTarget.value });
          }}
          value={user.password}
          type="password"
          placeholder="Пароль"
        />
        <BlueButton>Войти</BlueButton>
      </form>
    </AdminBlock>
  );
};

export default AdminPanel;
