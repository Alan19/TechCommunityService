 
function initialize()
{
  opportunity = "Help needed at ";
  locations = ["Cafeteria", "Library", "Room", "Gym1", "Gym8"];
  task = ["cleaning up", "assisting teacher", "carrying equipment", "paperwork", "monitoring", "tutoring"];
  roomCodes = ["N", "W", "E","S"];
  opportunitiesArray = [];
  
  // locationIndex = generateRandomNumberBetween(0,locations.length - 1);
  // opportunity += locations[i] + " Task:";
  // opportunity += task[generateRandomNumberBetween(0,task.length - 1)] + ".";
//   populateArray();  
}
function generateRandomNumberBetween(a, b)
{
  randomNum = (Math.floor(Math.random() * b) + a);
  return randomNum;
}
function Opportunity()
{
    this.locations = locations[generateRandomNumberBetween(0, locations.length - 1)];
    this.task = task[generateRandomNumberBetween(0,task.length - 1)];
    if(this.location == 2)
    { // if the location is a classroom then
      // generate random room number ie: 2N6
      room = generateRandomNumberBetween(1,6) + roomCodes[generateRandomNumberBetween(0, roomCodes.length - 1)] + generateRandomNumberBetween(1,6);
      this.string = opportunity + this.locations + " for " + this.task + " at " + room;
    }
    else
    {
      this.string = opportunity + this.locations + " for " + this.task;
    }
    
}
function populateArray()
{
     for(var i = 0; i < 8; i++)
     {
         var theObject = new Opportunity();
         opportunitiesArray.push(theObject);
     }
}
function populateWithOpportunities()
{
    for (var i = 0; i < opportunitiesArray.length; i++)
    {
      card = `<div class="card-content white-text">
              <span class="card-title">${"Task" + i}</span>
              <p>${opportunitiesArray[i].string}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>`;
      $("#taskList").append(card);
    }
}
