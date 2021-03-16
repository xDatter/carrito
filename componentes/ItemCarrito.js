appPadreCarrito.component("Producto",{
    data(){
        return{
            contador:0,
        }
    },
    props:{
        codigo:{
            default:"0000"
        },
        nombre:{
            default:"Item"
        },
        precio:{
            default:"No disponible",
        },
        url:{
            default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        },
    
    }
    
    ,
    template:
    /*html*/
    `
    <div class="contenedorItem">
        <h1>{{nombre}}</h1>
        <img :src="url" alt="Producto img">
        <h4>{{codigo}}</h4>      
        <h2>$ {{precio}}</h2>  
        <div class="cantidad">
            <p class="cantidadTitle">Cantidad</p>
            <i class="fa fa-minus-square-o" aria-hidden="true" @click="CompoEvento3"></i>
            <div class="numero">
                <p>{{contador}}</p>
            </div>
            <i class="fa fa-plus-square-o" aria-hidden="true" @click="CompoEvento2"></i>        
            <button class="alCarrito" @click="CompoEvento1">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <p>Añadir al Carro</p>
            </button>
        </div>
    </div>
    `,
   
    
    methods:{
        CompoEvento1(){
            this.$emit("item-agregado",{
                cantidad:this.contador, 
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