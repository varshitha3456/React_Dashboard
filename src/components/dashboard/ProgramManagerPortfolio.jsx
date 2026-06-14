import PageHeader from '../ui/PageHeader';
import DataTable from '../ui/DataTable';
import ProgressBar from '../ui/ProgressBar';
import Badge from '../ui/Badge';

const data = [
  { name: 'David Brown', campaigns: 3, budget: '$120k', quality: 8.8, progress: 95, status: 'Healthy', barColor: 'bg-green-500' },
  { name: 'Maria Garcia', campaigns: 2, budget: '$90k', quality: 7.6, progress: 81, status: 'Attention', barColor: 'bg-orange-500' },
  { name: 'Robert Taylor', campaigns: 4, budget: '$150k', quality: 9.2, progress: 98, status: 'Healthy', barColor: 'bg-green-500' },
];

const statusStyles = {
  Healthy: 'bg-status-healthy-bg text-status-healthy-text',
  'At Risk': 'bg-status-atrisk-bg text-status-atrisk-text',
  Attention: 'bg-status-attention-bg text-status-attention-text',
};

const columns = [
  { key: 'name', label: 'PROGRAM MANAGER', render: (row) => <span className="font-medium text-gray-900">{row.name}</span> },
  { key: 'campaigns', label: 'CAMPAIGNS', render: (row) => <span className="text-blue-500 font-medium">{row.campaigns}</span> },
  { key: 'budget', label: 'BUDGET USED', render: (row) => <span className="text-gray-500">{row.budget}</span> },
  { key: 'quality', label: 'AVG QUALITY', render: (row) => <span className="text-gray-900">{row.quality}</span> },
  { key: 'progress', label: 'PROGRESS', render: (row) => <ProgressBar percent={row.progress} color={row.barColor} width="flex-1" /> },
  { key: 'status', label: 'STATUS', render: (row) => <Badge color={statusStyles[row.status]}>{row.status}</Badge> },
];

function ProgramManagerPortfolio() {
  return (
    <section>
      <PageHeader title="Program Manager Portfolio" />
      <DataTable columns={columns} rows={data} />
    </section>
  );
}

export default ProgramManagerPortfolio;