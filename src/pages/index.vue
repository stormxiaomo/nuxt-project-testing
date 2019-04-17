<template>
   <div>
      <labelSearchPanel v-bind:permissions="permissions"/>
      <hr/>
      <TreeComponent v-bind:permissionData="permissionData"/>
  </div>
</template>

<script lang="ts">
  import labelSearchPanel from '../components/labelSearchPanel.vue';
  import TreeComponent from '../components/TreeSelect/index.vue';
  import { mockPermissions } from '../../dummies/mockPermissions';
  import { flatPermissions } from '../utils/flatPermissions';

  export default {
    name: "index",
    components: {
      labelSearchPanel,
      TreeComponent
    },
    mounted(){
      this.permissions = mockPermissions;
      this.permissionData = flatPermissions(mockPermissions);
    },
    data() {
      return {
        permissions: {},
        permissionData: {},
      };
    }
  };
</script>

<style lang="scss" scoped>
</style>
