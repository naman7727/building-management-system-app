import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles.css';

const queryClient = new QueryClient();
function App() {
  return <main><p className="eyebrow">BUILDING MANAGEMENT SYSTEM</p><h1>Admin dashboard</h1><p>Manage buildings, units, residents, requests, and announcements.</p><div className="cards"><article><strong>Buildings</strong><span>Content service</span></article><article><strong>Residents</strong><span>Content service</span></article><article><strong>Requests</strong><span>Maintenance queue</span></article></div></main>;
}
createRoot(document.getElementById('root')!).render(<StrictMode><QueryClientProvider client={queryClient}><App /></QueryClientProvider></StrictMode>);
