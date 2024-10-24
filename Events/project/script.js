function getRandomColor() {
    let redColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    let opacity = Math.random().toFixed(2);
    return `rgba(${redColor}, ${greenColor}, ${blueColor}, ${opacity})`;
}
let leftColor = "rgba(255, 99, 71, 1)";
let rightColor = "rgba(135, 206, 250, 1)";
document.body.style.background = `linear-gradient(90deg, ${leftColor}, ${rightColor})`;

let bgColor = `linear-gradient(90deg, ${leftColor}, ${rightColor})`
let copyCode = document.getElementById("copy")
copyCode.value = bgColor

document.getElementById('left').addEventListener('click', () => {
    leftColor = getRandomColor();
    document.body.style.background = `linear-gradient(90deg, ${leftColor}, ${rightColor})`;
    bgColor = `linear-gradient(90deg, ${leftColor}, ${rightColor})`
    copyCode.value = bgColor
});


document.getElementById('right').addEventListener('click', () => {
    rightColor = getRandomColor();
    document.body.style.background = `linear-gradient(90deg, ${leftColor}, ${rightColor})`;
    bgColor = `linear-gradient(90deg, ${leftColor}, ${rightColor})`
    copyCode.value = bgColor
});

document.getElementById("copy-btn").addEventListener("click", () => {
    let data = document.getElementById("copy").value;
    let copied = document.getElementById("copied");
    
    navigator.clipboard.writeText(data).then(() => {
        copied.style.display = "inline-block";
        
        setTimeout(() => {
            copied.style.display = "none";
        }, 1000); 
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

