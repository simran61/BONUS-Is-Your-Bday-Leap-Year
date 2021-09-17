var userName = document.querySelector('#name')
var birthDate = document.querySelector('#birthDate');
var noName = document.querySelector('.noName');
var noDate = document.querySelector('.noDate');

var initial = document.querySelector('.initial');
var final = document.querySelector('.final');
var leap = document.querySelector('.leap');
var notleap = document.querySelector('.notleap');

var continueBtn = document.querySelector('.continueBtn');
var checkBtn = document.querySelector('.checkBtn')

continueBtn.addEventListener('click', () => {
  if (userName.value === "") {
    noName.innerText = "Please enter your name"
  }
  else {
    document.getElementById('welcome').innerHTML = "Heyy " + userName.value + "....";
    final.style.display = "block"
    initial.style.display = "none"
  }
})

checkBtn.addEventListener('click', () => {
  if (birthDate.value === "") {
    noDate.innerText = "Please enter your birth date"
    console.log('no date')
  }
  else {
    var birthYear = birthDate.value.substring(0, 4);
    console.log(birthYear);
    if (calculate(birthYear)) {
      noDate.style.display="none"
      leap.style.display = "block"
      notleap.style.display = "none"
    }
    else {
      noDate.style.display="none"
      notleap.style.display = "block"
      leap.style.display = "none"
      console.log('this is not leap')
    }
  }
})

function calculate(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }
  return false;
}