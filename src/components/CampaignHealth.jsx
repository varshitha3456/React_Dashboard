import { ChevronRight } from 'lucide-react';

const rows = [
    { campaign: 'CX Support', manager: 'David Brown', budget: 70, budgetColor: 'bg-orange-500', quality: 8.9, progress: 82, risk: 'Low' },
    { campaign: 'Medical QA', manager: 'Maria Garcia', budget: 90, budgetColor: 'bg-red-500', quality: 7.2, progress: 61, risk: 'High' },
    { campaign: 'NLP Dataset', manager: 'Robert Taylor', budget: 45, budgetColor: 'bg-cyan-600', quality: 9.1, progress: 75, risk: 'Low' },
    { campaign: 'HR Onboarding', manager: 'David Brown', budget: 55, budgetColor: 'bg-cyan-600', quality: 8.5, progress: 68, risk: 'Medium' },
  ];
  
  const riskStyles = {
    Low: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    High: 'bg-red-100 text-red-700',
  };
  
  function CampaignHealth() {
    return (
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-900">Campaign Health</h2>
          <a href="#" className="text-sm text-blue-500 font-medium flex items-center gap-1">
            View All <ChevronRight size={16} />
          </a>
        </div>
  
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-400 tracking-wide">
                <th className="px-6 py-3 font-medium">CAMPAIGN</th>
                <th className="px-6 py-3 font-medium">PROGRAM MANAGER</th>
                <th className="px-6 py-3 font-medium">BUDGET</th>
                <th className="px-6 py-3 font-medium">QUALITY</th>
                <th className="px-6 py-3 font-medium">PROGRESS</th>
                <th className="px-6 py-3 font-medium">RISK</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.campaign} className="border-t border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.campaign}</td>
                  <td className="px-6 py-4 text-gray-500">{row.manager}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.budgetColor}`}
                          style={{ width: `${row.budget}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-500 text-xs">{row.budget}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{row.quality}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-700 rounded-full"
                          style={{ width: `${row.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-500 text-xs">{row.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${riskStyles[row.risk]}`}>
                      ● {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  
  export default CampaignHealth;