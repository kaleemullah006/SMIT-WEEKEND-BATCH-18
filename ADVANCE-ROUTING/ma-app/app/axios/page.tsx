import axios from 'axios'


async function AxiosEx() {

const  res = await axios.get("https://jsonplaceholder.typicode.com/posts");
const posts = res.data

  return (<>
    <div>AxiosEx</div>
    {/* {posts.map((post)=>(
        <div key={post.id}>
<h1>{post.titl}e</h1>
<h1>{post.body}</h1>
        </div>
    ))} */}

    {posts.map((post) => (
  <div key={post.id}>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
))}
  </>
  )
}

export default AxiosEx