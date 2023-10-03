import { filterData } from "./dataFunctions";

export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const channel = document.querySelector("select[name='channel']");

  function selectChannel () {

  const selectedChannel = dataFunctions.filterData(channel.value);
  document.getElementById("root").innerHTML = JSON.stringify(selectedChannel);
  }
  selectChannel ();
};

