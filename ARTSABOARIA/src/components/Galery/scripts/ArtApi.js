const URL = 'https://rickandmortyapi.com/api/character';

async function ChamarApi() {
    // Fetch dos dados da API
    const resp = await fetch(URL);
    
    const obj = await resp.json();
    console.log(obj)

    // Selecionando o container onde os cards serão adicionados
    var grid_product = document.querySelector('#grid_product');
    
    // Variável para acumular o HTML dos cards
    let cardsHtml = '';

    // Loop para criar os cards com base nos dados da API
    obj.results.forEach(element => {
        // Adicionando o HTML do card à variável cardsHtml
        cardsHtml += `
        <div class="card_product">
            <div id="info_top_card">
                <img src="${element.image}" alt="${element.name}">
            </div>
            <div id="info_bottom_card">
                <div id="description">
                    <h3>${element.name}</h3>
                    <p><span id="gray_caption">Sabonetes de frutas tropicais</span></p>
                    <p>Quantidade em estoque: <span id="orange_caption">20</span></p>
                </div>
                <div id="interactivity">
                    <button>Comprar</button>
                    <h3>R$ <span id="orange_caption">25,90</span></h3>
                </div>
            </div>
        </div>
        `;
    });

    // Adicionando o HTML acumulado ao container de uma vez
    grid_product.innerHTML = cardsHtml;
}


ChamarApi()
