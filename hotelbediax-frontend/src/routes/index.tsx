import DestinationsPage from "../pages/DestinationsPage";

export interface RouteItem {
  path: string;
  element: React.ReactNode;
  name: string;
}

export const routes: RouteItem[] = [
  {
    path: "/escritorio",
    element: <div className="flex-1 p-6 mt-10 sm:ml-32">Escritorio</div>,
    name: "Escritorio",
  },   {
    path: "/",
    element: <DestinationsPage />,
    name: "Lista de destinos",
  },
  {
    path: "/salir",
    element: <div className="flex-1 p-6 mt-10 sm:ml-32">Bye User</div>,
    name: "Salir",
  },
];
