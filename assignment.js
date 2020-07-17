// //  feetToMile
function feetToMile(feet){
    var Mile=feet/5280;
    return Mile;
  }
  var Mirpur=feetToMile(15840);
  console.log(Mirpur);
  var Khilgaon=feetToMile(2607)
  console.log(Khilgaon);
  var Gazipur=feetToMile(1704);
  console.log(Gazipur);

// woodCalculator
function woodCalculator(chair,table,bed){
  var woodForchair=chair*1;
  var woodFortable=table*3;
  var woodForbed=bed*5;
  var totalWood=woodForchair+woodFortable+woodForbed;
  return  totalWood;
}
var wood=woodCalculator(3,3,3);
console.log(wood);

// brickCalculator
function brickCalculator(bricks){
  var firstTenfloors=10*15*1000;
  var secondTenfloors=10*12*1000;
  var restOFfloors=10*12*1000;
  var totalBricks=firstTenfloors+secondTenfloors+restOFfloors;
  return totalBricks;
} 
var  numberOFbricks=brickCalculator(1000);
console.log(numberOFbricks);
  // tinyFriend
  function tinyFriend(friends){
    var small=friends[0];
    for (var i=0; i<friends.length; i++){
      var currentFriends=friends[i];
    if (currentFriends>small){
     tiny=currentFriends;
    }
   
   }
   return small;


  }
  var tinyOne=tinyFriend(["Oronno vai ","Mahtasim sami","Mumu apu","Shamima dewan","Anamika","Esha apu","Abdullah vai","Afsana zaman","Kazi Tabassum Nidra"]);
  console.log(tinyOne);


  
  
  
  