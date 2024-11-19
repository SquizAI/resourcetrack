import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { AnalyticsData } from '../../types';

interface EngagementMetricsProps {
  data: AnalyticsData['dailyStats'];
}

export function EngagementMetrics({ data }: EngagementMetricsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Engagement Metrics</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="activeUsers" 
              name="Active Users"
              stroke="#3B82F6" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="engagementRate" 
              name="Engagement Rate"
              stroke="#10B981" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}