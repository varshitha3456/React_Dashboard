function CostIntelligence() {
    return (
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Cost Intelligence</h2>
        <div className="grid grid-cols-4 gap-4">
  
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-1 bg-blue-500"></div>
            <div className="p-5">
              <p className="text-xs font-medium text-gray-400 tracking-wide">AI COST</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₹120k</p>
              <p className="text-xs text-gray-400 mt-1">This month</p>
            </div>
          </div>
  
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-1 bg-purple-500"></div>
            <div className="p-5">
              <p className="text-xs font-medium text-gray-400 tracking-wide">HUMAN WORKFORCE COST</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₹850k</p>
              <p className="text-xs text-gray-400 mt-1">This month</p>
            </div>
          </div>
  
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-1 bg-green-500"></div>
            <div className="p-5">
              <p className="text-xs font-medium text-gray-400 tracking-wide">SAVINGS GENERATED</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₹310k</p>
              <p className="text-xs text-green-600 font-medium mt-1">↑ AI-driven efficiency</p>
            </div>
          </div>
  
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-1 bg-violet-500"></div>
            <div className="p-5">
              <p className="text-xs font-medium text-gray-400 tracking-wide">COST PER TASK</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₹0.58</p>
              <p className="text-xs text-gray-400 mt-1">
                $0.72 <span className="text-green-600 font-medium">↓ 19%</span>
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default CostIntelligence;