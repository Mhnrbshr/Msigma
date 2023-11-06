// const request = fetch('https://api.msigma.in/btech/v2/branches/')
// console.log(request);
fetch('https://api.msigma.in/btech/v2/branches/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const branches = [];
        data.branches.forEach(element => {
            branches.push(element)
        });
        const container1 = document.getElementById("left");
        const container2 = document.getElementById("right");
        for(let i=0;i<=20;i++){


            const colors = ["red", "blue", "orange", "green", "yellow"];
            const random = colors[Math.floor(Math.random() * colors.length)];
            


        const container = document.createElement("div");
        container.classList.add("card");
        const h = document.createElement("h3");
        h.style.color =random;
        const p = document.createElement("p");
        // p.style.color =random;
        p.classList.add("p1");
        const a = document.createElement("a");
        a.style.color =random;
        const pi = document.createElement("p");
        // p.style.color =random;
        pi.classList.add("p1");
        h.textContent=`${branches[i].short}`;
        p.textContent=`${branches[i].name}`;
        a.textContent="ApplyNow";
        a.classList.add("button");
        pi.textContent="Fee starting at ₹799 per subject";
        container.appendChild(h);
        container.appendChild(p);
        container.appendChild(a);
        container.appendChild(pi);
        if(i%2==0){
            container2.appendChild(container);
        }else{
            container1.appendChild(container);
        }}
    })
    .catch(error => {
        console.error(error);
    });








