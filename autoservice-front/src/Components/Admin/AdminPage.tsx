import { firebaseAuth } from '../Firebase';

const AdminPage = () => {
  return (
    <div>
      <button onClick={() => firebaseAuth.signOut()}> go out</button>
    </div>
  );
};

export default AdminPage;
