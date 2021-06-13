const mediaQuery = window.matchMedia('(max-width: 864px)')

function handleTabletChange(e){
    if(e.matches){
        console.log("It's fuckin' woikin'!")
        document.getElementById("nixon-shark").src="./assets/images/nixonsmall.jpg";
        document.getElementById("idiocracy").src="./assets/images/idiocracysmall.jpg";
        document.getElementById("johnson-lean").src="./assets/images/johnsonsmall.jpg";
    }
}

mediaQuery.addEventListener("change", handleTabletChange);

const mediaQuery2 = window.matchMedia('(min-width: 864px)')

function handleTabletChange2(e){
    if(e.matches){
        console.log("It's fuckin' woikin'!")
        document.getElementById("nixon-shark").src="./assets/images/nixon.jpg";
        document.getElementById("idiocracy").src="./assets/images/idiocracy.jpg";
        document.getElementById("johnson-lean").src="./assets/images/johnson.jpg";
    }
}

mediaQuery2.addEventListener("change", handleTabletChange2);

function checkloadsize(){
    if (window.innerWidth<=864){
        document.getElementById("nixon-shark").src="./assets/images/nixonsmall.jpg";
        document.getElementById("idiocracy").src="./assets/images/idiocracysmall.jpg";
        document.getElementById("johnson-lean").src="./assets/images/johnsonsmall.jpg";
    }
}