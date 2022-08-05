<template>
  <div>
    <button :style="{backgroundColor:'bgc'}">
        <slot>新建</slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props:{
    bgc:{
        type: String,
        default:'#ed733d'
    }
  },

  created() {},

  methods: {},
};
</script>

<style scoped></style>
