"use strict"

// fetch()
// .then()
// .then()

// fetch(url)
// //after this is called back, then do something
// .then(function(response){
    //    return response.json();
// })
// .then(function(data){
//     console.log(data.setup);
//     console.log(data.punchline);
// })


// fetch("https://official-joke-api.appspot.com/random_joke")
// .then(function(res){
//         return res.json()
//     })
// .then(function(data){
//     console.log(data)
// })



// fetch("https://official-joke-api.appspot.com/random_joke")
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })


// const url = "https://official-joke-api.appspot.com/random_joke"

// fetch(url)
// .then(function(response){
//         return response.json();
//     })
// .then(function(jsonnedstuff){
//     console.log(jsonnedstuff)
// })


// //ERRORS

// fetch("https://official-joke-api.appspot.com/random_joker")
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log("bad API")
//         console.log(err)
//     })
// .finally(function(){
//     console.log("now we're screwed")
//     console.error("now you're screwed")
// })


//Async/Await

// async function getJoke() {
//     let ourFetch = await fetch("https://official-joke-api.appspot.com/random_joke")
//     let data = await ourFetch.json();
//     console.log(data)
//     console.log(data.setup);
//     console.log(data.punchline);
// }
// getJoke();


// async function getJoke() {
//     let ourFetch = await fetch("https://official-joke-api.appspot.com/random_joke")
//     let data = await ourFetch.json();
//     console.log(data);
// }
// getJoke();


// fetch("https://official-joke-api.appspot.com/random_joke")
// .then(res => res.json())
// .then(data => {
//         console.log(data);
//         let p = document.createElement("p")
//         p.innerText = data.setup;
//         document.body.append(p);
//         let p2 = document.createElement("p")
//         p2.innerText = data.punchline;
//         document.body.append(p2);
//     })
    
    
    // let laughs = async () => {
    //         let res = await fetch("https://official-joke-api.appspot.com/random_joke")
    //         let data = await res.json();
    //         console.log(data)
    //         let p = document.createElement("p")
    //         p.innerText = data.setup;
    //         document.body.append(p);
    //         let p2 = document.createElement("p")
    //         p2.innerText = data.punchline;
    //         document.body.append(p2);
        
    //     }
        
    //     laughs()


        











        
            // {
            //     let title = document.createElement("h1");
            //     let image = document.createElement("img");
            //     let link = document.createElement("a");
            //     title.innerText = data.data.children[0].data.title;
            //     image.src = data.data.children[0].data.thumbnail;
            //     link.href = data.data.children[0].data.url;
            //     link.innerText = link.href;
            //     document.body.append(title)
            //     document.body.append(image)
            //     document.body.append(link)
            //     console.log(data.data.children[0].data.title)
            //     console.log(data.data.children[0].data.thumbnail)
            //     console.log(data.data.children[0].data.url)
            // }
            // {
            //     let title = document.createElement("h1");
            //     let image = document.createElement("img");
            //     let link = document.createElement("a");
            //     title.innerText = data.data.children[1].data.title;
            //     image.src = data.data.children[1].data.thumbnail;
            //     link.href = data.data.children[1].data.url;
            //     link.innerText = link.href;
            //     document.body.append(title)
            //     document.body.append(image)
            //     document.body.append(link)
            //     console.log(data.data.children[1].data.title)
            //     console.log(data.data.children[1].data.thumbnail)
            //     console.log(data.data.children[1].data.url)
            // }
            // {
            //     let title = document.createElement("h1");
            //     let image = document.createElement("img");
            //     let link = document.createElement("a");
            //     title.innerText = data.data.children[2].data.title;
            //     image.src = data.data.children[2].data.thumbnail;
            //     link.href = data.data.children[2].data.url;
            //     link.innerText = link.href;
            //     document.body.append(title)
            //     document.body.append(image)
            //     document.body.append(link)
            //     console.log(data.data.children[2].data.title)
            //     console.log(data.data.children[2].data.thumbnail)
            //     console.log(data.data.children[2].data.url)
            //}


        //             // Good code

        //     async function getPosts() {
        //         let ourFetch = await fetch("https://www.reddit.com/r/aww/.json")
        //         let data = await ourFetch.json();
     
        //         for (let i = 0; i < data.data.children.length; i++){
        //             console.log(i);
        //         let title = document.createElement("h1");
        //         let image = document.createElement("img");
        //         let link = document.createElement("a");
        //         title.innerText = data.data.children[i].data.title;
        //         image.src = data.data.children[i].data.thumbnail;
        //         link.href = data.data.children[i].data.url;
        //         link.innerText = link.href;
        //         document.body.append(title)
        //         document.body.append(link)
        //         document.body.append(image)
        //         console.log(data.data.children[i].data.title)
        //         console.log(data.data.children[i].data.thumbnail)
        //         console.log(data.data.children[i].data.url)   
        //     }  
        // }
        
        // getPosts()
        


                    //Deconstruct-it's an object inside an array

        //     async function getPosts() {
        //         let ourFetch = await fetch("https://www.reddit.com/r/aww/.json")
        //         let data = await ourFetch.json();
        //         // let redditArray = data.data.children;
                
                
        //         for (let i = 0; i < data.data.children[i].length; i++){
        //             console.log(i);
        //         let redditArray = data.data.children[i].data;
        //         // let {title, thumbnail, url} = redditArray;
        //         // let title = document.createElement("h1");
        //         // let thumbnail = document.createElement("img");
        //         // let link = document.createElement("a");
        //         // title.innerText = data.data.children[i].data.title;
        //         // image.src = data.data.children[i].data.thumbnail;
        //         // link.href = data.data.children[i].data.url;
        //         // link.innerText = link.href;
        //         // document.body.append(title)
        //         // document.body.append(thumbnail)
        //         // document.body.append(url)
        //         // console.log(data.data.children[i].data.title)
        //         // console.log(data.data.children[i].data.thumbnail)
        //         // console.log(data.data.children[i].data.url)
        //         console.log(redditArray);
        //         // console.log(title)
        //     }
            
            
        //     //Deconstruct-it's an object inside an array
        // }
         
        // getPosts()

                //Deconstructed Success!

        async function getPosts() {
            let ourFetch = await fetch("https://www.reddit.com/r/aww/.json")
            let data = await ourFetch.json();
            let redditArray = data.data.children;
            
            for (let posts of redditArray){
                let {title, thumbnail, url} = posts.data;
                console.log(thumbnail);
                console.log(title);
                console.log(url);
            
            let one = document.createElement("h1");
            let two = document.createElement("img");
            let three = document.createElement("a");
            one.innerText = title;
            two.src = thumbnail;
            three.href = url;
            three.innerText = three.href;
            document.body.append(one)
            document.body.append(two)
            document.body.append(three)
        }
    }
    
    getPosts()
        
        
        
        


















 
