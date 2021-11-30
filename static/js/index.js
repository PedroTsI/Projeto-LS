async function getFoods() {
    const url = `../json/cardapio.json`;
  
    const response = await fetch(url);
  
    const result = await response.json();
  
    console.log(result);
  }
  
  getFoods();