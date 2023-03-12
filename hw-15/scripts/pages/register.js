import { regBtnHandler } from "../eventHandlers.js";

const imgUrl = "./src/images/register.png";

// creating register page markup
const imgRegister = document.createElement("img");
imgRegister.classList.add("page-image");
imgRegister.classList.add("register-image");
imgRegister.alt = "Login page logo";
imgRegister.src = imgUrl;


const formRegister = document.createElement("form");
formRegister.classList.add("form");
formRegister.classList.add('registration-form')


const currentDate = new Date;
const dateStrFull = currentDate.toISOString()
const maxDate = dateStrFull.slice(0, 10)


const formInputsMarkup = `
    <h3 class="form-title">Registration form</h3>

        <div class="input-box">
            <span>Name</span>
            <input type="text" name="name" placeholder="Enter name"> 
        </div>

        <div class="input-box">
            <span>Date Of Birth</span>
            <input type="date" name="birthdate" max="${maxDate}" value=${maxDate}> 
        </div>

        <div class="input-box">
            <span>Father’s/Mother’s Name</span>
            <input type="text" name="parentsName" placeholder="Enter parent name"> 
        </div>

        <div class="input-box">
            <span>Email</span>
            <input type="email" name="email" placeholder="yourmail@mail.com"> 
        </div>

        <div class="input-box">
            <span>Mobile No.</span>
            <input type="tel" name="mobileNumber" placeholder="+380XX0000000"> 
        </div>

        <div class="input-box">
            <span>Password</span>
            <input type="password" name="password" placeholder="Enter password"> 
        </div>

        <div class="input-box">
            <span>Re-enter Password</span>
            <input type="password" name="rePassword" placeholder="Repeat password"> 
        </div>

        <div class="input-box">
            <span>home Number</span>
            <input type="tel" name="homeNumber" placeholder="+380XX0000000"> 
        </div>
`;

formRegister.insertAdjacentHTML("afterbegin", formInputsMarkup);


const btnSubmit = document.createElement('button');
btnSubmit.classList.add('button')
btnSubmit.type = 'submit';
btnSubmit.innerText = 'SUBMIT';

formRegister.addEventListener('submit', regBtnHandler)



formRegister.append(btnSubmit)



export {imgRegister, formRegister}