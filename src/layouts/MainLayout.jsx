import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function MainLayout() {
  return (
    <div className="min-h-screen bg-surface-page">
      <Header />
      <main className="p-8 space-y-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;