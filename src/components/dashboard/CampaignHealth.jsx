import PageHeader from '../ui/PageHeader';
import DataTable from '../ui/DataTable';
import ProgressBar from '../ui/ProgressBar';
import Badge from '../ui/Badge';

const data = [
  { campaign: 'CX Support', manager: 'David Brown', budget: 70, budgetColor: 'bg-orange-500', quality: 8.9, progress: 82, risk: 'Low' },
  { campaign: 'Medical QA', manager: 'Maria Garcia', budget: 90, budgetColor: 'bg-red-500', quality: 7.2, progress: 61, risk: 'High' },
  { campaign: 'NLP Dataset', manager: 'Robert Taylor', budget: 45, budgetColor: 'bg-blue-400', quality: 9.1, progress: 75, risk: 'Low' },
  { campaign: 'HR Onboarding', manager: 'David Brown', budget: 55, budgetColor: 'bg-cyan-400', quality: 8.5, progress: 68, risk: 'Medium' },
];

const riskStyles = {
  Low: 'bg-status-low-bg text-status-low-text',
  Medium: 'bg-status-medium-bg text-status-medium-text',
  High: 'bg-status-high-bg text-status-high-text',
};

const columns = [
  { key: 'campaign', label: 'CAMPAIGN', render: (row) => <span className="font-medium text-gray-900">{row.campaign}</span> },
  { key: 'manager', label: 'PROGRAM MANAGER', render: (row) => <span className="text-gray-500">{row.manager}</span> },
  { key: 'budget', label: 'BUDGET', render: (row) => <ProgressBar percent={row.budget} color={row.budgetColor} width="w-28" /> },
  { key: 'quality', label: 'QUALITY', render: (row) => <span className="text-gray-900">{row.quality}</span> },
  { key: 'progress', label: 'PROGRESS', render: (row) => <ProgressBar percent={row.progress} color="bg-slate-800" width="w-28" /> },
  { key: 'risk', label: 'RISK', render: (row) => <Badge color={riskStyles[row.risk]}>{row.risk}</Badge> },
];

function CampaignHealth() {
  return (
    <section>
      <PageHeader title="Campaign Health" />
      <DataTable columns={columns} rows={data} />
    </section>
  );
}

export default CampaignHealth;