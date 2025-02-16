Vue.createApp({
    data: function() {
        return {
            email: 'Y-man@example.com'
        };
    },
    methods: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
}).mount('#app');
