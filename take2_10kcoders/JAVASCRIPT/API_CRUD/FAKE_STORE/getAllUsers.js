let API_URL="http://localhost:3000/Users"
var allUsers=[]
function getAllUsers(){
    var getInfo =new XMLHttpRequest();
    getInfo.onreadystatechange=function(){
        if(getInfo.readyState ==4 && getInfpo.status ==200){
            allUsers=JSON.parse(getInfo.response);
            console.log(allUsers)
        }
    }
    getInfo.open("GET",API_URL);
    getInfo.send()

}
getAllUsers()
