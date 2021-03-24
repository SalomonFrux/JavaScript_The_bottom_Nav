
//! 1 Variables 
const cardList = document.querySelector('.cardItems'); 
const tbody = document.querySelector('#shoppingCart-tbody');


//! 2 Events Listeners
EventListeners(); 
function EventListeners(){
  
    cardList.addEventListener('click',AddItemToCart)

}

//! 3 Functions 

function AddItemToCart(e){
    
    if(e.target.classList.contains('btn-primary')){
        
        const clickedCard = e.target.parentElement.parentElement; 
        getTheCard(clickedCard);
        

    }
   
}


     //! i am dealing with an object here now

function getTheCard(clickedCard){
     
     const objectClicked = {
        objImage: clickedCard.querySelector('.card-img-top').src,
        objTitle: clickedCard.querySelector('h5').textContent, 
        objTxt: clickedCard.querySelector('.card-text').textContent,
        objId: clickedCard.querySelector('a').getAttribute('data-id')
   
     } 

     appendToTableBody(objectClicked)


}


//! Now appending that object to the table body

function appendToTableBody(objectToAppend){

    const tr = document.createElement('tr'); 
    tr.className = 'appendedTr'

         tr.innerHTML = ` 
          <td> <img src=${objectToAppend.objImage}></td>
          <td><h5>${objectToAppend.objTitle}</h5></td>
          <td><p>${objectToAppend.objTxt}</p></td>
          <td><a data_id=${objectToAppend.objId}></a></td>
          `;

        console.log(tr);

    tbody.appendChild(tr); 
}
