class Note {
  constructor(data) {
    console.log(this)
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    Note.all.push(this);
    this.noteList = document.getElementById("notes-list")
    console.log(this);
  }

  renderListItem(note){
    this.note = note;
    let li = document.createElement('li');
    let header = document.createElement('h3');
    let button = document.createElement('button');
    button.setAttribute("class", "buttonName")
    button.setAttribute("data-id", this.id)
    // button.
    button.innerText = "edit"


    header.innerText = this.title

    li.appendChild(header)
    li.appendChild(button)
    this.noteList.appendChild(li)

  }

  findById(id){
    console.log(this.note);
    console.log(id);
    return this.all.find(note => this.note.id === id)
  }


}

Note.all = []
