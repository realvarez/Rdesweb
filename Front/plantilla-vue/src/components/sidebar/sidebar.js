export default {
  data() {
    return {
      isActive: true,
      // authenticated
    }
  },
  methods: {
  //   mounted() {
  //     if(sessionStorage.getItem('auth') != null) {
  //       this.authenticated=false;
       
  //     };
  // },
    collapseSide(){
      this.isActive = !this.isActive;
    },
    logout(){
      var opcion = confirm("¿Esta seguro de que desea salir?");
        if(opcion){
            
            sessionStorage.removeItem('auth');
            sessionStorage.removeItem('user');
            this.$emit("authenticated", false);
            this.$router.replace({ name: "login" });

        }else{
          this.$router.go(-1);
        }
       
    }
  },
  
}
