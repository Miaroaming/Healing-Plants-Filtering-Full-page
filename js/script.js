/* jshint esversion: 6 */

const properties = [{
    id: 1,
    name: "Cozy Cottage",
    location: "Gisborne",
    price: "$200,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?cozy+cottage",
    description: `Welcome to "Cozy Cottage" nestled in the serene locale of Gisborne, offering a tranquil escape from the hustle and bustle of urban life. Priced at a steal for $200,000, this charming abode boasts 2 snug bedrooms and 2 immaculate bathrooms, ensuring comfort and convenience for its lucky inhabitants.
    <br></br>Picture yourself unwinding in the cozy ambiance of this cottage, where every corner exudes warmth and relaxation. Whether you're curling up with a book by the fireplace or savoring a cup of tea on the quaint porch, each moment spent here promises to be nothing short of blissful.`
},
{
    id: 2,
    name: "Modern Loft",
    location: "Bay Of Plenty",
    price: "$350,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?modern+loft"
},
{
    id: 3,
    name: "Seaside Villa",
    location: "Northland",
    price: "$1,000,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://source.unsplash.com/category/house/?seaside+villa"
},
{
    id: 4,
    name: "Rustic Cabin",
    location: "Marlborough",
    price: "$150,000",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://source.unsplash.com/category/house/?rustic+cabin"
},
{
    id: 5,
    name: "Urban Apartment",
    location: "Wellington",
    price: "$500,000",
    bedrooms: 2,
    bathrooms: 1.5,
    image: "https://source.unsplash.com/category/house/?urban+apartment"
},
{
    id: 6,
    name: "Luxury Penthouse",
    location: "Nelson",
    price: "$2,200,000",
    bedrooms: 4,
    bathrooms: 3.5,
    image: "https://source.unsplash.com/category/house/?luxury+penthouse"
},
{
    id: 7,
    name: "Beachfront Villa",
    location: "Bay Of Plenty",
    price: "$1,800,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?beachfront+villa"
},
{
    id: 8,
    name: "Countryside Estate",
    location: "Canterbury",
    price: "$1,600,000",
    bedrooms: 6,
    bathrooms: 5,
    image: "https://source.unsplash.com/category/house/?countryside+estate"
},
{
    id: 9,
    name: "Downtown Condo",
    location: "Auckland",
    price: "$700,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?downtown+condo"
},
{
    id: 10,
    name: "Mountain Chalet",
    location: "Otago",
    price: "$900,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?mountain+chalet"
},
{
    id: 11,
    name: "Luxury Penthouse",
    location: "Nelson",
    price: "$2,200,000",
    bedrooms: 4,
    bathrooms: 3.5,
    image: "https://source.unsplash.com/category/house/?luxury+penthouse"
},
{
    id: 12,
    name: "Beachfront Villa",
    location: "Bay Of Plenty",
    price: "$1,800,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?beachfront+villa"
},
{
    id: 13,
    name: "Countryside Estate",
    location: "Canterbury",
    price: "$1,600,000",
    bedrooms: 6,
    bathrooms: 5,
    image: "https://source.unsplash.com/category/house/?countryside+estate"
},
{
    id: 14,
    name: "Downtown Condo",
    location: "Auckland",
    price: "$700,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?downtown+condo"
},
{
    id: 15,
    name: "Mountain Chalet",
    location: "Otago",
    price: "$900,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?mountain+chalet"
},
{
    id: 16,
    name: "Sunny Bungalow",
    location: "Hawkes Bay",
    price: "$280,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?sunny+bungalow"
},
{
    id: 17,
    name: "Oceanview Condo",
    location: "West Coast",
    price: "$420,000",
    bedrooms: 2,
    bathrooms: 1.5,
    image: "https://source.unsplash.com/category/house/?oceanview+condo"
},
{
    id: 18,
    name: "Country Farmhouse",
    location: "Manawatu",
    price: "$550,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://source.unsplash.com/category/house/?country+farmhouse"
},
{
    id: 19,
    name: "City Penthouse",
    location: "Taranaki",
    price: "$1,200,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?city+penthouse"
},
{
    id: 20,
    name: "Lakeside Retreat",
    location: "Waikato",
    price: "$780,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?lakeside+retreat"
}
];

// get input elements 
// - our filters
const locationFilter = document.getElementById("location");
const bedroomsFilter = document.getElementById("bedrooms");
const bathroomsFilter = document.getElementById("bathrooms");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
// - our sorting buttons
const highToLowBtn = document.getElementById('price-high-to-low-btn');
const lowToHighBtn = document.getElementById('price-low-to-high-btn');
const alphabeticalBtn = document.getElementById('alphabetical-btn');

// ------------*********** CLICK FUNCTIONS ***********------------
//onchange event on each filter:
//location
locationFilter.addEventListener("change", function () {
console.dir(locationFilter.value);
filterAndPopulateResults();
});

//bedrooms
bedroomsFilter.addEventListener("change", function () {
console.dir(bedroomsFilter.value);
filterAndPopulateResults();
});

//bathrooms
bathroomsFilter.addEventListener("change", function () {
console.dir(bathroomsFilter.value);
filterAndPopulateResults();
});

//price min
priceMin.addEventListener("change", function () {
console.dir(priceMin.value);
filterAndPopulateResults();
});

//price max
priceMax.addEventListener("change", function () {
console.dir(priceMax.value);
filterAndPopulateResults();
});

//  ------------ Sorting Button Clicks: --------
highToLowBtn.addEventListener('click', function() {
const filteredProperties = filterProperties();
const sortedProperties = sortPropertiesByPriceHighToLow(filteredProperties); // sorting filtered properties by price high to low
populateResults(sortedProperties);
});

lowToHighBtn.addEventListener('click', function() {
const filteredProperties = filterProperties();
const sortedProperties = sortPropertiesByPriceLowToHigh(filteredProperties); // sorting filtered properties by price low to high
populateResults(sortedProperties);
});

alphabeticalBtn.addEventListener('click', function() {
const filteredProperties = filterProperties();
const sortedProperties = sortPropertiesAlphabetical(filteredProperties); // sorting filtered properties by name alphabetically
populateResults(sortedProperties);
});


// ------------********* FILTERING FUNCTIONS & LOGIC *********----------
//filter results - return an array of filtered properties
function filterProperties() {
const filteredProperties = properties.filter(property => {
    // check if location matches
    const propertyLocation = property.location.toLowerCase();
    const filterValue = locationFilter.value.toLowerCase();
    // that it doesnt match so it returns false and doesnt add to the array
    if (filterValue && !propertyLocation.includes(filterValue)) {
        // if property location doesnt include the filter value return false
        return false;
    }

    // check if number of bedrooms match
    if (bedroomsFilter.value && parseInt(property.bedrooms) <= parseInt(bedroomsFilter.value)) {
        return false;
    }

    // check if number of bathrooms match
    if (bathroomsFilter.value && parseFloat(property.bathrooms) <= parseFloat(bathroomsFilter.value)) {
        return false;
    }

    // Check if the price falls within the specificed range
    const priceValue = parseFloat(property.price.replace(/\$/g, '').replace(/,/g, '')); // removes $ and , from price and make the number a floating number
    const minPrice = parseFloat(priceMin.value);
    const maxPrice = parseFloat(priceMax.value);
    if ((minPrice && priceValue < minPrice) || (maxPrice && priceValue > maxPrice)) {
        return false;
    }
    //if all conditions pass, include the proper in the filtered array
    return true;
});

// retrun the filtered propertied array - can access outside
return filteredProperties;
}

// ------------ SORT FUNTCIONS --------------
// sort results - sort by price - lowest to highest
function sortPropertiesByPriceLowToHigh(properties) {
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceA - priceB;
    });
}

// sort results - sort by price - high to low
function sortPropertiesByPriceHighToLow(properties) {
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceB - priceA;
    });
}

// Sort by name alphabetically
function sortPropertiesAlphabetical(properties) {
    return properties.sort((a,b) => {
        const nameA = a.name.toLowerCase(); // property a name to lowercase
        const nameB = b.name.toLowerCase(); // property b name to lowercase
        return nameA.localeCompare(nameB);
    });
}


// ------------************* POPULATION FUNCTIONS *************------------
// Filter and then Populate Results
function filterAndPopulateResults() {
const filteredProperties = filterProperties();
//sort properties before populating:
// const sortedProperties = sortPropertiesByPrice(filteredProperties); //sorting the filtered properties from previous line
populateResults(filteredProperties);
}

// Initial population of cards
filterAndPopulateResults();

//populate cards function
function populateResults(filteredResults) {
// get the results div
const resultsDiv = document.getElementById("results");
// clear previous results
resultsDiv.innerHTML = "";

// check if filtered properties is empty
if (filteredResults.length === 0) {
    resultsDiv.innerHTML = `<p class="no-results">No Results Found</p>`;
} else {
    // if filtered results is not empty
    filteredResults.forEach(property => {
        //create a card for that property
        const propertyCardHTML = `
        <div class="property">
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 1" class="property-image" value=${property.id}></div>
                    <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 2" class="property-image" value=${property.id}></div>
                    <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 3" class="property-image" value=${property.id}></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="property-details">
                <h2>${property.name}</h2>
                <p>${property.location}</p>
                <div class="more-details">
                    <div class="property-amenities">
                        <p>${property.bedrooms} <i class="fa-solid fa-bed"></i></p>
                        <p>${property.bathrooms} <i class="fa-solid fa-bath"></i></p>
                    </div>
                    <h4>${property.price}</h4>
                </div>
            </div>
        </div>
        `;
        resultsDiv.innerHTML += propertyCardHTML;
        attachModalToImages(); // attaching event listeners straight after population

         // // Re-initialize Swiper Instances
        const swipers = document.querySelectorAll('.swiper');
        swipers.forEach(swiperEl => {
            new Swiper(swiperEl, {
                direction: 'vertical',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        });
    });
}
}



// ---------------********** MODAL FUNCTIONS *********--------------
// attach a click to each image and open the modal
function attachModalToImages() {
    // Get the the details modal from the HTML
    const detailsModal = document.getElementById('details-modal');
    // Get all the images
    const images = document.querySelectorAll('.property-image');
    
    // run a for loop over the images array to add click event to each image
    images.forEach((image, index) => {
        image.addEventListener('click', function (event) {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            detailsModal.dataset.scrollPosition = scrollPosition; // Storing scroll position in the modal's dataset
            const rect = event.target.getBoundingClientRect(); // Get the position of the clicked image relative to the viewport
            const imageTop = rect.top + scrollPosition; // Calculate the top position of the clicked image
            const windowHeight = window.innerHeight;
            const dialogHeight = detailsModal.offsetHeight; // height of the modal
            const viewportTop = scrollPosition;

            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2; // Calculate the top position for the dialog to be centered

            // Ensure the dialog doesn't go above or below the viewport:
            if (dialogTop < imageTop) {
                dialogTop = imageTop; // Place the dialog just below the clicked image if there's enough space
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop) {
                dialogTop = windowHeight + viewportTop - dialogHeight; // Place the dialog at the bottom of the viewport if there's not enough space
            }

            detailsModal.style.top = dialogTop + 'px'; // set top position of the dialog

            console.log('image click working');
            detailsModal.showModal(); // open modal
            document.body.classList.add('modal-open'); // add class to disable scrolling
            // add close function:
            closeDetailsModal();
            // populate modal with correct info:
            console.log(event.target.getAttribute('value'));
            populateModal(event.target.getAttribute('value'));
        });
    });
}



// closing modals
function closeDetailsModal() {
    // Get close button of modal
    const close = document.getElementById('close-modal');
    // Get the modal
    const detailsModal = document.getElementById('details-modal');

    //click event on close modal to close the modal
    close.addEventListener('click', function () {
        detailsModal.close();
        document.body.classList.remove('modal-open'); // remove scroll-lock class
        const scrollPosition = detailsModal.dataset.scrollPosition || 0;
        window.scrollTo(0, scrollPosition);
    });
}

function populateModal(imageId) {
// Get the modal:
const detailsModal = document.querySelector('.modal-contents');

detailsModal.innerHTML = `
<img src="${properties[imageId - 1].image}" alt="${properties[imageId - 1].name} image 1">
    <h2>${properties[imageId - 1].name}</h2>
    <p>${properties[imageId - 1].location}</p>
    <h4>${properties[imageId - 1].price}</h4>
    <div class="modal-ammenities">
        <p>${properties[imageId - 1].bedrooms} <i class="fa-solid fa-bed"></i></p>
        <p>${properties[imageId - 1].bathrooms} <i class="fa-solid fa-bath"></i></p>
    </div>
    <p class="property-description">${properties[imageId - 1].description}</p>
    <button class="booking-button">Enquire Now</button>
`;
}


// --------********* SWIPER JS ********--------
// initialise swiper js
const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'vertical',
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true, // enable clickable pagination bullets
}
});