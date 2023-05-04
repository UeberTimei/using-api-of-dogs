const select = document.querySelector('#breed');
const button = document.querySelector('#submit');
const dogImage = document.querySelector('#dog-image');

fetch('https://dog.ceo/api/breeds/list/all')
	.then(response => response.json())
	.then(data => {
		for (const breed in data.message) {
			const option = document.createElement('option');
			option.value = breed;
			option.textContent = breed.slice(0, 1).toUpperCase() + breed.slice(1);
			select.appendChild(option);
		}
	});

fetch('https://dog.ceo/api/breeds/image/random')
	.then(response => response.json())
	.then(data => {
		dogImage.innerHTML = `<img src="${data.message}">`;
	});

button.addEventListener('click', (event) => {
	event.preventDefault();
	const selectedBreed = select.value;
	let url = 'https://dog.ceo/api/breeds/image/random';
	if (selectedBreed !== '') {
		url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
	}
	fetch(url)
		.then(response => response.json())
		.then(data => {
			dogImage.innerHTML = `<img src="${data.message}">`;
		});
});
