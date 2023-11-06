window.onload =  function() {
    let generate = document.getElementById("generate");
    generate.addEventListener("click", generator);
    
        function generator(){      
        const bodyDocument = document.querySelector("body")
        document.querySelector("h1").remove();
        const h1Add1 = document.createElement("h1");
        const p1stAdd1 = document.createElement("p");
        const imgAdd1 = document.createElement("img");
        const h1Add2 = document.createElement("h1");
        const ulAdd1 = document.createElement("ul");
        const liAdd1 = document.createElement("li");
        const liAdd2 = document.createElement("li");
        const h2Add1 = document.createElement("h2");
        const aAdd1 = document.createElement("a");


        h1Add1.append("Webpage Recreation Practice");
        p1stAdd1.append("The HTML of this webpage was created with JavaScript.");
        imgAdd1.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
        imgAdd1.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
        h1Add2.append("Facts about the Multicolored Tanager");
        liAdd1.append("It is endemic to the mountains of Colombia.")
        liAdd2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
        ulAdd1.append(liAdd1, liAdd2);
        h2Add1.append("Sources:")
        aAdd1.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
        aAdd1.append ("Wikipedia");

        bodyDocument.prepend(h1Add1, p1stAdd1, imgAdd1, h1Add2, ulAdd1, h2Add1, aAdd1);
        generate.removeEventListener("click", generator);

    }
}