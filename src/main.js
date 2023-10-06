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


