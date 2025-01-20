import { Outlet } from 'react-router';
import AppSidebar from './components/sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import './App.css';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
    </SidebarProvider>
    
  );
}

export default App;
