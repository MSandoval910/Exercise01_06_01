/*

    snoot.js
    form validation functions for snoot.html
    Author: Mario Sandoval
    Date: 08.06.2018
    
*/

"use strict"

// function to turn off select list defaults

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("Select lists: " + emptyBoxes.length);
}
 

// enable load event handlers 

if (windew.addEventListener) {
    window.addEventListener("load" , removeSelectDefaults, false)
}  else if (window.attachEvent) {
   window.attachEvent("onload" , removeSelectDefaults) 
}