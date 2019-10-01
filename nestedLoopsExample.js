//this is an array which contains two objects!!!!
var cars = [
  {
    company: "honda",
    colors: [
      {
        name: "burntRed",
      },
      {
        name: "springGreen",
      },
    ],
  },
  {
    company: "ford",
    colors: [
      {
        name: "burntOrange",
      },
      {
        name: "black",
      },
    ],
  },
];

for(var i=0;i<cars.length;i++){
    var car=cars[i];
    for(var j=0;j<car.length;j++){
        console.log(car[j])
    }
}



var teamMembers = [
  {
    Region: "east",
    Members: [
      {
        id: 1,
        name: "rekha"},
        {
        id: 2,
        name: "gopi"
      }
    ]
  },
  {
    Region: "west",
    Members: [
      {
        id: 1,
        name: "keerthi"},
        {
        id: 2,
        name: "koti"
      }
    ]
  },
  {
    Region: "north",
    Members: [
      {
        id: 1,
        name: "sruthi"},
        {
        id: 2,
        name: "hanumantha rao"
      }
    ]
  }
];

for(teamMembersGroup of teamMembers){
	for(team of teamMembersGroup.Members){
if(team.id==1){
console.log(team.name)}
}
}


for(team of teamMembers){
 
  for(t of team.Members){
    console.log(t)
  }
}

for(team of teamMembers){
console.log(team);
if(team.length!=0){
	console.log(team.Members)
	var teams=Object.entries(team)
console.log(teams)

}
	
}