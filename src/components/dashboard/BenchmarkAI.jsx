import Card from '../ui/Card';

const snapshotTiles = [
  { label: 'Best Model', value: 'Claude 4 Opus', sub: '92.4% accuracy', bg: 'bg-blue-100', labelColor: 'text-cyan-500' },
  { label: 'Lowest Latency', value: 'Llama 3.1', sub: '295 ms', bg: 'bg-green-100', labelColor: 'text-green-600' },
  { label: 'Most Cost Efficient', value: 'Llama 3.1', sub: '$0.002 / call', bg: 'bg-purple-100', labelColor: 'text-purple-600' },
  { label: 'Models Tracked', value: '12', sub: 'Active evaluations', bg: 'bg-indigo-100', labelColor: 'text-blue-500' },
];

const trendRows = [
  { model: 'GPT-5', change: '+1.2%', changeColor: '#16a34a', barColor: '#22c55e', prev: '90.8%', now: '92.0%', barWidth: 92 },
  { model: 'Claude 4 Opus', change: '-0.8%', changeColor: '#dc2626', barColor: '#ef4444', prev: '93.2%', now: '92.4%', barWidth: 92 },
  { model: 'Gemini 2 Ultra', change: '+2.4%', changeColor: '#16a34a', barColor: '#22c55e', prev: '88.1%', now: '90.5%', barWidth: 90 },
  { model: 'Llama 3.1', change: '+0.6%', changeColor: '#16a34a', barColor: '#22c55e', prev: '84.2%', now: '84.8%', barWidth: 85 },
];

function BenchmarkAI() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Benchmark & AI Performance</h2>
      <div className="grid grid-cols-2 gap-4">

        <Card>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Benchmark Snapshot</h3>
              <p className="text-xs text-gray-400">Latest evaluation suite results</p>
            </div>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-cyan-500">
              CX-Bench v2
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {snapshotTiles.map((tile) => (
              <div key={tile.label} className={`rounded-lg p-4 ${tile.bg}`}>
                <p className={`text-xs font-medium ${tile.labelColor}`}>{tile.label}</p>
                <p className="text-base font-bold text-gray-900 mt-1">{tile.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{tile.sub}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-gray-900">Model Improvement Trend</h3>
          <p className="text-xs text-gray-400 mb-4">Performance change vs previous benchmark run</p>

          <div className="space-y-4">
            {trendRows.map((row) => (
              <div key={row.model}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-900">{row.model}</span>
                  <span style={{ color: row.changeColor }} className="text-sm font-medium">
                    {row.change}
                  </span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: '#f3f4f6', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: row.barWidth + '%',
                      height: '6px',
                      backgroundColor: row.barColor,
                      borderRadius: '9999px'
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Prev: {row.prev}</span>
                  <span>Now: {row.now}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </section>
  );
}

export default BenchmarkAI;