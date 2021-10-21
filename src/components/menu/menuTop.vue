<template>
  <div id="menu-top">
    <div class="position-menu">
      <label 
        :class="'label-menu ' + ($route.name === 'profile' ? 'label-menu-active' : '')" 
        @click="seletedPath('profile')"
      >
        Profile
      </label>
      <label 
        :class="'label-menu ' + ($route.name === 'gallery' ? 'label-menu-active' : '')" 
        @click="seletedPath('gallery')"
      >
      Gallery
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-top",
  data() {
    return {

    }
  },
  created() {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function(){
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
          let element = document.getElementById("menu-top");
          element.classList.add("action-menu-hide");
          element.classList.remove("action-menu-show");
      } else {
        let element = document.getElementById("menu-top");
        element.classList.remove("action-menu-hide");
        element.classList.add("action-menu-show");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  },
  methods: {
    seletedPath(path) {
      if (this.$route.name !== path) {
        this.$router.push({name: path})
      } 
    },
  }
};
</script>

<style scoped>
.action-menu-hide {
  animation: actionHide 0.5s ease forwards;
}
@keyframes actionHide {
  0% {opacity: 1}
  100% {opacity: 0}
}
.action-menu-show {
  animation: actionShow 0.5s ease forwards;
}
@keyframes actionShow {
  0% {opacity: 0}
  100% {opacity: 1}
}
.position-menu {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: #c9c9c980;
}
#menu-top {
  padding-bottom: 31px;
}
.label-menu {
  cursor: pointer;
  background-color: #121212;
  padding: 0 60px;
  color: white;
  font-size: 1.5em;
}
.label-menu:hover {
  color: rgba(255, 255, 255, 0.74);
}
.label-menu-active {
  /* background-color: #12121294; */
  background-color: #FFc400;
  color: black;
}
@media only screen and (max-width: 1024px) {

}
@media only screen and (max-width: 800px) {
  
}
@media only screen and (max-width: 414px) {
  #menu-top {
    padding-bottom: 21px;
  }
  .label-menu {
    font-size: 1em;
    padding: 0px 40px;
  }
}
</style>
