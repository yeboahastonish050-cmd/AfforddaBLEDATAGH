document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu1").style.display = "block";
  document.getElementById("menu2").style.display = "block";
  document.getElementById("menu3").style.display = "block";
  document.getElementById("menu4").style.display = "block";
  document.getElementById("menu5").style.display = "block";
});
let nets = ["MTN", "TELECEL", "AIRTELTIGO"];
document.getElementById("main").addEventListener("click", function () {
  document.getElementById("menu1").style.display = "none";
});
document.getElementById("contain").addEventListener("click", function () {
  document.getElementById("menu2").style.display = "none";
});
document.getElementById("contain1").addEventListener("click", function () {
  document.getElementById("menu3").style.display = "none";
});
document.getElementById("contain2").addEventListener("click", function () {
  document.getElementById("menu4").style.display = "none";
});

document.getElementById("MTN1").addEventListener("click", function () {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "block";
  document.getElementById("menu2").style.display = "none";
  document.getElementById("net").innerText = nets[0];
});
document.getElementById("TELECEL").addEventListener("click", function () {
  document.getElementById("one").style.display = "none";
  document.getElementById("three").style.display = "block";
  document.getElementById("menu3").style.display = "none";
  document.getElementById("net").innerText = nets[1];
});
document.getElementById("AIRTELTIGO").addEventListener("click", function () {
  document.getElementById("one").style.display = "none";
  document.getElementById("four").style.display = "block";
  document.getElementById("menu4").style.display = "none";
  document.getElementById("net").innerText = nets[2];
});
document.getElementById("home").addEventListener("click", function () {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("menu1").style.display = "none";
});
document.getElementById("home1").addEventListener("click", function () {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("menu1").style.display = "none";
});
document.getElementById("home2").addEventListener("click", function () {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("menu1").style.display = "none";
});
document.getElementById("home3").addEventListener("click", function () {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("menu1").style.display = "none";
});
document.getElementById("home4").addEventListener("click", function () {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("menu1").style.display = "none";
  document.getElementById("seven").style.display = "none";
});

let selectedPrice = "";
let data = "";
let rnumb = "";

function alpha(packageName, price) {
  const sub = document.getElementById("submenu");
  const body1 = document.getElementById("body1");
  const back = (document.getElementById("containe1").style.display = "block");
  const back1 = (document.getElementById("containe2").style.display = "block");
  const back2 = (document.getElementById("containe3").style.display = "block");
  const four = (document.getElementById("four").style.overflow = "hidden");
  const two = (document.getElementById("two").style.overflow = "hidden");
  const three = (document.getElementById("three").style.overflow = "hidden");
  body1.style.height = "100vh";
  body1.style.display = "flex";
  body1.style.justifyContent = "center";
  sub.style.display = "block";
  sub.innerHTML = `<div class="navs">
        <div>
          <p>confirm purchase</p>
          <h4>bundle details</h4>
        </div>
        <div>
          <button onclick = 'remove()'>x</button>
        </div>
      </div>
      <hr />
      <div class="extral1">
        <div class="extral">
          <p>Network</p>
          <p>Package</p>
          <p>Price</p>
        </div>
        <div class="extral">
          <h4>EXPRESS</h4>
          <h4 id="Data"></h4>
          <h4 id="price"></h4>
        </div>
      </div>
      <form action="">
        <label for="number">Recipient Phone Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          placeholder="0552158204"
          pattern =
      "0[2-5]{1}[1-9]{1}[0-9]{7}"
          required
        />
        <p>
          Data will be sent directly to this number. Double-check before paying.
        </p>
      <div class='sub'  id='sub'><button 
      >Payment & <span id = 'amoun'></span></button></div>
      </form>
`;
  document.getElementById("amoun").innerText = price;
  document.getElementById("Data").innerText = packageName;
  document.getElementById("price").innerText = price;
  selectedPrice = price;
  data = packageName;

  document.getElementById("sub").addEventListener("click", function () {
    const input = document.getElementById("number").value;
    if (input === "") {
      alert("inavlid number");
    } else {
      document.getElementById("submenu").style.display = "none";
      document.getElementById("containe1").style.display = "none";
      document.getElementById("four").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("five").style.display = "block";
      document.getElementById("amount").innerText = selectedPrice;
      document.getElementById("one").style.display = "none";
      document.getElementById("navs").style.display = "none";
    }
    rnumb = input;
  });
}
function remove() {
  document.getElementById("containe1").style.display = "none";
  const four = (document.getElementById("four").style.overflow = "");
  const two = (document.getElementById("two").style.overflow = "");
  document.getElementById("submenu").style.display = "none";
  const three = (document.getElementById("three").style.overflow = "");
  const body1 = document.getElementById("body1");
  body1.style.height = "100%";
  body1.style.display = "block";
  body1.style.justifyContent = "none";
}

const whats = document
  .getElementById("whatsapp")
  .addEventListener("click", function () {
    window.location.href =
      "https://chat.whatsapp.com/IBrdk2TGo5d8Dt647GkmZW?s=sh&p=a&ilr=0";
  });
function Cancel() {
  document.getElementById("five").style.display = "none";
  document.getElementById("one").style.display = "block";
  document.getElementById("navs").style.display = "block";
  document.getElementById("submenu").style.display = "none";
  const three = (document.getElementById("three").style.overflow = "");
  const body1 = document.getElementById("body1");
  body1.style.height = "100%";
  body1.style.display = "block";
  body1.style.justifyContent = "none";
}
function Cancel1() {
  document.getElementById("six").style.display = "none";
  document.getElementById("one").style.display = "block";
  document.getElementById("navs").style.display = "block";
  document.getElementById("submenu").style.display = "none";
  const three = (document.getElementById("three").style.overflow = "");
  const body1 = document.getElementById("body1");
  body1.style.height = "100%";
  body1.style.display = "block";
  body1.style.justifyContent = "none";
}
const selected = document.getElementById("opt").value;
let phone1 = "";

function confirm() {
  document.getElementById("amount1").innerText = selectedPrice;
  const phone = document.getElementById("phone").value;
  if (phone === "") {
    alert("please enter your number");
  } else {
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "block";
  }
  phone1 = phone;
}
function Complete() {
  document.getElementById("seven").style.display = "block";
  document.getElementById("navs").style.display = "block";
  document.getElementById("six").style.display = "none";
  document.getElementById("data2").innerText = data;
  document.getElementById("rnumb").textContent = rnumb;
  document.getElementById("snumb").textContent = phone1;
  document.getElementById("payed").innerText = selectedPrice;
  const date1 = (document.getElementById("date").innerHTML = new Date());
  console.log(date1);
}
