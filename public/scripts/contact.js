"use strict";

var $ = function $(id) {
  return document.getElementById(id);
};

var sumbitBtn = $('sumbitBtn');
var toast = $('toast');
var inputName = $('inputName');
sumbitBtn.addEventListener('click', toastHTML);

function toastHTML(e) {
  e.preventDefault();
  toast.style.visibility = 'visible';
  toast.innerHTML = "Dear ".concat(inputName.value, " </br> Message delivered. We will get back to you as soon as possible. ");
  setInterval(function () {
    toast.style.display = 'none';
    location.reload();
  }, 2000);
}