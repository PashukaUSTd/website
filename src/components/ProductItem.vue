<template>
<li class="catalog__item" v-for="(product, index) in products" :key="index">
  <a class="catalog__pic" href="#">
    <img :src='product.img'  :alt='product.title'>
  </a>
  <h3 class="catalog__title">
    <a href="#">
      {{ product.title }}
    </a>
  </h3>
  <span class="catalog__price">
    {{ product.price }} ₽
  </span>
  <ProductItemColors :colors="product.colors"/>
</li>
</template>

<script>
import ProductItemColors from './ProductItemColors.vue';

export default {
  components: { ProductItemColors },
  props: ['products'],
};
</script>
