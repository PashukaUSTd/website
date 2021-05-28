<template>
  <section class="catalog">
    <ProductList :products="products"/>

    <BasePagination v-model="page" :quantity="countProducts" :per-page="productsPerPage"/>
  </section>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';

export default {
  name: 'App',
  components: { ProductList, BasePagination },
  data() {
    return {
      page: 3,
      productsPerPage: 5,
    };
  },
  computed: {
    products() {
      console.log('Products()');
      const offset = (this.page - 1) * this.productsPerPage;
      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      console.log('countProducts');
      return products.length;
    },
  },
};
</script>
