<template>
<li class="catalog__item">
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
  <ul class="colors colors--black">
    <ProductItemColors :color="color" :productId="product.id"
    v-for="(color, index) in product.colors" :key="index"/>
  </ul>
</li>
</template>

<script>
import ProductItemColors from './ProductItemColors.vue';

export default {
  components: { ProductItemColors },
  props: ['product'],
};
</script>
