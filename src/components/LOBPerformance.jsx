import { ChevronRight } from 'lucide-react';

const rows = [
  { lob: 'HR', campaigns: 3, budget: 30, quality: 8.9, status: 'Healthy' },
  { lob: 'Sales', campaigns: 2, budget: 40, quality: 7.8, status: 'At Risk' },
  { lob: 'Product', campaigns: 4, budget: 50, quality: 9.1, status: 'Healthy' },
  { lob: 'Marketing', campaigns: 2, budget: 60, quality: 8.2, status: 'Attention' },
  { lob: 'Staffing', campaigns: 8, budget: 20, quality: 9.0, status: 'Healthy' },
];

const statusStyles = {
  Healthy: 'bg-green-100 text-green-700',
  'At Risk': 'bg-yellow-100 text-yellow-700',
  Attention: 'bg-yellow-100 text-yellow-700',
};

function LOBPerformance() {
  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-900">Portfolio Health — LOB Performance</h2>
        <a href="#" className="text-sm text-cyan-600 font-medium flex items-center gap-1">
          View All <ChevronRight size={16} />
        </a>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-400 tracking-wide">
              <th className="px-6 py-3 font-medium">LOB</th>
              <th className="px-6 py-3 font-medium">CAMPAIGNS</th>
              <th className="px-6 py-3 font-medium">BUDGET USED</th>
              <th className="px-6 py-3 font-medium">AVG QUALITY</th>
              <th className="px-6 py-3 font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.lob} className="border-t border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">{row.lob}</td>
                <td className="px-6 py-4 text-cyan-600 font-medium">{row.campaigns}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-40 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-cyan-600 rounded-full"
                        style={{ width: `${row.budget}%` }}
                    ></div>
                    </div>
                    <span className="text-gray-500 text-xs">{row.budget}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900">{row.quality}</td>
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

export default LOBPerformance;