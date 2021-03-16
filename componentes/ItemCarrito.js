appPadreCarrito.component("item-carro",{
    props:{
        codigo:{
            default:"0000"
        },
        nombre:{
            default:"hola"
        },
        precio:{
            default:990
        },
        url:{
            default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        },
        cantidad:{
            default:0
        }
    
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
            <i class="fa fa-minus-square-o" aria-hidden="true"></i>
            <div class="numero">
                <p>{{cantidad}}</p>
            </div>
            <i class="fa fa-plus-square-o" aria-hidden="true"></i>        
            <button class="alCarrito">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <p>Añadir al Carro</p>
            </button>
        </div>
    </div>
    `,
   
    
    methods:{
        evento1(){
            this.$emit("item-agregado")
        }

    },
    computed:{},


})