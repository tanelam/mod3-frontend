class Show {
  constructor(){
  }
  render(){
    let div = document.createElement("div")
    document.append(div)
    let form = document.createElement("form")
    form.setAttribute("id", "form")
    let input = document.createElement("input")
    input.setAttribute("type", "submit")
    input.setAttribute("value", "submit")

    form.append(input)
    div.append(form)
  }
}
