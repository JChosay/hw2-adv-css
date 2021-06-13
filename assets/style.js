function checkloadsize(){
    if (window.innerWidth<=864){
        document.getElementById("nixon-shark").src="./assets/images/nixonsmall.jpg";
        document.getElementById("idiocracy").src="./assets/images/idiocracysmall.jpg";
        document.getElementById("johnson-lean").src="./assets/images/johnsonsmall.jpg";
    }

    if (window.innerWidth<=750){
        document.getElementById("selfpic").src="./assets/images/selfsmall1.jpg";
        document.getElementById("about-text").innerText ="about me";
        document.getElementById("me-text").innerText ="";
        
          
    }

    if (window.innerWidth>750){
        document.getElementById("about-text").innerText ="about";
        document.getElementById("me-text").innerText ="me";
    }
}

const mediaQuerySelfie1 = window.matchMedia('(max-width: 750px)')

function handleTabletChangeMQ1(e){
    if(e.matches){
        document.getElementById("selfpic").src="./assets/images/selfsmall1.jpg";
        document.getElementById("me-text").innerText ="about me";
        document.getElementById("about-text").innerText ="";
    }
}
mediaQuerySelfie1.addEventListener("change", handleTabletChangeMQ1);

const mediaQuery = window.matchMedia('(max-width: 864px)')

function handleTabletChange(e){
    if(e.matches){
        document.getElementById("nixon-shark").src="./assets/images/nixonsmall.jpg";
        document.getElementById("idiocracy").src="./assets/images/idiocracysmall.jpg";
        document.getElementById("johnson-lean").src="./assets/images/johnsonsmall.jpg";
    }
}
mediaQuery.addEventListener("change", handleTabletChange);

const mediaQuery2 = window.matchMedia('(min-width: 864px)')

function handleTabletChange2(e){
    if(e.matches){
        document.getElementById("nixon-shark").src="./assets/images/nixon.jpg";
        document.getElementById("idiocracy").src="./assets/images/idiocracy.jpg";
        document.getElementById("johnson-lean").src="./assets/images/johnson.jpg";
    }
}
mediaQuery2.addEventListener("change", handleTabletChange2);

const mediaQuerySelfie2 = window.matchMedia('(min-width: 750px)')

function handleTabletChangeMQ2(e){
    if(e.matches){
        document.getElementById("selfpic").src="./assets/images/self.jpg";
        document.getElementById("about-text").innerText ="about";
        document.getElementById("me-text").innerText ="me";
    }
}
mediaQuerySelfie2.addEventListener("change", handleTabletChangeMQ2);