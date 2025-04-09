import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">About This Project</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Boston Air Quality Dashboard</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              This dashboard provides air quality information for Boston communities, with a particular 
              focus on East Boston, where environmental justice concerns intersect with pollution sources 
              like Logan Airport, major highways, and industrial facilities.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Project Goals</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Provide accessible, real-time air quality data for Boston communities</li>
              <li>Educate users about air pollution sources, chemistry, and health impacts</li>
              <li>Highlight environmental justice concerns in East Boston</li>
              <li>Offer practical health recommendations based on current air quality</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Data Sources</h3>
            <p className="mb-4">
              The dashboard uses the Open-Meteo Air Quality API, which provides:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Particulate matter concentrations (PM2.5 and PM10)</li>
              <li>Gas pollutant levels (NO2, O3, SO2, CO)</li>
              <li>US Air Quality Index calculations</li>
              <li>Weather data that influences air quality</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Environmental Justice Context</h3>
            <p className="mb-4">
              East Boston is considered an environmental justice community due to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Higher pollution burden from transportation infrastructure</li>
              <li>Proximity to Logan Airport, which contributes to air and noise pollution</li>
              <li>Industrial activities along Chelsea Creek</li>
              <li>Higher rates of respiratory conditions compared to other Boston neighborhoods</li>
              <li>Demographic factors including income, language, and racial/ethnic composition</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg my-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Asthma in East Boston</h3>
              <p className="text-gray-700">
                East Boston's asthma rates are significantly higher than the city average. According to community 
                health assessments, childhood asthma rates in East Boston are approximately 25% higher than the 
                Boston average, and emergency department visits for asthma are nearly twice the rate of higher-income neighborhoods.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Community Resources</h3>
            <p className="mb-3">
              These organizations are working to address air quality and environmental justice in East Boston:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><a href="https://www.noahcdc.org/" className="text-blue-600 hover:underline">Neighborhood of Affordable Housing (NOAH)</a></li>
              <li><a href="https://www.greenroots.org/" className="text-blue-600 hover:underline">GreenRoots</a></li>
              <li><a href="https://www.bostonaac.org/" className="text-blue-600 hover:underline">Boston Asthma and Allergy Center</a></li>
              <li><a href="https://www.mass.gov/orgs/massachusetts-department-of-environmental-protection" className="text-blue-600 hover:underline">MassDEP</a></li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Project Methodology</h3>
            <p className="mb-4">
              This dashboard delivers real-time data using the Open-Meteo Air Quality API. The air quality categories follow 
              the U.S. Environmental Protection Agency's Air Quality Index standards. Health recommendations are based on 
              EPA guidance, customized for Boston's specific context.
            </p>
            
            <p className="mt-6 text-sm text-gray-500 italic">
              This project is for educational purposes only. For emergency health decisions related to air quality, 
              please consult official sources like AirNow.gov or local health authorities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 