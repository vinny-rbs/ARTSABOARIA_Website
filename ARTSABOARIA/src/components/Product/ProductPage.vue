<script>
import './styles/ProductPage.css';
import './styles/ProductPageResponsive.css';

export default {
    props: ['id_Produto'], // Recebe o ID do produto via rota ou componente pai
    data() {
        return {
            product: null, // Inicializa o produto como null
        };
    },
    async mounted() {
        await this.fetchProduct(); // Chama o método para buscar o produto
    },
    methods: {
        async fetchProduct() {
            const URL = 'http://localhost:8080/produto/listar';
            try {
                const response = await fetch(URL);
                if (!response.ok) throw new Error('Erro ao buscar dados da API');

                const data = await response.json();
                // Encontra o produto pelo ID recebido
                this.product = data.find(p => p.id_Produto === parseInt(this.id_Produto));
            } catch (error) {
                console.error('Erro ao carregar produto:', error.message);
            }
        },
        goBack() {
            this.$router.back(); // Navega para a página anterior
        },
    },
};
</script>

<template>
    <div id="container_ProductPage">
        <div id="info_top_ProductPage" v-if="product">
            <div id="title_route">
                <span><RouterLink to="/" @click="returnMenu"><span>Página Inicial</span></RouterLink> / <RouterLink to="/galeria" @click="returnMenu"><span>Galeria</span></RouterLink> /</span> <span id="gray_caption">{{ product.nome_Produto }}</span>
            </div>
            <div id="content_product">
                <div id="image_perfil_product">
                    <img :src="product.url_imagem" alt="product.nome_Produto" id="miniature_image_perfil">
                    <img :src="product.url_imagem" alt="product.nome_Produto" id="principal_image_perfil">
                </div>
                <div id="description_perfil_product">
                    <div id="info_top_description_perfil_product">
                        <h1>{{ product.nome_Produto }}</h1>
                        <h3 id="gray_caption">{{ product.embalagem }}</h3>
                        <div id="rating">
                            <!-- Implementação de estrelas de avaliação -->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <!-- Continue as estrelas de avaliação... -->
                        </div>
                        <h1 id="price">R$ <span id="orange_caption">{{ product.valor_Produto }}</span></h1>
                    </div>
                    <div class="info_bottom_description_perfil_product">
                        <div id="input_fields">
                            <div class="field_amount">
                                <label id="gray_caption">Quantidade</label>
                                <input type="text" maxlength="2" placeholder="0">
                            </div>
                            <div class="field_amount">
                                <label id="gray_caption">Calcular Frete</label>
                                <input type="text" maxlength="8" placeholder="12230402">
                            </div>
                        </div>
                    <button id="button_shop"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                        ADICIONAR NO CARRINHO
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="loading_field" v-else>
            <div id="loading_icon"><span></span></div>
        </div>
    </div>
</template>
