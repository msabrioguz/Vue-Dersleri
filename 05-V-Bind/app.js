const app = Vue.createApp({
  template: `
  <h2>Frameworkler</h2>
  <ul>
    <li v-for="framework in frameworks" class="list" :class="{selected:framework.selected}" @click="selectTag(framework)">
    {{framework.name}}
    </li>
  </ul>
  <h3>Seçilen Etiketler</h3>
  <ul>
    <li v-for="s in selectTags">
    {{s.name}}
    </li>
  </ul>
  `,
  data() {
    return {
      frameworks: [
        { name: "Vue", selected: true },
        { name: "React", selected: false },
        { name: "Svelte", selected: false },
        { name: "Angular", selected: false },
      ],
    };
  },
  methods: {
    selectTag(framework) {
      framework.selected = !framework.selected;
    },
  },
  computed: {
    selectTags() {
      return (selecteds = this.frameworks.filter((i) => i.selected));
    },
  },
});

app.mount("#app");
