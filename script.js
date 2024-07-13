const form = document.getElementById('form')
const searchInput = document.getElementById('search-bar')



form.addEventListener("submit", (submission) => {
	submission.preventDefault()
	
	console.log(searchInput.value)

	const searched = document.getElementById('searched')
	const title = document.createElement('div')
	title.innerHTML = `<h4>Resultado de: ${searchInput.value}</h4>`
	searched.appendChild(title)

	fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchInput.value}`)
	.then(res => res.json())
	.then((json) => {
		console.log(json);
		console.log(json.results);
		const ul = document.getElementById('productList')
		json.results.forEach((item) => {
			const li = document.createElement("div.container-fluid")
			li.innerHTML = `
			<div class="card" style="width: 18rem;">
  				<img src="${item.thumbnail}" class="card-img-top" alt="...">
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
})


// const fetchProducts = async (query) => {
// 	const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
// 	const data = await response.json();
// 	return data.results;
//   };
//   const fetchByID = async(id)=>{
// 	const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
// 	const data = await response.json();
// 	console.log(data)
// 	return data[0];
//   }
//   export default fetchProducts;
//   export {fetchByID};

//   console.log(fetchProducts("input[type='search']"))
//   fetchByID('MLB3776939437')
