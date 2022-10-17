'use strict';

const overlay = document.querySelector('.overlay');
const cartBtn = document.getElementById('cart-btn');
const cartSlide = document.getElementById('my-cart')
const header = document.getElementsByTagName('header');
const topBar = document.getElementById('topbar')
const productsGrid = document.getElementById('products-grid');
const closeCartBtn = document.getElementById('close-cart');


function openCartBar() {
    console.log(cartBtn)
        cartSlide.style = `left:32%;` 
        overlay.classList.remove('hidden');
}

function closeCartBar(){
    cartSlide.style = `left:100% !important`;
    overlay.classList.add('hidden');
}


cartBtn.addEventListener('click', openCartBar    
)

closeCartBtn.addEventListener('click', closeCartBar)
overlay.addEventListener('click', closeCartBar)


/* ----------Products----------- */

/*
const allProducts = {
    "product1": {
        name: "Bournvita and Milo",
        price:1500,
        image: 'https://primemarsstores.com/wp-content/uploads/2020/10/1-2020-10-14T172938.400.jpg',
        qty: 0,
    },

    "product2": {
        name: "Semo",
        price: 2500,
        image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/brm/brm11318/l/2.jpg',
        qty: 0,
    },

    "product3": {
        name: "Bournvita and Milo",
        price:1500,
        image: 'https://primemarsstores.com/wp-content/uploads/2020/10/1-2020-10-14T172938.400.jpg',
        qty: 0,
    },
}
*/


/* ----------Calculating Products----------- */

const productPrices = document.querySelectorAll('.price-amt');
const productName = document.querySelectorAll('.pro-name');
const priceBtns = document.querySelectorAll('.price-btns')
const plusBtns = document.querySelectorAll('.plus-btn')
const minusBtns = document.querySelectorAll('.minus-btn')
const addBtns = document.querySelectorAll('.add-btn')
const totalAmount = document.getElementById('total-amt');
const cartTable = document.getElementById('cart-table')
const tableTotal = document.getElementById('table-total')

// let newPrice;

let totalVar = 0;

    plusBtns.forEach(function(unitBtn, i) {
            // let qtyVar = Number(qty[i].textContent);
            let newPrice = Number(productPrices[i].textContent);
            unitBtn.addEventListener('click', 
            function(){
                let qtyVar = Number(qty[i].textContent);
                qtyVar++;
                productPrices[i].textContent = newPrice * qtyVar;
                qty[i].textContent = qtyVar;
                // console.log(qtyVar, productPrices[i].textContent, newPrice)
                
            })
    })

    for (let m=0; m<minusBtns.length; m++){
        // let qtyVar = Number(qty[m].textContent);
        let newPrice = Number(productPrices[m].textContent);
            minusBtns[m].addEventListener('click', function(){
                let qtyVar = Number(qty[m].textContent);
                qtyVar--;
                if (qtyVar < 1) {qtyVar = 1}
                productPrices[m].textContent = newPrice * qtyVar
                qty[m].textContent = qtyVar;
                // console.log(qtyVar, productPrices[m].textContent, newPrice, m)
            })
            }
        
// console.log(parseInt('30 000')) 
    for (let a=0; a<addBtns.length; a++) {
        addBtns[a].addEventListener('click', function(){
            totalVar = Number(productPrices[a].textContent) + totalVar;
            totalAmount.textContent = totalVar;
            if(productName[a].textContent){
                console.log('Name already exists')
            }
            cartTable.innerHTML += 
            `
            <tr>
            <td> ${productName[a].textContent} </td>
            <td> ${productPrices[a].textContent} </td>
            </tr>
            `
            orderDetails.innerHTML += 
            `
            <div class="product-line">
            <p>${productName[a].textContent}</p>
            <p>${productPrices[a].textContent}</p>
            </div>
            `
            tableTotal.innerHTML = totalAmount.textContent;
            modalTotal.textContent = totalAmount.textContent;
            receiptTotal.textContent = totalAmount.textContent;

            alert(`${qty[a].textContent} units of ${productName[a].textContent} added to cart`)
        })
    }


    /*-------MODAL-------- */

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const footerBtn = document.getElementById('foot-btn');
const modalTotal = document.getElementById('modal-total');
const orderDetails = document.getElementById('order-details')
const receiptTotal = document.getElementById('receipt-total');
const qty = document.querySelectorAll('.qty');
const printReceipt = document.getElementById('print-now');
const payModal = document.getElementById('pay-modal')
const receiptModal = document.getElementById('receipt')
const closeReceiptBtn = document.getElementById('close-receipt')

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  receiptModal.classList.add('hidden');
  payModal.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
  footerBtn.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

printReceipt.addEventListener('click', function(){
    payModal.classList.add('hidden');
    receiptModal.classList.remove('hidden');
})

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

function closeReceipt(){
    closeModal()
    qty.forEach(function (element, index) {
        totalAmount.textContent = 0
        let defaultPrice = Number(productPrices[index].textContent)/Number(element.textContent);
        // console.log(defaultPrice)
        productPrices[index].textContent = defaultPrice
        element.textContent = 1
    });

}

closeReceiptBtn.addEventListener('click', closeReceipt)


// closeReceiptFunc()

/////////////// RECEIPT ////////////











