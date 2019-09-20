/*var obj1={
    name: 'rekha',
    subject:'javascript',
    location: 'australia'
};

console.log(obj1.name);
console.log(obj1.subject);
console.log(obj1.location);
*/

/*var obj2=[
    {name:'rekha',surname:'panchaparvala'},
    {name:'keerthi',surname:'chilla'},
    {name:'sai sruthi', surname:'badiga'},
    {name:'vijaya saradhi',surname:'panchaparvala'},
    {name:'sai raghava',surname:'panchaparvala'}
];

console.log(obj2[0].name)
console.log(obj2[1].name);
console.log(obj2[0].surname);
console.log(obj2[2].name);
console.log(obj2[1].surname);

obj2.map((obj2)=>{
    if(obj2.surname=='panchaparvala')
        console.log('family name is '+obj2.surname)
        else
            console.log('family is '+ obj2.surname)
  
})
*/

var obj3 = [
  {
    name: "rekha",
    subjects: [
      "nodejs",
      "angular",
      "html",
      "css",
      "bootstrap",
      "javascript",
      "jquery"
    ],
    year: 2019
  },
  {
    name: "jeethu",
    subjects: ["sap", "java", "spring", "docker", "github"],
    year: 2019
  },
  {
    name: "keerthi",
    subjects: ["sap", "java", "spring", "docker", "github"],
    year: 2018
  },
  {
    name: "baby",
    subjects: ["english", "telugu", "physics", "NS", "social"],
    year: 2017
  }
];

obj3.map(obj3 => {
  console.log(obj3.subjects);
});

obj3.map((obj3)=>{return obj3.subjects[0].toUpperCase()})
(4) ["NODEJS", "SAP", "SAP", "ENGLISH"]

obj3.map(obj3 => {
  return obj3.subjects[0];
})(4)[("nodejs", "sap", "sap", "english")];

obj3.map((obj3)=>{return obj3.subjects})
(4) [Array(7), Array(5), Array(5), Array(5)]
0: (7) ["nodejs", "angular", "html", "css", "bootstrap", "javascript", "jquery"]
1: (5) ["sap", "java", "spring", "docker", "github"]
2: (5) ["sap", "java", "spring", "docker", "github"]
3: (5) ["english", "telugu", "physics", "NS", "social"]
length: 4
__proto__: Array(0)


obj3.map((obj3)=>{return obj3})
(4) [{…}, {…}, {…}, {…}]
0: {name: "rekha", subjects: Array(7), year: 2019}
1: {name: "jeethu", subjects: Array(5), year: 2019}
2: {name: "keerthi", subjects: Array(5), year: 2018}
3: {name: "baby", subjects: Array(5), year: 2017}
length: 4
__proto__: Array(0)


/*----------------------------------------------------

var obj4=[{
  name:'rekha',
  subjects:{
    english:'English nondetail',
    telugu:'telulgu kavithalu',
    hindhi:'pradhamika exam',
  },
  marks:[45,60,78,90],
  medium:'english medium',
  sex: 'female'
},
{
name:'gopi',
  subjects:{
    english:'English books',
    telugu:'telulgu kavithalu',
    hindhi:'pradhamika exam',
  },
  marks:[45,60,78,87],
  medium:'english medium',
  sex: 'male'
},
{
  name:'keerthi',
  subjects:{
    english:'english kavithalu',
    telugu:'telugu nondetail',
  },
  marks:[45,89,20,13],
  medium:'telugu meidum',
  sex:'female'
}]

obj4.filter((obj4)=>{
  return obj4.sex=='female'
})

obj4.filter(obj4=>{return obj4.sex=='female'}).map(obj=>{return obj.subjects})
(2) [{…}, {…}]
0: {english: "English nondetail", telugu: "telulgu kavithalu", hindhi: "pradhamika exam"}
1: {english: "english kavithalu", telugu: "telugu nondetail"}
length: 2
__proto__: Array(0)

obj4.filter(obj4=>obj4.sex=='female').map(obj4=>obj4.subjects['telugu']);
(2) ["telulgu kavithalu", "telugu nondetail"]

obj4.filter(obj4=>obj4.sex=='female').map(obj4=>obj4.marks)
(2) [Array(4), Array(2)]
0: (4) [45, 60, 78, 90]
1: (2) [45, 89]
length: 2
__proto__: Array(0)

obj4.filter(obj4=>obj4.sex=='female').map(obj4=>obj4.marks)

obj4.map((obj4)=>{return obj4.subjects})
(2) [{…}, {…}]
0: {english: "English books", telugu: "telulgu kavithalu", hindhi: "pradhamika exam"}
1: {english: "english kavithalu", telugu: "telugu nondetail"}
length: 2
__proto__: Array(0)


var a=prompt('enter name!!!!!!');
obj4.map(obj=>{
	if(obj.name==a)
		return 'sucess'
else
return 'false'
})


obj4.filter(obj=>{return obj.sex=='female'}).map(obj=>{return obj.marks})

var d=0;
a.reduce((d,a)=>{return d+=a})
"45,60,78,9045,89,20,13"
*/






