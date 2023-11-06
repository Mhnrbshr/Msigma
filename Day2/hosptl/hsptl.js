

const request = fetch('https://dummyjson.com/users/');
console.log(request);
    request.then(response => response.json())
    .then(data => { console.log(data)
        for(let i=1;i<5;i++){
            let name = "lisha"+i;
            let role = "ent"+i;
            let img = "img"+i;
            const docname = document.querySelector("#" + name);
            docname.textContent = data.users[i].firstName+" "+data.users[i].lastName;
            const docrole = document.querySelector("#" + role);
            docrole.textContent = data.users[i].company.department;
            const docimg = document.querySelector("." + img);
            docimg.src = data.users[i].image;
        }
  })
    
