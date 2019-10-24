/** this is hacker rank, spicy chicken example. 
 * example summary: it contains two parameters, one is min and other one is max
 * if min=1 and max=100, then display this pattern with line numbers, and in the question pattern
 * till 7 th number all are in black color and remaining all are in red color.
 * 1 
 * 2
 * 3 Spciy
 * 4
 * 5 Chicken
 * 6 Spicy
 * 7
 * 8
 * 9 Spicy
 * 10 Chicken
 * 11
 * 12 Spicy
 * 13
 * 14
 * 15 SpicyChicken!
 * 16
 * 17
 * 18 Spicy
 * 19
 * 20 SpciyChicken!
 * 
*/

function getSpicyChicken(min, max){
    var a3=3;
    var a5=5;
    var a15=15;
    if(min==1 && max==100){
        for(var i=1; i<=100; i++){
                      
        if(i%(a3)==0 && i%a15!==0){
                console.log(`${i} Spicy`)
            }
            else if(i%a5==0 && i%a15!==0){
                console.log(`${i} Chicken`)
            }
            else if(i%a15==0){
                console.log(`${i} SpicyChicken!`)
            }else{
                console.log(i)
            }
         
            
        }
    }
}

getSpicyChicken(1,100);

