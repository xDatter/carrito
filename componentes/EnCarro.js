appPadreCarrito.component("Carro",{
    data(){
        return{
            contador:"",
        }
    },
    props:["codigo","nombre","precio","url","cantidad"]
    
    ,
    template:
    /*html*/
    `
    <div class="contenedorItemCarro">
        <div class="porcion1">
            <img :src="url" alt="Producto img">
        </div>

        <div class="porcion2">
            <div class="identificadorCarro">
                <h1>{{nombre}}</h1>
                <h4>{{codigo}}</h4>      
            </div>

            <div class="valorCarro">
                <h2>$ {{precio}}</h2>  
            </div>
        
            <div class="cantidadCarro">
                <p class="cantidadTitleCarro">Cantidad </p>
                <p>{{cantidad}}</p>
            </div>
        </div>
    </div>
    `,
   
    
    methods:{
        CompoEvento1(){
            this.$emit("item-agregado",{
                cantidad:this.cantidad, 
                codigo:this.codigo,
                precio:this.precio,
                nombre:this.nombre,
                url:this.url,
            })
        },
        CompoEvento2(){
            this.contador+=1;
        },
        CompoEvento3(){
            if(this.contador<1){
                return;
            }
            this.contador-=1;
        },

    },
    computed:{},


})