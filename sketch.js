//setTimeout(sayHellYeah, 4000); //creates a timer to make something happen in the future, in milliseconds
//setInterval(sayHellYeah, 1000);
//function sayHellYeah() {
//  console.log("Hell yeah");
//}

function setup() {
  
 // loadJSON('http://api.open-notify.org/iss-now.json', whateverYouWant);  //the function whateverYouWant is being called here, instead of pasting the whole function inside the brackets)
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  
  setInterval(fetchISS,1000);
  
}

function fetchISS() { 
  loadJSON('http://api.open-notify.org/iss-now.json', whateverYouWant);
}


function whateverYouWant(data) {
//  console.log(data.message); //use the data.message to get the "message" part from within data

  
  var longitude = Number(data.iss_position.longitude);
  var latitude = Number(data.iss_position.latitude);

  var x = map(longitude, -180, 180, 0, width); //the value, the range, the range, the converted range, the converted range
  var y = map(latitude, 90, -90, 0, height);
  
  console.log(x);
  console.log(y);
  fill(255);
  ellipse(x, y, 10, 10);
  
}


function draw() {
  
  
}