class Show {
  constructor(data){
    console.log(data);
    this.noteList = document.getElementById("notes-list")
    this.showingNote = document.getElementById("third-column")
    // debugger

    if (data){
      this.title = data.title;
      this.id = data.id;
      this.user = data.user;
      this.body = data.body;
    }
  }


  renderForm(){
    // let body = document.body
    let formDiv = document.getElementById("third-column")
    formDiv.innerText = ""
    let div = document.createElement("div")
    formDiv.append(div)

    let form = document.createElement("form")
    form.setAttribute("id", "form")

    // TODO get userid
    // form.setAttribute("data-userid", )

    let submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("class", "submit")

    let inputTitle = document.createElement("textarea")
    inputTitle.setAttribute("cols", "120")
    inputTitle.setAttribute("placeholder", "Title your note")
    inputTitle.setAttribute("id", "title")

    let inputBody = document.createElement("textarea")
    inputBody.setAttribute("placeholder", "Start typing...")
    inputBody.setAttribute("rows", "43")
    inputBody.setAttribute("cols", "120")
    inputBody.setAttribute("id", "body")

    form.append(submit)
    form.append(inputTitle)
    form.append(inputBody)
    div.append(form)
    formDiv.append(div)

    this.submitButtonEvent()

  }
  //
  render(){
    let formDiv = document.getElementById("third-column")
    formDiv.innerText = ""
    let div = document.createElement("div")
    formDiv.append(div)

    let form = document.createElement("form")
    form.setAttribute("id", "form")

    // TODO get userid
    // form.setAttribute("data-userid", )

    let submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("class", "submit")

    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("id", "delete-button")
    deleteButton.innerText = "Delete"

    let inputTitle = document.createElement("textarea")
    inputTitle.setAttribute("cols", "120")
    inputTitle.setAttribute("placeholder", "Title your note")
    inputTitle.setAttribute("id", "title")
    inputTitle.innerText = this.title

    let inputBody = document.createElement("textarea")
    inputBody.setAttribute("placeholder", "Start typing...")
    inputBody.setAttribute("rows", "43")
    inputBody.setAttribute("cols", "120")
    inputBody.setAttribute("id", "body")
    inputBody.innerText = this.body


    form.append(submit)
    form.append(deleteButton)
    form.append(inputTitle)
    form.append(inputBody)
    // form.append(submit)

    div.append(form)
    formDiv.append(div)

    // debugger
    this.editButtonEvent(this.id)
    this.deleteButtonEvent(this.id)


  }

  submitButtonEvent(){

    let submitButtons = document.getElementsByClassName("submit")
    // console.log(submitButtons)
    for (let i = 0; i < submitButtons.length; i++){
    submitButtons[i].addEventListener("click", () => {
      event.preventDefault()
       // console.log("hello")
       let title = document.getElementById("title").value
       let body = document.getElementById("body").value
        // console.log(title)
        // debugger

       this.postNote(title, body)

       document.getElementById("form").innerHTML = ""
       })
    }
  }

  postNote(title, body){
    fetch('http://localhost:3000/api/v1/notes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({title: title, body: body})
    })
    .then(resp => resp.json())
    .then(json => this.displayNote(json))
  }

  displayNote(json){
     // console.log(json.id)
    let noteList = document.getElementById("notes-list")

    let div = document.createElement('div')
    div.setAttribute("class", "notes-container")
    let header = document.createElement("p")
    header.setAttribute("data-noteId", json.id)

    header.innerText = json.title

    div.appendChild(header)
    noteList.appendChild(div)
  }

  editButtonEvent(id){
    let submitButtons = document.getElementsByClassName("submit")
    for (let i = 0; i < submitButtons.length; i++){
    submitButtons[i].addEventListener("click", () => {
      event.preventDefault()

       let title = document.getElementById("title").value
       let body = document.getElementById("body").value

        let updateNote = document.getElementById(this.id)
        updateNote.innerText = title

       this.patchNote(title, body)

       // document.getElementById("title").value = ""
       // document.getElementById("body").value = ""
       document.getElementById("form").innerHTML = ""

       })
    }
  }

  deleteButtonEvent(id){
    let deleteButton = document.getElementById("delete-button")
    // console.log(id)
    deleteButton.addEventListener("click", () => {
      let updateNote = document.getElementById(this.id)
      updateNote.innerText = ""
      console.log(this.id)
      event.preventDefault()
      this.deleteButtonFetch()

      document.getElementById("form").innerHTML = ""
    })
  }

  deleteButtonFetch(){
    let noteId = this.id
    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({noteId: noteId})
    })
    .then(resp => resp.json())
    .then(json => alert(json.message))
  }

  patchNote(title, body){
    let noteId = this.id

    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({title: title, body: body, id: noteId})
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

}
