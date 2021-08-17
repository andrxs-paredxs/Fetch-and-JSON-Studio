// TODO: add code here
window.addEventListener('load', function(){
    const urlText = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(urlText).then( function( response ){
        response.json().then( function( astronauts ){
            
            console.log( astronauts );
            
            const Astro = document.getElementById("container");

            const htmlAstronaut = astronauts.forEach( astronaut => Astro.innerHTML +=
                `<div class="astronaut">
                <div class="bio">
                   <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li>Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills} </li>
                   </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
             </div>` );

        })
    });
});