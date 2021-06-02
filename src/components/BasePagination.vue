<template>
<ul class="catalog__pagination pagination">
  <li class="pagination__item">
    <a
      :class="leftArrowClass"
       @click.prevent="moveToLeft(page)"
       aria-label="Предыдущая страница"
       href="#"
     >
      <svg width="8" height="14" fill="currentColor">
        <use xlink:href="#icon-arrow-left"></use>
      </svg>
    </a>
  </li>
  <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
    <a class="pagination__link"
      @click.prevent="changePage(pageNumber)"
      :class="{'pagination__link--current': pageNumber === this.page}"
      href="#"
     >
      {{ pageNumber }}
    </a>
  </li>
  <li class="pagination__item">
    <a
      :class="rightArrowClass"
       @click.prevent="moveToRight(page)"
       aria-label="Следующая страница"
       href="#"
     >
      <svg width="8" height="14" fill="currentColor">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </a>
  </li>
</ul>
</template>

<script>
export default {
  props: ['page', 'quantity', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.quantity / this.perPage);
    },
    leftArrowClass() {
      return {
        'pagination__link--disabled': this.page <= 1,
        'pagination__link pagination__link--arrow': true,
      };
    },
    rightArrowClass() {
      return {
        'pagination__link--disabled': this.page >= this.pages,
        'pagination__link pagination__link--arrow': true,
      };
    },
  },
  methods: {
    moveToLeft(page) {
      this.$emit('update:page', page - 1);
    },
    moveToRight(page) {
      this.$emit('update:page', page + 1);
    },
    changePage(page) {
      this.$emit('update:page', page);
    },
  },
};
</script>
