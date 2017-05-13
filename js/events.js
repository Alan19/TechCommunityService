 
function initialize()
{
  opportunity = "Help needed at ";
  locations = ["Cafeteria", "Library", "Room", "Gym"];
  task = ["Clean up", "Assist teacher", "Carry equipment", "Paperwork", "Monitoring", "Tutoring"];
  roomCodes = ["N", "W", "E","S"];
  
  locationIndex = generateRandomNumberBetween(0,locations.length - 1);
  if(locationIndex == 2)
  { // if the location is a classroom then
    // generate random room number ie: 2N6
    room = generateRandomNumberBetween(1,6) + roomCodes[generateRandomNumberBetween(0, roomCodes.length - 1)] + generateRandomNumberBetween(1,6);
    opportunity += room;
  }  
  opportunity += locations[i] + " Task:";
  opportunity += task[generateRandomNumberBetween(0,task.length - 1)] + ".";
  
  
  
}
function generateRandomNumberBetween(a, b)
{
  randomNum = (Math.floor(Math.random() * b) + a);
  return randomNum;
}
