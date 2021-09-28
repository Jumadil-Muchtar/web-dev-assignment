// Add delete confirmation

// If user confirms yes, delete the item if it is the only item, otherwise decrease the counter
// If user confirm no/decline/press ESC, do not delete the item

// Item counter

// If user input the same item, display a counter showing how many related item do we have
// If there are only items, do not display the counter



// Get element
const inputItem = document.getElementById('input-item');
const btnAddItem = document.getElementById('btn-add-item');
const listContainer = document.querySelector('.list');

// Basic database
const database = new Map();

// let frekuensi = [];

// Untuk Frekuensi / Banyaknya item
const frekuensi = new Map();

// counterr : penghitung item yang sama


btnAddItem.addEventListener('click', () => {
    const ITEM_KEY = inputItem.value.toUpperCase();
    const ITEM_VALUE = inputItem.value;

    // WARN: Handle error, empty input
    if (ITEM_VALUE === '') {
      alert("Item Name can't be blank");
      inputItem.focus();
      return;
    }
    
    // WARN: Check for duplication
    if (database.has(ITEM_KEY)) {
      let counterr = document.getElementsByClassName(ITEM_KEY);
      let cds = counterr[0].textContent 
      cds++;
      
      // NOTE : Don't show counter if the value is 1.
      if(cds > 1){
        //const counterSetID = counter.setAttribute('id', ITEM_KEY);
        removeClass(counterr[0], 'hidden');
        
      }  else{
        counterr.classList.add('hidden'); // NOTE: Add Class
      }
      counterr[0].textContent = cds;
      return;
    } 
        // NOTE: Create element
        const listItem = document.createElement('li');
        const textItem = document.createElement('button');
        const btnDelete = document.createElement('button');
        const counter = document.createElement('span');
        // NOTE: Add the new item to database
        database.set(ITEM_KEY, ITEM_VALUE);

        // NOTE : Add the frecuency item
        frekuensi.set(ITEM_KEY, 1); 

        listItem.classList.add('list-item'); // NOTE: Add Class

        // NOTE: Add value
        textItem.textContent = ITEM_VALUE;
        btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/> </svg>';   

        // NOTE: The counter should be dynamicly show how much do we have for this item
        counter.textContent = frekuensi.get(ITEM_KEY);
        
        // NOTE : Add class in counter button
        counter.classList.add(ITEM_KEY);
        // NOTE: Combine elements
        textItem.append(counter);
        listItem.append(textItem, btnDelete);
        listContainer.appendChild(listItem);
        textItem.classList.add('btn');
        textItem.classList.add('btn-primary');
        textItem.classList.add('MNP');
        btnDelete.classList.add('btn');
        btnDelete.classList.add('btn-primary');
        btnDelete.classList.add('MNP')
        counter.classList.add('badge');
        counter.classList.add('bg-secondary');
        counter.classList.add('MNP');
        // NOTE : Don't show counter if the value is 1.
        if(counter.textContent > 1){
          removeClass(counter, 'hidden');
        }
        else{
          counter.classList.add('hidden'); // NOTE: Add Class
        }
      
        // NOTE: Handle click event for delete button
        btnDelete.addEventListener('click', () => {
          var r = confirm("Apakah Anda ingin menghapus item?");
          if (r == true) {
            let counterToDelete = document.getElementsByClassName(ITEM_KEY);
            
            let cdss = counterToDelete[0].textContent 
            if(cdss>1){
              cdss--;
              counterToDelete[0].textContent = cdss;
              if(cdss==1){
                counter.classList.add('hidden');
              }
            } else{
              listContainer.removeChild(listItem);
            }
          } 
        });
      
        inputItem.value = '';
        inputItem.focus();
      });
      
    function hasClass(ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }