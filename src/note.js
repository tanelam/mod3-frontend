class Note {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    // Note.all.push(this);
    this.noteList = document.getElementById("notes-list")
    this.showingNote = document.getElementById("third-column")
  }

  renderNoteList(json){
    for(let i = 0; i < json.length; i++){
        // console.log(json[i].id)
    let note = json[i]

    let div = document.createElement('div')
    // div.setAttribute("data-noteId", note.id )
    div.setAttribute("class", "notes-container")
    let header = document.createElement("p")
    header.setAttribute("data-noteId", note.id )
    let li = document.createElement("li")
    li.innerText = note.body
    header.innerText = note.title

    div.appendChild(header)
    this.noteList.appendChild(div)

    header.addEventListener("click", () => {
      // console.log("mouse check")

      this.getNote(event)

    })
   }
  }

  getNote(event){
    // console.log("inside event")
    let noteId = event.target.dataset.noteid

    fetch(`http://localhost:3000/api/v1/notes/${noteId}`)
    .then(resp => resp.json())
    .then(json => this.showNote(json))
  }

  showNote(json){
    let newShow = new Show(json)
    newShow.render();
    console.log(this.showingNote)
  }



}

// Note.all = []
