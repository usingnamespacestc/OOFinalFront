var app = new Vue({
    el: "#app",
    data(){
        return{
            dataTest: "data test",
            currentPage: "login", //dashboard
            username: "sample_user",
            password: "sample_password",
            activeName: "age",
            age: 0,
            genderMale: false,
            symptoms: [],
            options: [{
              value: 'fatigue',
              label: 'fatigue'
            }, {
              value: 'sore throat',
              label: 'sore throat'
            }, {
              value: 'fever',
              label: 'fever'
            }, {
              value: 'loss of smell or taste',
              label: 'loss of smell or taste'
            }],
            vaccineStatus: "",
            vaccineOptions: ["Not Vaccined", "Vaccined", "Fully Vaccined"],
            feeling: null,
            risk: {
                tooltip: {
                  formatter: '{a} <br/>{b} : {c}%'
                },
                series: [
                  {
                    name: 'COVID',
                    type: 'gauge',
                    progress: {
                      show: true
                    },
                    detail: {
                      valueAnimation: true,
                      formatter: '{value}'
                    },
                    data: [
                      {
                        value: 50,
                        name: 'RISK'
                      }
                    ]
                  }
                ]
            }
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
        logout(){
          // switchToLogin()
          // this.age = 0
          // this.genderMale = false
          // this.symptoms = []
          // this.vaccineStatus = ""
          // this.feeling = null
          // window.location.replace = "https://kod-va.unstc.site:54321/data/User/admin/home/self-introduction/OOFinalFront/"
          // window.location.href = "https://kod-va.unstc.site:54321/data/User/admin/home/self-introduction/OOFinalFront/"
          window.location.reload()
        },
        switchToDashboard(){
            this.currentPage = "dashboard"
            // this.$nextTick(_ =>{
            //     console.log("next");
            //     this.calculateRisk()
            // });
        },
        handleClick(tab, event){
          // console.log(tab, event);
        },
        goToGender(){
          this.activeName = "gender"
        },
        goToSymptoms(){
          this.activeName = "symptoms"
        },
        goToVaccineStatus(){
          this.activeName = "vaccine status"
        },
        goToFeeling(){
          this.activeName = "feeling"
        },
        goToRiskCalculator(){
          this.calculateRisk()
        },
        calculateRisk(){
            // calculate the risk
            // this.risk["series"][0]["data"][0]["value"] = Math.round(Math.random() * 100)
            // risk gender
            if(this.genderMale){
              this.risk["series"][0]["data"][0]["value"] *= 0.69
            }
            else{
              this.risk["series"][0]["data"][0]["value"] *= 0.31
            }
            // risk age
            this.risk["series"][0]["data"][0]["value"] = 50 + Math.abs(this.age - 25)
            // risk symptoms
            this.risk["series"][0]["data"][0]["value"] += this.symptoms.length * 15
            // risk vaccine
            if(this.vaccineStatus == "Not Vaccined"){
              this.risk["series"][0]["data"][0]["value"] += 25
            }
            else if(this.vaccineStatus == "Vaccined"){
              this.risk["series"][0]["data"][0]["value"] -= 25
            }
            else if(this.vaccineStatus == "Fully Vaccined"){
              this.risk["series"][0]["data"][0]["value"] -= 50
            }
            // risk feeling
            this.risk["series"][0]["data"][0]["value"] -= this.feeling * 10
            // limit
            if(this.risk["series"][0]["data"][0]["value"] < 0){
              this.risk["series"][0]["data"][0]["value"] = 0
            }
            else if(this.risk["series"][0]["data"][0]["value"] > 100){
              this.risk["series"][0]["data"][0]["value"] = 100
            }
            // put the chart
            var chartDom = document.getElementById("riskChart")
            var myChart = echarts.init(chartDom)
            this.risk && myChart.setOption(this.risk)
        }
    }
})