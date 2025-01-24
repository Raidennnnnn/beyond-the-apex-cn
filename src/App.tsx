import './App.css';
import { Outlet } from 'react-router';
import AppSidebar from './components/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import ThemeToggle from './components/app-theme-toggle';
import QuickNav from './components/app-quick-nav';
import { AppTools } from './components/app-tools';
import { AppSidebarTrigger } from './components/app-siderbar-trigger';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 relative w-full">
        <AppTools>
          <AppSidebarTrigger />
          <ThemeToggle />
        </AppTools>
        <Outlet />
        <QuickNav />
      </div>
    </SidebarProvider>
  );
}

export default App;
