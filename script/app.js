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

function showHideDesc(divName) {
  //hidden val
  var hiddenVal = document.getElementById("show-hide");

  //hide old
  if (hiddenVal.Value != undefined) {
    var oldDiv = document.getElementById(hiddenVal.Value);
    oldDiv.style.display = "none";
  }

  //show div
  var tempDiv = document.getElementById(divName);
  tempDiv.style.display = "block";

  //save div ID
  hiddenVal.Value = document.getElementById(divName).getAttribute("id");
}
showHideDesc("thele");