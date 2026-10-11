import { BarChart3, Bot, LayoutDashboard, MessageSquareText, Settings2, Store } from 'lucide-react';
import DashboardPage from '../features/dashboard/pages/DashboardPage.jsx';

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Consultas y reportes', icon: BarChart3 },
  { label: 'Agente de IA', icon: Bot },
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><Store size={20} /></div><div><strong>tienda<span>.</span></strong><small>ANALYTICS</small></div></div>
        <div className="workspace-label">ESPACIO DE TRABAJO</div>
        <button className="workspace-switcher" type="button"><span className="workspace-avatar">TA</span><span className="workspace-text"><strong>Tienda Analytics</strong><small>Plan de demostración</small></span><span className="chevron">⌄</span></button>
        <div className="nav-label">ANÁLISIS</div>
        <nav className="main-nav" aria-label="Navegación principal">
          {menuItems.map(({ label, icon: Icon, active }) => <button key={label} className={`nav-item ${active ? 'active' : ''}`} type="button"><Icon size={18} /><span>{label}</span>{label === 'Agente de IA' && <span className="new-tag">IA</span>}</button>)}
        </nav>
        <div className="sidebar-bottom"><button className="nav-item" type="button"><Settings2 size={18} /><span>Configuración</span></button><div className="sidebar-note"><div className="note-icon"><MessageSquareText size={17} /></div><strong>¿Primera vez aquí?</strong><p>Este panel utiliza datos ficticios para mostrar cómo se organizará la interfaz.</p></div><div className="profile-row"><div className="profile-avatar">VG</div><div><strong>Valeria García</strong><small>Docente · Demo</small></div><span className="chevron">•••</span></div></div>
      </aside>
      <div className="content-area"><DashboardPage /></div>
    </div>
  );
}
