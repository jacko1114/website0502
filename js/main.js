let vm = new Vue();
Vue.component("load-tag", {
  template: `<div class="container" id="loading">
              <div class="wrapper">
                <div class="content">
                  <div class="loader">
                    <div class="progress-bar"/>
                  </div>
                </div>
              </div>
            </div>`,
  props: ["loading"],
});
Vue.component("nav-tag", {
  template: `<div id="nav" class="wrapper">
                <div class="menu">
                  <a href="javascript:;" v-for="(n,idx) in navTitles" :class="{'active':n.active}" @click="changeView(n.tagName),activeView(idx)">{{n.name}}</a>
                </div>
                <div class="logo">
                  <a href="javascript:;"><i :class="srcpath"/></a>
                </div>
            </div>`,
  data() {
    return {
      navTitles: [
        { name: "首頁", tagName: "index-tag", active: true },
        { name: "影片藝廊", tagName: "video-tag", active: false },
        { name: "景觀迴廊", tagName: "news-tag", active: false },
        { name: "關於我們", tagName: "about-tag", active: false },
        { name: "聯絡我們", tagName: "contact-tag", active: false },
      ],
      srcpath: "fab fa-delicious",
    };
  },
  methods: {
    changeView(t) {
      vm.$emit("change", t);
    },
    activeView(idx) {
      let l = this.navTitles.length;
      for (let i = 0; i < l; i++) {
        this.navTitles[i].active = false;
      }
      this.navTitles[idx].active = true;
    },
  },
});
Vue.component("footer-tag", {
  template: `<div id="footer" class="wrapper">
                    <div class="title">
                        <h2>{{mainTitle}}</h2>
                        <h5>{{subTitle}}</h5>
                    </div>
                    <div class="social-media">
                        <p>&copy;  {{year}}  {{content}}  <i :class="i" v-for="i in icons"></i></p>
                    </div>
            </div>`,
  data() {
    return {
      mainTitle: "放格設計",
      subTitle: "放眼全球 格外出眾",
      year: new Date().getFullYear(),
      content: " Jacko's 視覺概念   |  ",
      icons: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-youtube",
        "fab fa-instagram",
      ],
    };
  },
});
Vue.component("index-tag", {
  template: `<div id="index" class="wrapper">
                <div class="center">
                    <img :src="c" v-for="c in circles">
                    <i :class="icon"></i>
                    <h1>{{mainTitle}}</h1>
                    <h5>{{subTitle}}</h5>
                </div>
            </div>`,
  data() {
    return {
      icon: "fab fa-delicious",
      mainTitle: "放格設計",
      subTitle: "放眼全球 格外出眾",
      circles: [
        "./sources/l_circle.svg",
        "./sources/m_circle.svg",
        "./sources/s_circle.svg",
      ],
    };
  },
});
Vue.component("video-tag", {
  template: `<div id="videoshare" class="wrapper">
                <carousel_3d :controls-visible="true" :clickable="false">
                  <slide v-for="(v, i) in videos" :index="i" :key="i">
                    <p class="header">{{v.title}}</p>
                    <video muted loop autoplay>
                      <source :src="v.srcpath" type="video/mp4">
                    </video>
                    <p class="content">{{v.content}}</p>
                    <p class="footer">{{i + 1 }} of {{videos.length}}</p>
                  </slide>
                </carousel_3d>
            </div>`,
  data() {
    return {
      videos: [
        {
          srcpath: "./sources/story.mp4",
          title: "",
          content: "告訴我們，你 / 妳的故事吧 !!!!",
        },
        {
          srcpath: "./sources/fields.mp4",
          title: "",
          content: "如老鷹般綜覽整片大地",
        },
        {
          srcpath: "./sources/Paris.mp4",
          title: "",
          content: "優游在浪漫的塞納河畔",
        },
        {
          srcpath: "./sources/vision.mp4",
          title: "",
          content: "環抱在裊裊升起的雲霧間",
        },
        {
          srcpath: "./sources/starsky.mp4",
          title: "",
          content: "夜幕降臨，群星統治整片星空",
        },
      ],
    };
  },
  components: {
    carousel_3d: Carousel3d.Carousel3d,
    slide: Carousel3d.Slide,
  },
});
Vue.component("news-tag", {
  template: `<div id="news" class="wrapper">
                  <carousel :perPageCustom="[[0,2], [768, 3], [1024, 4]]" :navigation-enabled="true">
                    <slide v-for="(n,idx) in news" :key="idx">
                      <img :src="n.srcpath">
                      <h2>{{n.title}}</h2>
                      <div class="tags">
                        <span class="tag" v-for="t in n.tags">{{t}}</span>
                      </div>
                      <div class="link">
                        <span>{{n.link}}</span>
                        <i :class="n.icon"></i>
                      </div>
                    </slide>
                  </carousel>
            </div>`,
  data() {
    return {
      count: 0,
      size: 140,
      news: [
        {
          srcpath: "./sources/photo1.jpg",
          title: "森林隧道",
          tags: ["自然", "鐵道", "倒影"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo2.jpg",
          title: "度假天堂",
          tags: ["沙灘", "椰子", "盤根交錯"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo3.jpg",
          title: "聳立的城堡",
          tags: ["高聳", "雲霧繚繞"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo4.jpg",
          title: "環海的大堡礁",
          tags: ["沙灘", "珊瑚礁", "觸礁"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo5.jpg",
          title: "城市間的鐵橋",
          tags: ["橋", "紐約"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo6.jpg",
          title: "懸崖底下失事船隻",
          tags: ["懸崖", "船", "蔚藍海"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo7.jpg",
          title: "與自然共處的樹屋",
          tags: ["老神木", "綠苔"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo8.jpg",
          title: "未來的溫室城市",
          tags: ["籠", "溫室"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo9.jpg",
          title: "來一場跳島之旅",
          tags: ["快艇", "度假"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo10.jpg",
          title: "租下整座渡假島",
          tags: ["清澈藍海", "渡假小屋"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
        {
          srcpath: "./sources/photo11.jpg",
          title: "浩瀚星空",
          tags: ["群星點點"],
          icon: "fas fa-arrow-right",
          link: "更多探索",
        },
      ],
    };
  },
  components: {
    carousel: VueCarousel.Carousel,
    slide: VueCarousel.Slide,
  },
});
Vue.component("about-tag", {
  template: `<div id="about" class="wrapper">
              <div class="about-left">
                  <img :src="srcpath">
              </div>
              <div class="about-right">
                  <h1>{{title}}</h1>
                  <p v-for="c in content">{{c}}</p>
              </div>
            </div>`,
  data() {
    return {
      srcpath: "./sources/about.jpg",
      title: "關於「放格」",
      content: [
        "放格設計，品牌源自於「四方格子」的概念，意指我們的設計不僅限於方框世界內的表面，更有跳脫出方框架構下的思緒與意涵，放眼綜觀全景的視野。",
        "反之，在現有的框框內，在抽象的內容都能被我們一手框住、一手掌握。",
      ],
    };
  },
});
Vue.component("contact-tag", {
  template: `<div id="contact" class="wrapper">
              <i :class="icon"></i>
              <h4>{{content[0]}}<span>{{mail}}</span></h4>
              <h4>{{content[1]}}{{phone}}</h4>
              <div class="social-media">
                  <i :class="i" v-for="i in icons" />
              </div>    
            </div>`,
  data() {
    return {
      icon: "fab fa-delicious",
      content: ["合作邀約 : ", "電話 : "],
      mail: "1234@mail.com",
      phone: "02-7777-8888",
      icons: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-youtube",
        "fab fa-instagram",
      ],
    };
  },
});
new Vue({
  el: "#app",
  data() {
    return {
      view: "index-tag",
      loading: true,
    };
  },
  methods: {
    change() {
      vm.$on("change", (v, c) => {
        this.view = v;
      });
    },
    loadPage() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
  mounted() {
    this.change();
    this.loadPage();
  },
});
