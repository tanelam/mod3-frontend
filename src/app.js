class App {
  constructor(){
    this.attachEventListener()
    this.noteList = document.getElementById("notes-list")
  }

  fetchNotes(){
  fetch('http://localhost:3000/api/v1/notes')
  .then(resp => resp.json())
  .then(json => new Note(json).renderNoteList(json))
  }

  fetchUsers(){
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

  attachEventListener(){
    let button = document.getElementById("create-button")
    // console.log(button)
    button.addEventListener("click", event => {
      let newShow = new Show();
       newShow.renderForm()
    })
  }

}
