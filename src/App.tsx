import { Outlet } from 'react-router';
import AppSidebar from './components/sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import './App.css';
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import QuickNav from './components/quickNav';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col flex-1 relative w-full">
          <ModeToggle />
          <Outlet />
          <QuickNav />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
