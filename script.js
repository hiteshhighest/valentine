let Value = 0;
const SecretCount = document.querySelector('.SecretCount');
let secret1 = false, secret2 = false, secret3 = false, secret4 = false, secret5 = false, secret6 = false;

SecretCount.innerHTML = Value;

function toggleImage() {
    let img = document.querySelector('.letter-img');
    
    if (img.src.includes("Images/Open.png")) {
        img.src = "Images/Close.png";
        document.querySelector('.card').style = "display: block";
        
    } else {
        img.src = "Images/Open.png";
        document.querySelector('.card').style = "display: none";
    }

    if (secret1 === false) {
        Value++;
        SecretCount.innerHTML = Value;
        secret1 = true;
        AllSecret();
    }
}

function DropImage(imageSrc, container = document.body) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.style.position = "fixed";
    img.style.top = "-50px";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.width = "70px";
    img.style.height = "70px";
    img.style.pointerEvents = "none";
    img.style.zIndex = "100000";
    img.style.transition = "top 3s linear, opacity 0.5s";
    
    container.appendChild(img);
    
    requestAnimationFrame(() => {
        img.style.top = window.innerHeight + "px";
    });
    
    setTimeout(() => {
        img.style.opacity = "0";
        setTimeout(() => img.remove(), 500);
    }, 3000);

    if (secret2 === false) {
        Value++;
        SecretCount.innerHTML = Value;
        secret2 = true;
        AllSecret();
    }
}

function Secret3() {
    if (secret3 === false) {
        Value++;
        SecretCount.innerHTML = Value;
        secret3 = true;
        AllSecret();
    }
}

function Secret4() {
    if (secret4 === false) {
        Value++;
        SecretCount.innerHTML = Value;
        secret4 = true;
        AllSecret();
    }
}  

function Secret5() {
    if (secret5 === false) {
        Value++;
        SecretCount.innerHTML = Value;
        secret5 = true;
        AllSecret();
    }
}  

function Secret6() {
    if (secret6 === false) {
        Value++;
        SecretCount.innerHTML = Value;
        secret6 = true;
        AllSecret();
    }
}

function AllSecret() {
    if (Value === 6) {
        document.querySelector('.SecretFound').innerHTML = 'All secret found';
        document.querySelector('.SecretFound').style = 'font-weight: bold; color: #000;'
        document.querySelector('.SecretCount').style = 'display: none';
    }
}

function getDaysDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    let timeDiff = Math.abs(d2.getTime() - d1.getTime());

    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

let today = new Date();
let targetDate = '2025-02-14'; 

document.querySelector('.DaysDifference').innerHTML = getDaysDifference(today, targetDate) - 1;
