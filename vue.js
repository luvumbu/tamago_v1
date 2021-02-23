var app = new Vue({
    el: '#body',
    data: {
        title_page: 'BKZ-Technologie'
    },
    methods: {
        position_mouse(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
            console.log("position en x " + this.x + "position en y " + this.y);
        }
        /* presentation:function(){
           return "Bonjour";
         }
         */
    }
})