import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    `text-sm font-medium ${
      location.pathname === path ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
    }`;

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200">
      <div className="text-sm text-gray-500">
        Pages / <span className="text-gray-900">Dashboard</span>
      </div>

      <nav className="flex items-center gap-6">
        <Link to="/" className={linkClass('/')}>Dashboard</Link>
        <Link to="/reports" className={linkClass('/reports')}>Reports</Link>
        <Link to="/settings" className={linkClass('/settings')}>Settings</Link>
      </nav>

      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-semibold">
          AM
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Alex Morgan</p>
          <p className="text-xs text-gray-400">Enterprise admin</p>
        </div>
      </div>
    </header>
  );
}

export default Header;