import CostIntelligence from '../components/dashboard/CostIntelligence';
import ExecutiveKPIs from '../components/dashboard/ExecutiveKPIs';
import LOBPerformance from '../components/dashboard/LOBPerformance';
import ProgramManagerPortfolio from '../components/dashboard/ProgramManagerPortfolio';
import CampaignHealth from '../components/dashboard/CampaignHealth';
import BenchmarkAI from '../components/dashboard/BenchmarkAI';

function Dashboard() {
  return (
    <>
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
    </>
  );
}

export default Dashboard;