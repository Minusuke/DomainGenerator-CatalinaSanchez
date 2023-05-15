let pronouns = ["la", "y la", "el", "tu"];
let adjectives = ["queso", "potaxie", "fife", "ternure"];
let domains = [".com", ".net", ".es", ".cl"];

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let domain of domains) {
      let div = document.createElement("div");
      div.innerText = `${pronoun}${adjective}${domain}`;
      document.body.appendChild(div);
    }
  }
}
