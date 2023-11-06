const request = fetch('https://dummyjson.com/users/')
console.log(request);

request.then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.log(error.message));
        