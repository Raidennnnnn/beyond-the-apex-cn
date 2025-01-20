import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import { filePaths } from './components/filePaths.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {filePaths.map(({ path: parentPath, files }) => (
            files.map(({ path, component }) => (
              <Route key={path} path={`${parentPath}/${path}`} element={component} />
            ))
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
