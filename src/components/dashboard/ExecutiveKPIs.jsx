import { CheckSquare, Users, Filter } from 'lucide-react';
import Card from '../ui/Card';

function ExecutiveKPIs() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Executive KPIs</h2>
      <div className="grid grid-cols-3 gap-4">
        <Card accentColor="bg-blue-500">
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-cyan-500 mb-3">
            <CheckSquare size={18} />
          </div>
          <p className="text-xs font-medium text-gray-400 tracking-wide">ACTIVE CAMPAIGNS</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">124</p>
          <p className="text-xs text-green-600 font-medium mt-1">+8 this month</p>
        </Card>

        <Card accentColor="bg-purple-500">
          <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-blue-500 mb-3">
            <Users size={18} />
          </div>
          <p className="text-xs font-medium text-gray-400 tracking-wide">BUDGET UTILIZATION</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">75%</p>
          <p className="text-xs text-gray-400 mt-1">$1.8M / $2.4M</p>
        </Card>

        <Card accentColor="bg-green-500">
          <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-green-500 mb-3">
            <Filter size={18} />
          </div>
          <p className="text-xs font-medium text-gray-400 tracking-wide">AVERAGE CAMPAIGN QUALITY</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">8.7 / 10</p>
          <p className="text-xs text-green-600 font-medium mt-1">↑ 0.3 improvement</p>
        </Card>
      </div>
    </section>
  );
}

export default ExecutiveKPIs;