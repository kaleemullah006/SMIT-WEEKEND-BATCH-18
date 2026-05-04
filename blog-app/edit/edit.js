const id = new URLSearchParams(window.location.search).get("id");

// Load existing data
db.collection("blogs").doc(id).get()
  .then(doc => {
    let data = doc.data();
    document.getElementById("title").value = data.title;
    document.getElementById("content").value = data.content;
  });

function updateBlog() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  db.collection("blogs").doc(id).update({
    title,
    content
  })
  .then(() => {
    alert("Updated Successfully");
    window.location.href = "/my-blog";
  })
  .catch(err => alert(err.message));
}