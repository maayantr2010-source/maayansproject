let p = document.querySelector('#py')
let h = document.querySelector("main h2")
let text = p ? p.textContent : "";

function myfunc(){
    if (p.style.display === "none"){
        p.style.display = "block";
    }
    else{
        p.style.display = "none";
    }
}

function changecontent(){
    h.textContent = "Hello!";
}

function detect(){
    p.style.textDecoration = "underline";
    p.textContent = "new text";
}

function two(){
    p.style.textDecoration = "none";
    p.textContent = text;
}

function changeColor(color) {
    p.style.color = color;
}

const submitBtn = document.querySelector("#submitBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", async function () {
        const username = document.querySelector("#username").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const message = document.querySelector("#message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("כתובת אימייל לא חוקית");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, phone, message}),
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            alert("שגיאה בשליחת הטופס. ודא שהשרת פועל.");
            console.error(error);
        }
    });
}
