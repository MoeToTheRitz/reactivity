// Importiere das Vue.js-Framework
//import Vue from 'vue';

// Erstelle eine neue Vue-Instanz
const app = new Vue({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    }
  },
  template: `
    <div>
      <p>Counter: {{ counter }}</p>
      <button @click="increment">Press Me</button>
    </div>
  `
});

// Mounte die Vue-Instanz auf ein HTML-Element
app.$mount('#app');