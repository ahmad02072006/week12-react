import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Every page (menu + 5 tasks) starts React the same way.
export default function mount(element) {
  createRoot(document.getElementById('root')).render(<StrictMode>{element}</StrictMode>);
}
