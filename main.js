const formElemnts = document.querySelectorAll('.form [name]');
const btn = document.getElementById('btn');
const list = document.querySelector('.list');
let persons = [];
console.log(persons);

const render = () => {
	persons.forEach(person => {
		list.innerHTML = `
  <li>
    <h2>Ism:${person.fname}</h2>
    <h2>Familiya:${person.lname}</h2>
    <h2>Yosh:${person.age}</h2>
    <h2>Bolim:${person.department}</h2>
  </li>
  `;
	});
};
console.log(formElemnts);

btn.addEventListener('click', () => {
	const person = {};
	formElemnts.forEach(el => {
		person[el.getAttribute('name')] = el.value;
	});
	persons.push(person);
	render();
});
