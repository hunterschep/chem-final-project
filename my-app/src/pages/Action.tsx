import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Action: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  
  const steps = [
    {
      title: "Research & Data Collection",
      icon: "📚",
      description: "Conducted research on East Boston's air quality challenges by consulting peer-reviewed studies, government reports, and local journalism.",
      details: [
        "Analyzed EPA air quality reports for East Boston and surrounding areas",
        "Studied medical research on respiratory health impacts in urban environments",
        "Reviewed local news coverage on environmental activism efforts"
      ],
      achievement: "Compiled a comprehensive knowledge base that informed the project direction and provided credibility to my claims."
    },
    {
      title: "API Integration",
      icon: "🔌",
      description: "Selected and integrated the OpenMeteo API to provide real-time and historical air quality data for East Boston and comparative Massachusetts locations. This free, reliable data source became the backbone of my interactive dashboard.",
      details: [
        "Evaluated multiple air quality APIs for data quality and reliability",
        "Implemented OpenMeteo API for PM2.5, PM10, and other pollutant readings",
        "Created data processing utilities to normalize and visualize the information",
      ],
      achievement: "Successfully integrated live data streams that update automatically, providing residents with current air quality information."
    },
    {
      title: "Dashboard Development",
      icon: "📊",
      description: "Synthesized research findings and API data into an intuitive, informative dashboard that presents air quality information alongside health impact data and historical context. Created interactive visualizations that make complex data accessible.",
      details: [
        "Designed interactive maps showing pollution hotspots in East Boston",
        "Created dynamic charts that visualize air quality trends over time",
        "Added explanatory content about pollution chemistry and health impacts"
      ],
      achievement: "Developed a comprehensive tool that transforms technical data into actionable information for community members."
    },
    {
      title: "Public Deployment & Outreach",
      icon: "🌐",
      description: "Launched the dashboard publicly online and conducted outreach to local environmental justice organizations, community health centers, and schools (Still waiting for responses!).",
      details: [
        "Deployed the application to GitHub Pages for free public access",
        "Created informational materials for local distribution",
      ],
      achievement: "Expanded awareness of air quality issues and provided a concrete tool for advocacy and personal health protection."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Project Action</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">From Research to Reality: My Process</h2>
            
            {/* Timeline navigation */}
            <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-shrink-0 w-40 py-2 px-4 mr-2 rounded-full font-medium transition-all ${
                    activeStep === index
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{step.icon}</span>
                  Step {index + 1}
                </button>
              ))}
            </div>
            
            {/* Active step display */}
            <div className="bg-blue-50 rounded-lg p-6 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{steps[activeStep].icon}</div>
                <h3 className="text-xl font-bold text-blue-800">{steps[activeStep].title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>
              
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {steps[activeStep].details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-1">Outcome:</h4>
                <p className="text-green-700">{steps[activeStep].achievement}</p>
              </div>
            </div>
            
            {/* Step navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className={`px-4 py-2 rounded flex items-center ${
                  activeStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous Step
              </button>
              
              <button
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className={`px-4 py-2 rounded flex items-center ${
                  activeStep === steps.length - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                Next Step
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        
  );
};

export default Action;