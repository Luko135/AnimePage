import {baseURL, endpoints} from'./api.js';
import{render} from './renders.js'


const error = (err) => {
    console.log(err);
  };
 

fetch(`${baseURL}${endpoints.allFilms}` ,{method:"GET"})
.then(data => data.json())
.then((data) =>{
    const anime = document.querySelector('.anime');
    render(data,anime,0);
})
.catch(error);

fetch(`${baseURL}${endpoints.people}` ,{method:"GET"})
.then(data => data.json())
.then((data) =>{
    const character= document.querySelector('.character');
    render(data,character,1)
})
.catch(error);





