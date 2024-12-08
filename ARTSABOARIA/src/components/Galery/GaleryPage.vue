<script>
import './styles/GaleryPage.css';
import './styles/GaleryPageResponsive.css';
import ScrollReveal from 'scrollreveal';
import { inject, toRef } from 'vue';

export default {
    setup() {
        // Torna o menuAtivo reativo ao usar inject
        const menuAtivo = toRef(inject('menuAtivo'));

        return {
            menuAtivo,
        };
    },

    data() {
        return {
            products: [], // Lista de produtos da API
            searchQuery: "", // Termo de pesquisa digitado pelo usuário
            filteredProducts: [], // Produtos filtrados
        };
    },

    async mounted() {
        await this.fetchProducts(); // Carregar os produtos
        this.$nextTick(() => {
            this.initializeScrollReveal(); // Aplica animações aos elementos existentes
        });
    },

    methods: {
        async fetchProducts() {
            const URL = 'https://fakestoreapi.com/products';
            try {
                const response = await fetch(URL);
                if (!response.ok) throw new Error('Erro ao buscar dados da API');

                const data = await response.json();
                this.products = data; // Atualizar os produtos de forma reativa
                this.filteredProducts = data; // Inicialmente, todos os produtos são exibidos
            } catch (error) {
                console.error('Erro ao carregar produtos:', error.message);
            }
        },

        filterProducts() {
            const query = this.searchQuery.toLowerCase();
            this.filteredProducts = this.products.filter((product) =>
                product.title.toLowerCase().includes(query)
            );
        },

        initializeScrollReveal() {
            // Reaplicar animação para todos os cards
            ScrollReveal().reveal('.card_product', {
                origin: 'bottom',
                distance: '50px',
                duration: 800,
                interval: 200,
                reset: true,
            });
            ScrollReveal().reveal('#info_top_GaleryPage', {
                origin: 'top',
                distance: '50px',
                duration: 1000,
            });
        },

        goToProductPage(productId) {
            this.$router.push({ name: 'Produto', params: { id: productId } });
            console.log('Redirecionando para o produto ID:', productId);
        },
    },
};
</script>

<template>
    <transition name="fade" v-if="!menuAtivo">
        <div id="container_GaleryPage" >
            <div id="info_top_GaleryPage">
                <div class="title">
                    <h1>GALERIA</h1>
                </div>
                <!-- Campo de busca -->
                <div id="search_field">
                    <input
                        type="search"
                        v-model="searchQuery"
                        placeholder="Buscar produtos..."
                    />
                    <button @click="filterProducts">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                fill="#f7f6f3"
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Grid de produtos filtrados -->
            <div id="grid_product" v-if="filteredProducts.length">
                <div
                    v-for="product in filteredProducts"
                    :key="product.id"
                    class="card_product"
                >
                    <div id="info_top_card">
                        <img :src="product.image" :alt="product.title" />
                    </div>
                    <div id="info_bottom_card">
                        <div id="description">
                            <h3>{{ product.title }}</h3>
                            <p><span id="gray_caption">{{ product.category }}</span></p>
                            <p>
                                Quantidade em estoque:
                                <span id="orange_caption">{{ product.id }}</span>
                            </p>
                        </div>
                        <div id="interactivity">
                            <button @click="goToProductPage(product.id)">Comprar</button>
                            <h3>
                                R$ <span id="orange_caption">{{ product.price }}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Mensagem caso não haja resultados -->
            <p v-else>Nenhum produto encontrado.</p>
        </div>
    </transition>
</template>
