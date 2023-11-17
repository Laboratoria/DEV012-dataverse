export const renderItems = (data) => {
  const ul = document.createElement("ul"); //Se crea un nuevo elemento ul
  data.forEach((bee) => { // Utilizamos forEach para iterar sobre el array data, Cada elemento se representa como bee en cada iteración.
    const li = document.createElement("li");//Dentro del bucle se crea un nuevo elemento HTML li (elemento de la lista) para
    //cada elemento del array
    li.classList.add("tarjetas"); // Se agrega la clase CSS "tarjetas" al elemento de lista (li). Las clases CSS son 
    //utilizadas para aplicar estilos específicos.
    li.setAttribute("itemtype", "http://schema.org/Animal"); // Agregar itemtype al elemento li cada elemento 
 
    li.setAttribute("itemscope", ""); // itemscope se utiliza para indicar que el elemento y sus descendientes 
    //contienen información sobre un solo ítem del esquema.

    //innerHTML para establecer el contenido HTML del elemento de lista (li)
    li.innerHTML = `
    <dl itemscope itemtype="http://schema.org/Animal"> 
        <img class="imgTarjeta" src="${bee.imageUrl}" alt="${bee.id}">
        <dt><strong>Nombre:</strong></dt>
        <dd itemprop="name">${bee.name}</dd>
        <dt><strong>Corta descripción:</strong></dt>
        <dd itemprop="shortDescription">${bee.shortDescription}</dd>
        <dt><strong>Descripción:</strong></dt>
        <dd itemprop="description">${bee.description}</dd>
        <dt><strong>Familia:</strong></dt>
        <dd itemprop="familia">${bee.facts.familia}</dd>
        <dt><strong>Promedio de vida:</strong></dt>
        <dd itemprop="promedioDeVida">${bee.facts.promedioDeVida}</dd>
        <dt><strong>Productor De Miel:</strong></dt>
        <dd itemprop="productorDeMiel">${bee.facts.productorDeMiel}</dd>
      </dl>
    `;
    ul.appendChild(li); // se agrega como un hijo al elemento de lista no ordenada (ul).
  }); //Se cierra bucle forEach
  return ul; //Devuelve la lista no ordenada completa con todos los elementos del array data
  // Esta estructura se utiliza para representar información estructurada sobre abejas en un formato HTML.
};