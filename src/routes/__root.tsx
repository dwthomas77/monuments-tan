import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { appHeader } from "../App.css.ts";
import { themeClass } from "@/theme/themeBlue.css.ts";

function RootLayout() {
  return (
    <div className={themeClass}>
      <header className={appHeader}>
        <h1>Monuments Tanstack</h1>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});
