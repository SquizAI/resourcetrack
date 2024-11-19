import React from 'react';
import type { UserJourney } from '../../types';

interface UserJourneyMapProps {
  journeys: UserJourney[];
}

export function UserJourneyMap({ journeys }: UserJourneyMapProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">User Journeys</h3>
      <div className="space-y-4">
        {journeys.map((journey) => (
          <div key={journey.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-medium text-gray-900">Journey {journey.id}</h4>
                <p className="text-sm text-gray-500">Entry: {journey.entryPoint}</p>
              </div>
              <div className="text-sm text-gray-500">
                <p>{journey.deviceInfo.type}</p>
                <p>{journey.deviceInfo.browser}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200"></div>
              {journey.pathTaken.map((step, index) => (
                <div key={index} className="relative flex items-center mb-4 ml-4">
                  <div className="absolute -left-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm text-blue-600">{index + 1}</span>
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gray-900">
                      Resource: {step.resourceId}
                    </p>
                    <p className="text-sm text-gray-500">
                      Time spent: {Math.round(step.timeSpent / 60)} minutes
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}