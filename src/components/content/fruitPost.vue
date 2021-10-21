<template>
  <div v-if="setFruits !== null" class="fruit-post" id="someId">
    <div class="fruit-post-bg"> 
      <a-tooltip placement="left">
        <template slot="title">
          <span>กดปุ่ม Esc เพื่อปิด</span>
        </template>
        <div class="close-fruit-post">
          <a-icon 
            type="close" 
            class="icon-close-fruit-post"
            @click="closeFruitPost('click')"
          />
        </div>
      </a-tooltip>
      <div class="set-arrow arrow-left show-arrow-web" @click="slideFruit('left', setFruits)">
        <a-icon type="caret-left" />
      </div>
      <div class="set-arrow arrow-right show-arrow-web" @click="slideFruit('right', setFruits)">
        <a-icon type="caret-right" />
      </div>
    </div>
    <div class="fruit-post-content">
      <div class="set-arrow arrow-left show-arrow-mobile" @click="slideFruit('left', setFruits)">
        <a-icon type="caret-left" />
      </div>
      <div class="set-arrow arrow-right show-arrow-mobile" @click="slideFruit('right', setFruits)">
        <a-icon type="caret-right" />
      </div>
      <img :src="setFruits.src" :alt="setFruits.alt" :draggable="false">
    </div>
  </div>  
</template>

<script>
import fruit01 from '../../assets/image/fruit-01.jpg'
import fruit02 from '../../assets/image/fruit-02.jpg'
import fruit03 from '../../assets/image/fruit-03.jpg'
import fruit04 from '../../assets/image/fruit-04.jpg'
import fruit05 from '../../assets/image/fruit-05.jpg'
import fruit06 from '../../assets/image/fruit-06.jpg'
import fruit07 from '../../assets/image/fruit-07.jpg'
import fruit08 from '../../assets/image/fruit-08.jpg'
import fruit09 from '../../assets/image/fruit-09.jpg'
import fruit10 from '../../assets/image/fruit-10.jpg'
import fruit11 from '../../assets/image/fruit-11.jpg'
import fruit12 from '../../assets/image/fruit-12.jpg'

export default {
  name: "fruit-post",
  props: 
    ['watchSetFruits']
  ,
  data() {
    return {
      allFruits: [
        {id: 0, src: fruit01, alt: 'fruit-01'},
        {id: 1, src: fruit02, alt: 'fruit-02'},
        {id: 2, src: fruit03, alt: 'fruit-03'},
        {id: 3, src: fruit04, alt: 'fruit-04'},
        {id: 4, src: fruit05, alt: 'fruit-05'},
        {id: 5, src: fruit06, alt: 'fruit-06'},
        {id: 6, src: fruit07, alt: 'fruit-07'},
        {id: 7, src: fruit08, alt: 'fruit-08'},
        {id: 8, src: fruit09, alt: 'fruit-09'},
        {id: 9, src: fruit10, alt: 'fruit-10'},
        {id: 10, src: fruit11, alt: 'fruit-11'},
        {id: 11, src: fruit12, alt: 'fruit-12'},
      ],
      setFruits: null
    }
  },
  methods: {
    slideFruit(flag, key) {
      const keyLeft = key.id > 0 ? key.id - 1 : (this.allFruits.length-1);
      const keyRight = key.id >= (this.allFruits.length-1) ? 0 : key.id + 1;
      const keyID = flag === 'left' ? keyLeft : keyRight;
      this.setFruits = this.allFruits[keyID];
    },
    closeFruitPost(event) {
      if (this.setFruits !== null) {
        if (event.keyCode == 27 || event === 'click') {
          this.setFruits = null;
          this.$emit('closePost', this.setFruits)
        }
      }
    }
  },
  watch: {
    watchSetFruits() {
      this.setFruits = this.watchSetFruits;
    },
  }
};
</script>

<style scoped>
  .fruit-post {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .show-arrow-mobile {
    display: none;
  }
  .fruit-post-bg {
    background-color: rgba(0, 0, 0, 0.801);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
  .fruit-post-content {
    text-align: center;
    position: relative;
    max-width: 800px;
    z-index: 4;
  }
  .fruit-post-content img{
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    user-select: none;
}
  .arrow-left {
    left: 5%;
    z-index: 5;
  }
  .arrow-right {
    left: 95%;
    z-index: 5;
  }
  .set-arrow {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    z-index: 5;
    color: rgb(218, 218, 218);
    font-size: 40px;
    cursor: pointer;
    background-color: #ffffff29;
    border-radius: 4px;
  }
  .set-arrow:hover {
    transition: all 0.2s ease;
    background-color: #ffffff59;
    color: white;
  }
  .close-fruit-post {
    position: absolute;
    top: 3%;
    left: 95%;
    z-index: 5;
    cursor: pointer;
    height: 48px;
    width: 48px;
    text-align: center;
    transition: all 0.2s ease;
  }
  .icon-close-fruit-post {
    z-index: 5;
    font-size: 32px;
    cursor: pointer;
    color: white;
    padding: 8px;
  }
  .close-fruit-post:hover {
    background-color: #ffffff40;
    border-radius: 50%;
  }
  @media only screen and (max-width: 1024px) {
    .close-fruit-post {
      left: 90%;
    }
    .fruit-post-content {
      max-width: 700px;
    }
  }
  @media only screen and (max-width: 800px) {
    .close-fruit-post {
      left: 90%;
    }
    .fruit-post-content {
      max-width: 600px;
    }
  }
  @media only screen and (max-width: 414px) {
    .close-fruit-post {
      left: 85%;
    }
    .show-arrow-web {
      display: none;
    }
    .show-arrow-mobile {
      display: unset;
    }
    /* .fruit-post-content {
      max-width: 300px;
    } */
  }
</style>
