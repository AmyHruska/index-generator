window.onload =  function() {
    let generate = document.getElementById("generate");
    generate.addEventListener("click", generator);
    
        function generator(){
        
        
        const bodyDocument = document.querySelector("body")
        
        const h1Add1 = document.createElement("h1");
        const p1stAdd1 = document.createElement("p");
        const img1stAdd1 = document.createElement("img");
        const h1Add2 = document.createElement("h1");
        const ulAdd1 = document.createElement("ul");
        const liAdd1 = document.createElement("li");
        const liAdd2 = document.createElement("li");
        const h2add1 = document.createElement("h2");
        const aAdd1 = document.createElement("a");


        h1Add1.append("Webpage Recreation Practice");
        
        
        
        bodyDocument.prepend(h1Add1);
        generate.removeEventListener("click", generator);

    }
}