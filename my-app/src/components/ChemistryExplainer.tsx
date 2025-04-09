import React from 'react';

const ChemistryExplainer: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Air Pollution Chemistry</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">PM<sub>2.5</sub> & PM<sub>10</sub></h3>
          <p className="text-gray-700 mb-2">
            Particulate Matter (PM) consists of microscopic solid and liquid particles suspended in air.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>PM<sub>10</sub>: Particles ≤ 10 micrometers in diameter</li>
            <li>PM<sub>2.5</sub>: Particles ≤ 2.5 micrometers in diameter (more dangerous as they can penetrate deeper into lungs)</li>
          </ul>
          <div className="mt-3">
            <h4 className="font-semibold">Sources in Boston:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Vehicle emissions (especially diesel)</li>
              <li>Aircraft operations at Logan Airport</li>
              <li>Industrial processes along Chelsea Creek</li>
              <li>Construction dust</li>
            </ul>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Nitrogen Oxides (NO<sub>x</sub>)</h3>
          <p className="text-gray-700 mb-2">
            NO<sub>x</sub> refers to nitrogen oxide (NO) and nitrogen dioxide (NO<sub>2</sub>), 
            formed during high-temperature combustion processes.
          </p>
          <div className="bg-gray-100 p-2 rounded my-2">
            <p className="font-mono text-sm">N<sub>2</sub> + O<sub>2</sub> → 2NO (at high temperatures)</p>
            <p className="font-mono text-sm">2NO + O<sub>2</sub> → 2NO<sub>2</sub></p>
          </div>
          <div className="mt-2">
            <h4 className="font-semibold">Sources in Boston:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Vehicle exhaust on I-90, Route 1A</li>
              <li>Aircraft engines at Logan Airport</li>
              <li>Shipping vessels in Boston Harbor</li>
              <li>Power plants and industrial facilities</li>
            </ul>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Ozone (O<sub>3</sub>)</h3>
          <p className="text-gray-700 mb-2">
            Ground-level ozone is a secondary pollutant formed when NO<sub>x</sub> and Volatile Organic Compounds (VOCs) 
            react in the presence of sunlight.
          </p>
          <div className="bg-gray-100 p-2 rounded my-2">
            <p className="font-mono text-sm">NO<sub>2</sub> + sunlight → NO + O</p>
            <p className="font-mono text-sm">O + O<sub>2</sub> → O<sub>3</sub></p>
            <p className="font-mono text-sm">VOCs + OH· → RO<sub>2</sub>· (leads to more O<sub>3</sub> formation)</p>
          </div>
          <p className="text-gray-700 mt-1">
            O<sub>3</sub> levels often peak on hot, sunny days, especially in the afternoon.
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">Secondary Particle Formation</h3>
          <p className="text-gray-700 mb-2">
            Some PM<sub>2.5</sub> forms through atmospheric chemical reactions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>NO<sub>2</sub> → Nitrates</li>
            <li>SO<sub>2</sub> → Sulfates</li>
            <li>VOCs → Secondary Organic Aerosols</li>
          </ul>
          <p className="text-gray-700 mt-2">
            These secondary particles make up a significant portion of PM<sub>2.5</sub> in urban areas like Boston.
          </p>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">East Boston's Unique Air Chemistry</h3>
        <p className="text-gray-700">
          East Boston experiences a complex mixture of pollutants from transportation sources. 
          The close proximity to Logan Airport contributes to elevated levels of ultrafine particles and NO<sub>x</sub> 
          that aren't captured in standard monitoring.
        </p>
        <p className="text-gray-700 mt-2">
          Temperature inversions (when warm air traps cooler air below) are more common in coastal areas 
          like Boston and can trap pollutants close to the ground, worsening air quality especially in the morning.
        </p>
      </div>
    </div>
  );
};

export default ChemistryExplainer; 