

// Print out all of the times tables from 1 to 12
// for (var i = 1; i <= 12; i++) {

//     console.log(`${i} x table:`);
//     console.log('============');

//     for (var j = 1; j <= 12; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("\n");
// }

// Arrays
// var myFavouriteFoods = ['Bacon', 'Curry', 'Roast Lamb'];
// myFavouriteFoods.push('Pork Belly');
// console.log(myFavouriteFoods[1]);
// console.log(myFavouriteFoods[3]);

// console.log(`The size of my array is: ${myFavouriteFoods.length}`);

// var rainbowColors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet'
// ]

// for (var i = 0; i < rainbowColors.length; i++) {
//     console.log(rainbowColors[i]);
// }

// Objects
// Can access with dot or square brackets notation
// Can add and remove attributes
// var user = {
//     firstName: 'Craig',
//     lastName: 'Richards',
//     middleName: 'Dennis',
//     age: 57
// }

// console.log(`${user.firstName} is ${user['age']} years old.`);
// user.married = false;
// console.log(user);
// delete user.middleName;
// console.log(user);

// var recipe = {
//     title: 'Cheese on toast',
//     serves: 1,
//     ingredients: ['butter', 'bread', 'cheese'],
//     directions: [
//         'toast the bread',
//         'butter the toast',
//         'grate some cheese',
//         'place under the grill until the cheese is melted'
//     ]
// }

// See https://developer.mozilla.org/en-US/docs/Web/API/Document/write for document.write()
// And also https://www.w3schools.com/jsref/met_doc_write.asp

// document.write(recipe.title + '<br>');
// document.write(`Serves ${recipe.serves} <br>`);
// document.write(`INGREDIENTS: <br>`);
// for (var i = 0; i < recipe.ingredients.length; i++) {
//     document.write(`- ${recipe.ingredients[i]} <br>`);
// }
// document.write(`DIRECTIONS: <br>`);
// for (var i = 0; i < recipe.directions.length; i++) {
//     document.write(`- ${recipe.directions[i]} <br>`);
// }

// var name1 = {
//     first: 'Craig',
//     middle: 'Dennis',
//     last: 'Richards',
// }

// var user = {
//     name: name1,
//     age: 57
// }

// console.log(user);

// console.log(user.name.middle);

// var jolene = {
    
// }

// Objects can hold functions
var recipe = {
    title: 'Cheese on toast',
    serves: 1,
    ingredients: ['butter', 'bread', 'cheese'],
    directions: [
        'toast the bread',
        'butter the toast',
        'grate some cheese',
        'place under the grill until the cheese is melted'
    ],
    letsCook: function() {
        document.write(`I am hungry! - lets cook ${this.title}`);
    } 
}

recipe.letsCook();
