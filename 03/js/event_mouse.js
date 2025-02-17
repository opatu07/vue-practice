Vue.createApp({
    data() {
        return {
            path: 'https://www.web-deli.com/image/linkbanner_1.gif'
        };
    },
    methods: {
        onmouseenter() {
            this.path = 'https://www.web-deli.com/image/home_chara.gif';
        },
        onmouseleave() {
            this.path = 'https://web-deli.com/image/linkbanner_1.gif';
        }
    }

}).mount('#app');
