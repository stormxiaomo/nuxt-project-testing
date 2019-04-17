<template>
  <div class="check-item" >
    <span v-bind:style="levelStyle" v-bind:class="(level === 0)? '': 'child-class'"></span>
    <input type="checkbox" v-bind:name="code" v-bind:id="code" v-bind:value="code" v-bind:checked="checked" v-on:change="onChangeHandler" >
    <label>{{label}}</label>
  </div>
</template>

<script lang="ts">
  export default {
    name: "TreeItem",
    props:[
      "code",
      "label",
      "level",
      "checkedList",
      "updateChekedList",
    ],
    mounted(){
      this.updateChekedList(this.code);
    },
    data() {
      return {};
    },
    computed: {
      levelStyle: function() {
        const levelpadding = this.level * 30;

        return {
          paddingLeft: `${levelpadding}px`
        }
      },
      checked: function() {
        return this.checkedList.includes(this.code);
      }
    },
    methods: {
      onChangeHandler: function(event) {
        this.$emit('onChange', event.target.name);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .check-item {
    padding-bottom: 8px;
  }
  .child-class {
    &:after {
      content: "";
      position: absolute;
      width: 1px;
      height: 25px;
      margin-left: -20px;
      margin-top: -12px;
      background-color: #eee;
    }
    &:before {
      content: "";
      position: absolute;
      width: 25px;
      height: 1px;
      background-color: #d4d4d4;
      margin-left: -20px;
      margin-top: 12px;
  }
  }
</style>