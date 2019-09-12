//Example summary:
//Take a list of elements, and take an element from the user. Check if the element is presesnt in the list,
//if it is then it is valid and if not add the element to the list, so that when next time user enter the same value, it has to be valid.


var my_list=['nodeJs','Javascript','AngularJs','Angular','React'];
var eleCheck=prompt('Enter any subject!!!!!');
	for(i=0;i<my_list.length;i++){
		if(eleCheck==my_list[i])
			console.log('Valid subject');
		else
			console.log('Invalid subject');
	}
	my_list.push(eleCheck);
	localStorage.setItem('myArray',my_list);