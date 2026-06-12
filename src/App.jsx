import Header from './components/Header';
import CostIntelligence from './components/CostIntelligence';
import ExecutiveKPIs from './components/ExecutiveKPIs';
import LOBPerformance from './components/LOBPerformance';
import ProgramManagerPortfolio from './components/ProgramManagerPortfolio';
import CampaignHealth from './components/CampaignHealth';
import BenchmarkAI from './components/BechmarkAI';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">Overview of your workspace activity</p>
        </div>

        <CostIntelligence />
        <ExecutiveKPIs />
        <LOBPerformance />
        <ProgramManagerPortfolio />
        <CampaignHealth />
        <BenchmarkAI />
      </main>
    </div>
  );
}

export default App;