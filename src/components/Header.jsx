function Header() {
    return (
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200">
        <div className="text-sm text-gray-500">
          Pages / <span className="text-gray-900">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-semibold">
            AM
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Alex Morgan</p>
            <p className="text-xs text-gray-400">Enterprise admin</p>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;