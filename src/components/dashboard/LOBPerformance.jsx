import PageHeader from '../ui/PageHeader';
import DataTable from '../ui/DataTable';
import ProgressBar from '../ui/ProgressBar';
import Badge from '../ui/Badge';

const data = [
  { lob: 'HR', campaigns: 3, budget: 30, quality: 8.9, status: 'Healthy' },
  { lob: 'Sales', campaigns: 2, budget: 40, quality: 7.8, status: 'At Risk' },
  { lob: 'Product', campaigns: 4, budget: 50, quality: 9.1, status: 'Healthy' },
  { lob: 'Marketing', campaigns: 2, budget: 60, quality: 8.2, status: 'Attention' },
  { lob: 'Staffing', campaigns: 8, budget: 20, quality: 9.0, status: 'Healthy' },
];

const statusStyles = {
  Healthy: 'bg-status-healthy-bg text-status-healthy-text',
  'At Risk': 'bg-status-atrisk-bg text-status-atrisk-text',
  Attention: 'bg-status-attention-bg text-status-attention-text',
};

const columns = [
  { key: 'lob', label: 'LOB', render: (row) => <span className="font-medium text-gray-900">{row.lob}</span> },
  { key: 'campaigns', label: 'CAMPAIGNS', render: (row) => <span className="text-cyan-600 font-medium">{row.campaigns}</span> },
  { key: 'budget', label: 'BUDGET USED', render: (row) => <ProgressBar percent={row.budget} color="bg-cyan-600" width="w-40" /> },
  { key: 'quality', label: 'AVG QUALITY', render: (row) => <span className="text-gray-900">{row.quality}</span> },
  { key: 'status', label: 'STATUS', render: (row) => <Badge color={statusStyles[row.status]}>{row.status}</Badge> },
];

function LOBPerformance() {
  return (
    <section>
      <PageHeader title="Portfolio Health — LOB Performance" />
      <DataTable columns={columns} rows={data} />
    </section>
  );
}

export default LOBPerformance;