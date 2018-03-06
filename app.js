class App {
  constructor(){
    this.fetchUsers();
  }

  fetchUsers(){
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => console.log(json))
  }
}
