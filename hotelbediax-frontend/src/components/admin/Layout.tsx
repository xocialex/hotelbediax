import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="block lg:flex  min-h-screen">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

  
      <main className="flex-1 p-6 mt-10 sm:ml-32">
        {children}
      </main>
    </div>
  );
}

