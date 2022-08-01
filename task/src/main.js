const password = "TrustNo1";
let checkEle = document.querySelectorAll("input[type='checkbox']");
checkEle.forEach(function(c) {
    c.setAttribute("disabled", "true");
});
let rangeEle = document.querySelectorAll("input[type='range']");
rangeEle.forEach(function(r) {
    r.setAttribute("disabled", "true");
});
let launch = document.querySelector("input[value='launch']");
launch.setAttribute("disabled", "true");

function getPassword(ele){
    let passwordEle = document.querySelector("input[type='password']");
    let value = passwordEle.value;
    console.log(value);
    if(password === value){
        checkEle.forEach(function(c) {
            c.removeAttribute("disabled");
        });
        rangeEle.forEach(function(r) {
            r.removeAttribute("disabled");
        });


        passwordEle.setAttribute("disabled", "true");
        document.querySelector("input[value='ok']").setAttribute("disabled", "true");
        console.log("Testing !");
    }
}

function enLaunch(){
    launch.removeAttribute("disabled");
}

function launchRocket(){

}

function testPass14() {
    let inputs = document.querySelectorAll('input');
    for (let item of inputs) {
        item.onchange = function () {
            console.log('HAhA pass the test No14');
        }
    }
}
testPass14();