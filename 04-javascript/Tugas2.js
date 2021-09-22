    const ol = document.getElementById("ol");
    const insertButton = document.getElementById("insert"); 
    const tagInput = document.getElementById("newlist");
    
    
    insertButton.addEventListener("click", () => {
     
        
        const valuee = tagInput.value;
        

        const newList = document.createElement("li");
        const newText = document.createElement("span");
        const text = document.createTextNode(valuee);
        newText.appendChild(text);
        newList.appendChild(newText);
       
        const newButton = document.createElement("button");
        newButton.innerText = "Delete";
        newButton.className = "delete";
        newList.appendChild(newButton);
        ol.appendChild(newList);

        newButton.addEventListener("click", () => {
            ol.removeChild(newList);
           
        })

       
    })

    // const willDelete = document.getElementsByTagName("li");
    // willDelete.addEventListener("click", () =>  ol.remove(willDelete) );


   

