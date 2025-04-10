//Js Dom Manipulation
//window object is a global object
// all are below this Window Object
//like gobal var,global method
//Dom- Document Object MOdel

// let mydiv =document.querySelector('#mydiv');
// let newElement = document.createElement('h1');
// newElement.textContent ="Happy Birthday Siva Kumar"
// mydiv.insertAdjacentElement('beforebegin',newElement);

//Bom



/*beforebegin  -> before parent comes,
, afterbegin  -> child it will come
before end -> child class before it Comes
,afterend -> after end of child it comes*/
let parent =document.querySelector('#mydiv');
let child =document.querySelector('#para');
parent.removeChild(child);