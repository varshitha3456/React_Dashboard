function Badge({ color, children }) {
    return (
      <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${color}`}>
        ● {children}
      </span>
    );
  }
  
  export default Badge;