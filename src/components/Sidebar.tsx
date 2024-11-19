import React from 'react';
import { BarChart3, Users, Activity, Settings, Shield, Database, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  sidebarOpen: boolean;
}

const navigation = [
  { name: 'Dashboard', icon: BarChart3, path: '/' },
  { name: 'Organizations', icon: Users, path: '/organizations' },
  { name: 'Analytics', icon: Activity, path: '/analytics' },
  { name: 'Resources', icon: FileText, path: '/resources' },
  { name: 'Privacy', icon: Shield, path: '/privacy' },
  { name: 'Integration', icon: Database, path: '/integration' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar({ sidebarOpen }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]`}>
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}