const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");

//const toggleModal = (button, modal) => {
    const toggleModal = (button) => {
    button.addEventListener("click", () => {
       modal.classList.toggle("hidden");
        modal.classList.toggle("show");
        // document.body.innerHTML += `
        // <div> 
        // <section>
        // <button class="closeModal fas- fa-circle-xmark" ></button> 
        // </section>
        
        // </div>
        
        // `
    })
}
// const closeCart = (button) => {

// }

// showCart(cartButton);
toggleModal(cartButton, modal);
toggleModal(closeButton, modal);

