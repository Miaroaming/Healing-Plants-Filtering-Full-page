/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        licenseKey: 'gplv3-license',
        autoScrolling: true,
        navigation: true,
        anchors: ['Welcome', 'Lavender', 'Eucalyptus', 'Rosemary', 'Aloe-Vera'],
        navigationTooltips: ['Welcome', 'Lavender', 'Eucalyptus', 'Rosemary', 'Aloe-Vera'],
        showActiveTooltip: true,
        scrollingSpeed: 700,
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

document.getElementById('goToSection3').addEventListener('click', function () {
    moveToSection(3);
});

document.getElementById('goToSection4').addEventListener('click', function () {
    moveToSection(4);
});

document.getElementById('goToSection5').addEventListener('click', function () {
    moveToSection(5);
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