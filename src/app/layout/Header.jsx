
import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="topbar">
      <div className="breadcrumb">
        Workspace <span>/</span> <strong>Dashboard</strong>
      </div>

      <div className="topbar-actions">
        <label className="search-box">
          <Search size={16} />
          <input
            type="search"
            aria-label="Buscar"
            placeholder="Buscar..."
          />
        </label>

        <button
          className="icon-button"
          aria-label="Notificaciones"
          type="button"
        >
          <Bell size={18} />
          <i />
        </button>

        <div
          className="avatar"
          aria-label="Perfil de usuario"
          title="Valery Giselle"
        >
          VG
        </div>
      </div>
    </header>
  );
}
