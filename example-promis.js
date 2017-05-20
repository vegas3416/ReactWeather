// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Austin', function (err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });
//
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found in promise');
//     }, 1000);
//   });
// }
//
// getTempPromise('Austin').then(function (temp) {
//   console.log("Promise success", temp);
// }, function (err) {
//   console.log("Error", err);
// });

// PROMISE FUNCTION
// function addPromise (a, b) {
//   return new Promise(function (resolve, reject){
//     if( typeof a === 'number' && typeof b === 'number'){
//       resolve(a + b);
//     } else {
//       reject('Is not a num');
//     }
//   });
// }
//
// addPromise(2, 5).then(function (check) {
//   console.log('Success', check);
// }, function (err) {
//   console.log('Error', err);
// });

//ARROW FUNCTIONS
//
// var names = ['ton', 'dave', 'mike', 'caleb'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowfunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Jason'));

// var person = {
//   name: 'Jason',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();
//
// function add (a, b) {
//   return a + b;
// }
// //statement multiple lines
// var addStatement = (a,b) => {
//   return a + b;
// }
// console.log(addStatement(4,7));
// //console.log(add(1,4));
//
// var addExpression = (a,b) => a + b;
// console.log(addExpression(3,5));
