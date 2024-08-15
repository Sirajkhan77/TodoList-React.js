// Todoitems.jsx
function Items({ name, date, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              onDeleteClick(name);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
