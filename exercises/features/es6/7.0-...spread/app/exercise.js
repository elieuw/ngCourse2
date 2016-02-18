'use strict';

// the following line forces SystemJS to transpile the exercise
export let thisWorkWithSystemJs = true;

const element = document.getElementById('example');
const aToJ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const kToR = ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];
const sToZ = ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const allLetters = aToJ.concat(kToR).concat(sToZ);


element.innerHTML = allLetters.join(', ');