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

// Add some ingredients

const handleNewIngredient = e => {
    e.preventDefault();
    const span1 = `
    <span class="ingredient_value">${ingredientInput.value}</span>
    `;
    wraperIngredient.innerHTML += span1;
    
}

// Add some steps

const handleNewStep = e => {
    e.preventDefault();
    const span2 = `
    <span class="step_value">${stepInput.value}</span>
    `;
    wraperStep.innerHTML += span2;
    
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