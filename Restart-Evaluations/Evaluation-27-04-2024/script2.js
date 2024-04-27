// Catch The All Element Here 
const productContainer = document.getElementById("products");

let productArray = [];

const showProducts = (productList)=> {
    productContainer.innerHTML = "";
    productList.forEach((item)=>{
        // Now we will create some html element to display products data on UI 
        const productBox = document.createElement('div');
        productBox.className = "product-content";  

        const productImg = document.createElement('img');
        productImg.src = item.image;
        
        const productName = document.createElement('h2');
        productName.textContent = item.title;
            
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${item.price}`;

        productBox.append(
            productImg,
            productName,
            productPrice
        );

        productContainer.appendChild(productBox);
    });
};

const FetchProducts = async () => {
    let url = 'https://fakestoreapi.com/products';

    try {
        const response = await fetch(url);
        const finalResponse = await response.json();
        showProducts(finalResponse);
        productArray = finalResponse;
    } catch (error) {
        console.log("Error:", error);
    }
};

FetchProducts();

// Filter Logic Here 
const selectedCategory = document.getElementById('filter');
selectedCategory.addEventListener('change', () => {
    const filteredProducts = productArray.filter((item) => {
        return selectedCategory.value === item.category;
    });
    showProducts(filteredProducts);
});

// Search Logic Here 
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productArray.filter(item => {
        return item.title.toLowerCase().includes(searchTerm);
    });
    showProducts(filteredProducts);
});

// Sort Logic Here 
const sortingOrder = document.getElementById('sort');
sortingOrder.addEventListener('change', () => {
    const sortBy = sortingOrder.value;
    let sortedProducts = [...productArray];
    if (sortingOrder.value === 'asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortingOrder.value === 'desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    showProducts(sortedProducts);
});
