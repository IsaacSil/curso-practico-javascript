const discountPrice = (price, discount) => {
    let newPrice = price * (100 - discount) /100;
    return newPrice;
}

const coupons = [
    name
]

const findCoupon = (coupon) => {
    switch (coupon) {
        case '10%': return 10;
        case '20%': return 20;
        default: return 0;
    };
};

const calculateDiscountPrice = () => {
    let inputPrice = document.getElementById('inputPrice');
    let inputDiscount = document.getElementById('inputDiscount');
    let inputCoupon = document.getElementById('inputCoupon');

    let calculatedPrice = discountPrice(inputPrice.value, inputDiscount.value);
    
    let couponValue = findCoupon(inputCoupon.value);
    if (couponValue != 0) {
        let couponPrice = discountPrice(calculatedPrice, couponValue);
        resultP.innerText = `Cupón válido. El precio con descuento y cupón incluido es: ${couponPrice}`;
    } else {
        resultP.innerText = `Cupón inválido. El precio con descuento es: ${calculatedPrice}`;
    };
};

