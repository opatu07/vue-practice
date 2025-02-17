Vue.createApp({
    data() {
        return {
            books: [
                {
                    isbn: '978-4-7981-5757-3',
                    title: 'JavaScript逆引きレシピ',
                    price: 2000
                },
            ]
        };
    },
    computed: {
        expensiveBooks() {
            return this.books.filter(b => b.price >= 2500);
        }
    }
}).mount('#app');
