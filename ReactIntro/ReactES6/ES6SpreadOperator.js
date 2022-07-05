const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

//spread operator with destructuring
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

//combining objects
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

authenticated ? renderApp() : renderLogin();

