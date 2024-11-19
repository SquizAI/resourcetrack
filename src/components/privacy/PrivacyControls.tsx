import React from 'react';
import { Shield, Clock, Trash2, Lock } from 'lucide-react';

export function PrivacyControls() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Privacy & Security Controls</h3>
        <Shield className="w-6 h-6 text-blue-600" />
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Lock className="w-5 h-5 text-gray-400 mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">Data Encryption</h4>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white transition"></span>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              End-to-end encryption for all stored data
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-5 h-5 text-gray-400 mt-1" />
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Data Retention</h4>
            <div className="mt-2">
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>180 days</option>
                <option>1 year</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Trash2 className="w-5 h-5 text-gray-400 mt-1" />
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Data Purge</h4>
            <p className="text-sm text-gray-500 mt-1">
              Permanently delete all tracking data
            </p>
            <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Purge Data
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-gray-900 mb-4">GDPR Compliance</h4>
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">
                Enable cookie consent banner
              </span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">
                Anonymize IP addresses
              </span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">
                Enable right to be forgotten requests
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}