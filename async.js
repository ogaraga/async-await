let email = document.getElementById("email"),
    nam = document.getElementById("textbox"),
    pass = document.getElementById("pass"),
    btn = document.getElementById("click"),
    span = document.querySelector("#lab");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    submitForm();
})
async function submitForm() {
    let promise = new Promise(function (res, err) {

        if (email.value !== "" && nam.value !== "" &&
            pass.value !== "") {
            setTimeout(() => {
                span.style.color = 'green';
                res("Form-submission");
                email.value = "";
                nam.value = "";
                pass.value = "";
                nam.style.border = '2px solid green';
                email.style.border = '2px solid green';
                pass.style.border = '2px solid green';
            }, 3000);
        }

        else {
            nam.style.border = '2px solid red';
            email.style.border = '2px solid red';
            pass.style.border = '2px solid red';
            err("Form-error in submission");
        }
    })
    let result = await promise;//wait until after 3 seconds to fulfil promise
    span.textContent = `${result} has been done and delivered!`;
}