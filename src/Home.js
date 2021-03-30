const Home = () => {

    const handleClick = () => {
        console.log('hello')
    }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;
