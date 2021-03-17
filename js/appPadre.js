const appPadreCarrito=Vue.createApp({
    data(){
        return{
            active:"",
            ElementosDif:0,
            datosAlCarrito:[],
            actualCarrito:[],
            aPagarFinal:0,
        }
    },
    methods:{
        agregarActive(){
            this.active=="active"? (this.active=""):(this.active="active");
        },
        agregarCarrito(datos){
            let itemCompleto=[];
            let unidades= Number(datos.cantidad);
            let verificador=datos.codigo;
            let valor=Number(datos.precio);
            let producto=datos.nombre;
            let imagen=datos.url;
            let valorAlCarro=unidades*valor;
            itemCompleto.push(unidades);
            itemCompleto.push(verificador);
            itemCompleto.push(valor);
            itemCompleto.push(producto);
            itemCompleto.push(imagen);
            this.datosAlCarrito.push(itemCompleto);
            this.actualCarrito.push(this.ElementosDif);
            this.ElementosDif+=1;
            this.aPagarFinal+=valorAlCarro;

        },
        resetCarro(){
            this.ElementosDif=0;
            this.datosAlCarrito=[];
            this.actualCarrito=[];
            this.aPagarFinal=0;

        },
        sumarItems(){
            let totalItems=this.ElementosDif;
            let sumaFinal=0;
            let totalBox=0;

            totalItems.forEach(box => {
                totalBox=(this.datosAlCarrito[box][2])*this.datosAlCarrito[box][0];
                sumaFinal+=totalBox;
                console.log("hola "+totalBox);
            });

            this.aPagarFinal=sumaFinal;

        },
    },
    computed:{
    },

    
})