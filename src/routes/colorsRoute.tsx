import { createFileRoute } from '@tanstack/react-router'
import ColorsView from '../components/Colors/Colors';

export const Route = createFileRoute('/colorsRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <ColorsView />
  </div>;
}


