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
					<p class="card-text">R$${item.price}</p>
    				<a href="${item.permalink}" target="_blank" class="btn btn-primary">Vá para o site de origem</a>
  				</div>
			</div>
			`
			ul.appendChild(li)
		})
	})

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
