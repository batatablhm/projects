prenom.onkeydown = () => {
  let prenom = document.querySelector("#prenom");
  let firstsp = document.getElementById("firstsp");
  firstsp.innerText = prenom.value;
};

nom.onkeydown = () => {
  let nom = document.querySelector("#nom");
  let secondsp = document.getElementById("secondsp");
  secondsp.innerText = nom.value;
};
mail.onkeydown = () => {
  let mail = document.querySelector("#mail");
  let thirdsp = document.querySelector("#thirdsp");
  thirdsp.innerText = mail.value;
};
num.onkeydown = () => {
  let num = document.querySelector("#num");
  let spfour = document.querySelector("#spfour");
  spfour.innerText = num.value;
};

let adress = document.querySelector("#adress");
adress.onkeydown = () => {
  let spfive = document.querySelector("#spfive");
  spfive.innerText = adress.value;
};

let cp = document.querySelector("#cp");
cp.onkeydown = () => {
  let spsix = document.querySelector("#spsix");
  spsix.innerText = cp.value;
};
let spseven = document.querySelector("#vil");
vil.onkeydown = () => {
  let spseven = document.querySelector("#spseven");
  spseven.innerText = vil.value;
};
let swp = document.querySelector("#swp");
swp.onkeydown = () => {
  let speight = document.querySelector("#speight");
  speight.innerText = swp.value;
};
let ddp = document.querySelector("#ddp");
ddp.onkeydown = () => {
  let spnine = document.querySelector("#spnine");
  spnine.innerText = ddp.value;
};
let button = document.querySelector("button");
let cnum = 0;
button.onclick = () => {
  let cvc = document.getElementById("cvc");
  document.getElementById("c-container").insertAdjacentHTML(
    "afterbegin",
    `
      <div style="display:flex" id="ndiv${cnum}">
        <input
          type="text"
          id="new-competence${cnum}"
          name="new-competence"
          placeholder="enter your competence here plz!"
          onkeydown="addcomp('new-competence${cnum}','comp-li${cnum}')"
        />
        <button id="button" onclick="deleteDiv('ndiv${cnum}')" > delete </button>
      </div>
  `
  );
  const li = document.createElement("li");
  li.id = "comp-li" + cnum;
  cvc.appendChild(li);
  cnum++;
};

const addcomp = function (id_input, id_li) {
  document.getElementById(id_li).innerText =
    document.getElementById(id_input).value;
};

const deleteDiv = function (iD) {
  let answer = window.confirm("are you sure to delete this?");
  if (answer) {
    document.getElementById(iD).remove();
  }
};
