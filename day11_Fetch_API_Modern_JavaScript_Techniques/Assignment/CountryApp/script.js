const rootElement = document.getElementById('root')

const sortElement = document.getElementById('sort')

var countryData = [];

const showCountry = (countryData) => {
    rootElement.innerHTML = ""

    countryData.forEach((element)=> {
        const countryDiv = document.createElement('div')
        countryDiv.className = "countryBox";

        const countryImg = document.createElement('img');
        countryImg.src = "https://upload.wikimedia.org/wikipedia/commons/0/09/Dummy_flag.png"

        const countryName = document.createElement('h2');
        countryName.textContent = element.country;

        const countryPopulation = document.createElement("h3")
        countryPopulation.textContent = element.population;

        countryDiv.append(
            countryImg ,
            countryName ,
            countryPopulation
        )
        rootElement.appendChild(
            countryDiv
        )   

   })

}   

const FetchMovies = async () => {
    try {
        const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
        const movieList = await response.json()
            countryData = movieList.data
            showCountry(countryData);
         // console.log(movieList.data)
    } catch (error) {
        console.log(`Error ${error}`)
    }
} 

FetchMovies();




// Sorting Logic 
sortElement.addEventListener('change', () => {
    console.log(countryData)

    if (sortElement.value === "asc") {
        countryData.sort((a, b) => a.population - b.population);
        showCountry(countryData);       
    }
    else if (sortElement.value === "desc") {
        countryData.sort((a, b) => b.population - a.population);
        showCountry(countryData);  
    }
    else {
        showCountry(countryData);  
    }
});
