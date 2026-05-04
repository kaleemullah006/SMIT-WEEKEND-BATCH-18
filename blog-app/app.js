db.collection("blogs")
  .orderBy("createdAt", "desc")
  .onSnapshot(snapshot => {

    const blogsDiv = document.getElementById("blogs");
    blogsDiv.innerHTML = "";

    snapshot.forEach(doc => {
      let b = doc.data();

      blogsDiv.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <h3>${b.title}</h3>
          <p>${b.content}</p>
        </div>
      `;
    });

  });