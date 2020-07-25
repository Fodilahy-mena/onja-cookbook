console.log('It works');

const ingredientInput = document.querySelector('#recipe_ingredient');
const stepInput = document.querySelector('#recipe_step');

const wraperIngredient = document.querySelector('.ingredient_wraper');
const wraperStep = document.querySelector('.step_wraper');

const ingredientBtn = document.querySelector('.btn_add--ingredient');
const stepBtn = document.querySelector('.btn_add--step');

const submitBtn = document.querySelector('.btn_submit');

// Add some ingredients

const handleNewIngredient = e => {
    e.preventDefault();
    const span1 = `
    <span>${ingredientInput.value}</span>
    `;
    wraperIngredient.innerHTML += span1;
    
}

// Add some steps

const handleNewStep = e => {
    e.preventDefault();
    const span2 = `
    <span>${stepInput.value}</span>
    `;
    wraperStep.innerHTML += span2;
    
}


ingredientBtn.addEventListener('click', handleNewIngredient);
stepBtn.addEventListener('click', handleNewStep);