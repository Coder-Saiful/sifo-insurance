const appointForm = document.querySelector('.appointForm');
const inputFields = document.querySelectorAll('.appointForm .form-control, .appointForm .form-select');

const qType = document.getElementById('qType');
const aDate = document.getElementById('aDate');
const aTime = document.getElementById('aTime');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

const clientImg = document.getElementById('clientImg');

const qBtn = document.querySelector('.qBtn');
const quoteModal = document.querySelector('.quoteModal');
const modalClose = document.querySelector('.modalClose');
const modalBackdrop = document.querySelector('.modalBackdrop');
const modalContent = document.querySelector('.modal-content');

const navContainer = document.querySelector('.navContainer');
const menuIcon = document.querySelector('.menuIcon');
const navBackdrop = document.querySelector('.navBackdrop');
const navCloseBtn = document.querySelector('.navCloseBtn');
const menuItem = document.querySelectorAll('.navbar-nav .nav-link');

const previewImg = document.querySelector('.previewImg img');

const comName = document.querySelector('.comName');


let isModalOpen = false;

let dataObj = {};

// =============== Appoint form validation 

// Quote Type Validation
const validateQuoteType = (input) => {
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    if (input.value == "") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Please select an option!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
    }
}

// Appoint Date Validation
const validateAppointDate = (input) => {
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    if (input.value == "") {
        input.classList.add('is-invalid');
        // input.style.backgroundPosition = 'right calc(2.15em + 0.1875rem) center';
        invalidFeedback.innerHTML = "Please pick your date of birth!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
    }
}

// Appoint Time Validation
const validateAppointTime = (input) => {
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    if (input.value == "") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Please select a time!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
    }
}

// First Name Validation
const validateFirstName = (input) => {
    var letters = /^[A-Za-z( )?(.)?]+$/;
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    if (input.value.trim() == "") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Please enter your first name!";
    } else if (!letters.test(input.value.trim())) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "First name must be a letter!";
    } else if (input.value.trim().length < 3) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "First name must be at least 3 characters!";
    } else if (input.value.trim().length > 50) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "First name must be less than 50 characters!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
    }
}

// Last Name Validation
const validateLastName = (input) => {
    var letters = /^[A-Za-z]+$/;
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    if (input.value.trim() == "") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Please enter your last name!";
    } else if (!letters.test(input.value.trim())) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Last name must be a letter!";
    } else if (input.value.trim().length < 3) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Last name must be at least 3 characters!";
    } else if (input.value.trim().length > 50) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Last name must be less than 50 characters!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
    }
}

// Phone Number Validation
const validatePhone = (input) => {
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    const regEx = /^(\+)?[0-9]+$/;
    if (input.value.trim() == "") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Please enter your phone!";
    } else if (!regEx.test(input.value.trim())) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Your phone number is invalid!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
    }
}

// Email Address Validation
const validateEmail = (input) => {
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (input.value.trim() == "") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Please enter your email!";
    } else if (!regEx.test(input.value.trim())) {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Your email is invalid!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
    }
}

// Client Image Validation
const validateClientImg = (input) => {
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');
    const imgTypeList = input.value.split(".");
    const imgType = imgTypeList.slice(-1)[0].toString().toLowerCase();
    if (input.value == "") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Please choose an image!";
    } else if (imgType !== "jpg" && imgType !== "jpeg" && imgType !== "png" && imgType !== "svg") {
        input.classList.add('is-invalid');
        invalidFeedback.innerHTML = "Image must be jpg, jpeg, png and svg!";
    } else {
        input.classList.remove('is-invalid');
        invalidFeedback.innerHTML = "";
        dataObj[input.id] = input.value;
        const imgUrl = URL.createObjectURL(input.files[0]);
        if (imgUrl) {
            previewImg.src = imgUrl;
            previewImg.style.width = "110px";
            previewImg.style.height = "auto";
            previewImg.style.marginTop = "20px";
            previewImg.style.marginBottom = "20px";
        }
    }
}

// Check validation when user typing
fName.addEventListener('keyup', (e) => {
    validateFirstName(fName);
});
lName.addEventListener('keyup', (e) => {
    validateLastName(lName);
});
phone.addEventListener('keyup', (e) => {
    validatePhone(phone);
});
email.addEventListener('keyup', (e) => {
    validateEmail(email);
});
clientImg.addEventListener('change', (e) => {
    validateClientImg(clientImg);
});
qType.addEventListener('change', (e) => {
    validateQuoteType(qType);
});
aDate.addEventListener('change', (e) => {
    validateAppointDate(aDate);
});
aTime.addEventListener('change', (e) => {
    validateAppointTime(aTime);
});

// Check validation when user submitted form
appointForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validateQuoteType(qType);
    validateAppointDate(aDate);
    validateAppointTime(aTime);
    validateFirstName(fName);
    validateLastName(lName);
    validatePhone(phone);
    validateEmail(email);
    validateClientImg(clientImg);

    if (dataObj.qType && dataObj.aDate && dataObj.aTime && dataObj.fName && dataObj.lName && dataObj.phone && dataObj.email && dataObj.clientImg) {
        qType.value = "";
        aDate.value = "";
        aTime.value = "";
        fName.value = "";
        lName.value = "";
        phone.value = "";
        email.value = "";
        clientImg.value = "";
        
        // console.log(dataObj);

        dataObj = {};

        previewImg.removeAttribute('src');
        previewImg.style.marginTop = "0";
        previewImg.style.marginBottom = "0";

        quoteModal.style.display = 'none';

        setTimeout(() => {
            Swal.fire(
                'Weldone!',
                'Appoint Requested Successfully.',
                'success'
            )
        }, 500);
    }
});


// ========== Quote modal 

qBtn.addEventListener('click', (e) => {
    quoteModal.style.display = 'block';
    modalBackdrop.classList.add('show');
    document.body.classList.add('removeScrolling');

});

// Close Modal

modalClose.addEventListener('click', (e) => {
    quoteModal.style.display = 'none';
    document.body.classList.remove('removeScrolling');
});

// Close  modal outside click

document.addEventListener('click', (e) => {
    if (modalBackdrop.classList.contains('show') && e.target != qBtn) {
        const modalContent = document.querySelector('.modal-content');
        if (!modalContent.contains(e.target)) {
            quoteModal.style.display = 'none';
            document.body.classList.remove('removeScrolling');
        }
    }
});

// Open menu

menuIcon.addEventListener('click', (e) => {
    e.preventDefault();
    navContainer.classList.add('active');
    document.body.classList.add('removeScrolling');
    navBackdrop.classList.add('show');
    menuIcon.style.display = "none";
});

// Close menu
function closeMenu(e) {
    e.preventDefault();
    navContainer.classList.remove('active');
    document.body.classList.remove('removeScrolling');
    navBackdrop.classList.remove('show');
    menuIcon.style.display = "block";
}

navCloseBtn.addEventListener('click', closeMenu);

// Close menu by menu item
menuItem.forEach(item => {
    item.addEventListener('click', closeMenu);
});

// Close menu by Logo
comName.addEventListener('click', closeMenu);

// Close menu by pressing Escape Button
document.addEventListener('keydown', closeMenu);

