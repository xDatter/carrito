const appPadreCarrito=Vue.createApp({
    data(){
        return{
            active:"",
            
            datosAlCarrito:[],
            actualCarrito:[],
        }
    },
    methods:{
        agregarActive(){
            this.active=="active"? (this.active=""):(this.active="active");
        },
        agregarCarrito(datos){
            let unidades= datos.cantidad;
            let verificador=datos.codigo;
            let valor=datos.precio;
            let producto=datos.nombre;
            let imagen=datos.url;
            console.log(imagen+""+producto+" "+unidades+" "+verificador+" "+valor);

        },
        sumarItemIgual(){
            
        },
        restarItemIgual(){
            
        },
    },
    computed:{
    },
    
})