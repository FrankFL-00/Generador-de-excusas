/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function Palabrarandom(array) {
    let PosicionRandom = Math.floor(Math.random() * array.length);
    return array[PosicionRandom];
  }

  let PalabraWho = Palabrarandom(who);
  let PalabraAction = Palabrarandom(action);
  let PalabraWhat = Palabrarandom(what);
  let PalabraWhen = Palabrarandom(when);

  let sentence =
    PalabraWho + " " + PalabraAction + " " + PalabraWhat + " " + PalabraWhen;

  let Nuevaexcusa = document.getElementById("excuse");

  Nuevaexcusa.innerHTML = sentence;
};
