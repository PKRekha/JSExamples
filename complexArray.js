/* in the below array, find marks and total of marks  where location in india is pune */

var array3 = [{
    name: 'rekha',
    lname: 'panchaparvala',
    spouseName: 'Gopi',
    marks: [75, 90, 66, 98],
    location: {
      india: 'pune',
      australia: 'sydney'
    }
  },
  {
    name: 'keerthi',
    lname: 'chilla',
    spouseName: 'koti',
    marks: [65, 99, 64, 92],
    location: {
      india: 'hyderabad',
      australia: 'newcastle'
    }
  },
  {
    name: 'sruthi',
    lname: 'badiga',
    spouseName: 'hanumantha rao',
    marks: [57, 93, 60, 91],
    location: {
      india: 'machilipatnam',
      australia: 'melborne'
    }
  }
]

//this part is for getting marks for record where location in india is pune.....
array3.filter(obj => obj.location.india == "pune")
.map(obj => obj.marks);

//this part of code is for gettinng total of marks where location is pune.
array3
  .filter(obj => obj.location.india == "pune")
  .map(obj => obj.marks)
  .reduce((acc, obj) => {
    return (acc += obj);
  })
  .reduce((a, obj) => (a += obj));

o / p:

  329;