// Copyright function & log
console.log("(c)2023 @ra21006en");

//Back to top on reload
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

//Modal
var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});