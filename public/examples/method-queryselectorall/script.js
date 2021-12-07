var catalogData = [
  {
    isAvailable: true,
    isSpecial: false
  },
  {
    isAvailable: false,
    isSpecial: false
  },
  {
    isAvailable: true,
    isSpecial: true
  },
  {
    isAvailable: true,
    isSpecial: false
  },
  {
    isAvailable: false,
    isSpecial: false
  }
];

var updateCards = function (products) {
  var elements = document.querySelectorAll('.product');  // находим все элементы с классом .product
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    
    var product = products[i];
    
    var availabilityClass = 'product--available'; // проверка товара на доступность
    if (!product.isAvailable) {
      availabilityClass = 'product--unavailable';
    }

    element.classList.add(availabilityClass);

    if (product.isSpecial) {
      element.classList.add('product--special'); // проверка товара на спецпредложение
    }
    
  }
};

updateCards(catalogData);