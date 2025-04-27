import React from 'react';
import { Link } from 'react-router-dom';

const Sources: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Sources</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">References</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-200">Peer-Reviewed Journal Sources</h3>
              <ul className="space-y-4">
                <li className="pl-4 border-l-4 border-blue-200 py-1">
                  <p className="text-gray-800">
                    Pratt, Gregory C., et al. "Traffic, air pollution, minority and socio-economic status: addressing inequities in exposure and risk." <em>International Journal of Environmental Research and Public Health</em> 12.5 (2015): 5355-5372.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-blue-200 py-1">
                  <p className="text-gray-800">
                    Gauderman, W. James, et al. "The effect of air pollution on lung development from 10 to 18 years of age." <em>New England Journal of Medicine</em> 351.11 (2004): 1057-1067.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-blue-200 py-1">
                  <p className="text-gray-800">
                    Sillman, Sanford. "The relation between ozone, NOx and hydrocarbons in urban and polluted rural environments." <em>Atmospheric Environment</em> 33.12 (1999): 1821-1845.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-blue-200 py-1">
                  <p className="text-gray-800">
                    Jbaily, Abdulrahman, et al. "Air pollution exposure disparities across US population and income groups." <em>Nature</em> 601.7892 (2022): 228-233.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-blue-200 py-1">
                  <p className="text-gray-800">
                    Dominici, Francesca, et al. "Fine particulate air pollution and hospital admission for cardiovascular and respiratory diseases." <em>JAMA</em> 295.10 (2006): 1127-1134.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-blue-200 py-1">
                  <p className="text-gray-800">
                    Pope III, C. Arden, et al. "Lung cancer, cardiopulmonary mortality, and long-term exposure to fine particulate air pollution." <em>JAMA</em> 287.9 (2002): 1132-1141.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-200">Web Sources</h3>
              <ul className="space-y-4">
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    "About — Logan Community Clean Air Coalition." n.d. Logan Community Clean Air Coalition. <a href="https://www.logancleanair.org/about" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.logancleanair.org/about</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    Burrell, Chris. 2024. "As Business Booms in Boston Harbor, Port Communities Pay the Health Costs." GBH, September 5, 2024. <a href="https://www.wgbh.org/news/local/2024-04-01/as-business-booms-in-boston-harbor-port-communities-pay-the-health-costs" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.wgbh.org/news/local/2024-04-01/as-business-booms-in-boston-harbor-port-communities-pay-the-health-costs</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    "Cars, Trucks, Buses and Air Pollution." 2008. Union of Concerned Scientists. July 23, 2008. <a href="https://www.ucs.org/resources/cars-trucks-buses-and-air-pollution" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ucs.org/resources/cars-trucks-buses-and-air-pollution</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    Commonwealth of Massachusetts. n.d. "Executive Summary of the Logan Airport Health Study (English) | Mass.gov." <a href="https://www.mass.gov/doc/executive-summary-of-the-logan-airport-health-study-english-0/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.mass.gov/doc/executive-summary-of-the-logan-airport-health-study-english-0/</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    Creedon, Aine. 2023. "Fighting for Cleaner Air in East Boston - Non Profit News | Nonprofit Quarterly." Non Profit News | Nonprofit Quarterly. April 13, 2023. <a href="https://nonprofitquarterly.org/fighting-for-cleaner-air-in-east-boston/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://nonprofitquarterly.org/fighting-for-cleaner-air-in-east-boston/</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    "East Boston — Air Partners." n.d. Air Partners. <a href="https://airpartners.org/east-boston" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://airpartners.org/east-boston</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    "How Logan Airport Almost Destroyed East Boston — and How East Boston Is Still Fighting Back." n.d. USC Center for Health Journalism. <a href="https://centerforhealthjournalism.org/our-work/reporting/how-logan-airport-almost-destroyed-east-boston-and-how-east-boston-still" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://centerforhealthjournalism.org/our-work/reporting/how-logan-airport-almost-destroyed-east-boston-and-how-east-boston-still</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    Lynds, John. "Historic Newsreel Depicting the Maverick Mothers Protests of the 1960s Digitally Remastered." East Boston Times-Free Press. Accessed April 27, 2025. <a href="https://eastietimes.com/2021/04/14/historic-newsreel-depicting-the-maverick-mothers-protests-of-the-1960s-digitally-remastered/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://eastietimes.com/2021/04/14/historic-newsreel-depicting-the-maverick-mothers-protests-of-the-1960s-digitally-remastered/</a>.
                  </p>
                </li>
                <li className="pl-4 border-l-4 border-green-200 py-1">
                  <p className="text-gray-800">
                    Ojikutu, Bisola, Boston Public Health Commission, Helen Ayanian, Jaylen Clarke, Dan Dooley, Kathryn Hall, Ally Huh, et al. 2023. "HEALTH OF BOSTON 2023 ASTHMA REPORT." Boston Public Health Commission. <a href="https://www.boston.gov/sites/default/files/file/2023/05/HOB_Asthma_2023_FINAL_May11.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.boston.gov/sites/default/files/file/2023/05/HOB_Asthma_2023_FINAL_May11.pdf</a>.
                  </p>
                </li>
              </ul>
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

export default Sources; 