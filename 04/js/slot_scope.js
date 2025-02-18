Vue.createApp({})
  .component('my-book', {
    data() {
      return {
        book: {
          isbn: '98-80800807',
          title: '作って食べる',
          price: 2000,
          publish: '日経'
        }
      };
    },
    template: `<div>
      <slot>{{book.title}} ({{book.publish}}) </slot>
    </div>`
  })
  .mount('#app');
