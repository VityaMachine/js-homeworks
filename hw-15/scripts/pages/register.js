const imgUrl = "./src/images/register.png";

// creating register page markup
const imgRegister = document.createElement("img");
imgRegister.classList.add("page-image");
imgRegister.classList.add("register-image");
imgRegister.alt = "Login page logo";
imgRegister.src = imgUrl;


const formRegister = document.createElement("form");
formRegister.classList.add("form");

const formInputsMarkup = `
    <h3 class="form-title">Registration form</h3>

        <div class="input-box">
            <span>Name</span>
            <input type="text" name="name"> 
        </div>

        <div class="input-box">
            <span>Date Of Birth</span>
            <input type="date" name="birthdate"> 
        </div>

        <div class="input-box">
            <span>Father’s/Mother’s Name</span>
            <input type="text" name="parentsName"> 
        </div>

        <div class="input-box">
            <span>Email</span>
            <input type="email" name="parentsName"> 
        </div>

        <div class="input-box">
            <span>Mobile No.</span>
            <input type="tel" name="parentsName"> 
        </div>

        <div class="input-box">
            <span>Password</span>
            <input type="password" name="password"> 
        </div>

        <div class="input-box">
            <span>Re-enter Password</span>
            <input type="password" name="password"> 
        </div>

        <div class="input-box">
            <span>home Number</span>
            <input type="tel" name="parentsName"> 
        </div>
`;

formRegister.insertAdjacentHTML("afterbegin", formInputsMarkup);



const btnSubmit = document.createElement('button');
btnSubmit.classList.add('button')
btnSubmit.type = 'submit';
btnSubmit.innerText = 'SUBMIT';


formRegister.append(btnSubmit)



export {imgRegister, formRegister}