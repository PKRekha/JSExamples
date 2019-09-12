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