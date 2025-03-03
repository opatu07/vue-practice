Vue.createApp({
    data() {
        return {
            name: '',
            upperName: ''
        };
    },

    created() {
        this.delayFunc = _.debounce(this.getUpper, 2000);
    },

    watch: {
        name(newValue, oldValue) {
            this.delayFunc();
        }
    },

    methods: {
        getUpper() {
            this.upperName = this.name.toUpperCase();
        }
    }
}).mount('#app');
