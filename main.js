let tripsForm = document.querySelector(".trips-form"),
    tripsCompanyBtn = document.querySelector(".trips-company-form-btn"),
    country = document.getElementById("country"),
    City = document.getElementById("City"),
    neighborhood = document.getElementById("neighborhood"),
    street = document.getElementById("street"),
    phoneNumber = document.getElementById("phoneNumber"),
    extraNumber = document.getElementById("extraNumber"),
    tripsFormBtn = document.getElementById("tripsFormBtn");
let valid1 = false,
    valid2 = false,
    valid3 = false,
    valid4 = false,
    valid5 = false;

let country2 = document.getElementById("country2"),
    City2 = document.getElementById("City2"),
    neighborhood2 = document.getElementById("neighborhood2"),
    street2 = document.getElementById("street2"),
    phoneNumber2 = document.getElementById("phoneNumber2"),
    extraNumber2 = document.getElementById("extraNumber2"),
    country3 = document.getElementById("country3"),
    City3 = document.getElementById("City3"),
    neighborhood3 = document.getElementById("neighborhood3"),
    street3 = document.getElementById("street3"),
    phoneNumber3 = document.getElementById("phoneNumber3"),
    extraNumber3 = document.getElementById("extraNumber3"),
    cardNumber = document.getElementById("cardNumber"),
    exp = document.querySelector(".exp"),
    month = document.getElementById("month"),
    year = document.getElementById("year"),
    cvv = document.getElementById("cvv"),
    payForm = document.querySelector(".pay-by-visa"),
    payForm2 = document.querySelector(".pay-by-trans"),
    payBtn = document.getElementById("payBtn"),
    pay2Btn = document.querySelector(".pay2-btn"),
    acountTransferName = document.getElementById("name");

// Stop any form
function stopForm(event) {
    event.preventDefault();
}

// Success Input 
let setSuccess = (ele) => {
    let parent = ele.parentElement;
    let error = parent.querySelector(".errorMassege")
    error.innerHTML = ""

    ele.classList.add("success")
    ele.classList.remove("error")
}

let setError = (ele, errorMa) => {
    let parent = ele.parentElement;
    let error = parent.querySelector(".errorMassege")
    error.innerHTML = errorMa

    ele.classList.remove("success")
    ele.classList.add("error")
}

// Start Timer
let hours = 24,
    min = 59,
    sec = 59,
    days = 0;

let hr = document.getElementById("hours")
const timer = setInterval(() => {
    sec--;
    if (sec < 0) {
        min--;
        sec = 59;
    }

    if (min < 0) {
        hours--;
        min = 59;
    }

    if (hours < 0) {
        days = 0;
        hours = 0;
        min = 0;
        sec = 0;
    }

    if (days < 0) {
        days = 0;
        hours = 0;
        min = 0;
        sec = 0;
        clearInterval(timer);
    }

    document.getElementById("sec").innerHTML = sec < 10 ? `0${sec}` : sec
    document.getElementById("min").innerHTML = min < 10 ? `0${min}` : min
    document.getElementById("hrs").innerHTML = hours < 10 ? `0${hours}` : hours
}, 1000)
// End Timer

// Start Cart Summry
let total = +(document.querySelector(".total").innerHTML);
finalTotal.innerHTML = total;
// End Cart Summry

// Start Coupon 
let couponValid = false;
let couponCode = document.getElementById("couponCode");
let couponBtn = document.getElementById("couponBtn");

let couponCodeCheck = couponCode.onchange = () => {
    if (couponCode.value.trim() == "") {
        setError(couponCode, "من فضلك أدخل الرمز")
        couponValid = false;
    } else {
        setSuccess(couponCode)
        couponValid = true;
    }
}

couponBtn.onclick = () => {
    couponCodeCheck()
    if (couponValid) {
        Swal.fire({
            position: "top-start",
            icon: "success",
            title: "مبروك، لقد حصلت علي الخصم",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

function openCoupon() {
    document.querySelector('.coupon').classList.toggle('active');
}

function openCartSummry() {
    document.querySelector('.cart-summry').classList.toggle('active');
}
// End Coupon  

// Satrt Validation Trips Form


let countryCheck = country.onchange = () => {
    if (country.value.trim() == "") {
        setError(country, "من فضلك أدخل اسم الدولة")
        valid1 = false
    } else {
        setSuccess(country)
        valid1 = true
    }
}

let CityCheck = City.onchange = () => {
    if (City.value.trim() == "") {
        setError(City, "من فضلك أدخل اسم المدينة")
        valid2 = false
    } else {
        setSuccess(City)
        valid2 = true
    }
}

let neighborhoodCheck = neighborhood.onchange = () => {
    if (neighborhood.value.trim() == "") {
        setError(neighborhood, "من فضلك أدخل اسم الحي")
        valid3 = false
    } else {
        setSuccess(neighborhood)
        valid3 = true
    }
}

let streetCheck = street.onchange = () => {
    if (street.value.trim() == "") {
        setError(street, "من فضلك أدخل اسم الشارع")
        valid5 = false
    } else {
        setSuccess(street)
        valid4 = true
    }
}

let phoneNumberCheck = phoneNumber.onchange = () => {
    if (phoneNumber.value.trim() == "") {
        setError(phoneNumber, "من فضلك أدخل رقم الهاتف")
        valid5 = false
    } else {
        setSuccess(phoneNumber)
        valid5 = true
    }
}

tripsFormBtn.onclick = () => {
    countryCheck()
    CityCheck()
    neighborhoodCheck()
    streetCheck()
    phoneNumberCheck()

    if (valid1 && valid2 && valid3 && valid4 && valid5) {
        document.querySelector(".trips").classList.toggle("active");
        document.querySelector(".trips-company").classList.toggle("active");
    }
}
// Satrt Validation Trips Form


// Start Company Trips
tripsCompanyBtn.onclick = () => {
    document.querySelector(".trips-company").classList.remove("active");
    document.querySelector(".pay").classList.add("active");
}
// End Company Trips

// Start Pay //


tripsForm.onchange = () => {
    if (valid1 && valid2 && valid3 && valid4 && valid5) {
        tripsFormBtn.classList.add("active")
    } else {
        tripsFormBtn.classList.remove("active")
    };

    country2.value = country.value;
    City2.value = City.value;
    street2.value = street.value;
    neighborhood2.value = neighborhood.value;
    phoneNumber2.value = phoneNumber.value;
    extraNumber2.value = extraNumber.value;
    country3.value = country.value;
    City3.value = City.value;
    street3.value = street.value;
    neighborhood3.value = neighborhood.value;
    phoneNumber3.value = phoneNumber.value;
    extraNumber3.value = extraNumber.value;
}
// Validation
let valid6 = false,
    valid7 = false,
    valid8 = false,
    valid9 = false;


let cardNumberCheck = cardNumber.onchange = () => {
    if (cardNumber.value.trim() == "") {
        setError(cardNumber, "رقم البطاقة مطلوب")
        valid6 = false;
    } else if (cardNumber.value.trim().length != 16) {
        setError(cardNumber, "البيانات المدخلة خطأ (تحتوي البطاقة علي 16 رقم)")
        valid6 = false;
    } else {
        setSuccess(cardNumber);
        valid6 = true;
    }
}

let monthCheck = month.onchange = () => {
    if (month.value.trim() == "") {
        valid7 = false;
        exp.classList.add("error")
        exp.classList.remove("success")
    } else if (month.value.trim().length > 2 || month.value.trim().length <= 0) {
        exp.classList.add("error")
        exp.classList.remove("success")
        valid7 = false;
    } else {
        exp.classList.add("success")
        exp.classList.remove("error")
        valid7 = true;
    }
}

let yearCheck = year.onchange = () => {
    if (year.value.trim() == "") {
        valid8 = false;
        exp.classList.add("error")
        exp.classList.remove("success")
    } else if (year.value.trim().length > 4 || year.value.trim().length < 0) {
        exp.classList.add("error")
        exp.classList.remove("success")
        valid8 = false;
    } else {
        exp.classList.add("success")
        exp.classList.remove("error")
        valid8 = true;
    }
}

let cvvCheck = cvv.onchange = () => {
    if (cvv.value.trim() == "") {
        setError(cvv, "هذا الحقل مطلوب")
        valid9 = false;
    } else if (cvv.value.trim().length != 3) {
        setError(cvv, "البيانات المدخلة خطأ (يتكون من 3 أرقام)")
        valid9 = false;
    } else {
        setSuccess(cvv);
        valid9 = true;
    }
}

payForm.onsubmit = (e) => {
    if (!(valid1 && valid2 && valid3 && valid4 && valid5 && valid6 && valid7 && valid8 && valid9)) {
        e.preventDefault()
    }
}

payForm.onchange = () => {
    if (valid6 && valid7 && valid8 && valid9) {
        payBtn.classList.add("active")
    } else {
        payBtn.classList.remove("active")
    }
}

payBtn.onclick = () => {
    cardNumberCheck()
    monthCheck()
    yearCheck()
    cvvCheck()
}

let aa = document.querySelectorAll("input[name='trans']")
payForm2.style.display = "none"
aa.forEach((i) => {
    i.onclick = () => {
        if (i.value == "transfare") {
            payForm.style.display = "none";
            payForm2.style.display = "block";
        } else {
            payForm.style.display = "flex";
            payForm2.style.display = "none";
        }
    }
})
// Start Open & Close Sections
let btn = document.querySelectorAll(".section-title");

let trips = document.getElementById("trips");
let tripsCompany = document.getElementById("tripsCompany");
let payDet = document.getElementById("payDet");

btn.forEach((i) => {
    i.onclick = () => {
        let parent = i.parentElement;
        parent.classList.toggle("active");
    }
})

// End Open & Close Sections

let nameValid = false;
let acountTransferNameCheck = acountTransferName.onchange = () => {
    if (acountTransferName.value.trim() == "") {
        setError(acountTransferName, "الاسم مطلوب")
        nameValid = false;
        pay2Btn.classList.remove("active");
    } else {
        setSuccess(acountTransferName)
        nameValid = true;
        if (!nameValid && valid1 && valid2 && valid3 && valid4 && valid5) {
            pay2Btn.classList.add("active");
        }
    }
}

pay2Btn.onclick = (e) => {
    acountTransferNameCheck()
    if (!(nameValid && valid1 && valid2 && valid3 && valid4 && valid5)) {
        e.preventDefault(e)
        pay2Btn.classList.remove("active");
    }
}



let installmentBy = document.getElementById("installmentBy");
let firstPayment = document.getElementById("firstPayment");
let monthlyPayment = document.getElementById("monthlyPayment");
let residual = document.getElementById("residual");
let tableMonthlyPayment = document.getElementById("tablePayment")

for (let i = 1; i < 25; i++) {
    const option = document.createElement("option");
    option.value = `${i} شهر`;
    option.innerHTML = `${i} شهر`;
    installmentBy.appendChild(option);
}

if (installmentBy.value == "نقدا") {
    monthlyPayment.parentElement.style.display = "none";
    residual.parentElement.style.display = "none";
    firstPayment.parentElement.style.display = "none";
    tableMonthlyPayment.style.display = "none";
}

residual.value = `${total - 1000} ر.س`;

installmentBy.onchange = function () {
    if (installmentBy.value == "نقدا") {
        monthlyPayment.parentElement.style.display = "none";
        residual.parentElement.style.display = "none";
        firstPayment.parentElement.style.display = "none";
        tableMonthlyPayment.style.display = "none";
    } else {
        monthlyPayment.parentElement.style.display = "block";
        residual.parentElement.style.display = "block";
        firstPayment.parentElement.style.display = "block";
        tableMonthlyPayment.style.display = "table";
    }

    const today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    const monthlyInstallment = parseInt(residual.value) / parseInt(installmentBy.value);

    monthlyPayment.value = `${monthlyInstallment.toFixed(2)} ر.س`;

    let table = "";
    for (let i = 1; i <= parseInt(installmentBy.value); i++) {
        month += 1;
        if (month > 12) {
            month = 1;
            year += 1;
        }

        let date = `${day} / ${month + 1} / ${year}`;

        table += `
        <tr style="border-bottom: 1px solid #ccc;">
            <td>${i}</td>
            <td dir="ltr">${date}</td>
            <td>${monthlyInstallment.toFixed(2)}</td>
        </tr>
        `;
    }

    document.getElementById("tbody").innerHTML = table;
};