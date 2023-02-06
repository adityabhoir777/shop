async function fetcher() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    let products = data.products;

    products.forEach(product => {

        let image = document.createElement('img');
        image.src = product.thumbnail;
        document.getElementById('container').appendChild(image);
    });

}

fetcher();
