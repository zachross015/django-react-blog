import './App.css';
import { useEffect, useState } from 'react';

function FetchPosts() {
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
    return posts;
}

function BlogListEntryView({ listEntry }) {
    return (
        <div class='blog-list-entry'>
            <h3 class='blog-list-entry-title'><a href={ "/post/" + listEntry.id }>{ listEntry.title }</a></h3> 
        </div>
    )
}

function BlogListView({ list }) {
    return list.map((entry) => <BlogDetailView listEntry={entry}/>) 
}


function BlogDetailView({ listEntry }) {
    return (
        <article>
            <h1>{ listEntry.title }</h1> 
            { listEntry.content }
        </article>
    )
}

function App() {
    let posts = FetchPosts();
    return (
        <div className="App">
        <BlogListView list={posts} />
        </div>
    );
}

export default App;
