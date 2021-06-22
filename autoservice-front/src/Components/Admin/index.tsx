import { useEffect, useState } from 'react';
import AdminPage from './AdminPage';
import AdminPanel from './AdminPanel';
import { firebaseAuth } from '../Firebase';

const Admin = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        setUser(true);
      } else {
        setUser(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []); // important set an empty array as dependency

  return <div>{user ? <AdminPage /> : <AdminPanel />}</div>;
};

export default Admin;
