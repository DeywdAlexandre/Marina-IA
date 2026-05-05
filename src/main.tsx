import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from "@clerk/react";
import { ui } from "@clerk/ui";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider ui={ui} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>,
);
