// **********1
// Create html

// **********2
// Style with css

// **********3
// Select the <select> element of difficulty
// Select the <select> element of duration
// Select the <select> element of ingredients
// Select the <select> element of steps

// **********4 With ingredient & Steps
// Access the outer element that will wrap the new input from js
// Access the button element that will be cliced with event listener to add steps or ingredients

// **********5
// Create a function handling for those two
// Add an event listener for each button to add the handle click




// Accsss input elements
const ingredientInput = document.querySelector('#recipe_ingredient');
const stepInput = document.querySelector('#recipe_step');
const difficutySelectInput = document.querySelector('#difficulty');
const durationSelectInput = document.querySelector('#duration');

// All elements that are going to be used with array object
const recipeName = document.querySelector('#recipe_name');
const recipeUrl = document.querySelector('#recipe_url');
const recipeCook = document.querySelector('#recipe_cook');

// Parent elements
const wraperIngredient = document.querySelector('.ingredient_wraper');
const wraperStep = document.querySelector('.step_wraper');

// All the buttons are added here
const ingredientBtn = document.querySelector('.btn_add--ingredient');
const stepBtn = document.querySelector('.btn_add--step');

const submitBtn = document.querySelector('.btn_submit');
const ingredientListElement = document.querySelector('.ingredient_list');

// Add some ingredients

const handleNewIngredient = e => {
    e.preventDefault();
    const number = wraperIngredient.children.length + 1;
    const list1 = `
    <li class="ingredient_list"><span id="ingredient${number}" class="ingredient_value" name="ingredient${number}">${number}. ${ingredientInput.value}</span></li>
    `;
    wraperIngredient.insertAdjacentHTML('beforeend', list1);
    
}

// Add some steps

const handleNewStep = e => {
    e.preventDefault();
    const number2 = wraperStep.children.length + 1;
    const list2 = `
    <li class="step_list"><span id="step${number2}" class="step_value" name="step${number2}">${number2}. ${stepInput.value}</span></li>
    `;
    wraperStep.insertAdjacentHTML('beforeend', list2);
    
}

const handleSubmit = e => {
    e.preventDefault();
    
}

ingredientBtn.addEventListener('click', handleNewIngredient);
stepBtn.addEventListener('click', handleNewStep);

submitBtn.addEventListener('click', function() {
    const valIngedient = document.querySelectorAll('.ingredient_value');
    for (let i = 0; i < valIngedient.length; i++) {
        console.log(valIngedient.value);
    }
    
    
});

let ingredientList = () => {

}

let myArrayObj = [
    {
        name: `${recipeName.value}`,
        url: `${recipeUrl.value}`,
        cook: `${recipeCook.value}`,
        difficulty: `${difficutySelectInput.value}`,
        duration: `${durationSelectInput.value}`,
        

    }
];