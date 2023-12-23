
//const scuberHq=42;

//function distanceFromHqInBlocks(distance) {
    //return Math.abs(distance-scuberHq)
  //}

  function distanceFromHqInBlocks(someValue){
    if (someValue>42){
        return someValue-42;
    } else {
        return 42 - someValue;
    }
    }
  
  
    function distanceFromHqInFeet(someValue){
      return distanceFromHqInBlocks(someValue) * 264;
  }

function distanceTravelledInFeet(start, destination) {
        return Math.abs(destination-start)*264
      }


// function calculatesFarePrice(start, destination) {
  //      const distanceInFeet=Math.abs(destination-start)
    //   if(distanceInFeet<=400) {
      //  return 0;
       //} else if(
        //distanceInFeet>400 && distanceInFeet<=2000)
        //{
          //  return (distanceInFeet-400)*0.02
       //}

//      else if (distanceInFeet>400 && distanceInFeet<=2500){
  //  return 25
//}
//else {
  //  return 'cannot travel that far'}
//}
      
function calculatesFarePrice(start, destination){
    const distance=distanceTravelledInFeet(start, destination)
    if (distance<=400){
      return 0;  
    }
    else if (distance>400 && distance<=2000){
      return 0.02 * (distance-400);
    }else if(distance>2000 && distance<=2500){
      return 25;
    }
    else{
      return 'cannot travel that far'
    }
  }
