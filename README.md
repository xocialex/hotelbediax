Hotel Bedia X  

Módulo base para la gestión de destinos de un hotel, con arquitectura separada frontend/backend. Este proyecto está enfocado en la construcción de APIs en .NET 9 Web API y su consumo desde un frontend en React + TypeScript + Vite + TailwindCSS, sirviendo como base para escalar a funcionalidades más completas en un sistema hotelero.

Frontend en React + TypeScript + Vite + TailwindCSS, backend en .NET 9 Web API.  

----

cd backend
dotnet restore  (VERSIÓN 9.0.100)  
dotnet run --project HotelBediaX.Api  
http://localhost:5221/swagger/index.html  
http://localhost:5221/api/destinations  

----

cd frontend  
node -v v24.11.0  
npm -v 11.4.1  
npm install  
npm run dev   
http://localhost:5173/

Frontend: React, TypeScript, Vite, TailwindCSS

Backend: .NET 9 Web API
