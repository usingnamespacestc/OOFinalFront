var app = new Vue({
    el: "#app",
    data(){
        return{
            dataTest: "data test",
            currentPage: "login"
        }
    },
    methods:{
        funcTest(){
            console.log("function test")
        }
    }
})