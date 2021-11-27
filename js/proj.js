let resp = fetch('https://api.github.com/users/ashishsahu1/repos');
resp.then(res=>res.json()).then(d=>{
    let toShow = [2,9,10,22,24,26,28,29,]
    for (let i = 0; i < toShow.length; i++) {
        const element = d[toShow[i]];
        console.log(element['name'])
        
    }
})