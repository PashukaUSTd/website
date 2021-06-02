<template>
  <li class="colors__item">
    <label class="colors__label">
        <input class="colors__radio sr-only"
         type="radio" :value="color" :name="productId" v-model="chekedColor">
         <span class="colors__value"
         :style="{'background-color': color, 'border': '1px solid #000'}"></span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['color', 'productId'],
  data() {
    return {
      chekedColor: '#73B6EA',
    };
  },
};
</script>
