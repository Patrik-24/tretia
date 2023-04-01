let colors = document.querySelectorAll(".green-lime")

colors.forEach(element => {
    console.log(element.innerText);

    if(element.innerText > 92){
        colors.style.color = "lime";
    }

    const value = parseFloat(element.innerText);
        if (value >= 92) {
        element.style.color = 'lime';
    }
});