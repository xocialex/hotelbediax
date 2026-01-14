import type { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 flex justify-between items-center px-4 h-14">
      <div className="flex items-center space-x-3">
       <button
        type="button"
        className="sm:hidden p-2 rounded hover:bg-gray-100"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>
        <a href="#" className="text-lg font-bold">Hotel Bedia X</a>
      </div>
      <div className="flex items-center space-x-3">
  
        <span className="text-sm font-medium">Bienvenido Castro</span>
      </div>
    </header>
  );
}
