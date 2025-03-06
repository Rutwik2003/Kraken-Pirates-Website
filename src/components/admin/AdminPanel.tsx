import React from 'react';
import { useAdminStore } from '../../store/adminStore';
import { Shield, Users, Image as ImageIcon, BarChart, Loader } from 'lucide-react';

const AdminPanel = () => {
  const { isAuthenticated, user, logout, isLoading } = useAdminStore();

  if (!isAuthenticated) {
    return <Login />;
  }

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome back, {user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            icon={<Users />}
            title="User Management"
            value="500+"
            change="+12%"
          />
          <DashboardCard
            icon={<ImageIcon />}
            title="Media Files"
            value="128"
            change="+5%"
          />
          <DashboardCard
            icon={<BarChart />}
            title="Weekly Visits"
            value="12.5k"
            change="+25%"
          />
          <DashboardCard
            icon={<Shield />}
            title="Security Status"
            value="Secure"
            change="Normal"
          />
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const { login, error, isLoading, clearError } = useAdminStore();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      // Error is handled by the store
    }
  };

  React.useEffect(() => {
    if (error) {
      const timer = setTimeout(clearError, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded-md mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 rounded-md px-4 py-2 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 rounded-md px-4 py-2 text-white"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

const LoadingState = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="flex items-center gap-3">
      <Loader className="animate-spin text-yellow-500" size={24} />
      <span className="text-white">Loading...</span>
    </div>
  </div>
);

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

const DashboardCard = ({ icon, title, value, change }: DashboardCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-700 rounded-lg">{icon}</div>
        <span className="text-green-500">{change}</span>
      </div>
      <h3 className="text-gray-400 mb-1">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default AdminPanel;