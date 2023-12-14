

const scuberHq=42;

function distanceFromHqInBlocks(distance) {
    return Math.abs(distance-scuberHq)
  }


  function distanceFromHqInFeets(distance){
   return Math.abs(distance-scuberHq)*264
    }


function distanceTravelledInFeet(start, destination) {
        return Math.abs(destination-start)*264
      }


 function calculatesFarePrice(start, destination) {
        const distanceInFeet=Math.abs(destination-start)
       if(distanceInFeet<=400) {
        return 0;
       } else if(
        distanceInFeet>400 && distanceInFeet<=2000)
        {
            return (distanceInFeet-400)*0.02
       }

        else if (distanceInFeet>400 && distanceInFeet<=2500){
    return 25
}
else {
    return 'cannot travel that far'}
}
      
    