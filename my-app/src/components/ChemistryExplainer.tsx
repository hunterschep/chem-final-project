import React, { useState } from 'react';

const ChemistryExplainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chemistry' | 'health' | 'sources'>('chemistry');
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h2 className="text-lg font-bold mb-3 pb-2 border-b">Understanding Air Quality & Health</h2>
      
      <div className="flex border-b mb-4">
        <button 
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'chemistry' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('chemistry')}
        >
          Pollutant Chemistry
        </button>
        <button 
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'health' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('health')}
        >
          Health Effects
        </button>
        <button 
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'sources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('sources')}
        >
          Local Sources
        </button>
      </div>
      
      {activeTab === 'chemistry' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">PM<sub>2.5</sub> & PM<sub>10</sub></h3>
            <p className="text-gray-700 mb-2 text-sm">
              Fine particulate matter (PM<sub>2.5</sub>) consists of microscopic particles ≤2.5 micrometers 
              in diameter—about 1/30th the width of a human hair.
            </p>
            <div className="bg-blue-50 p-2 rounded my-2 text-sm">
              <h4 className="font-semibold text-blue-800">How it forms:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><span className="font-medium">Primary PM:</span> Directly emitted from combustion (vehicles, aircraft, industry)</li>
                <li><span className="font-medium">Secondary PM:</span> Forms through atmospheric reactions:
                  <ul className="list-disc pl-5 mt-1 text-xs">
                    <li>SO<sub>2</sub> + NH<sub>3</sub> + O<sub>2</sub> → Ammonium Sulfate particles</li>
                    <li>NO<sub>2</sub> + NH<sub>3</sub> + O<sub>2</sub> → Ammonium Nitrate particles</li>
                    <li>VOCs + Oxidants → Secondary Organic Aerosols</li>
                  </ul>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              PM<sub>2.5</sub> can remain airborne for days and travel hundreds of miles, meaning East Boston's 
              levels reflect both local emissions and regional transport.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Nitrogen Oxides (NO<sub>x</sub>)</h3>
            <p className="text-gray-700 mb-2 text-sm">
              NO<sub>x</sub> refers to nitric oxide (NO) and nitrogen dioxide (NO<sub>2</sub>), 
              formed during high-temperature combustion in engines, power plants, and industrial processes.
            </p>
            <div className="bg-blue-50 p-2 rounded my-2 text-sm">
              <h4 className="font-semibold text-blue-800">Formation & Reactions:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>N<sub>2</sub> + O<sub>2</sub> → 2NO (inside hot engines)</li>
                <li>2NO + O<sub>2</sub> → 2NO<sub>2</sub> (in ambient air)</li>
                <li>NO<sub>2</sub> + sunlight → NO + O (leads to ozone formation)</li>
                <li>NO<sub>2</sub> + OH· → HNO<sub>3</sub> (forms nitric acid, leads to PM<sub>2.5</sub>)</li>
              </ul>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              NO<sub>x</sub> is highly reactive and typically highest near emission sources. 
              In East Boston, it's concentrated around highways, tunnels, and the airport.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Ozone (O<sub>3</sub>) Formation</h3>
            <p className="text-gray-700 mb-2 text-sm">
              Ground-level ozone is a secondary pollutant formed when NO<sub>x</sub> and VOCs 
              react in sunlight, especially on hot summer days.
            </p>
            <div className="bg-blue-50 p-2 rounded my-2 text-sm">
              <h4 className="font-semibold text-blue-800">Photochemical Process:</h4>
              <div className="pl-3 text-xs font-mono">
                <p>1. NO<sub>2</sub> + sunlight → NO + O</p>
                <p>2. O + O<sub>2</sub> → O<sub>3</sub></p>
                <p>3. VOCs react with OH· → forms RO<sub>2</sub>· radicals</p>
                <p>4. RO<sub>2</sub>· + NO → converts NO to NO<sub>2</sub> without consuming O<sub>3</sub></p>
                <p>5. Cycle continues, accumulating O<sub>3</sub></p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Ozone often peaks downwind of urban centers in the afternoon. 
              Transportation emissions from East Boston contribute to regional ozone formation.
            </p>
            <div className="mt-3 pt-2 border-t border-gray-200">
              <h4 className="font-semibold text-blue-800 text-xs">Research Insight:</h4>
              <p className="text-xs text-gray-700 italic">
                "In the NOx-sensitive regime (with relatively low NOx and high VOC), O₃ increases with increasing NOx and changes little in response to increasing VOC. In the NOx-saturated or VOC-sensitive regime O₃ decreases with increasing NOx and increases with increasing VOC."
              </p>
              <p className="text-xs text-gray-600 mt-1">
                — Sillman (1999) study on urban ozone chemistry, showing why pollution controls need to target different precursors depending on local conditions
              </p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Ultrafine Particles</h3>
            <p className="text-gray-700 mb-2 text-sm">
              Ultrafine particles (UFPs) are a subset of PM<sub>2.5</sub> with diameters &lt;0.1 micrometers.
              Too small for standard monitoring, they're emitted in high numbers from jet engines and traffic.
            </p>
            <div className="bg-blue-50 p-2 rounded my-2 text-sm">
              <h4 className="font-semibold text-blue-800">Key Facts:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Primarily from combustion sources (jet fuel, diesel)</li>
                <li>Can penetrate deep into lungs and enter bloodstream</li>
                <li>Short atmospheric lifetime - highest near emission sources</li>
                <li>Aircraft plumes create measurable spikes that typically dissipate within 2 minutes</li>
              </ul>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              The new MCAC monitoring station at East Boston High School is tracking ultrafine particle levels near Logan Airport.
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'health' && (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-md font-semibold text-blue-800 mb-2">East Boston's Health Disparities</h3>
            <p className="text-sm text-gray-700">
              According to the Massachusetts Department of Public Health's Logan Airport Health Study, residents of neighborhoods 
              near the airport (including East Boston) experienced:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
              <li><span className="font-medium">4× higher rates</span> of asthma in children compared to lower exposure areas</li>
              <li><span className="font-medium">2× higher rates</span> of COPD diagnosis in adults over a three-year period</li>
              <li>Higher rates of respiratory symptoms even after adjusting for other factors</li>
            </ul>
            <div className="mt-3 text-xs text-gray-500 italic">
              Source: Massachusetts Department of Public Health Logan Airport Health Study
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-red-700">How PM<sub>2.5</sub> Affects Health</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li><span className="font-medium">Respiratory:</span> Irritates airways, triggers asthma attacks, reduces lung function</li>
                <li><span className="font-medium">Cardiovascular:</span> Increases risk of heart attacks, strokes, irregular heartbeats</li>
                <li><span className="font-medium">Developmental:</span> Associated with low birth weight, premature birth</li>
                <li><span className="font-medium">Long-term:</span> Contributes to chronic respiratory and heart diseases</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                Fine particles can penetrate deep into lungs and even enter the bloodstream, affecting multiple body systems.
              </p>
              <div className="mt-3 pt-2 border-t border-gray-200 bg-red-50 p-2 rounded">
                <h4 className="font-semibold text-red-800 text-xs">Research Finding:</h4>
                <p className="text-xs text-gray-700">
                  The Gauderman et al. (2004) study in the New England Journal of Medicine found that children exposed to the highest levels of PM₂.₅ were <span className="font-bold">nearly 5 times more likely</span> to have stunted lung development by age 18 compared to those in cleaner air communities (7.9% vs 1.6%).
                </p>
                <p className="text-xs text-gray-600 mt-1 italic">
                  These findings demonstrate how air pollution can permanently affect children's lung development during critical growth periods.
                </p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-red-700">How NO<sub>x</sub> Affects Health</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li><span className="font-medium">Respiratory irritation:</span> Inflames airways, increases susceptibility to infections</li>
                <li><span className="font-medium">Asthma exacerbation:</span> Triggers attacks, worsens symptoms</li>
                <li><span className="font-medium">Reduces lung function:</span> Especially in children and those with respiratory conditions</li>
                <li><span className="font-medium">Contributes to PM<sub>2.5</sub> & ozone:</span> Multiplies health impacts through secondary pollutants</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                NO<sub>2</sub> is a good marker for traffic pollution overall and is highly localized near major roads.
              </p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-semibold mb-2 text-blue-700">Environmental Justice Context</h3>
            <p className="text-sm text-gray-700 mb-2">
              East Boston is a designated environmental justice community where pollution burden falls disproportionately on:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>A predominantly Latino population (over 50%)</li>
              <li>Many working-class immigrant families with limited resources</li>
              <li>Areas with only ~7% tree canopy (lowest in Boston)</li>
              <li>Neighborhoods surrounded by transportation infrastructure (airport, highways, port)</li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              The combination of high exposure and underlying social vulnerability makes East Boston 
              residents more susceptible to air pollution health impacts.
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'sources' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">Logan International Airport</h3>
              <div className="text-sm text-gray-700">
                <p className="mb-2">Major source of both PM<sub>2.5</sub> and NO<sub>x</sub> emissions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Aircraft takeoffs and landings produce plumes of ultrafine particles and NO<sub>x</sub></li>
                  <li>Ground operations (taxiing, idling) produce continuous emissions</li>
                  <li>Ground support equipment and airport vehicles (often diesel-powered)</li>
                  <li>Passenger vehicles arriving/departing the airport</li>
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  Studies show aircraft plumes create measurable spikes in ultrafine particles that 
                  can affect neighborhoods downwind of flight paths.
                </p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">Traffic & Transportation</h3>
              <div className="text-sm text-gray-700">
                <p className="mb-2">East Boston is surrounded by busy roadways:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sumner and Callahan Tunnels (concentrated exhaust at entrances)</li>
                  <li>Route 1A/McClellan Highway with heavy truck traffic</li>
                  <li>Busy local streets with frequent congestion</li>
                  <li>Diesel buses and delivery vehicles</li>
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  Vehicle emissions are highest within ~300 meters of major roads, 
                  and much of East Boston's housing falls within this distance.
                </p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">Chelsea Creek & Port</h3>
              <div className="text-sm text-gray-700">
                <p className="mb-2">Industrial waterfront with significant diesel emissions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Marine vessels burning high-sulfur bunker fuel</li>
                  <li>Ships running auxiliary generators while docked</li>
                  <li>Diesel trucks serving port facilities</li>
                  <li>Bulk material handling (road salt, oil storage)</li>
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  EPA data shows diesel PM concentrations in the Chelsea/East Boston 
                  area are in the 95th percentile statewide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-md font-semibold text-blue-800 mb-2">Community Action Against Pollution</h3>
            <p className="text-sm text-gray-700 mb-2">
              East Boston has a strong history of environmental advocacy, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-blue-700">Historic Activism:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Maverick Street Mothers (1960s) rerouted airport construction traffic</li>
                  <li>Community opposition to Logan Airport expansion</li>
                  <li>Push for soundproofing and health studies</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-blue-700">Recent Initiatives:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Air quality monitoring partnerships (Air Partners, MCAC)</li>
                  <li>Mothers Out Front anti-idling campaign at Logan</li>
                  <li>HEPA filter installation in local daycares</li>
                  <li>2023-24 state mandate for Massport to improve pollution mitigation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500">
        <p>Data sources: MA Dept. of Public Health, Logan Airport Health Study, Air Partners, EPA EJSCREEN, Union of Concerned Scientists</p>
      </div>
    </div>
  );
};

export default ChemistryExplainer; 