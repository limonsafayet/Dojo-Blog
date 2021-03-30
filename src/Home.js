const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setBlogs(data);
        }).catch(err =>{
            console.log(err.message);
        })
      }, 1000);
    }, [])
  
    return (
      <div className="home">
        { isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} />}
      </div>
    );
  }
   
  export default Home;