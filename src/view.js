export const renderItems = (data) => {
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