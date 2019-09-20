var findName={
    name: function(){
        return this.fName+" "+this.lName;
    }
};

var fullName={
    fName:'Rekha',
    lName:'Panchaparvala'
};

findName.name.call(fullName);
findName.name.apply(fullName);


var findName1={
    name:function(city,country){
        return this.fName+" "+this.lName+" "+city+" "+country;
    }
};


var fullName = {
  fName: "Rekha",
  lName: "Panchaparvala"
};

findName1.name.call(fullName);
findName1.name.call(fullName,'Machilipatnam','India');

findName1.name.apply(fullName,'Machilipatnam','India');
VM365:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:16

findName1.name.apply(fullName,['Machilipatnam','India']);
"Rekha Panchaparvala Machilipatnam India"//this is fine, working as expected.

findName1.name.call(fullName,['Machilipatnam','India']);
"Rekha Panchaparvala Machilipatnam,India undefined"//this is not working as expected, and we can not pass arguments as array, 
//if pass like that, then the commplete array part it is going to take as single element and others will be undefined.


