// console.log("I am working");

// an array with all of our cart items
var cart = [];

var updateCart = function () {
  $('.cart-list').empty();
  $('.total').empty();
  var totalPrice = 0;
  for(var i = 0; i < cart.length; i ++){
    var itemsAdded = '<div class="item-added">' + cart[i].item + " " + cart[i].price + '</div>';
    $('.cart-list').append(itemsAdded);
    var itemPrice = cart[i].price;
    totalPrice += itemPrice;
  }
  $('.total').append(totalPrice);
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}


var addItem = function (item, price) {
    cart.push({
    item: item,
    price: price
  })
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  for(var i = cart.length; i > 0; i --){
    cart.pop();
  }
  $('.cart-list').empty();
  $('.total').empty();
  // TODO: Write a function that clears the cart ;-)
}

$('.view-cart').on('click', function () {
  console.log("view cart was clicked");
  if($('.shopping-cart').css('display') == 'none'){
  $('.shopping-cart').addClass('show');
  } else {
  $('.shopping-cart').removeClass('show');
  }
  updateCart();
  // TODO: hide/show the shopping cart!
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  console.log("Item: " + cart.item + "was added to cart")
  var item = $(this).closest('.item').data().name;
  var price = $(this).closest('.item').data().price;
  addItem(item, price);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!

updateCart();
