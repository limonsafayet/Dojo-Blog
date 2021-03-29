import "./App.css";

function App() {
  const title = "Weelcome to the new blog";
  const likes = 50;
  const person = {name: 'limon', age:30};
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
      </div>
    </div>
  );
}

export default App;
