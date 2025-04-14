import React, { useState } from 'react';

const HistoricalContext: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'community' | 'justice'>('history');
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h2 className="text-lg font-bold mb-3 pb-2 border-b">East Boston's Environmental History & Community Response</h2>
      
      <div className="flex border-b mb-4">
        <button 
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('history')}
        >
          Historical Context
        </button>
        <button 
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'community' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('community')}
        >
          Community Activism
        </button>
        <button 
          className={`px-4 py-2 font-medium text-sm ${activeTab === 'justice' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('justice')}
        >
          Environmental Justice
        </button>
      </div>
      
      {activeTab === 'history' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Logan Airport's Expansion</h3>
              <div className="text-sm text-gray-700">
                <p className="mb-2">
                  East Boston's environment has been dramatically transformed by Logan Airport's expansion:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>In the early 1900s, the area contained Wood Island Park, a large waterfront green space</li>
                  <li>In the 1960s, 50 acres of this park were bulldozed for airport expansion</li>
                  <li>The airport has grown to become New England's largest transportation hub</li>
                  <li>Today's operations include ~400,000 flights annually, emitting tens of thousands of pounds of pollutants daily</li>
                </ul>
                <p className="mt-2 italic text-xs">
                  "We've lost our health because the airport has destroyed us." —East Boston resident
                </p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Transportation Infrastructure</h3>
              <div className="text-sm text-gray-700">
                <p className="mb-2">
                  East Boston is encircled by major transportation routes that produce significant emissions:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sumner and Callahan Tunnels funnel traffic between downtown Boston and East Boston</li>
                  <li>Route 1A (McClellan Highway) brings heavy traffic and diesel trucks through the area</li>
                  <li>Many East Boston residences are within 300 meters of a major road or highway</li>
                  <li>Traffic congestion in tunnels and at airport drop-off zones creates pollution hotspots</li>
                </ul>
                <p className="mt-2 text-xs">
                  Studies show pollution levels from highways typically drop to background within a few hundred meters, but in East Boston, these pollution zones overlap.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Chelsea Creek & Industrial Activities</h3>
            <div className="text-sm text-gray-700">
              <p className="mb-2">
                East Boston's northern edge borders Chelsea Creek, an industrial waterway with significant air quality impacts:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Fuel Storage:</span> Large tank farms store jet fuel, heating oil, and other petroleum products
                </li>
                <li>
                  <span className="font-medium">Marine Shipping:</span> Ships delivering road salt, fuel, and other bulk materials often run diesel engines while docked
                </li>
                <li>
                  <span className="font-medium">Industrial Emissions:</span> Diesel equipment for loading/unloading creates episodic pollution spikes
                </li>
                <li>
                  <span className="font-medium">Lack of Buffer Zones:</span> East Boston has the lowest tree canopy in Boston (only ~7%), providing minimal natural filtration
                </li>
              </ul>
              <p className="mt-3 text-xs italic">
                The EPA has indicated that diesel particulate matter in the air over nearby Chelsea is in the 95th percentile statewide — and East Boston shares this same airshed.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'community' && (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="text-md font-semibold text-blue-800 mb-2">Decades of Community Activism</h3>
            <p className="text-sm text-gray-700">
              East Boston residents have a long history of organizing against environmental threats. From the Maverick Street Mothers of the 1960s to today's diverse coalition of community groups, Eastie has consistently fought for cleaner air and environmental justice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">Early Activism</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">The Maverick Street Mothers (1960s)</h4>
                  <p>
                    When Logan Airport construction trucks began rumbling through residential streets, creating clouds of dust and diesel fumes, local mothers took action. They physically blocked trucks from using neighborhood streets, eventually forcing officials to reroute construction traffic.
                  </p>
                  <p className="mt-1 italic text-xs">
                    This grassroots victory is considered one of the early environmental justice wins, before the term "environmental justice" was even coined.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Airport Impact Relief, Inc. (AIR Inc.)</h4>
                  <p>
                    Founded by residents concerned about Logan's health impacts, AIR Inc. has advocated for decades for health studies, better monitoring, and mitigation funds. They were instrumental in pushing the state to conduct the 2014 Logan Health Study.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">Current Organizations</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">GreenRoots</h4>
                  <p>
                    An environmental justice organization with a 30-year history fighting for clean air and water in Chelsea and East Boston. They address issues like diesel emissions from the port and push for initiatives like shore power for docked ships.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Mothers Out Front - East Boston</h4>
                  <p>
                    This group of mothers and caregivers campaigns against vehicle idling and for cleaner air. Their 2022 demonstration at Logan Airport led to the installation of "No Idling" signs. They've also installed HEPA air purifiers in 35 home-based daycares.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Logan Community Clean Air Coalition</h4>
                  <p>
                    A coalition bringing together multiple community groups to advocate for reduced pollution, impact mitigation, and environmental justice for residents around Logan Airport.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-semibold mb-2 text-blue-700">Recent Victories & Ongoing Efforts</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold">Air Quality Monitoring</h4>
                <p>
                  In December 2023, the Massport Community Advisory Committee deployed a permanent air quality monitoring station near East Boston High School, measuring ultrafine particles and other pollutants from Logan operations.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">State Accountability</h4>
                <p>
                  In 2023, Massachusetts' Secretary of Energy and Environmental Affairs directed Massport to improve its environmental mitigation efforts, including developing real-time pollution monitoring, expanding air filtration programs, and creating an anti-idling plan.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">Community Science</h4>
                <p>
                  East Boston residents have partnered with scientists through the Air Partners program to deploy low-cost sensors throughout the neighborhood, democratizing access to air quality data and enabling community-driven research.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'justice' && (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-md font-semibold text-blue-800 mb-2">Environmental Justice Profile</h3>
            <p className="text-sm text-gray-700">
              East Boston is officially designated as an environmental justice community. Its residents face disproportionate environmental burdens while having fewer resources to mitigate these impacts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <h4 className="font-semibold text-xs text-blue-700">Demographics</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                  <li>Over 50% Latino population</li>
                  <li>Many working-class immigrant families</li>
                  <li>About half of families below the poverty line</li>
                  <li>Limited access to healthcare resources</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-xs text-blue-700">Environmental Burdens</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                  <li>Logan Airport operations on three sides</li>
                  <li>Major highways and tunnels throughout community</li>
                  <li>Industrial port activities along Chelsea Creek</li>
                  <li>Only ~7% tree canopy (lowest in Boston)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
            <h3 className="text-md font-semibold mb-3 text-blue-800">Research on Environmental Disparities</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-3">
                <h4 className="font-semibold text-sm">Nationwide Pattern of Inequality</h4>
                <p className="text-xs text-gray-700 my-1">
                  The Jbaily et al. (2022) study in Nature found that:
                </p>
                <p className="text-xs text-gray-700 italic">
                  "Areas with higher-than-average white and Native American populations have been consistently exposed to average PM₂.₅ levels that are lower than areas with higher-than-average Black, Asian and Hispanic or Latino populations. Moreover, areas with low-income populations have been consistently exposed to higher average PM₂.₅ levels than areas with high-income groups."
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  East Boston's demographics and pollution burden fit this nationwide pattern of environmental inequality.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-3">
                <h4 className="font-semibold text-sm">Transportation-Related Disparities</h4>
                <p className="text-xs text-gray-700 my-1">
                  Pratt et al. (2015) demonstrated in their research that:
                </p>
                <p className="text-xs text-gray-700 italic">
                  "Populations on the lower end of the socio-economic spectrum and minorities were disproportionately exposed to traffic and air pollution and at a disproportionately higher risk for adverse health outcomes. Despite driving less, the air pollution impacts were higher from all sources—especially transportation sources—at non-white and low SES households that tended to be closer to the urban core."
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  This reflects East Boston's situation exactly: despite having lower car ownership rates than wealthier neighborhoods, residents suffer higher pollution exposure from surrounding transportation infrastructure.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">Health Disparities</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">Respiratory Health</h4>
                  <p>
                    According to the Logan Airport Health Study, children in neighborhoods near the airport were up to <span className="font-bold">4 times more likely</span> to show signs of asthma compared to children in less polluted areas. Adults had <span className="font-bold">twice the rate</span> of COPD diagnoses.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Emergency Room Visits</h4>
                  <p>
                    East Boston has one of the highest rates of asthma-related emergency room visits for children among all Boston neighborhoods.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Additional Health Concerns</h4>
                  <p>
                    Beyond respiratory issues, residents report higher stress levels from constant noise and air pollution, while research links traffic-related air pollution to cardiovascular problems and developmental issues in children.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-700">Policy Responses</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold">State Climate & EJ Law (2021)</h4>
                  <p>
                    Massachusetts passed legislation requiring state agencies to consider cumulative impacts on EJ communities when issuing permits, providing a framework to prevent adding further pollution burdens.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">City of Boston Initiatives</h4>
                  <p>
                    Boston has launched Community Clean Air Grants to fund local projects, like Mothers Out Front's HEPA purifier initiative, and established an Air Pollution Control Commission to address urban air issues.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Legislative Efforts</h4>
                  <p>
                    Massachusetts House Bill H.997 was introduced to require Massport to set up permanent air quality monitoring stations at a minimum of three locations in East Boston and publicly report air and noise data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-md font-semibold mb-2 text-blue-700">Community Resilience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold">Personal Adaptations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Using air purifiers in homes</li>
                  <li>Implementing asthma action plans in schools</li>
                  <li>Timing outdoor activities to avoid peak pollution</li>
                  <li>Monitoring air quality via community sensors</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Community Initiatives</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Eastie Farm - urban agriculture and tree planting</li>
                  <li>Harborkeepers - coastal clean-ups and climate readiness</li>
                  <li>Citizen science through air quality monitoring networks</li>
                  <li>Community-based HEPA filter distribution programs</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs italic">
              "Class, race, and ethnicity are determinants that decide where environmental hazards are located. East Boston bears a disproportionate burden of these hazards." — Environmental justice advocates
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoricalContext; 