import React from 'react';
import { Link } from 'react-router-dom';

const VisualAbstract: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Project Abstract</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">East Boston Air Quality: Environmental Justice & Health Impacts</h2>
            
            <div className="mb-6 flex justify-center">
              <img 
                src={`${process.env.PUBLIC_URL}/visual.png`} 
                alt="East Boston Air Quality Visualization" 
                className="rounded-lg shadow-md max-h-96 object-contain"
              />
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-medium">
                Urban air pollution remains a critical public health issue, with fine particulate matter
                (PM2.5) and nitrogen oxides (NOx) contributing significantly to disease and mortality.
              </p>
              
              <p>
                <span className="font-semibold">East Boston, Massachusetts</span> exemplifies these challenges as an environmental justice community
                facing a unique exposure profile. This predominantly immigrant, low-income neighborhood is
                adjacent to Logan International Airport, crisscrossed by major highways, and bordered by the
                Chelsea Creek industrial zone, resulting in routinely elevated levels of PM2.5 and NOx.
              </p>
              
              <p>
                These pollutants originate from high-temperature combustion in jet engines, vehicles, and fuel
                facilities. NOx formed during combustion undergoes atmospheric reactions to produce secondary
                pollutants such as ozone and particulate nitrates, while PM2.5 includes both primary soot and
                secondary particles formed from gaseous emissions.
              </p>
              
              <p>
                Such pollution has tangible health consequences: residents experience higher rates of asthma and chronic obstructive pulmonary
                disease (COPD), and long-term studies have linked traffic-related pollution to impaired lung
                development in children (Gauderman et al. 2004) as well as increased cardiopulmonary
                morbidity and mortality (Dominici et al. 2006; Pope et al. 2002).
              </p>
              
              <p>
                Decades of inequitable urban planning have placed disproportionate pollution burdens on communities like East Boston (Pratt
                et al. 2015), compounding these health disparities.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Solution</h3>
                <p>
                  In response, this project developed and deployed a live air quality dashboard tailored to
                  East Boston, integrating real-time monitoring data and historical records on PM2.5 and NOx.
                  The interactive web application visualizes local pollution levels, links these data to health risk
                  information, and offers guidance on exposure mitigation. Through this tool, the project aims to
                  increase public awareness, equip residents with knowledge to reduce their exposure, and amplify
                  environmental justice advocacy for cleaner air in East Boston.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 Hunter Scheppat | Final Project for Chemistry and Society</p>
        </div>
      </div>
    </div>
  );
};

export default VisualAbstract; 