function btnClick() {
  let a = Math.random();
  let b = a * 3;
  console.log(Math.floor(b));
}

function imgfun1() {
  let rock = (document.getElementById("img").src = "rock.png");

  function AutoImg() {
    let num = Math.random() * 3;
    let i = Math.floor(num);
    console.log(i);
    if (i == 0) {
      let rock = (document.getElementById("Aimg").src = "rock.png");

      if (rock == rock) {
        document.getElementById("result").innerHTML = "Draw";
      }
    } else if (i == 1) {
      let paper = (document.getElementById("Aimg").src = "paper.png");

      if (rock && paper) {
        document.getElementById("result").innerHTML = "You Lost";
        function btn() {
          let elem = document.getElementById("Comscore").innerHTML;
          elem++;
          console.log(elem);
          document.getElementById("Comscore").innerHTML = elem;
        }
        btn();
      }
    } else if (i == 2) {
      let scissor = (document.getElementById("Aimg").src = "scissor.png");

      if (rock && scissor) {
        document.getElementById("result").innerHTML = "You Win";
        function btn() {
          let elem = document.getElementById("Myscore").innerHTML;
          elem++;
          console.log(elem);
          document.getElementById("Myscore").innerHTML = elem;
        }
        btn();
      }
    }
  }
  AutoImg();
}
function imgfun2() {
  let paper = (document.getElementById("img").src = "paper.png");

  function AutoImg() {
    let num = Math.random() * 3;
    let i = Math.floor(num);
    console.log(i);
    if (i == 0) {
      let rock = (document.getElementById("Aimg").src = "rock.png");
      if (paper && rock) {
        document.getElementById("result").innerHTML = "You Win";
        function btn() {
          let elem = document.getElementById("Myscore").innerHTML;
          elem++;
          console.log(elem);
          document.getElementById("Myscore").innerHTML = elem;
        }
        btn();
      }
    } else if (i == 1) {
      let paper = (document.getElementById("Aimg").src = "paper.png");
      if (paper == paper) {
        document.getElementById("result").innerHTML = "Draw";
      }
    } else if (i == 2) {
      let scissor = (document.getElementById("Aimg").src = "scissor.png");
      if (paper && scissor) {
        document.getElementById("result").innerHTML = "You Lost";
        function btn() {
          let elem = document.getElementById("Comscore").innerHTML;
          elem++;
          console.log(elem);
          document.getElementById("Comscore").innerHTML = elem;
        }
        btn();
      }
    }
  }
  AutoImg();
}
function imgfun3() {
  let scissor = (document.getElementById("img").src = "scissor.png");

  function AutoImg() {
    let num = Math.random() * 3;
    let i = Math.floor(num);
    console.log(i);
    if (i == 0) {
      let rock = (document.getElementById("Aimg").src = "rock.png");
      if (scissor && rock) {
        document.getElementById("result").innerHTML = "You Lost";
        function btn() {
          let elem = document.getElementById("Comscore").innerHTML;
          elem++;
          console.log(elem);
          document.getElementById("Comscore").innerHTML = elem;
        }
        btn();
      }
    } else if (i == 1) {
      let paper = (document.getElementById("Aimg").src = "paper.png");
      if (scissor && paper) {
        document.getElementById("result").innerHTML = "You Win";
        function btn() {
          let elem = document.getElementById("Myscore").innerHTML;
          elem++;
          console.log(elem);
          document.getElementById("Myscore").innerHTML = elem;
        }
        btn();
      }
    } else if (i == 2) {
      let scissor = (document.getElementById("Aimg").src = "scissor.png");
      if (scissor == scissor) {
        document.getElementById("result").innerHTML = "Draw";
      }
    }
  }
  AutoImg();
}

function btn() {
  let elem = document.getElementById("vl").innerHTML;
  elem++;
  console.log(elem);
  document.getElementById("vl").innerHTML = elem;
}
