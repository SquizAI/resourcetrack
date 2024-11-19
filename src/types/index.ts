export interface Organization {
  id: string;
  name: string;
  domain: string;
  ipRanges: string[];
  accessToken: string;
  createdAt: Date;
}

export interface ResourceMetrics {
  id: string;
  resourceId: string;
  organizationId: string;
  views: number;
  uniqueUsers: number;
  averageTimeSpent: number;
  completionRate: number;
  timestamp: Date;
}

export interface UserJourney {
  id: string;
  userId: string;
  organizationId: string;
  entryPoint: string;
  resourcesViewed: string[];
  pathTaken: {
    resourceId: string;
    timeSpent: number;
    timestamp: Date;
  }[];
  deviceInfo: {
    type: string;
    browser: string;
    os: string;
  };
}

export interface AnalyticsData {
  dailyStats: {
    date: string;
    activeUsers: number;
    resourceViews: number;
    avgSessionDuration: number;
    engagementRate: number;
  }[];
  topResources: {
    id: string;
    title: string;
    views: number;
    uniqueUsers: number;
    avgTimeSpent: number;
  }[];
  userJourneys: UserJourney[];
}