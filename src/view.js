export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //Crear un elemento ul por cada elemento en data
  const ul = document.createElement("ul");

  data.forEach(createLi);

  function createLi(element) {
    // const li = document.createElement("li");
    // //Inyectar cada li con los datos de cada elemento
    const li = `
    <li class="elements">
      <dl itemscope itemtype="https://schema.org/TVSeries" class="user-name">
        <figure>
          <img src="${element.imageUrl}" class="img"/>
        </figure>
        <dt itemprop=""><b>${element.name}</b></dt><dd itemprop=""> Canal de Television : ${element.channel}</dd>
        <dt itemprop="">Genero: ${element.genre}</dt>
      </dl>
    </li>
  `;

    //Cada li inyectarlo en la ul
    ul.innerHTML += li
  }

  //Renderizar el ul
  const rootElement = document.getElementById("root");
  
  rootElement.innerHTML = '';
  rootElement.appendChild(ul);
};
