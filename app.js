var userName = document.querySelector('#name')
var birthDate = document.querySelector('#birthDate');

var initial = document.querySelector('.initial');
var final = document.querySelector('.final');
var leap = document.querySelector('.leap');
var notleap = document.querySelector('.notleap');

var continueBtn = document.querySelector('.continueBtn');
var checkBtn = document.querySelector('.checkBtn')

continueBtn.addEventListener('click', () => {
  document.getElementById('welcome').innerHTML = "Heyy " + userName.value + "....";
  final.style.display = "block"
  initial.style.display = "none"
})

checkBtn.addEventListener('click', () => {
  var birthYear = birthDate.value.substring(0, 4);
  console.log(birthYear);
  if (calculate(birthYear)) {
    leap.style.display = "block"
    notleap.style.display = "none"
  }
  else {
    notleap.style.display = "block"
    leap.style.display = "none"
    console.log('this is not leap')
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