const form = document.getElementById('form')
const searchInput = document.getElementById('search-bar')

var searched = document.getElementById('searched')
var searchResult = document.createElement('div')

searchResult.innerHTML = '<h4>Faça uma pesquisa para ver os resultados</h4>'
searched.appendChild(searchResult)


form.addEventListener("submit", (submission) => {
	submission.preventDefault()
	
	const ul = document.getElementById('productList')
	let li = document.createElement("div.container-fluid")
	
	searchResult.innerHTML = `<h4>Resultado de: ${searchInput.value}</h4>`
	
	searched.appendChild(searchResult)
	
	ul.textContent = ""
	fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchInput.value}`)
	.then(res => res.json())
	.then((json) => {
		json.results.forEach((item) => {
			li = document.createElement("div.container-fluid")
			li.innerHTML = `
			<div class="card" style="width: 18rem;">
  				<img src="${item.thumbnail}" class="card-img-top" style="max-width: 190px; align-self: center;" alt="...">
  				<div class="card-body">
    				<h5 class="card-title">${item.title}</h5>
					<p class="card-text">R$${item.price}</p>
    				<a href="${item.permalink}" target="_blank" class="btn btn-primary">Vá para o site de origem</a>
  				</div>
			</div>
			`
			ul.appendChild(li)
		})
	})
	searchInput.value = ""
})
