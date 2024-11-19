import React from 'react';
import { Database, Link, Code, Webhook } from 'lucide-react';

const integrations = [
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'Track resource usage across your WordPress sites',
    icon: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png',
    connected: true,
  },
  {
    id: 'moodle',
    name: 'Moodle',
    description: 'Integration with Moodle LMS',
    icon: 'https://moodle.org/theme/image.php/moodleorg/theme_moodleorg/1707425644/moodle_logo_small',
    connected: false,
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'Connect with Salesforce CRM',
    icon: 'https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg',
    connected: false,
  },
];

export function IntegrationHub() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">API Configuration</h3>
          <Code className="w-6 h-6 text-blue-600" />
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900">API Endpoint</h4>
            <code className="block mt-2 text-sm text-gray-600">
              https://api.resourcetrack.com/v1
            </code>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900">API Key</h4>
            <div className="flex items-center gap-2 mt-2">
              <code className="text-sm text-gray-600">
                sk_live_*****************************
              </code>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Reveal
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Available Integrations</h3>
          <Link className="w-6 h-6 text-blue-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{integration.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {integration.description}
                  </p>
                  <button
                    className={`mt-3 px-4 py-2 rounded-lg text-sm ${
                      integration.connected
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {integration.connected ? 'Connected' : 'Connect'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Webhooks</h3>
          <Webhook className="w-6 h-6 text-blue-600" />
        </div>

        <div className="space-y-4">
          <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors">
            + Add Webhook Endpoint
          </button>
        </div>
      </div>
    </div>
  );
}