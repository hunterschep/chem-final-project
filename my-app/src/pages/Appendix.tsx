import React from 'react';

const Appendix: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Appendix: Activity Triangle</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          The activity triangle below represents the East Boston Air Quality system and its interconnected components.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg mb-12">
        {/* Activity Triangle Visualization */}
        <div className="relative" style={{ height: '350px', minHeight: '350px', maxHeight: '700px' }}>
          {/* Triangle Base */}
          <svg 
            className="w-full h-full"
            viewBox="0 0 1000 700" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Triangle Lines */}
            <line x1="500" y1="50" x2="150" y2="600" stroke="#2563EB" strokeWidth="3" />
            <line x1="500" y1="50" x2="850" y2="600" stroke="#2563EB" strokeWidth="3" />
            <line x1="150" y1="600" x2="850" y2="600" stroke="#2563EB" strokeWidth="3" />
            
            {/* Horizontal Line for Rules */}
            <line x1="325" y1="325" x2="675" y2="325" stroke="#2563EB" strokeWidth="3" strokeDasharray="5,5" />
            
            {/* Vertical Lines for Division of Labor and Community */}
            <line x1="325" y1="325" x2="150" y2="600" stroke="#2563EB" strokeWidth="3" strokeDasharray="5,5" />
            <line x1="675" y1="325" x2="850" y2="600" stroke="#2563EB" strokeWidth="3" strokeDasharray="5,5" />
            
            {/* Node Labels - Adjusted for better mobile visibility */}
            <circle cx="500" cy="50" r="35" fill="#3B82F6" />
            <circle cx="150" cy="600" r="35" fill="#3B82F6" />
            <circle cx="850" cy="600" r="35" fill="#3B82F6" />
            <circle cx="325" cy="325" r="35" fill="#3B82F6" />
            <circle cx="675" cy="325" r="35" fill="#3B82F6" />
            <circle cx="500" cy="600" r="35" fill="#3B82F6" />
            
            {/* Node Text - Reduced font size for mobile */}
            <text x="500" y="50" textAnchor="middle" dy="5" fill="white" fontWeight="bold" fontSize="14">Object</text>
            <text x="150" y="600" textAnchor="middle" dy="5" fill="white" fontWeight="bold" fontSize="14">Subject</text>
            <text x="850" y="600" textAnchor="middle" dy="5" fill="white" fontWeight="bold" fontSize="14">Tools</text>
            <text x="325" y="325" textAnchor="middle" dy="5" fill="white" fontWeight="bold" fontSize="14">Rules</text>
            <text x="675" y="325" textAnchor="middle" dy="5" fill="white" fontWeight="bold" fontSize="14">Community</text>
            <text x="500" y="600" textAnchor="middle" dy="5" fill="white" fontWeight="bold" fontSize="14">Division</text>
            <text x="500" y="620" textAnchor="middle" dy="5" fill="white" fontWeight="bold" fontSize="14">of Labor</text>
          </svg>
        </div>
      </div>

      {/* Legend for mobile users to better understand the diagram */}
      <div className="block md:hidden bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-blue-600 mb-2">Activity Triangle Components:</h3>
        <ul className="text-sm space-y-1">
          <li><span className="font-semibold">Object:</span> The shared goal or problem</li>
          <li><span className="font-semibold">Subject:</span> People affected or involved</li>
          <li><span className="font-semibold">Tools:</span> Instruments used to address the object</li>
          <li><span className="font-semibold">Rules:</span> Regulations and norms</li>
          <li><span className="font-semibold">Community:</span> Social environment</li>
          <li><span className="font-semibold">Division of Labor:</span> How tasks and resources are allocated</li>
        </ul>
      </div>

      {/* Detailed Information Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-600 mb-3 sm:mb-4">Subjects</h2>
          <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Persons or groups directly affected by, caring for, or working on the issue.</p>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>East Boston residents (majority Latino, many low-income & immigrant/undocumented)</li>
            <li>Children & seniors with high asthma/COPD prevalence</li>
            <li>Airport, port-facility, rideshare & delivery workers regularly exposed to emissions</li>
            <li>Community advocates: Mothers Out Front – East Boston, GreenRoots, AIR Inc., Logan Community Clean Air Coalition, NUBE, Harborkeepers</li>
            <li>Health professionals: East Boston Neighborhood Health Center clinicians, school nurses</li>
            <li>Researchers & engineers: Air Partners/Olin College, BU & Harvard exposure scientists, MCAC technical staff</li>
            <li>Regulators & operators: MassDEP, Boston Air Pollution Control Commission, Massport, MBTA</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-600 mb-3 sm:mb-4">Tools</h2>
          <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Tangible or symbolic instruments used to act on the object.</p>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Monitoring tech: PurpleAir sensors, MCAC ultrafine-particle station, Air Partners "Modulair," City "Clean Air Boston" network, EPA EJSCREEN</li>
            <li>Health mitigation: HEPA air-purifier grants for day-cares, asthma action plans, rescue inhalers, N95/KN95 masks</li>
            <li>Policy & legal tools: MA EJ Act (2021), anti-idling law (&gt;5 min), Mass. House Bill H.997 (airport monitoring), Clean Air Act permits, lawsuits & administrative complaints</li>
            <li>Infrastructure fixes: shore-power hookups, electric ground-support vehicles, hybrid bus routes (Silver Line), tree-planting & green buffers</li>
            <li>Education/advocacy: bilingual dashboard & explainer content, community workshops, social-media campaigns, anti-idling curbside actions, school science projects</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-600 mb-3 sm:mb-4">Object</h2>
          <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">The shared problem or goal that motivates collective activity.</p>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Reduce PM₂.₅ & NOₓ exposure peaks in East Boston</li>
            <li>Improve respiratory & cardiovascular health outcomes</li>
            <li>Rectify historic environmental-justice inequities tied to Logan Airport, highways, and Chelsea Creek industry</li>
            <li>Empower residents through transparent data & actionable guidance (live dashboard)</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-600 mb-3 sm:mb-4">Rules</h2>
          <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Explicit regulations and implicit norms that shape or constrain action.</p>
          <h3 className="font-semibold mt-2 text-sm sm:text-base">Explicit:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>Clean Air Act standards</li>
            <li>MA anti-idling statute</li>
            <li>MassDEP air-permit requirements</li>
            <li>MA EJ law mandating cumulative-impact analysis</li>
            <li>Airport noise-abatement & monitoring directives</li>
            <li>Sulfur limits on marine fuel</li>
            <li>Zoning & energy-siting board decisions (e.g., Eversource substation)</li>
          </ul>
          <h3 className="font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Implicit:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>Environmental racism & "sacrifice-zone" planning history</li>
            <li>Language barriers</li>
            <li>Stigma of complaining about airport jobs</li>
            <li>Political deference to regional economic interests</li>
            <li>Limited trust in institutions among undocumented residents</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-600 mb-3 sm:mb-4">Community</h2>
          <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">The social milieu in which the activity occurs and whose members share or contest the object.</p>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>East Boston neighborhood (dense, waterfront, least tree canopy in Boston)</li>
            <li>Adjacent EJ communities (Chelsea, Revere, Winthrop) in Logan flight paths</li>
            <li>Boston-area travelers & businesses benefiting from airport/port</li>
            <li>City of Boston government & agencies</li>
            <li>Academic partners & public-health NGOs across Greater Boston</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-600 mb-3 sm:mb-4">Division of Labor</h2>
          <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">How tasks, power, and resources are allocated among actors in pursuit of the object.</p>
          <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li><strong>Regulators (MassDEP, EPA, Boston APC Commission):</strong> set & enforce air-quality standards, issue permits, manage EJ rule-making.</li>
            <li><strong>Massport & Industry:</strong> operate airport/port, implement mitigation (electric GSE, shore power, filtration funds), publish emissions data.</li>
            <li><strong>Community Orgs (GreenRoots, Mothers Out Front, AIR Inc.):</strong> collect data, educate residents, lobby officials, mount legal challenges.</li>
            <li><strong>Health Sector (EBNHC, clinics):</strong> treat asthma/COPD, distribute purifiers & inhalers, track health trends.</li>
            <li><strong>Researchers (Air Partners, BU/Harvard):</strong> deploy sensors, analyze exposure–health links, feed data to dashboard.</li>
            <li><strong>Residents & Schools:</strong> host sensors, practice exposure-reduction behaviors, participate in surveys & advocacy.</li>
            <li><strong>City/State Grant Programs:</strong> fund sensors, tree-planting, purifier distribution.</li>
            <li><strong>Transportation Agencies (MBTA, MassDOT):</strong> expand low-emission transit, manage traffic flow & idling enforcement.</li>
          </ul>
        </div>
      </div>

      {/* Feedback and Changes Section */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Project Evolution & Feedback</h2>
        <p className="mb-3">Based on feedback received during the project development:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>I narrowed the scope to focus specifically on East Boston's air quality challenges and initiatives.</li>
          <li>I incorporated more historical context about air quality activism in the area, following suggestions from peers.</li>
          <li>The activity triangle above reflects this more focused approach to the environmental justice issue.</li>
        </ul>
        <p className="text-sm text-gray-600 italic">I've implemented these changes to the best of my ability. For additional feedback or questions, contact me at scheppat@bc.edu</p>
      </div>
    </div>
  );
};

export default Appendix;
