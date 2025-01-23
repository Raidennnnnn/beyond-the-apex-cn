import './App.css';
import { Outlet, useNavigate } from 'react-router';
import AppSidebar from './components/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { ThemeProvider } from './components/app-theme-provider';
import { ModeToggle } from './components/app-theme-toggle';
import QuickNav from './components/app-quick-nav';
import { AppTools } from './components/app-tools';
import { AppSidebarTrigger } from './components/app-siderbar-trigger';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentAt = localStorage.getItem('currentAt');
    if (currentAt) navigate(currentAt);
  }, [navigate]);

  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col flex-1 relative w-full">
          <AppTools>
            <AppSidebarTrigger />
            <ModeToggle />
          </AppTools>
          <Outlet />
          <QuickNav />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
