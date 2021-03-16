const appPadreCarrito=Vue.createApp({
    data(){
        return{
            active:"",
        }
    },
    methods:{
        agregarActive(){
            this.active=="active"? (this.active=""):(this.active="active");
        }
    },
    computed:{
    },
    
})