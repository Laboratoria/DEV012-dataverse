import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const channel = document.querySelector("select[name='channel']");

renderItems(data);

channel.addEventListener("change", selectChannel);

function selectChannel() {
    
  const selectedChannel = channel.value;

  const filteredElements = filterData(data, "channel", selectedChannel);

  renderItems(filteredElements);
  
};


const audience = document.querySelector("select[name='targetAudience']");

audience.addEventListener("change", selectPublic);

function selectPublic() {

    const selectedPublic = audience.value;

    const filteredElements = filterData (data, "targetAudience", selectedPublic );

    renderItems(filteredElements)
}

const transmission = document.querySelector("select[name='status']");

transmission.addEventListener("change", selectTransmission);

function selectTransmission() {

  const selectedTransmission = transmission.value;

  const filteredTransmission = filterData(data, "status", selectedTransmission);

  renderItems(filteredTransmission);

};

// const selection = document.querySelectorAll("select[data-testid='select-filter']");

// renderItems(data);

// selection.addEventListener("change", selectElements);

// function selectElements() {
    
//       const selectedElements = selection.value;
    
//       const filteredElements = filterData(data, "name" , selectedElements);
    
//       renderItems(filteredElements);
      
//     };


