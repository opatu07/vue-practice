Vue.createApp({
    data: function() {
        return {
            current: new Date()
        };
    },

    created() {
        this.timer = setInterval(() => {
            this.current = new Date();
        }, 1000);
    },

    beforeUnmount() {
        clearInterval(this.timer);
    }
}).mount('#app');
