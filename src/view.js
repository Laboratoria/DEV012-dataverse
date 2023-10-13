export const renderItems = (data) => {
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
        </dl>
      `;
      }

      ul.appendChild(li);
    }

    rootElement.appendChild(ul); // Agregar la lista <ul> al elemento con id "root"
  }

  createAbejaList(data); // Llama a la función para crear la lista y agregarla
};
