var FixedPwd= "^([a-zA-Z@!_\.]+[0-9]+[a-zA-Z0-9]+)%";
var Fixed= FixedPwd.match(FixedPwd);
var password=prompt('Enter alphanumeric password');
if(password === Fixed)
	console.log('OK');
console.log('NOT OK');
-------------------------------------------------------

var Fixed="Kanthi@143"
var password=prompt('Enter alphanumeric password');
if(password.match("^([a-zA-Z@!_\.]+[0-9]+[a-zA-Z0-9]+)%")){
	if(password == Fixed)
		console.log('ok');
	else
		console.log('not ok');
	}
else
	console.log('enter alphanumeric password');

--------------------

var pwd="Kanthi@143"
var f=pwd.match("^([a-zA-Z@!_\.]+[0-9]+[a-zA-Z0-9]+)%")
-------------------------------------------------------
var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';

for(var i=0;i<my_list.length;i++){
	if(my_list[i]=== eleCheck)
		console.log('already in the list of elements')
	else{
		console.log('user needss to be added to the list')
	}
}
----------------------------------------------------------

var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';
localStorage.setItem('mySubList',my_list);
for(var i=0;i<my_list.length;i++){
	if(my_list[i]=== eleCheck)
		console.log('already in the list of elements')
	else{
		console.log('list does not contain this item, please add it to the list, so that next time you will find it.');
	}
}


my_list.push(eleCheck)
------------------------------
var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';
localStorage.setItem('List',my_list);
for(i=0;i<=my_list.length;i++){
	if(eleCheck==my_list[i])
		console.log('Valid Subject');
	else
		console.log('Invalid subject');
}


var elePush=my_list.push(eleCheck);
console.log(my_list);
localStorage.getItem('List');
----------------------------------------


var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';

if(my_list==localStorage.setItem('List',my_list))
	console.log('list is same as original')
else
	console.log('list is diff from original')


	for(i=0;i<my_list.length;i++){
		if(eleCheck==my_list[i])
			console.log('Valid subject');
		else
			console.log('Invalid subject');

	}
	my_list.push(eleCheck)
	localStorage.setItem('my_list1',my_list);
	console.log(my_list);
	localStorage.getItem('my_list1');
	
	if(my_list==localStorage.getItem('my_list1'))
		console.log('list is same')
	else
		console.log('different')
	
	---------------------------------------------------------
	
var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';

if(my_list==localStorage.setItem('List',my_list))
	console.log('list is same as original')
else
	console.log('list is diff from original')


	for(i=0;i<my_list.length;i++){
		if(eleCheck==my_list[i])
			console.log('Valid subject');
		else
			console.log('Invalid subject');

	}
	my_list.push(eleCheck)
	localStorage.setItem('my_list1',my_list);
	console.log(my_list);
	localStorage.getItem('my_list1');
	
	if(my_list==localStorage.getItem('my_list1'))
		console.log('list is same')
	else
		console.log('different')
----------------------------------------------------------

var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';
localStorage.setItem('List',my_list)
for(i=0;i<localStorage.getItem('List').split(',').length;i++){
		if(eleCheck==localStorage.getItem('List').split(',')[i]){
			console.log('Valid subject');
		}
		else{
			console.log('Invalid subject, we have added your subject to the list');
		}
	}
	my_list.push(eleCheck);
	console.log(my_list);
	localStorage.setItem('List',my_list)
	localStorage.getItem('List');
	for(i=0;i<my_list.length;i++){
		if(my_list[i]==localStorage.getItem('List').split(',')[i])
			console.log('access granted')
		else
			console.log('denied');
	}
	---------------------------------------------------------------
	var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';
localStorage.setItem('List',my_list)
	for(i=0;i<my_list.length;i++){
		if(my_list[i]==localStorage.getItem('List').split(',')[i])
			console.log('access granted')
		else
			console.log('denied');
	}
	
	my_list.push(eleCheck);
	console.log(my_list);
	localStorage.setItem('List',my_list)
	localStorage.getItem('List');
	
	
	
	--------------------------------------------------------------------
	
var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck='jQuery';
	for(i=0;i<my_list.length;i++){
		if(eleCheck==my_list[i])
			console.log('Valid subject');
		else
			console.log('Invalid subject');
	}
	my_list.push(eleCheck);
	localStorage.setItem('myArray',my_list);
	
