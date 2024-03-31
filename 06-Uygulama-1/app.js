const app = Vue.createApp({
  // template: `
  // <div v-bind:style="style">Deneme Yazısı</div>
  // `,
  template: `
  <div :style="style">Deneme Yazısı</div>
  `,
  data() {
    return {
      style: "color:green",
    };
  },
  methods: {},
});

app.mount("#app");
