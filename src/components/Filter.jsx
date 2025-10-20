function Filter({ onFilter }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => onFilter(e.target.value, null)}
      />
      <input
        type="number"
        placeholder="Min rating..."
        onChange={(e) => onFilter(null, e.target.value)}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

export default Filter;
