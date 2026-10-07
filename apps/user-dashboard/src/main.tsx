import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles.css';

const queryClient = new QueryClient();
function App() {
  return <main><p className="eyebrow">RESIDENT PORTAL</p><h1>Your home, connected.</h1><p>View announcements and raise maintenance requests from one simple dashboard.</p><div className="actions"><button>New maintenance request</button><button className="secondary">View announcements</button></div></main>;
}
createRoot(document.getElementById('root')!).render(<StrictMode><QueryClientProvider client={queryClient}><App /></QueryClientProvider></StrictMode>);
