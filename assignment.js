// //  feetToMile
function feetToMile(feet){
    var Mile=feet/5280;
    return Mile;
  }
  var Mirpur=feetToMile(15840);
  console.log("Mirpur mile is:",Mirpur);
  var Khilgaon=feetToMile(2607)
  console.log("Khilgaon mile is:",Khilgaon);
  var Gazipur=feetToMile(5640);
  console.log("Gazipur mile is :",Gazipur);
  /* Now we will compare mile using if,else condition.Where we will find out the max mile in  an element .Note that, our final outputs for "feetToMile" are 3, 0.49375 and 1.0681818181818181.*/
  var firstLength =3;
  var secondLength=0.49375;
  var thirdLength=1.06818;
  /*here,for the thirdLength/final output of Gazipur mile, we used 1.06818 insted of 1.0681818181818181 for avoiding the error.*/
  if (firstLength>secondLength){
    if(firstLength>thirdLength){
      console.log("Mirpur is bigger");
    }
    else {
      console.log("Gazipur is bigger" );
    }
  }
 else{
  if (secondLength>thirdLength){
    console.log("Khilgaon is bigger ");
  }
  else {
    console.log("Gazipur is bigger");
  }

 } 
// woodCalculator
function woodCalculator(chair,table,bed){
  /* hence,we will calculate the wood in 1 cubic feet.*/
  var woodForchair=chair*1;   
  var woodFortable=table*3;
  var woodForbed=bed*5;
  var totalWood=woodForchair+woodFortable+woodForbed;
  return  totalWood;
}
var wood=woodCalculator(3,3,3);
console.log("Total woods for Chair,Table and Bed:",wood);

// brickCalculator
function brickCalculator(bricks){
  var firstTenfloors=10*15*1000;
  var secondTenfloors=10*12*1000;
  var restOFfloors=10*12*1000;
  var totalBricks=firstTenfloors+secondTenfloors+restOFfloors;
  return totalBricks;
} 
var  numberOFbricks=brickCalculator(1000);
console.log("Total bricks for building:",numberOFbricks);
  // tinyFriend
function tinyFriend(friend){
  var singleFriend =friend[0];
  for(var i = 0; i < friends.length; i++){
      var element = friends[i];
      if (element < singleFriend){
          singleFriend = element ;
      }
  }
  return singleFriend;
};
var friends =["Shamima","Oronno","Samim", "Mumu", "Nidra",];
var results = tinyFriend(friends);
console.log("Smallest friend is:",results);

  
  
  
  