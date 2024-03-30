const app = Vue.createApp({
  // template: `
  // <ul>
  //   <li v-for="gun in gunler">{{gun}}</li>
  // </ul>
  // `,
  template: `
  <ul>
    <li v-for="person in people">Çalışan: {{person.isim}} - Maaş: {{person.maas}}</li>
  </ul>
  `,
  data() {
    return {
      // gunler: [
      //   "Pazartesi",
      //   "Salı",
      //   "Çarşamba",
      //   "Perşembe",
      //   "Cuma",
      //   "Cumartesi",
      //   "Pazar",
      // ],
      people: [
        {isim: "Mustafa", maas: 5000},
        {isim: "Mehmet", maas: 6000},
        {isim: "Ayşe", maas: 7000},
      ],
    };
  },
  methods: {},
});

app.mount("#app");
