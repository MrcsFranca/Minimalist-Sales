const fetchProducts = async (query) => {
	const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
	const data = await response.json();
	return data.results;
  };
  const fetchByID = async(id)=>{
	const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
	const data = await response.json();
	console.log(data)
	return data[0].body;
  }
  export default fetchProducts;
  export {fetchByID};
  
  console.log(fetchProducts('celular'))
  console.log(fetchByID('MLB3497242371'))

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
