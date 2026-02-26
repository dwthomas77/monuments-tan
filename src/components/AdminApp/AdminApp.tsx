import MonumentForm from '../MonumentForm/MonumentForm';
import { adminApp, adminLeftColumn } from './AdminApp.css';
import { useMutation } from '@tanstack/react-query';
import type { Monument } from '../../types';

// Use environment variables for API domain and port
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN || "localhost";
const API_PORT = import.meta.env.VITE_API_PORT || "3001";

const AdminApp = () => {

  const createMonumentMutation = useMutation<unknown, Error, Omit<Monument, 'id'>>({
    mutationFn: async (monument) => {
      const response = await fetch(`http://${API_DOMAIN}:${API_PORT}/monuments`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(monument),
      });
      const data = await response.json();
      return data || null;
    },
  });

  const createMonument = (monument: Omit<Monument, 'id'>) => {
    createMonumentMutation.mutate(monument);
  };

  return (
    <div className={adminApp}>
      <div className={adminLeftColumn}>
          <MonumentForm createMonument={createMonument} />
      </div>
    <div>{" "}</div>
    </div>
  );
};

export default AdminApp;