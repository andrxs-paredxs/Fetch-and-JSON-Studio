// TODO: add code here
window.addEventListener('load', function(){
    const urlText = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(urlText).then( function( response ){
        response.json().then( function( astronauts ){
            
            console.log( astronauts );
            astronauts.sort( (a1, a2) => a1.hoursInSpace - a2.hoursInSpace);
            
            const Astro = document.getElementById("container");

            let index = 1;
            const htmlAstronaut = astronauts.forEach( astronaut => Astro.innerHTML +=
                `<div class="astronaut">
                <div class="bio">
                   <h3>${index++}. ${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li style=color:${ astronaut.active ? "green" : "" }>Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills} </li>
                   </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
             </div>` );

             document.body.innerHTML += `<h3>Astronaut count: ${astronauts.length}</h3>`


        })
    });
});