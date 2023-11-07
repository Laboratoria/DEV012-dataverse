export const renderItems = (data) => {
<<<<<<< HEAD
  const ul = document.createElement("ul");
  for (let i = 0; i < data.length; i++) {
    const bee = data[i];
    const li = document.createElement("li");
    li.classList.add("tarjetas"); // AGREGUE ESTO
    li.setAttribute("itemtype", "http://schema.org/Animal"); // Agregar itemtype al elemento li
    
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
    ul.appendChild(li);
  }
  return ul;
};
=======
  // eslint-disable-next-line no-console
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  function createAbejaList(data) {
    const rootElement = document.getElementById("root"); // Obtener el elemento con id "root"
    const ul = document.createElement("ul");

    for (let i = 0; i < data.length; i++) {
      const abeja = data[i];
      const li = document.createElement("li");
      li.innerHTML = `
      <dl>
        <img src="${abeja.imageUrl}" alt="${abeja.id}">
        <dt><strong>Nombre:</strong></dt>
        <dd itemprop="name">${abeja.name}</dd>
        <dt><strong>Corta descripción:</strong></dt>
        <dd itemprop="shortDescription">${abeja.shortDescription}</dd>
        <dt><strong>Descripción:</strong></dt>
        <dd itemprop="description">${abeja.description}</dd>
        
      </dl>
    `;

      //este código comprueba si existe información adicional sobre una abeja (como su familia y promedio de vida) en el objeto abeja, y si es así, la muestra en forma de una lista descriptiva en la página.

      const facts = abeja.facts;
      if (facts) {
        li.innerHTML += `
        <dl>
          <dt><strong>Familia:</strong></dt>
          <dd itemprop="familia">${facts.familia}</dd>
          <dt><strong>Promedio de vida:</strong></dt>
          <dd itemprop="promedioDeVida">${facts.promedioDeVida}</dd>
          <dt><strong>productor De Miel:</strong></dt>
          <dd itemprop="productorDeMiel">${facts.productorDeMiel}</dd>
        </dl>
      `;
      }

      const curiosidades = abeja.extraInfo.curiosidades;
      if (curiosidades && curiosidades.length > 0) {
        let curiosidadesHTML = "";
        for (let j = 0; j < curiosidades.length; j++) {
          curiosidadesHTML += curiosidades[j];
          if (j < curiosidades.length - 1) {
            curiosidadesHTML += "<br>";
          }
        }
        li.innerHTML += `
    <dt><strong>Curiosidades:</strong></dt>
    <dd itemprop="curiosidades">
      ${curiosidadesHTML}
    </dd>
  `;
      }

      ul.appendChild(li);
    }

    rootElement.appendChild(ul); // Agregar la lista <ul> al elemento con id "root"
  }

  createAbejaList(data); // Llama a la función para crear la lista y agregarla
};
>>>>>>> f92c4f30a9ba54fc7cb322b0533f500ed6cf8313
