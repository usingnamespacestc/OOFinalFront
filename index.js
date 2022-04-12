var app = new Vue({
    el: "#app",
    data(){
        return{
            dataTest: "data test",
            username: "",
            password: "",
            currentPage: "login"
        }
    },
    methods:{
        funcTest(){
            console.log("function test")
        },
        switchToSignup(){
            this.currentPage = "signup"
        },
        switchToLogin(){
            this.currentPage = "login"
        },
        switchToDashboard(){
            this.currentPage = "dashboard"
        }
    }
})