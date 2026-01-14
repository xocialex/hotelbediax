import type { Dispatch, SetStateAction } from "react";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps)  {

  return (

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform transform bg-white border-r border-gray-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium mt-20">
            {routes.map((r) => (
              <li key={r.path}>
                <Link
                  to={r.path}
                  className="flex items-center px-2 py-1.5 rounded hover:bg-gray-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

  );
}
