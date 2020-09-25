const list = [1,2];

const textArea = document.querySelector('#textArea');
const text = document.querySelector('input');
const btn = document.querySelector('#btn');





btn.addEventListener('click', (event)=>{
	const texto = text.value;
	if (texto != '' && texto.lenght !== 0 && texto != ' ') {
		event.preventDefault();		
		textArea.innerHTML += `<li class='anime'> ${texto} </li>`;
		text.value = '';		
	}else{
		event.preventDefault();
		alert('preencha o campo')
	}


	/*const b = document.querySelector('b');
	b.addEventListener('click', (event)=>{
		console.log(event.target.nextElementSibling)
	})
*/

})