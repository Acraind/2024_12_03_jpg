class Meme {
  id = undefined;
  text = "";
  x = 0;
  y = 10;
  fontSize = 10;
  fontWeight = 500;
  underline = false;
  italic = false;
  color = "#FF7F00";
  imageId = -1;
  #endpoint = "/memes";
  constructor() {
    console.log("constructeur de memes");
  }
  save() {
    fetch(
      `https://localhost:5679${this.#endpoint}${
        undefined !== this.id ? "/" + this.id : ""
      }`,
      {
        method: undefined !== this.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this),
      }
    );
    // console.log("save at" + this.#endpoint, this);
    // this.publicSave();
    // this.#privateSave();
  }
  publicSave() {
    console.log("publicSave");
  }
  #privateSave() {
    console.log("privateSave");
  }
}
let meme = new Meme();
// meme.save();
