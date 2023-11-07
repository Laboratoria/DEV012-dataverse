export const renderItems = (data) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99f6e0adb899e8267ee9a37b118f858bd37c1784
  const ul = document.createElement("ul");
  for (let i = 0; i < data.length; i++) {
    const bee = data[i];
    const li = document.createElement("li");
<<<<<<< HEAD
    li.classList.add("tarjetas"); 
=======
    li.classList.add("tarjetas"); // AGREGUE ESTO
>>>>>>> 99f6e0adb899e8267ee9a37b118f858bd37c1784
    li.setAttribute("itemtype", "http://schema.org/Animal"); // Agregar itemtype al elemento li
    
    li.innerHTML = `
      <dl itemscope itemtype="http://schema.org/Animal">
        <img class="imgTarjeta" src="${bee.imageUrl}" alt="${bee.id}">
<<<<<<< HEAD
=======
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
>>>>>>> 99f6e0adb899e8267ee9a37b118f858bd37c1784
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
>>>>>>> f92c4f30a9ba54fc7cb322b0533f500ed6cf8313
