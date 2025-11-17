import MonumentForm from '../MonumentForm/MonumentForm';
import { adminApp, adminLeftColumn } from './AdminApp.css';

const AdminApp = () => {
  return (
    <div className={adminApp}>
      <div className={adminLeftColumn}>
          <MonumentForm />
      </div>
    <div>{" "}</div>
    </div>
  );
};

export default AdminApp;