import './App.css';
import { useEffect, useState } from 'react';

function BlogListEntryView({ listEntry }) {
    return (
        <div>
            <h3>{ listEntry.title }</h3> 
        </div>
    )
}

function BlogListView({ list }) {
    return list.map((entry) => <BlogListEntryView listEntry={entry}/>) 
}


function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/post/', {mode: 'cors'})
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

  return (
    <div className="App">
      <BlogListView list={posts} />
    </div>
  );
}

export default App;
