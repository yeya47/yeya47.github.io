function displaybox(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
     
    let alarm = " "


    
     
       if  (dayOfWeek == 5 ){ 
          alarm = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion. "
     
    }

document.getElementById("output").innerHTML = alarm
}