<script>
export default {
    props: ['id'], // Recebe o ID do produto via rota ou componente pai
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
            const URL = 'https://fakestoreapi.com/products';
            try {
                const response = await fetch(URL);
                if (!response.ok) throw new Error('Erro ao buscar dados da API');

                const data = await response.json();
                // Encontra o produto pelo ID recebido em props
                this.product = data.find((p) => p.id === parseInt(this.id));
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
    <div id="container_ProductPage" v-if="product">

        <div id="info_top_ProductPage">
            <div id="title_route">
                <span>Página Inicial / Galeria / <span>{{ product.title }}</span></span>
            </div>
            <div id="content_product">
                <aside id="image_perfil_product">
                    <img :src="product.image" alt="product.title" id="miniature_image_perfil">
                    <img :src="product.image" alt="product.title" id="principal_image_perfil">
                </aside>
                <article id="description_perfil_product">
                    <h1>{{ product.title }}</h1>
                    <p>{{ product.category }}</p>
                    <h1>{{ product.price }}</h1>
                    <input type="number">
                    <button>ADICIONAR NO CARRINHO</button>
                </article>
            </div>
        </div>


        <!--<div class="product-details">
            <img :src="product.image" alt="product.title" width="300em" height="300em">
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <p><strong>Preço:</strong> R$ {{ product.price }}</p>
            <button @click="goBack">Voltar</button>
        </div> -->
    </div>
    <div v-else>
        <p>Carregando produto...</p>
    </div>
</template>
