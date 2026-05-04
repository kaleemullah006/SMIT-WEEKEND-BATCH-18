auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "/login";
    return;
  }

  db.collection("blogs")
    .where("uid", "==", user.uid)
    .onSnapshot(snapshot => {

      const div = document.getElementById("myblogs");
      div.innerHTML = "";

      snapshot.forEach(doc => {
        let b = doc.data();

        div.innerHTML += `
          <div style="border:1px solid #aaa; margin:10px; padding:10px;">
            <h3>${b.title}</h3>
            <p>${b.content}</p>

            <button onclick="deleteBlog('${doc.id}')">Delete</button>
          </div>
        `;
      });

    });
});

function deleteBlog(id) {
  db.collection("blogs").doc(id).delete()
    .then(() => alert("Deleted"))
    .catch(err => alert(err.message));
}