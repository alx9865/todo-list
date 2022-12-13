import "./App.css";

const ls = localStorage;
var i = 0;
//ls.clear();
const addToDo = () => {
  var todo = document.getElementById("input").value;
  do {
    i++;
  } while (ls.getItem(i) != null);
  ls.setItem(i, todo);
  window.location.reload();
};

const deleteToDo = (event) => {
  //alert(event.target.id);
  let id = event.target.id;
  ls.removeitem(id);
};
function App() {
  return (
    <div>
      <h2 className="Title">Todo List</h2>
      <div className="Input">
        <input id="input" placeholder="To Do"></input>
        <button onClick={addToDo}>Add</button>
      </div>
      <div className="Todo">
        {Object.keys(ls).map((key) => (
          <li>
            {ls.getItem(key)}
            <button id={key} onClick={deleteToDo}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
