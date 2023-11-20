export const renderItems = (data)=>{

  let listItem="";
  for(const element of data) {
    const precioKgMXN=parseFloat(element.facts.precioKgMxn);
    
    listItem+=
    
      `<li class="tarjeta" itemscope itemtype="Plantas Medicinales"data_id=${element.id}> 
        <dl itemscope itemtype="Plantas Medicinales">
          <link rel="stylesheet" href="style.css"/>
          <img src="${element.imageUrl}"/ class=image /><br >
          <dt></dt>
          <dd itemprop="planta" style="display: inline;"><h2>${element.planta}</h2></dd><br />
          <dt><h3><strong>Nombre común:</strong></h3></dt><dd itemprop="Nombre común" style="display:inline;"><h4>${element.name}</h4></dd>
          <dt><h3><strong>Nombre científico:</dt></h3><dd itemprop="Nombre científico" style="display:inline;"><h4>${element.nombreCientifico}</h4></dd>
          <dt><h3><strong>Descripción corta:</dt></h3><dd itemprop="Descripción corta"style="display:inline;"><h4>${element.shortDescription}</h4></dd>
          <dt><h3><strong>Descripción:</dt></h3><dd itemprop="Descripción" style= "display: inline;"style="display:inline;"><h4>${element.description}</h4></dd>
          <dt><h3><strong>Órgano beneficiado:</dt></h3><dd itemprop="Órgano beneficiado" style= "display: inline;style="display:inline;"><h4>${element.facts.organoBeneficiado}</h4></dd>
          <dt><h3><strong>Clasificación:</dt></h3><dd itemprop="Clasificación" style= "display: inline;"style="display:inline;"><h4>${element.facts.clasificacionPlanta}</h4></dd>
          <dt><h3><strong>Estado productor:</dt></h3><dd itemprop="Estado productor" style= "display: inline;"style="display:inline;"><h4>${element.facts.estadoProductor}</h4></dd>
          <dt><h3><strong>Precio KgMXN:</dt></h3><dd itemprop="Precio KgMXN" style= "display: inline;"style="display:inline;"><h4>${precioKgMXN}</h4></dd>
        </dl>
      </li>` 
    //document.getElementById("personaje").innerHTML=counter; //esto va en main
    
    
  }
  
  return `<ul class="container">${listItem}</ul>`;
}


const endPage = document.querySelector('[name="end-page"]');
const pItem = document.createElement('p');

pItem.textContent = "Creado por Miriam Felipe-14/Nov/2023";

endPage.appendChild(pItem);


//ul class="container"
//li class="tarjeta"
// 