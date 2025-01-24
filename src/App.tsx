import './App.css';
import { Outlet } from 'react-router';
import AppSidebar from './components/app-sidebar';
import ThemeToggle from './components/app-theme-toggle';
import QuickNav from './components/app-quick-nav';
import { AppTools } from './components/app-tools';
import { AppSidebarTrigger } from './components/app-siderbar-trigger';
import { useScreenSwipe } from './hooks/use-screen-swipe';

export default function App() {
  const handlers = useScreenSwipe();

  return (
    <>
      <AppSidebar />
      <div className="flex flex-col flex-1 relative w-full">
        <AppTools>
          <AppSidebarTrigger />
          <ThemeToggle />
        </AppTools>
        <div {...handlers} className="w-full h-full">
          <Outlet />
        </div>
        <QuickNav />
      </div>
    </>
  );
};
