import React from 'react';

const VisualAbstract: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title/Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Air Pollution & Environmental Justice in East Boston
        </h2>
        <h4 className="text-xl text-gray-600">
          A Dashboard for Awareness & Action
        </h4>
      </div>

      {/* Three-panel layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panel 1: The Problem */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">1. The Problem</h3>
          <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src='https://via.placeholder.com/250x150?text=East+Boston+Map'
              alt='Map of East Boston'
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-700 leading-relaxed">
            East Boston is adjacent to Logan Airport, major highways, 
            and industrial facilities along Chelsea Creek. 
            Residents face elevated PM<sub>2.5</sub> and NO<sub>x</sub> emissions, 
            leading to higher asthma and COPD rates.
          </p>
        </div>

        {/* Panel 2: Chemistry & Health */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Chemistry & Health</h3>
          <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src='https://via.placeholder.com/250x150?text=Chemical+Process+Flow'
              alt='Chemistry flow diagram'
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-700 leading-relaxed">
            Combustion generates NO<sub>x</sub> and PM<sub>2.5</sub>. 
            NO<sub>x</sub> helps form ozone and secondary particulates, 
            exacerbating respiratory conditions. 
            Long-term exposure raises the risk of cardiopulmonary mortality.
          </p>
        </div>

        {/* Panel 3: The Dashboard */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">3. The Dashboard</h3>
          <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src='https://via.placeholder.com/250x150?text=Air+Quality+Dashboard'
              alt='Dashboard screenshot'
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-700 leading-relaxed">
            A live web app displaying real-time PM<sub>2.5</sub> and NO<sub>x</sub> data.
            Interactive charts link pollution levels to health advisories,
            providing actionable tips to reduce exposure and support advocacy.
          </p>
        </div>
      </div>

      {/* Footer Summary */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-center text-gray-700 leading-relaxed">
          By combining community monitoring, scientific research, and public engagement, 
          this project aims to reduce East Boston's disproportionate pollution burden 
          and empower residents with data-driven insights.
        </p>
      </div>
    </div>
  );
};

export default VisualAbstract; 