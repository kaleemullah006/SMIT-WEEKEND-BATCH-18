// import React from 'react'

// async function MultipleAPI() {

//     const userAPI = fetch("https://jsonplaceholder.typicode.com/users")
//     const postAPI = fetch("https://jsonplaceholder.typicode.com/posts")

//     const [userRes, postRes] = await Promise.all([userAPI,postAPI])

//     const users = await userRes.json()
//     const posts = await postRes.json()
//   return (<>
//     <div>MultipleAPI</div>
//     <h1>Posts: {posts.length}</h1>
//     <h1>Users: {users.length}</h1>
//   </>
//   )
// }


// export default MultipleAPI

import React from 'react'

async function MultipleAPI() {
    const userAPI = fetch("https://jsonplaceholder.typicode.com/users")
    const postAPI = fetch("https://wrong-url.com/posts")

    const [userRes, postRes] = await Promise.allSettled([userAPI,postAPI]);
let users = []
let posts = []
   

    if (userRes.status === "fulfilled"){
        users = await userRes.value.json();
        console.log(users, "user====>")

    }

    if(postRes.status === "fulfilled"){
        posts = await postRes.value.json()
        console.log("api rejected")

    }

  return (<>
    <div>MultipleAPI</div>

    
    {users.map((user)=>(
        <p key={user.id}>{user.name}</p>
    ))}

    <h1>posts {posts.length}</h1>
   
  </>
  )
}

export default MultipleAPI