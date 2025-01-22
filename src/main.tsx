import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import { filePaths } from './components/filePaths.tsx';
import Brand from './components/brand.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/beyond-the-apex-cn" element={<App />}>
          <Route index element={<Brand />} />
          {filePaths.map(({ path: parentPath, files }) => (
            files.map(({ path, component }) => (
              <Route key={path} path={`${parentPath}/${path}`} element={component} />
            ))
          ))}
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
