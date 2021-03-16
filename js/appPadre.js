const appPadreCarrito=Vue.createApp({
    data(){
        return{
            active:"",
            ElementosDif:0,
            datosAlCarrito:[],
            actualCarrito:[],
        }
    },
    methods:{
        agregarActive(){
            this.active=="active"? (this.active=""):(this.active="active");
        },
        agregarCarrito(datos){
            let itemCompleto=[];
            let unidades= datos.cantidad;
            let verificador=datos.codigo;
            let valor=datos.precio;
            let producto=datos.nombre;
            let imagen=datos.url;
            itemCompleto.push(unidades);
            itemCompleto.push(verificador);
            itemCompleto.push(valor);
            itemCompleto.push(producto);
            itemCompleto.push(imagen);
            this.datosAlCarrito.push(itemCompleto);
            this.actualCarrito.push(this.ElementosDif);
            this.ElementosDif+=1;

        },
        resetCarro(){
            this.ElementosDif=0;
            this.datosAlCarrito=[];
            this.actualCarrito=[];

        },
        sumarItemIgual(){
            
        },
        restarItemIgual(){
            
        },
    },
    computed:{
    },
    
})