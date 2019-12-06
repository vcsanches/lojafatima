window.onload = function(e) {
	fetch(
		'http://localhost:8080/Backend/pessoas', {		
		}).then(response => response.json())				
	.then(data => { 
		console.log(data);
		data.forEach(pessoa => {  
			var table = document.getElementById("tabeladedados");
			var row = table.insertRow(-1);
			var idColuna = row.insertCell(0);
			var nomeColuna = row.insertCell(1); 
			var emailColuna = row.insertCell(2); 
			var sexoColuna = row.insertCell(3); 
			idColuna.innerHTML = pessoa.id;
			nomeColuna.innerHTML = pessoa.nome;
			emailColuna.innerHTML = pessoa.email;
			sexoColuna.innerHTML = pessoa.sexo;
		})
	}).catch(error => console.error(error))
}

function adicionarPessoa(){
	document.getElementById('formPessoa').style.display="block"
}

function enviarForm() {
	var form = document.getElementById('adicionarPessoa');
	var data = {};
	data['nome'] = form.nome.value 
	data['email'] = form.email.value;
	data['sexo'] = form.sexo.value;
	// console.log(JSON.stringify(data));
	fetch('http://localhost:8080/Backend/pessoas', {
		method: 'POST',       
		body: JSON.stringify(data)
	})
	.then((response) => {
		if (response.ok) {
			return response.json() 
		} else {
			return Promise.reject({ status: res.status, statusText: res.statusText });
		}   

	})
	.then((data) => console.log(data))
	.catch(err => console.log('Error message:', err.statusText));
}
