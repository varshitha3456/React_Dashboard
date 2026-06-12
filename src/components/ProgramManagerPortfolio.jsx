import { ChevronRight } from 'lucide-react';

const rows = [
  { name: 'David Brown', campaigns: 3, budget: '$120k', quality: 8.8, progress: 95, status: 'Healthy', barColor: 'bg-green-500' },
  { name: 'Maria Garcia', campaigns: 2, budget: '$90k', quality: 7.6, progress: 81, status: 'Attention', barColor: 'bg-orange-500' },
  { name: 'Robert Taylor', campaigns: 4, budget: '$150k', quality: 9.2, progress: 98, status: 'Healthy', barColor: 'bg-green-500' },
];

const statusStyles = {
  Healthy: 'bg-green-100 text-green-700',
  Attention: 'bg-yellow-100 text-yellow-700',
};

function ProgramManagerPortfolio() {
  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-900">Program Manager Portfolio</h2>
        <a href="#" className="text-sm text-cyan-600 font-medium flex items-center gap-1">
          View All <ChevronRight size={16} />
        </a>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-400 tracking-wide">
              <th className="px-6 py-3 font-medium">PROGRAM MANAGER</th>
              <th className="px-6 py-3 font-medium">CAMPAIGNS</th>
              <th className="px-6 py-3 font-medium">BUDGET USED</th>
              <th className="px-6 py-3 font-medium">AVG QUALITY</th>
              <th className="px-6 py-3 font-medium">PROGRESS</th>
              <th className="px-6 py-3 font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-t border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                <td className="px-6 py-4 text-cyan-600 font-medium">{row.campaigns}</td>
                <td className="px-6 py-4 text-gray-500">{row.budget}</td>
                <td className="px-6 py-4 text-gray-900">{row.quality}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.barColor}`}
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-500 text-xs w-10 text-right">{row.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${statusStyles[row.status]}`}>
                    ● {row.status}
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

export default ProgramManagerPortfolio;