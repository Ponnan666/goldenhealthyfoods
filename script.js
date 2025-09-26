// Sample data: Recipes categorized into foods, snacks, and drinks
const recipesData = {
  foods: [
    { id: 1, name: 'Adai Dosai', image: 'images/adai.png', description: 'அடை தோசை<br/><b>Ingredients:</b> Rice, Chana dal, Toor dal, Urad dal, Dry red chillies, Asafoetida, Small onion. <br/><br/>இட்லி அரிசி, துவரம் பருப்பு, சன்னா பருப்பு, பாசிப்பருப்பு, உளுத்தம் பருப்பு, காய்ந்த சிவப்பு மிளகாய், உப்பு, வெங்காயம்.<br/><br/><b>Instructions:</b> <br/>1. Firstly, wash and soak rice and dal separately for 3 hours. Grind the red chillies with salt, asafoetida and then add rice drained form water. Then add water as you grind as needed.<br/>2. Then grind it to a coarse paste (like rava) and transfer to a bowl. After that, add dal drained from water. Use water very less and then, use the pulse option to grind dal coarsely.<br/>3. Make sure to wipe the sides in between and lids for even grinding. Do not grind smooth. It should be very coarse like we do for dal vada. Even one or two whole dal seen would not hurt.<br/>4. Then mix both the ground items well and set aside. You can keep up to 3-4 hours, or even make immediately. But standing time yields better result.<br/>5. Just before making adai, add the onions, coriander, curry leaves and mix well. The batter should be thicker than our idly dosa batter. So adjust water as needed.<br/>6. Heat the tawa and spread little oil and spread one ladle full of batter as thick adais, make a small hole in the middle and again pour little oil around. Let it get cooked for sometime. Turn over the adai and cook the other side too till golden brown. (you can cook covered  with a lid, before flipping)<br/><b>செய்முறை:</b><br/>1. முதலில், ஒரு பெரிய கிண்ணத்தில் 1 கப் இட்லி அரிசி, ¾ கப் துவரம்பருப்பு, ¾ கப் கடலைப்பருப்பு, ¾ கப் பாசிப்பருப்பு மற்றும் ¾ கப் உளுத்தம் பருப்பு ஆகியவற்றை எடுத்துக் கொள்ளுங்கள்.<br/>2. மேலும் 1 தேக்கரண்டி பெருஞ்சீரகம், 1 தேக்கரண்டி சீரகம், ¼ தேக்கரண்டி வெந்தயம் மற்றும் 10 உலர்ந்த சிவப்பு மிளகாய் சேர்க்கவும்.<br/>3. பருப்பை நன்கு கழுவி, தண்ணீரில் 4 மணி நேரம் ஊற வைக்கவும்.<br/>4. தண்ணீரை வடித்து மிக்சி ஜாடிக்கு மாற்றவும். மேலும் ¼ தேக்கரண்டி ஹிங், ½ தேக்கரண்டி மஞ்சள், 1 அங்குல இஞ்சி மற்றும் 1 தேக்கரண்டி உப்பு சேர்க்கவும்.<br/>5. தேவைக்கேற்ப தண்ணீர் சேர்த்து, கரடுமுரடான பேஸ்டாக அரைக்கவும். மிக்சர் ஜாடியின் அளவைப் பொறுத்து, தொகுதிகளாக அரைக்கவும்.<br/>6. மாவை பெரிய கிண்ணத்திற்கு மாற்றி, தேவைக்கேற்ப நிலைத்தன்மையை சரிசெய்து நன்கு கலக்கவும்.<br/>7. தோசை செய்வதற்கு முன் மாவை 2 மணி நேரம் அப்படியே வைக்கவும்.<br/>8. தேவையான அளவு மாவை எடுத்து, 1 வெங்காயம், 2 தேக்கரண்டி கொத்தமல்லி சேர்த்து நன்கு கலக்கவும்.<br/>9. தோசை வாணலியை சூடாக்கி, தோசை மாவை ஊற்றவும்.<br/>10. தோசையை சற்று கெட்டியாக வரும்படி மெதுவாகப் பரப்பவும்.<br/>11. இப்போது மேலே நெய்யைத் தடவி, தோசை அடிப்பகுதியிலிருந்து தங்கப் பழுப்பு நிறமாக மாறும் வரை மிதமான தீயில் வறுக்கவும்.<br/>12. தோசை நன்றாக வேகும் வரை திருப்பி போட்டு சமைக்கவும்.<br/>13. இறுதியாக, தேங்காய் சட்னியுடன் அடை தோசை செய்முறையை அனுபவிக்கவும்.' },
    { id: 2, name: 'Chola Dosai', image: 'images/chola.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 3, name: 'Kambu Dosai', image: 'images/kambu.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 4, name: 'Thinai Dosai', image: 'images/thinai.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 5, name: 'Wheat Dosai', image: 'images/wheat.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 6, name: 'food5', image: 'images/food5.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    // More foods can be added
  ],
  snacks: [
    { id: 7, name: 'pasta', image: 'images/pasta.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 8, name: 'sandwich', image: 'images/sandwich.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 9, name: 'popcorn', image: 'images/popcorn.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 10, name: 'pasta', image: 'images/pasta.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 11, name: 'sandwich', image: 'images/sandwich.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 12, name: 'popcorn', image: 'images/popcorn.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    // More snacks can be added
  ],
  drinks: [
    { id: 13, name: 'green-tea', image: 'images/green-tea.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 14, name: 'Smoothie', image: 'images/smoothie.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 15, name: 'green-tea1', image: 'images/green-tea1.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 16, name: 'green-tea', image: 'images/green-tea.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 17, name: 'Smoothie', image: 'images/smoothie.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 18, name: 'green-tea1', image: 'images/green-tea1.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    // More drinks can be added
  ]
};

let currentCategory = 'foods';  // Default category
let currentPage = 1;  // Default page

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

// Toggle menu on icon click
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Auto-close menu on link click (mobile UX improvement)
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Function to display recipes for the selected category
function showCategory(category) {
  currentCategory = category;
  currentPage = 1;
  renderRecipeList();
}

// Function to render recipe list based on current category and page
function renderRecipeList() {
  const recipes = recipesData[currentCategory];
  const recipesPerPage = 5;
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToDisplay = recipes.slice(startIndex, endIndex);

  // Update recipe list
  const recipeList = document.getElementById('recipeList');
  recipeList.innerHTML = '';
  recipesToDisplay.forEach(recipe => {
    const listItem = document.createElement('div');
    listItem.classList.add('recipe-item');
    listItem.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <span>${recipe.name}</span>
    `;
    listItem.onclick = () => showRecipeDetails(recipe);
    recipeList.appendChild(listItem);
  });

  // Update pagination controls
  const pagination = document.getElementById('pagination');
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  pagination.innerHTML = '';

  if (currentPage > 1) {
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    prevButton.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevButton);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(nextButton);
  }
}

// Function to change pages
function changePage(page) {
  currentPage = page;
  renderRecipeList();
}

// Function to show recipe details on the right side
function showRecipeDetails(recipe) {
  const recipeDetails = document.getElementById('recipeDetails');
  recipeDetails.innerHTML = `

    <img src="${recipe.image}" alt="${recipe.name}" />
    <h3>${recipe.name}</h3>
    <p>${recipe.description}</p>
  `;
}

// Initial render
renderRecipeList();


if (window.innerWidth < 768) {
  cancelAnimationFrame(autoScroll);
}



