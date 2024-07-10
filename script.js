// const fetchProducts = async (query) => {
// 	const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
// 	const data = await response.json();
// 	return data.results;
//   };
//   const fetchByID = async(id)=>{
// 	const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
// 	const data = await response.json();
// 	console.log(data)
// 	return data[0].body;
//   }
//   export default fetchProducts;
//   export {fetchByID};

//   console.log(fetchProducts('celular'))
//   console.log(fetchByID('MLB3740141311'))

fetch('https://api.mercadolibre.com/sites/MLB/search?q=${query}')
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
					<p class="card-text">${item.price}</p>
    				<a href="${item.permalink}" target="_blank" class="btn btn-primary">Go somewhere</a>
  				</div>
			</div>
			`
			ul.appendChild(li)
		})
	})
export function filtrar() {
	var input,
		filter,
		ul,
		li,
		a,
		i,
		txtValue,
		cout = 0,
		span

	// pegar elementos
	input = document.getElementById('search-bar');
	ul = document.getElementById('productList');

	// filtro
	filter = input.value.toUpperCase();

	// pegar LI´s da lista
	li = ul.getElementsByTagName("li");

	console.log(li);

	//percorrer li

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];

		txtValue = a.textContent || a.innerText;

		// verifica se o valor que o usuario digitou é correto
		if (txtValue.toUpperCase().indexOf(filter) > - 1) {
			// valor bateu
			li[i].style.display = "";
			cout++
			span = li[i].querySelector(".item-title");

			if (span) {
				span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
					return "<strong>" + match + "</strong>";
				})
			}
		}
		else {
			//não mostra o item da lista
			li[i].style.display = "none";
		}
	}
}






// fetch('', options)
// 	.then(res => res.json())
// 	.then((json) => {
// 		const ul = document.getElementById('productList')
// 		// json.forEach(() => {
// 		// 	const li = document.createElement("div.container-fluid.object")
// 		// 	li.innerHTML = `
// 		// 		<div class="card" style="width: 18rem;">
// 		// 			<img src="${}">
// 		// 				<h5 class="card-title">${}</h5>
// 		// 				<p class="card-text">${}</p>
// 		// 				<a href="${}" class="btn btn-primary">Veja o produto no site</a>
// 		// 			</div>
// 		// 		</div>
// 		// 	`
// 		// })
// 		console.log(json)
// 		})
// 	// })
