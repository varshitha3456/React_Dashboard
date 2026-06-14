function Card({ accentColor, children, className = '' }) {
    return (
      <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${className}`}>
        {accentColor && <div className={`h-1 ${accentColor}`}></div>}
        <div className="p-5">
          {children}
        </div>
      </div>
    );
  }
  
  export default Card;