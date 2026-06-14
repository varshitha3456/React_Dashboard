import { ChevronRight } from 'lucide-react';

function PageHeader({ title, showViewAll = true }) {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {showViewAll && (
        <a href="#" className="text-sm text-blue-500 font-medium flex items-center gap-1">
          View All <ChevronRight size={16} />
        </a>
      )}
    </div>
  );
}

export default PageHeader;