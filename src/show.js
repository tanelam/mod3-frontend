class Show {
  constructor(){
    this.noteList = document.getElementById("notes-list")
  }

  renderForm(){
    let body = document.body
    let div = document.createElement("div")
    body.append(div)

    let form = document.createElement("form")
    form.setAttribute("id", "form")

    let submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "submit")
    submit.setAttribute("class", "submit")

    let inputContent = document.createElement("input")
    inputContent.setAttribute("type", "text")
    inputContent.setAttribute("placeholder", "Title")
    inputContent.setAttribute("id", "title")

    let inputBody = document.createElement("textarea")
    inputBody.setAttribute("placeholder", "Content")
    inputBody.setAttribute("rows", "20")
    inputBody.setAttribute("cols", "100")
    inputBody.setAttribute("id", "body")

    form.append(inputContent)
    form.append(inputBody)
    form.append(submit)
    div.append(form)
    body.append(div)

    this.submitButtonEvent()
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
       this.postNote(title, body)
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
    // console.log(json)
    let noteList = document.getElementById("notes-list")
    let li = document.createElement("li")
    let header = document.createElement('h3')
    header.innerText = json.title

    li.appendChild(header)
    noteList.appendChild(li)
  }
}
