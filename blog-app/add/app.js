function addBlogs(){
    let user = auth.currentUser;
    if(!user){
        alert("please login first")
         window.location.href = "/login";
    return;
    }
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value

    if(!title || !content){
        alert("all fields are required")
        return
    }
    db.collection("blogs").add({
        title:title,
        content:content,
        uid:user.uid,
        createdAt: Date.now()

    })
    .then(()=>{
        alert("blogs added successfully")
        window.location.href = "/";
    })
    .catch((error)=>{
        console.log(error.message)
    })
}