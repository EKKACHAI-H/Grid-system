<template>
  <div class="profile-page">
    <div class="title-profile">
      <div style="width: 50%;">
        <div id="action-title" class="first-name-text">Hello !!</div>
        <div id="action-title" class="first-name-text">I'm Ekkachai</div>
        <div id="action-title" class="career-text" style="padding-right: 15%;">Professional Front-end developer</div>
      </div>
      <div style="width: 50%;">
        <img src="../../assets/image/125617.jpg" style="width: 100%;" :draggable="false" />
      </div>
    </div>
    <div class="padding-content">
      <div class="div-grid">
        <div>
          <div class="header-content">About me</div>
          <div class="sub-content"> 
            Hello, allow me to introduce myself. 
            My full name is Ekkachai Hommolee and my nickname is Yod(ยอด).
            I'm currently working on a front-end
            web application. The main task is to construct websites
            using the Vue framework. Ant Design and Vuetify were
            launched to give attractive UI customizations in
            development utilizing HTML5, JavaScript ES6, and CSS3. In addition
          </div>
        </div>
        <div>
          <img src="../../assets/image/125865.jpg" style="width: 100%;" :draggable="false" />
        </div>
        <div> 
          <img src="../../assets/image/211064.jpg" style="width: 100%;" :draggable="false" />
        </div>
        <div class="div-education">
          <div class="header-content">Education</div>
          <div class="sub-content">I graduated with a bachelor’s degree in Computer science from Naresuan University.</div>
        </div>
        <div>
          <div class="header-content">Working Experience</div>
          <div class="sub-content"> 
            <div>Completed 3 projects</div>
            <div class="text-sub-header"><b>First project:</b> Trailer registration number system</div>
            <div>Front end: VueJS and Back end: Java spring boots</div>
            <div>- Add, edit and delete head vehicle and trailer vehicle information in the table </div>
            <div>- Function sort the data within the table according  to the user's needs.</div>
            <div class="text-sub-header"><b>Second project:</b> Train schedules system</div>
            <div>Front end: VueJS</div>
            <div>- Make a system to designate where the train will arrive and when it will arrive.</div>
            <div class="text-sub-header"><b>Third project:</b> Shipping tool system</div>
            <div>Front end: VueJS</div>
            <div>Web user</div>
            <div style="padding-left: 10px;">
              <div>- Register user system</div>
              <div>- Login system</div>
              <div>- Forgot password system</div>
              <div>- Register bussiness user system</div>
              <div>- Personal information editing system(user and bussiness user)</div>
              <div>- User license assignment system</div>
              <div>- Website home page</div>
              <div>- Bind wallet account system</div>
            </div>
            <div>Web admin</div>
            <div style="padding-left: 10px;">
              <div>- Register admin system</div>
              <div>- Login system</div>
              <div>- Add, edit and delete service system</div>
              <div>- Add, edit and delete service rate system</div>
            </div>
          </div>
        </div>
        <div>
          <img src="../../assets/image/working.jpg" class="item-show-web" style="width: 100%;" :draggable="false"/>
          <img src="../../assets/image/working2.jpg" class="item-show-mobile" style="width: 100%;" :draggable="false"/>
        </div>
        <div class="item-show-mobile">
          <div class="header-content">Skill</div>
          <div class="sub-content">
            <div>- Can be used Vue JS to create web applications</div>
            <div>- Can be use Git</div>
            <div>- Can be fixed some bugs of teammates</div>
            <div>- friendly with teammates Can discuss and recommend what is good for them to work</div>
            <div>- play guitar</div>
            <div>- play football</div>
          </div>
        </div>
        <div class="text-align-center">
          <img src="../../assets/image/logo.png" class="image-skill-vue" :draggable="false"/>
          <img src="../../assets/image/lang.png" class="image-skill-javascript" :draggable="false"/>
        </div>
        <div class="item-show-web">
          <div class="header-content">Skill</div>
          <div class="sub-content">
            <div>- Can be used Vue JS to create web applications</div>
            <div>- Can be use Git</div>
            <div>- Can be fixed some bugs of teammates</div>
            <div>- friendly with teammates Can discuss and recommend what is good for them to work</div>
            <div>- play guitar</div>
            <div>- play football</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-page",
  data() {
    return {

    }
  },
  methods: {},
};
</script>

<style scoped>
  .padding-content {
    padding: 2% 5% 5%;
    background-color: #efefefbd;
  }
  .title-profile {
    display: flex; 
    background-color: rgb(228 228 228); 
    align-items: center;
  }
  #action-title{
    animation: actionRight 2s ease forwards;
  }
  @keyframes actionRight {
    0% {opacity: 0}
    100% {transform: translateX(15%)}
  }
  .div-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 50px;
    align-items: center;
    padding: 5%;
  }
  .text-sub-header {
    margin-top: 6px
  }
  .first-name-text {
    font-size: 5em;
    font-weight: bold;
    padding-right: 15%;
  }
  .career-text {
    font-size: 2em;
    padding-right: 15%;
  }
  .header-content {
    font-size: 4em;
    font-weight: bold;
  }
  .div-education {
    text-align: right;
  }
  .sub-content {
    font-size: 2em;
  }
  .item-show-web {
    display: unset;
  }
  .item-show-mobile {
    display: none;
  }
  .image-skill-vue {
    width: 40%;
  }
  .image-skill-javascript {
    width: 60%;
  }
  
  @media only screen and (max-width: 1024px) {
    .div-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .career-text {
      font-size: 1.7em;
    }
    .sub-content {
      font-size: 1.7em;
    }
  }
  @media only screen and (max-width: 800px) {
    .div-grid {
      grid-template-columns: repeat(1, 1fr);
    }
    .first-name-text {
      font-size: 3.7em;
    }
    .career-text {
      font-size: 1.3em;
    }
    .div-education {
      text-align: left;
    }
    .item-show-web {
      display: none;
    }
    .item-show-mobile {
      display: unset;
    }
    .image-skill-vue {
      width: 30%;
    }
    .image-skill-javascript {
      width: 50%;
    }
  }
  @media only screen and (max-width: 414px) {
    .div-grid {
      grid-gap: 20px;
    }
    .first-name-text {
      font-size: 1.8em;
    }
    .career-text {
      font-size: 0.8em;
    }
    .header-content {
      font-size: 2em;
    }
    .sub-content {
      font-size: 1.3em;
    }
  }
</style>
