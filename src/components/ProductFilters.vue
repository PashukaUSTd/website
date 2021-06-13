<template>
<aside class="filter">
  <h2 class="filter__title">Фильтры</h2>

  <form class="filter__form form" action="#" method="get" @submit.prevent="submit()">
    <fieldset class="form__block">
      <legend class="form__legend">Цена</legend>
      <label class="form__label form__label--price">
        <input class="form__input" v-model.number="currentPriceFrom"
        type="text" name="min-price">
        <span class="form__value">От</span>
      </label>
      <label class="form__label form__label--price">
        <input class="form__input" v-model.number="currentPriceTo"
        type="text" name="max-price">
        <span class="form__value">До</span>
      </label>
    </fieldset>

    <fieldset class="form__block">
      <legend class="form__legend">Категория</legend>
      <label class="form__label form__label--select">
        <select class="form__select" name="category" v-model="currentCategoryId">
          <option value="0">Все категории</option>
          <option :value="category.id" v-for="category in categories"
           :key="category.id">
              {{ category.title }}
          </option>
        </select>
      </label>
    </fieldset>

    <fieldset class="form__block">
      <legend class="form__legend">Цвет</legend>
      <ul class="colors">
        <li class="colors__item" v-for="(color, index) in colors" :key="index">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio" name="color"
             v-model="filterColors" :value="color">
            <span class="colors__value" :style="{'background-color': color}">
            </span></label>
        </li>
      </ul>
    </fieldset>
    <fieldset class="form__block">
      <legend class="form__legend">Объемб в ГБ</legend>
      <ul class="check-list">
        <li class="check-list__item" v-for="(value, index) in filterValueOfGb" :key="index">
          <label class="check-list__label">
            <input class="check-list__check sr-only" type="checkbox"
            name="volume" :value="value" :checked="index === 0">
            <span class="check-list__desc">
              {{ value }}
              <span>(313)</span>
            </span>
          </label>
        </li>
      </ul>
    </fieldset>

    <button class="filter__submit button button--primery" type="submit">
      Применить
    </button>
    <button class="filter__reset button button--second" type="button" @click="reset()">
      Сбросить
    </button>
  </form>
</aside>
</template>

<script>
import categories from '../data/categories';
import colors from '../data/colors';
import filterValueOfGb from '../data/valueGB';

export default {
  props: ['fromPrice', 'toPrice', 'categoryId', 'color'],
  emits: ['update:fromPrice', 'update:toPrice', 'update:categoryId', 'update:color'],
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 100000,
      currentCategoryId: 0,
      filterColors: '',
    };
  },
  computed: {
    categories() {
      return categories;
    },
    colors() {
      return colors;
    },
    filterValueOfGb() {
      return filterValueOfGb;
    },
  },
  methods: {
    submit() {
      this.$emit('update:fromPrice', this.currentPriceFrom);
      this.$emit('update:toPrice', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:color', this.filterColors);
    },
    reset() {
      this.$emit('update:fromPrice', 0); this.currentPriceFrom = 0;
      this.$emit('update:toPrice', 0); this.currentPriceTo = 100000;
      this.$emit('update:categoryId', 0); this.currentCategoryId = 0;
      this.$emit('update:color', ''); this.filterColors = '';
    },
  },
};

</script>
