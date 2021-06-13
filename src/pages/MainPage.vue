<template>
<div class="content__top content__top--catalog">
  <h1 class="content__title">
    Каталог
  </h1>
  <span class="content__info">
    152 товара
  </span>
</div>
<div class="content__catalog">
  <ProductFilters
  v-model:from-price="fromPrice"
  v-model:to-price="toPrice"
  v-model:category-id="categoryId"
  v-model:color="color"/>

  <section class="catalog">
    <ProductList :products="products"/>

    <BasePagination
    v-model:page="page"
    :quantity="countProducts"
    :per-page="productsPerPage"/>
  </section>
</div>
</template>

<script>
import products from '@/data/products';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilters from '@/components/ProductFilters.vue';

export default {
  components: { ProductList, BasePagination, ProductFilters },
  props: ['pageParams'],
  data() {
    return {
      fromPrice: 0,
      toPrice: 100000,
      categoryId: this.pageParams || 0,
      color: '',
      page: 1,
      productsPerPage: 10,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.fromPrice > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price > this.fromPrice);
      }
      if (this.toPrice > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.toPrice);
      }
      if (this.categoryId > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.categoryId,
        );
      }
      if (this.color !== '') {
        filteredProducts = filteredProducts.filter(
          (product) => product.colors.some((color) => color === this.color),
        );
      }
      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
