const nhap = document.getElementById("password");
const check = document.getElementById("subscribe");

function doDai(value){
    if ( typeof value != "string"){
        return false;
    }
    const kt = value.trim();
    if (kt.length > 8){
        return true;
    }
    else {
        return false;
    }
}

function charType(char) {
    const code = char.charCodeAt(0);    
    if (code >= 65 && code <= 90)  return "uppercase";    
    if (code >= 97 && code <= 122) return "lowercase";    
    return "special";
};

function kiemTra(char){
    let dai = 0;
    let so = 0;
    let hoa = 0;
    let thuong = 0;
    if (doDai(char)){
        dai = 1;
    }
    for (let c = 0; c < char.length ; c++){
        let i = char[c];
         if (charType(i) == "uppercase"){
            hoa = 1;
        }
        else if (charType(i) == "lowercase"){
            thuong = 1;
        }
        else if (charType(i) == "special"){
            so = 1;
        }
    }
    return dai + so + thuong + hoa;
}

nhap.addEventListener("input", () => {
    const giaTri = nhap.value;
    const score = kiemTra(giaTri);
    const checkEl = document.getElementById("checkpassword");
    if (score <= 1) {
        document.getElementById("checkpassword").textContent = "Weak";
        document.getElementById("checkpassword").style.color = "red";
        checkEl.classList.remove("rung");
        void checkEl.offsetWidth; // trigger reflow
        checkEl.classList.add("rung");
    } else if (score <= 3) {
        document.getElementById("checkpassword").textContent = "Medium";
        document.getElementById("checkpassword").style.color = "orange";
        checkEl.classList.remove("rung");
        void checkEl.offsetWidth; // trigger reflow
        checkEl.classList.add("rung");
    } else {
        document.getElementById("checkpassword").textContent = "Strong";
        document.getElementById("checkpassword").style.color = "green";
        checkEl.classList.remove("rung");
        void checkEl.offsetWidth; // trigger reflow
        checkEl.classList.add("rung");
    }
});

check.onchange = function(e){
    nhap.type = check.checked ? "text" : "password";
};