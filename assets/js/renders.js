
const  getSpecies = async (URL) => {
    const  data = await fetch(URL);
    const  resoult = await data.json();
    const species = resoult.name;
    // console.log(species);// value of name
    return species
}

  const innerDOM  =  async (box,object,templateNumber) =>{    
    const templates = [
        `<h2 class="anime__title">${object.title}</h2>
        <p class="anime__description">${object.description}</p>
        <p class="anime__relased">relased: ${object.release_date}</p>
        <p class="anime__rate">rate: ${object.rt_score}</p>
        <form action="" class="anime__form">
            <div class="anime__label">
                <input type="text" placeholder="comment">
                <button type="submit"><i class="fas fa-paper-plane fa-lg"></i></button>
            </div>
        </form>`,

        `
        <h2 class="character__title">${object.name}</h2>
        <p class="character__description">gender: ${object.gender}</p>
        <p class="character__relased">eye color: ${object.eye_color}</p>
        <p class="character__rate">hair color: ${object.hair_color}</p>
        <p class="character__rate">age: ${object.age}</p>
        <p class="character__rate">age: ${object.species}</p>
        ${getSpecies(object.species).then(data =>{})}</p>`
    ];
    box.innerHTML = templates[templateNumber]
  }


export const render = (data,box,templateNumber) =>{
    const fragment = document.createDocumentFragment()
    for(let i=0; i < data.length; i++){
        const movie = data[i];
        const div = document.createElement('div')
        div.classList=`${box.classList[0]}__cart`;
        innerDOM(div,movie,templateNumber);
        fragment.appendChild(div);
      }
      box.appendChild(fragment);
  }
