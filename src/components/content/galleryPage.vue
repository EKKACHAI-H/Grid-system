<template>
  <div class="gallery-page">
    <div class="text-header">
      Gallery Page
    </div>
    <div class="padding-content">
      <div class="div-grid">
        <div class="border-image" v-for="key in imageInfo" :key="key.id">
          <img 
            :src="key.src" 
            :alt="key.alt" 
            :draggable="false"
            @click="seletedFruit(key.id)" 
            class="size-image"
          >
        </div>
      </div>
    </div>

    <fruitPost :watchSetFruits="setImageFruit" @closePost="closeFruit" />
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
import fruitPost from './fruitPost.vue'

export default {
  name: "gallery-page",
  components: {
    fruitPost
  },
  data() {
    return {
      imageInfo: [
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
      setImageFruit: null
    }
  },
  created() {},
  mounted() {},
  methods: {
    backToMain() {
      this.$router.push({name: 'mainPage'})
    },
    seletedFruit(key) {
      this.setImageFruit = this.imageInfo[key];
    },
    closeFruit(event) {
      this.setImageFruit = event;
    }
  },
};
</script>

<style scoped>
  .div-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    grid-gap: 40px;
    align-items: center;
  }
  .text-header {
    font-size: 3em;
    background-color: #efefefbd;
    padding-top: 20px;
    text-align: center;
  }
  .padding-content {
    padding: 2% 5% 5%;
    background-color: #efefefbd;
  }
  .border-image {
    border-radius: 10px;
    box-shadow: 4px 2px 8px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .border-image:hover {
    border-radius: 10px;
    filter: brightness(0.95);
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.27);
  }
  .size-image {
    width: 100%;
    border-radius: 10px;
    user-select: none;
  }
  .padding-btn {
    padding-top: 20px;
  }

  @media only screen and (max-width: 1024px) {
    .div-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .padding-content {
      padding: 10%
    }
  }
  @media only screen and (max-width: 800px) {
    .div-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .padding-content {
      padding: 10%
    }
  }
  @media only screen and (max-width: 414px) {
    .div-grid {
      grid-template-columns: repeat(1, 1fr);
    }
    .padding-content {
      padding: 15%
    }
  }
</style>
