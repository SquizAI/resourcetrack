import React from 'react';
import type { Organization } from '../../types';
import { Shield, Globe, Network } from 'lucide-react';

interface OrgFingerprintProps {
  organization: Organization;
}

export function OrgFingerprint({ organization }: OrgFingerprintProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Organization Fingerprint</h3>
        <Shield className="w-6 h-6 text-green-600" />
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Globe className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">Domain Configuration</h4>
            <p className="text-sm text-gray-500 mt-1">{organization.domain}</p>
            <div className="mt-2">
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Configure OAuth
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Network className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">IP Ranges</h4>
            <div className="mt-2 space-y-2">
              {organization.ipRanges.map((range, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
                >
                  <code className="text-sm text-gray-600">{range}</code>
                  <button className="text-sm text-red-600 hover:text-red-700">
                    Remove
                  </button>
                </div>
              ))}
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Add IP Range
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-gray-900 mb-2">Access Token</h4>
          <div className="bg-gray-50 p-3 rounded-lg">
            <code className="text-sm text-gray-600">
              {organization.accessToken.substring(0, 32)}...
            </code>
          </div>
          <button className="mt-2 text-sm text-blue-600 hover:text-blue-700">
            Rotate Token
          </button>
        </div>
      </div>
    </div>
  );
}