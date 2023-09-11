let count = 0;
function schet() {
  count = count + 1;
  //   document.querySelector(".d-1").innerHTML = count;
  this.innerHTML = count;
}

const div1 = document.querySelector(".d-1");
const div2 = document.querySelector(".d-2");

document.querySelector(".b-1").addEventListener("click", schet.bind(div1));
document.querySelector(".b-2").addEventListener("click", schet.bind(div2));
