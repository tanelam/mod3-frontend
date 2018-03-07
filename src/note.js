class Note {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    Note.all.push(this);
    this.noteList = document.getElementById("notes-list")
  }

  renderListItem(note){
    let li = document.createElement('li')
    let header = document.createElement('h3')

    header.innerText = this.title

    li.appendChild(header)
    this.noteList.appendChild(li)

  }

  // findById(id){
  //   console.log(this.note);
  //   console.log(id);
  //   return this.all.find(note => this.note.id === id)
  // }

}

Note.all = []
