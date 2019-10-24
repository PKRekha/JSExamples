
/**  Example from LeetCode. 
 * flower pot example, description of the example is :
 * Suppose you have a long flowerbed in which some of the plots are planted and 
 * some are not. However, flowers cannot be planted in adjacent 
 * plots - they would compete for water and both would die.
Given a flowerbed (represented as an array containing 0 and 1, 
    where 0 means empty and 1 means not empty), 
    and a number n, return if n new flowers can be planted 
    in it without violating the no-adjacent-flowers rule.
 */
var flowerPlant=function(flowerbed, num){  
    var counter=0;  
    if(num===0){
        return true;
    }
    flowerbed.unshift(0);
    flowerbed.push(0);
    for(var i=0;i<flowerbed.length-2;i++){
        let currentItem=flowerbed[i];
        let next=flowerbed[i+1];
        let nextToNext=flowerbed[i+2];

        if(currentItem===0 && next===0 && nextToNext===0){
            counter++;
            if(counter==num){
                return true;
            }
            i++;
        }
    }
    return false;
}

/**
 * 
 * output: 
 * flowerPlant([0,1,0,0,0,1,0,0],1)
true
flowerPlant([0,1,0,0,1],1)
false
flowerPlant([0,1,0,0,0,,1],1)
true
flowerPlant([0,1,0,0,0,,1],2)
false
 */