<template>
  <div class="menu-bottom">
    <div class="position-menu">
      <b>Contact :</b>&nbsp;&nbsp;
      <label>
        <a-icon type="mail" />&nbsp;ekkachaih.work@gmail.com&nbsp;&nbsp;
        <a-icon type="phone" />&nbsp;0943642815&nbsp;&nbsp;
      </label> 
    </div>
  </div>
</template>

<script>

export default {
  name: "menu-bottom",
  data() {
    return {

    }
  },
};
</script>

<style scoped>
.position-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #c9c9c980;
}
.menu-bottom {
  padding-bottom: 21px;
}
</style>
