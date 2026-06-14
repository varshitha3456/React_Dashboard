function ProgressBar({ percent, color, width = 'w-40' }) {
    return (
      <div className="flex items-center gap-3">
        <div className={`${width} h-1.5 bg-gray-100 rounded-full overflow-hidden`}>
          <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }}></div>
        </div>
        <span className="text-gray-500 text-xs">{percent}%</span>
      </div>
    );
  }
  
  export default ProgressBar;