/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        autoScrolling: true,
        navigation: true,
        anchors: ['Welcome', 'Signup', 'Plants'],
        navigationTooltips: ['Welcome', 'Signup', 'Plants'],
        showActiveTooltip: true,
        scrollingSpeed: 700,
        // fixedElements: '.filter-container'
    });
});

// Function to move to the specified section
function moveToSection(sectionNumber) {
    fullpage_api.moveTo(sectionNumber);
}

// Add event listeners to buttons using their IDs
document.getElementById('goToSection1').addEventListener('click', function () {
    moveToSection(1);
});

document.getElementById('goToSection2').addEventListener('click', function () {
    moveToSection(2);
});

// Form js
let user;

//     // Click on the submit Button:
document.getElementById('submitButton').addEventListener("click", function (event) {
    event.preventDefault();
    console.log('working');

    // Get all the inputs and values from the signup from:
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);

    // Setup regex statement for each input to be tested against:
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Test against regex for form validation:
        if (!usernameRegex.test(username)) {
            document.getElementById('formMessage').innerHTML = `<p>'Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.'</p>`;
        } else if (!emailRegex.test(email)) {
            document.getElementById('formMessage').innerHTML =`<p>'Invalid email format.'</p>`;
        } else if (!passwordRegex.test(password)) {
            document.getElementById('formMessage').innerHTML =`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`;
        } else {
            // if passed all regex tests:
            document.getElementById('formMessage').innerHTML = ``;
            // set user equal to the username:
            user = username;//
            console.log(user);
            // Move to slide 2 of section 1
            fullpage_api.moveTo(3); // slide 2
        }


});


// Filter js
// My Arrays
const plants = [{
        id: 1,
        name: "Lavender",
        type: "Flowers",
        benefits: "Stress Relief and Sleep Aid, Anti-Inflammatory, Pain Relief, Blood Sugar Regulation",
        price: "$14.90",
        image1: "./images/lavClose.webp",
        image2: "./images/lavOil.webp",
        image3: "./images/lavFar.webp",
        description: `Known for its calming effect, lavender has a wonderful aroma, immune-supporting capacity, and a
    soothing fragrance. <br> <br> Some studies suggest lavender can improve your body’s melatonin levels, supporting a better night’s rest. <br> <br> It has also be proven to reduce pain, inflammation, anxiety, and depression, whilst improving mood and lowering blood pressure.`
    },
    {
        id: 2,
        name: "Rosemary",
        type: "Shrubs",
        benefits: "Antioxidant, Anti-Inflammatory, Stress Relief and Sleep Aid, Antibacterial",
        price: "$20.20",
        image1: "./images/rosemaryClose.webp",
        image2: "./images/rosemaryOil.webp",
        image3: "./images/rosemaryFar.webp",
        description: `Traditional uses of rosemary include helping alleviate muscle pain, improving memory, boosting the immune and circulatory system, and promoting hair growth. <strong>Warning:</strong> Very high doses may cause vomiting, coma, and pulmonary edema.`
    },
    {
        id: 3,
        name: "Aloe Vera",
        type: "Shrubs",
        benefits: "Anti-Inflammatory, Skin Health, Pain Relief, Cardiovascular Health, Blood Sugar Regulation",
        price: "$10.60",
        image1: "./images/aloeClose.webp",
        image2: "./images/aloeGel.webp",
        image3: "./images/aloeFar.webp",
        description: `Aloe vera is a medicinal plant with antioxidant and antibacterial properties. One of the most well-known healing plants, aloe can be used to retain skin moisture, prevent ulcers, improve wound healing, and treat burns. <strong>Warning:</strong> Ingest sparingly.`
    },
    {
        id: 4,
        name: "Eucalyptus",
        type: "Trees",
        benefits: "Antibacterial, Anti-Inflammatory, Antioxidant, Immune System Boost, Pain Relief",
        price: "$10.60",
        image1: "./images/eucaClose.webp",
        image2: "./images/eucaOil.webp",
        image3: "./images/eucaFar.webp",
        description: `Eucalyptus is commonly used for its anti-inflammatory and anti-microbial properties. Eucalyptus leaves have many therapeutic benefits, from reducing discomfort to freshening breath. <strong>Warning:</strong> You can drink eucalyptus tea but avoid eucalyptus oil as it can be harmful even in small amounts.`
    },
    {
        id: 5,
        name: "Basil",
        type: "Herbs",
        benefits: "Antibacterial, Anti-inflammatory, Antioxidant, Immune System Boost, Blood Sugar Regulation",
        price: "$19.90",
        image1: "./images/basilClose.webp",
        image2: "./images/basilOil.webp",
        image3: "./images/basilFar.webp",
        description: `There are more than 60 varieties of basil, with sweet basil being one of the most widely used. Basil contains many vitamins and minerals, as well as antioxidants. Many of its health benefits come from these antioxidants, as well as its essential oils.`
    },
    {
        id: 6,
        name: "Tumeric",
        type: "Spices",
        benefits: "Anti-inflammatory, Antioxidant, Cardiovascular Health",
        price: "$10.50",
        image1: "./images/tumericClose.webp",
        image2: "./images/tumericOil.webp",
        image3: "./images/tumericFar.webp",
        description: `Many high-quality studies show that turmeric has major benefits for your body and brain. Many of these benefits come from its main active ingredient, curcumin. People use it to help relieve pain, reduce inflammation, and promote healing.`
    },
    {
        id: 7,
        name: "Chamomile",
        type: "Flowers",
        benefits: "Anti-inflammatory, Antioxidant, Stress Relief and Sleep Aid, Pain Relief",
        price: "$10.50",
        image1: "./images/chamClose.webp",
        image2: "./images/chamOil.webp",
        image3: "./images/chamFar.webp",
        description: `Chamomile preparations are commonly used for many human ailments such as hay fever, inflammation, muscle spasms, menstrual disorders, insomnia, ulcers, wounds, gastrointestinal disorders, rheumatic pain, and hemorrhoids. Essential oils of chamomile are used extensively in cosmetics and aromatherapy.`
    },
    {
        id: 8,
        name: "Licorice Root",
        type: "Roots",
        benefits: "Digestive Health, Anti-Inflammatory, Antibacterial, Antioxidant, Skin Health",
        price: "$13.00",
        image1: "./images/liqClose.webp",
        image2: "./images/liqPowder.webp",
        image3: "./images/liqFar.webp",
        description: `Today, licorice root is promoted as a dietary supplement for conditions such as digestive problems, menopausal symptoms, cough, and bacterial and viral infections. <strong>Warning:</strong> Do not use chronically or in large doses.`
    },
    {
        id: 9,
        name: "Chia Seeds",
        type: "Seeds",
        benefits: "Digestive Health, Anti-Inflammatory, Antibacterial, Antioxidant, Skin Health, Cardiovascular Health, Blood Sugar Regulation",
        price: "$7.80",
        image1: "./images/chiaClose.webp",
        image2: "./images/chiaOil.webp",
        image3: "./images/chiaFar.webp",
        description: `Chia seeds are an excellent source of fiber, which can improve heart health, reduce cholesterol levels and promote intestinal health. It is advised to soak the seeds in a liquid before consuming, otherwise it could form “a concrete-like mass in your digestive tract”, which can lead to them getting stuck.`
    },
    {
        id: 10,
        name: "Elderberry",
        type: "Fruits, Flowers",
        benefits: "Digestive Health, Anti-Inflammatory, Antibacterial, Antioxidant, Skin Health, Cardiovascular Health, Blood Sugar Regulation, Immune System Boost",
        price: "$9.50",
        image1: "./images/elderClose.webp",
        image2: "./images/elderOil.webp",
        image3: "./images/elderFar.webp",
        description: `It is most often taken as a supplement to treat cold and flu symptoms. <strong>Warning:</strong> However, the raw berries, bark, and leaves are poisonous.`
    },
    {
        id: 11,
        name: "Flaxseeds",
        type: "Seeds",
        benefits: "Digestive Health, Antioxidant, Cardiovascular Health, Blood Sugar Regulation",
        price: "$11.40",
        image1: "./images/flaxClose.webp",
        image2: "./images/flaxOil.webp",
        image3: "./images/flaxFar.webp",
        description: `One serving of flaxseed provides protein, fiber, and omega-3 fatty acids. It may help lower the risk of some cancers, help you maintain a moderate weight, and reduce cholesterol and blood pressure.`
    },
    {
        id: 12,
        name: "Willow Bark",
        type: "Trees",
        benefits: "Pain Relief, Anti-Inflammatory, Immune System Boost, Skin Health",
        price: "$28.00",
        image1: "./images/willowClose.webp",
        image2: "./images/willowOil.webp",
        image3: "./images/willowFar.webp",
        description: `Willow bark has been used throughout the centuries in China and Europe, and continues to be used today for the treatment of pain, headache, and inflammatory conditions.`
    },
    {
        id: 13,
        name: "Sage",
        type: "Herbs, Spices",
        benefits: "Pain Relief, Anti-Inflammatory, Skin Health, Blood Sugar Regulation, Cardiovascular Health, Antioxidant",
        price: "$19.20",
        image1: "./images/sageClose.webp",
        image2: "./images/sageOil.webp",
        image3: "./images/sageFar.webp",
        description: `Sage is an herb with several promising health benefits. It's high in antioxidants and may help support oral health, aid brain function and lower blood sugar and cholesterol levels. This green spice is also easy to add to almost any savory dish.`
    },
    {
        id: 14,
        name: "Ginger",
        type: "Roots, Spices",
        benefits: "Digestive Health, Antioxidant, Anti-Inflammatory, Blood Sugar Regulation, Pain Relief",
        price: "$15.30",
        image1: "./images/gingerClose.webp",
        image2: "./images/gingerOil.webp",
        image3: "./images/gingerFar.webp",
        description: `Ginger may have numerous health benefits due to its anti-inflammatory, anti-nausea, and other properties. You can use ginger fresh, dried, powdered, or as an oil or juice.`
    },
    {
        id: 15,
        name: "Calendula",
        type: "Flowers",
        benefits: "Antioxidant, Skin Health, Antibacterial, Anti-Inflammatory, Cardiovascular Health, Pain Relief",
        price: "$12.50",
        image1: "./images/calClose.webp",
        image2: "./images/calOil.webp",
        image3: "./images/calFar.webp",
        description: `Calendula, a flowering plant also known as pot marigold, can be served as a tea or used as an ingredient in various herbal formulations. Calendula has been used to treat a variety of skin conditions.`
    },
    {
        id: 16,
        name: "Hemp Seed",
        type: "Seeds",
        benefits: "Digestive Health, Antioxidant, Skin Health, Anti-Inflammatory, Cardiovascular Health",
        price: "$13.50",
        image1: "./images/hempClose.webp",
        image2: "./images/hempOil.webp",
        image3: "./images/hempFar.webp",
        description: `Many people consider hemp seeds a superfood. They have a rich nutritional profile and provide a range of health benefits. Benefits of hemp seeds include protecting the brain, boosting heart health, and improving skin conditions.`
    },
    {
        id: 17,
        name: "Goji Berry",
        type: "Fruits",
        benefits: "Digestive Health, Antioxidant, Anti-Inflammatory, Antibacterial, Blood Sugar Regulation, Cardiovascular Health, Immune System Boost, Stress Relief and Sleep Aid",
        price: "$30.00",
        image1: "./images/gojiClose.webp",
        image2: "./images/gojiOil.webp",
        image3: "./images/gojiFar.webp",
        description: `Goji berries have long been consumed for their high nutrient content and reported medicinal benefits. They are typically eaten dried and can be added to smoothies, cereals or baked goods.`
    },
    {
        id: 18,
        name: "Witch Hazel",
        type: "Shrubs",
        benefits: "Skin Health, Anti-Inflammatory, Antibacterial",
        price: "$12.00",
        image1: "./images/witchClose.webp",
        image2: "./images/witchOil.webp",
        image3: "./images/witchFar.webp",
        description: `When used in a water-based solution or as an ingredient in skincare products, witch hazel can help soothe minor skin problems, such as acne, bug bites, and hemorrhoids. Witch hazel can also reduce scalp redness and help protect against the skin damage from air pollution.`
    },
    {
        id: 19,
        name: "Hibiscus",
        type: "Shrubs",
        benefits: "Blood Sugar Regulation, Antioxidant, Anti-Inflammatory, Cardiovascular Health, Antibacterial",
        price: "$12.80",
        image1: "./images/hibClose.webp",
        image2: "./images/hibOil.webp",
        image3: "./images/hibFar.webp",
        description: `Hibiscus is high in antioxidants and offers many potential benefits. In particular, it may help promote weight loss, reduce the growth of bacteria and cancer cells, and support the health of the heart and liver. Hibiscus is available as an extract or, more often, a tea.`
    },
    {
        id: 20,
        name: "Echinacea",
        type: "Flower",
        benefits: "Antioxidant, Anti-Inflammatory, Antibacterial, Immune System Boost, Blood Sugar Regulation",
        price: "$12.80",
        image1: "./images/echinClose.webp",
        image2: "./images/echinOil.webp",
        image3: "./images/echinFar.webp",
        description: `Echinacea (aka purple coneflower) is a group of plants that are rich in antioxidants and may help support immunity. They’re available in several different forms, which vary in terms of recommended dosage.`
    },
];

// input elements - Filter
const typeFilter = document.getElementById("type");
const benefitsFilter = document.getElementById("benefits");

// input elements - Sorting
const highToLowBtn = document.getElementById('price-high-to-low-btn');
const lowToHighBtn = document.getElementById('price-low-to-high-btn');
const alphabeticalBtn = document.getElementById('alphabetical-btn');

// ************* Click Functions ****************
// onchange event on each filter:
// Type -
typeFilter.addEventListener("change", function () {
    console.dir(typeFilter.value);
    filterAndPopulateResults();
});

//Benefits -
benefitsFilter.addEventListener("change", function () {
    console.dir(benefitsFilter.value);
    filterAndPopulateResults();
});

// Sorting button clicks
// high to low
highToLowBtn.addEventListener('click', function () {
    const filteredPlants = filterPlants();
    const sortedPlants = sortPlantsByPriceHighToLow(filteredPlants);
    populateResults(sortedPlants);
});

// low to high
lowToHighBtn.addEventListener('click', function () {
    const filteredPlants = filterPlants();
    const sortedPlants = sortPlantsByPriceLowToHigh(filteredPlants);
    populateResults(sortedPlants);
});

// alphabetically
alphabeticalBtn.addEventListener('click', function () {
    const filteredPlants = filterPlants();
    const sortedPlants = sortPlantsAlphabetical(filteredPlants);
    populateResults(sortedPlants);
});

// ********* Filtering Functions & Logic *********
//filter results - return an array of filtered plants
function filterPlants() {
    const filteredPlants = plants.filter(plant => {
        // check if plants match
        const plantType = plant.type.toLowerCase();
        const filterValue = typeFilter.value.toLowerCase();

        const plantBenefits = plant.benefits.toLowerCase();
        const benefitsFilterValue = benefitsFilter.value.toLowerCase();
        // returns non-matching products as false therefore doesn't add to array
        if (filterValue && !plantType.includes(filterValue)) {
            return false;
        }
        //check if benefits match
        if (benefitsFilterValue && !plantBenefits.includes(benefitsFilterValue)) {
            return false;
        }

        //if all conditions pass, include the proper in the filtered array
        return true;
    });
    return filteredPlants;
}

// ********* Sorting Functions **********
// sort results - sort by price - lowest to highest
function sortPlantsByPriceLowToHigh(plants) {
    return plants.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '')); //.replace(/./g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '')); //.replace(/./g, ''));
        return priceA - priceB;
    });
}

// sort results - sort by price - high to low
function sortPlantsByPriceHighToLow(plants) {
    return plants.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '')); //.replace(/./g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '')); //.replace(/./g, ''));
        return priceB - priceA;
    });
}

// Sort by name alphabetically
function sortPlantsAlphabetical(plants) {
    return plants.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // plants a name to lowercase
        const nameB = b.name.toLowerCase(); // plants b name to lowercase
        return nameA.localeCompare(nameB);
    });
}

// ******** Populate Functions **********
// Filter and then populate results
function filterAndPopulateResults() {
    const filteredPlants = filterPlants();
    // sort plants before populating
    populateResults(filteredPlants);
}

// initial population of cards
filterAndPopulateResults();

// populate cards function
function populateResults(filteredResults) {
    // get the results div
    const resultsDiv = document.getElementById("results");
    // clear previous results
    resultsDiv.innerHTML = "";

    // check if filtered plants are empty
    if (filteredResults.length === 0) {
        resultsDiv.innerHTML = `<p class="no-results">No Results Found</p>`;
    } else {
        // if filtered results are not empty
        filteredResults.forEach(plant => {
            // create a card for the plant!!
            const plantCardHTML = `
            <div class="plant">
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><img src="${plant.image1}" alt="${plant.name} image 1" class="plant-image" value=${plant.id}></div>
                    <div class="swiper-slide"><img src="${plant.image2}" alt="${plant.name} image 2" class="plant-image" value=${plant.id}></div>
                    <div class="swiper-slide"><img src="${plant.image3}" alt="${plant.name} image 3" class="plant-image" value=${plant.id}></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="plant-details">
                <h2>${plant.name}</h2>
                <p>${plant.type}</p>
                <div class="more-details">
                    <h4>${plant.price}</h4>
                </div>
            </div>
        </div>
        `;
            resultsDiv.innerHTML += plantCardHTML;
            attachModalToImages(); // attaching event listeners straight after population

            // re-initialize swiper instances
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


// ******* Modal Functions ********
// attach a click to each image and open the modal
function attachModalToImages() {
    // get all the images
    const images = document.querySelectorAll('.plant-image');
    // get the details modeal from the html
    const detailsModal = document.getElementById('details-modal');

    // run a for loop over the images array to add click event to each image
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function (event) {
            const scrollPosition = window.pageXOffset || document.documentElement.scrollTop;
            detailsModal.dataset.scrollPosition = scrollPosition; // stores scroll position in the modals dataset
            const rect = event.target.getBoundingClientRect(); // get the position of the clicked image relative to the viewport
            const imageTop = rect.top + scrollPosition; // calculate the top position of the clicked image
            const windowHeight = window.innerHeight;
            const dialogHeight = detailsModal.offsetHeight; // height of the modal
            const viewportTop = scrollPosition;

            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2; // Calcualte the top position for the dialog to be centered

            //Ensure the dilaog doesnt go above or below the viewport:
            if (dialogTop < imageTop) {
                dialogTop = imageTop; // Place the dialog just below the clicked image if theres enough space
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop) {
                dialogTop = windowHeight + viewportTop - dialogHeight; // Place the dialog at the bottom of the viewport if theres not enough space
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
    }
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
    <img src="${plants[imageId - 1].image1}" alt="${plants[imageId - 1].name} image 1">
        <h2>${plants[imageId - 1].name}</h2>
        <p>${plants[imageId - 1].type}</p>
        <h4>${plants[imageId - 1].price}</h4>
        <p class="plant-description">${plants[imageId - 1].description}</p>
        <button class="shop-button">Shop Now</button>
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