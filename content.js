let sums = [0, 0, 0, 0];
let counts = [0, 0, 0, 0];

let grades = document.getElementsByClassName("ocena");
for (let i = 0; i < grades.length; i++) {
    const element = grades[i];
    const title = element.getAttribute("title");
    if (title.substring(0, 51) === `Kategoria: przewidywana śródroczna<br>Data: ${new Date().getFullYear()-1}-12` || title.substring(0, 51) === `Kategoria: przewidywana śródroczna<br>Data: ${new Date().getFullYear()}-01`) {
        counts[0]++;
        sums[0] += +element.innerText;
    } else if (title.substring(0, 38) === `Kategoria: śródroczna<br>Data: ${new Date().getFullYear()}-02` || title.substring(0, 38) === `Kategoria: śródroczna<br>Data: ${new Date().getFullYear()}-01`) {
        counts[1]++;
        sums[1] += +element.innerText;
    } else if (title.substring(0, 30) === `Kategoria: przewidywana roczna`) {
        counts[2]++;
        sums[2] += +element.innerText;
    } else if (title.substring(0, 17) === `Kategoria: roczna`) {
        counts[3]++;
        sums[3] += +element.innerText;
    }
}

let array = document.getElementsByClassName("no-border-top");
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const title = element.getAttribute("title");
    if(title === "Przewidywana ocena śródroczna<br> z pierwszego okresu") {
        element.innerHTML += `<br>${getAverage(sums[0], counts[0])}`;
    } else if(element.getAttribute("title") === "Ocena śródroczna z pierwszego okresu") {
        element.innerHTML += `<br>${getAverage(sums[1], counts[1])}`;
    } else if(element.getAttribute("title") === "Przewidywana ocena roczna") {
        element.innerHTML += `<br>${getAverage(sums[2], counts[2])}`;
    } else if(element.getAttribute("title") === "Ocena roczna") {
        element.innerHTML += `<br>${getAverage(sums[3], counts[3])}`;
    }
}

function getAverage(sum, count) {
    return Math.round(sum/count*100)/100;
}