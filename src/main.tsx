import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import { filePaths } from './components/filePaths.tsx';
import NaviWrapper from './components/navi-wrapper.tsx';
import AppHome from './components/app-home.tsx';
import { ThemeProvider } from './components/app-theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter>
        <NaviWrapper>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<AppHome />} />
              {filePaths.map(({ path: parentPath, files }) => (
                files.map(({ path, component }) => (
                  <Route key={path} path={`${parentPath}/${path}`} element={component} />
                ))
              ))}
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </NaviWrapper>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
