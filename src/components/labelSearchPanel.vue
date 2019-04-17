<template>
  <div>
    <h5>{{"Find Label by Code"}}</h5>
    <div>
      <label>Code Input</label>
      <input
        type="text"
        placeholder="input code here"
        v-model="code"
      >
    </div>
    <div>
      <label>Result Label</label>
      <input
        type="text"
        placeholder="result here"
        readonly
        v-model="getLabel"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { findLabel } from "../utils/findLabel";

export default {
  name: "labelSearchPanel",
  props: ["permissions"],
  data() {
    return {
      code: ""
    };
  },
  computed: {
    getLabel: function() {
      const label = findLabel(this.code, this.permissions);
      return label;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>