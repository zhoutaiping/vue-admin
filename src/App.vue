<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  /* 解决element-ui的table表格控件表头与内容列不对齐问题 */
   body .el-table th.gutter{
      display: table-cell !important;
  }
  body .el-table colgroup.gutter{
      display: table-cell !important;
  }
   .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
