//Building Wally's Widgets
//The key to the algorithm is dividing by the highest number of widgets first and then working down through each number 👍

//Create a very basic input box. 👍
//A function to capture the target value 👍
//Convert the e.target.value to a number 👍
//Pass the number into the algorithm 👍
//Algorithm returns the number of widgets ordered in a string 👍

Deploy
//Use Vercel to deploy the App 👍

//TESTING
//Add unit testing to test the algorithm 👍
//Next more on buttons and home page

Stretch Goals

//Download react testing Library and implement tests on the widget functionality 👍

//Render the order box onClick of the order button on a new page 👍

//Router DOM implemented to allow easier navigation 👍

//DB
//Set up a DB and connect the DB to the order function 👍
//DB stores the number of widgets ordered by a customer and sends them back an order number 👍
//Set up relevant Fetch requests/API calls 👍

//Build a home screen with the options to track an order or create a new order 👍

//Refactor the widgets algorithm to make it look tidier
//Split the function into sub functions
//Replace all references to numbers with const in `` to allow easier maninpulation for future widgets 👍

//Debug
//And sometimes appears twice

//Create a Readme
//Explain how to run the App on a local machine
//Explain the basic functionality
//Explain deployment
//Possibly even add the color palette

//Refactoring Widget Calculator (Using object)

function WidgetCalculator (orderedWidgets) {
const packs = { xlPack: 5000, lPack: 2000, mPack: 1000, sPack: 500, xsPack: 250 },
orderArray = [];

if (orderedWidgets === 0) return '0 packs';

for (let key in packs) {
if (orderedWidgets >= packs[key]) {
let factor = Math.floor(orderedWidgets/packs[key]);
orderArray.push(factor += factor > 1 ? ' ' + key + 's' : ' ' + key);
orderedWidgets = orderedWidgets % packs[key];
}
}