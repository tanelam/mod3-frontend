class App {
  constructor(){
    this.attachEventListeners()
    this.noteList = document.getElementById("notes-list")
  }

  fetchNotes(){

  fetch('http://localhost:3000/api/v1/notes')
  .then(resp => resp.json())
  .then(json => {
    json.forEach(note => {
      // console.log(note)
        this.noteList.append(new Note(note).renderListItem(note));
      })
    })
    .then(() => this.attachEventListeners())
}

  fetchUsers(){
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => console.log(json))
  }


  attachEventListeners(){
    let buttons = document.getElementsByClassName('buttonName')
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", event => {
      // let noteId = event.target.dataset.id
      let noteId = event.target.dataset.id

      // note.findById(noteId)
      console.log("hello")
      console.log(noteId)
      })
    }
  }


}
