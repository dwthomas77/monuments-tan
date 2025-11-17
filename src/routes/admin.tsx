import { createFileRoute } from '@tanstack/react-router'
import AdminApp from '../components/AdminApp/AdminApp';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <AdminApp />
  </div>;
}


