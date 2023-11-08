import { data } from "./data/dataset.js";

export const renderOptions = (data) => {
  let options ='' 
  data.forEach(d => {
  options += `<option value="${d}">${d}</option>`
  })
  return options
};
const personajes = data
export const renderItems = (personajes) => {
  let cards ='' 
  personajes?.forEach(personaje => {
  cards += `<li  class="card-background" itemtype="DragonBall">
  <dl itemscope itemtype="DragonBall">
  <img src="${personaje.imageUrl}" alt="${personaje.name}"/>
  
  <div id ="nombreEstilo">
  <dd itemprop="name" > <span>${personaje.name}</span></dd>
  </div>
  <div class ="info-container">
  
  <div class= "alineacion">
  <dt>Description:</dt><dd itemprop="shortDescription">${personaje.shortDescription}</dd>
  </div>
  
  <div class= "alineacion">
  <dt>Planet Of Birth:</dt><dd itemprop="placeOfBirth"> ${personaje.facts.placeOfBirth}<dd/>
  </div>
  
  <div class= "alineacion">
  <dt>Year Of Birth:</dt><dd itemprop="yearOfBirth"> ${parseFloat(personaje.facts.yearOfBirth)}</dd>
  </div>
  
  <div class= "alineacion">
  <dt>Field of Study:</dt> <dd itemprop="mainField"> ${personaje.facts.mainField}</dd>
  </div>
  </div>
  </dl>

</li>`;

  });
  return `<ul class="parent">${cards}</ul>`;
}
// esta funcion renderiza las 24 imagenes
// function renderCards(data){
  // ctrl k c comentar! ctr k u descomentar
// }

//para construir objetos o elementos html que se van a renderizar en la página