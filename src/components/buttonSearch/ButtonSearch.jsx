//buttonSearch component

function ButtonSearch({ className, children }) {
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
}

export default ButtonSearch;
