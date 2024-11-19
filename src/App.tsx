import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { EngagementMetrics } from './components/analytics/EngagementMetrics';
import { UserJourneyMap } from './components/analytics/UserJourneyMap';
import { OrgFingerprint } from './components/organizations/OrgFingerprint';
import { PrivacyControls } from './components/privacy/PrivacyControls';
import { IntegrationHub } from './components/integration/IntegrationHub';

// Mock data
const mockOrg: Organization = {
  id: '1',
  name: 'Acme Corp',
  domain: 'acme.com',
  ipRanges: ['192.168.1.0/24', '10.0.0.0/16'],
  accessToken: 'sk_live_1234567890abcdef1234567890abcdef1234567890abcdef',
  createdAt: new Date(),
};

const mockAnalytics: AnalyticsData = {
  dailyStats: [
    { date: '2024-01-01', activeUsers: 1200, resourceViews: 3500, avgSessionDuration: 320, engagementRate: 0.65 },
    { date: '2024-01-02', activeUsers: 1300, resourceViews: 3800, avgSessionDuration: 350, engagementRate: 0.68 },
    // ... more data
  ],
  topResources: [],
  userJourneys: [
    {
      id: '1',
      userId: 'user1',
      organizationId: '1',
      entryPoint: '/resources/getting-started',
      resourcesViewed: ['1', '2', '3'],
      pathTaken: [
        { resourceId: '1', timeSpent: 300, timestamp: new Date() },
        { resourceId: '2', timeSpent: 450, timestamp: new Date() },
        { resourceId: '3', timeSpent: 600, timestamp: new Date() },
      ],
      deviceInfo: {
        type: 'desktop',
        browser: 'Chrome',
        os: 'Windows',
      },
    },
  ],
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} />
          <main className="flex-1 p-6">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="space-y-6">
                    <EngagementMetrics data={mockAnalytics.dailyStats} />
                    <UserJourneyMap journeys={mockAnalytics.userJourneys} />
                  </div>
                }
              />
              <Route
                path="/organizations"
                element={<OrgFingerprint organization={mockOrg} />}
              />
              <Route
                path="/privacy"
                element={<PrivacyControls />}
              />
              <Route
                path="/integration"
                element={<IntegrationHub />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;