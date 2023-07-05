const {createApp} = Vue;

createApp({
    data(){
        return{
            productos: [],
            url: 'https://ancona.pythonanywhere.com/productos',
            cargando: true,
            error: false
        }
    },

    methods: {

        fetchApi(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                this.productos = data;
                this.cargando = false;
            })
            .catch(err=>{
                console.error(err);
                this.error = true;
            })
        },

        eliminar(id) {
            const url = this.url + "/" + id;
          
            // Mostrar el alert y obtener la respuesta del usuario
            const respuesta = confirm("¿Estás seguro de Borrar el producto?");
          
            // Verificar la respuesta del usuario
            if (respuesta) {
              let options = {
                method: 'DELETE'
              };
          
              fetch(url, options)
                .then(res => res.json())
                .then(data => {
                  location.reload(); // con la data no hago nada pero recargo la página para ver la actualización
                })
                .catch(err => console.error(err));
            } else {
              // El usuario seleccionó "No" o cerró el alert
              console.log("Eliminación cancelada.");
            }
          }
          
        
    },

    created(){
        this.fetchApi(this.url);
    }
    
}).mount('#app')