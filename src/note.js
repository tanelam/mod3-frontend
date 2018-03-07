class Note {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    // Note.all.push(this);
    this.noteList = document.getElementById("notes-list")
  }

  renderNoteList(json){
    for(let i = 0; i < json.length; i++){
        // console.log(json[i])
    let note = json[i]

    let div = document.createElement('div')
    div.setAttribute("class", "notes-container")
    let header = document.createElement("p")
    let li = document.createElement("li")
    li.innerText = note.body
    header.innerText = note.title

    div.appendChild(header)
    this.noteList.appendChild(div)

    header.addEventListener("click", () => {
      console.log("mouse check")

    })
   }
  }



}

// Note.all = []
