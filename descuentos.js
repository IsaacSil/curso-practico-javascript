const discountPrice = (price, discount) => {
    let newPrice = price * (100 - discount) /100;
    return newPrice;
}

//Solución con arrays de objetos:
const coupons = [
    {name: 'ten', discount: 10,},
    {name: 'twelve', discount: 20,},
    {name: 'thirty', discount: 30,},
];

const calculateDiscountPrice = () => {
    let inputPrice = document.getElementById('inputPrice');
    let inputCoupon = document.getElementById('inputCoupon');
    let priceValue = inputPrice.value;
    let couponValue = inputCoupon.value;
/*     const isCouponValid = (coupon) => {
        return coupon.name === couponValue;
    }; */

    const userCoupon = coupons.find( (coupon) => {
        return coupon.name === couponValue;
    });

    if (!userCoupon) {
        resultP.innerText = `El cupón ${couponValue} no es válido`;
    } else {
        let discount = userCoupon.discount;
        let couponPrice = discountPrice(priceValue, discount);
        resultP.innerText = `Cupón válido. El precio con cupón es: ${couponPrice}`;
    }

};



/* 
const calculateDiscountPrice = () => {
    let inputPrice = document.getElementById('inputPrice');
    let inputCoupon = document.getElementById('inputCoupon');
   
    let couponValue = findCoupon(coupons, inputCoupon.value);
    if (couponValue != 0) {
        let couponPrice = discountPrice(inputPrice.value, couponValue);
        resultP.innerText = `Cupón válido. El precio con cupón es: ${couponPrice}`;
    } else {
        resultP.innerText = `El cupón ${inputCoupon.value} es inválido`;
    };
}; */



//Solución solo con arrays:
/* const coupons = [
    'ten', 
    'twelve', 
    'thirty',
    'forty'
];

const findCoupon = (coupons, value) => {
    let discount = 0;
    switch (value) {
        case coupons[0]: discount = 10;
        break;
        case coupons[1]: discount = 20;
        break;
        case coupons[2]: discount = 30;
        break;
        default: discount = 0;
    };
    return discount;
}; */

/* const findCoupon = (coupons, coupon) => {
    switch (coupon) {
        case coupons[0]: return 10;
        case coupons[1]: return 20;
        case coupons[2]: return 30;
        case coupons[3]: return 40;
        default: return 0;
    };
}; */


/* const calculateDiscountPrice = () => {
    let inputPrice = document.getElementById('inputPrice');
    let inputCoupon = document.getElementById('inputCoupon');
   
    let couponValue = findCoupon(coupons, inputCoupon.value);
    if (couponValue != 0) {
        let couponPrice = discountPrice(inputPrice.value, couponValue);
        resultP.innerText = `Cupón válido. El precio con cupón es: ${couponPrice}`;
    } else {
        resultP.innerText = `El cupón ${inputCoupon.value} es inválido`;
    };
}; */

