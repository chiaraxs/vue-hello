new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue!',
        image: 'https://unsplash.it/600/300?image=538',
        inputText: '',
        message: ''
    },
    methods: {
        clicked: function () {
            this.message = 'Ciao' + ' ' + this.inputText + '!';
        }
    }
});