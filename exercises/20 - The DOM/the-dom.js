/* console.dir(heading) - .dir shows all properties inside of object  */
// console.log(heading.testContent) - all text
// console.log(heading.innerText) - only human readable text
// console.log(heading.innerHTML) - 
// console.log(heading.outerHTML) -

// How to add text to an element
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// *Take note* insertAdjacentText is a mehtod - Remember to search MDN docs for JS methods!!
pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes
const picture = document.querySelector('.nice');
// Below common methods you can add to classes
picture.classList.add('open');
picture.classList.remove('cool');
picture.classList.toggle('round');
console.log(picture.classList);

// function with eventListener
function toggleRound() {
    picture.classList.toggle('round');
}

picture.addEventListener('click', toggleRound);