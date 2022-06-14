let rockButtonEl = document.getElementById("rockButton");
let paperButtonEl = document.getElementById("paperButton");
let scissorButtonEl = document.getElementById("scissorButton");
let goButtonEl = document.getElementById("goButton");
let resetButtonEl = document.getElementById("resetButton");
let resultImgContainerEl = document.getElementById("resultImgContainer");
let resultEl = document.getElementById("result");
let rspMainContainerEl = document.getElementById("rspMainContainer");
let buttonContainerEl = document.getElementById("buttonContainer");
let rockImgEl = document.getElementById("rockImg");
let paperImgEl = document.getElementById("paperImg");
let scissorImgEl = document.getElementById("scissorImg");
let spinnerEl = document.getElementById("spinner");
let res2ContainerEl = document.getElementById("res2Container");
let user = document.getElementById("user");
let comp = document.getElementById("comp");
let inputValue = -1;

function onChooseRock() {
    paperImgEl.classList.add("d-none");
    scissorImgEl.classList.add("d-none");
    rockImgEl.classList.remove("d-none");
    goButtonEl.classList.remove('d-none');
    resultEl.textContent = "";
    buttonContainerEl.classList.add("d-none");
    inputValue = 0;

}

function onChoosePaper() {
    rockImgEl.classList.add("d-none");
    scissorImgEl.classList.add("d-none");
    paperImgEl.classList.remove("d-none");
    goButtonEl.classList.remove('d-none');
    resultEl.textContent = "";
    buttonContainerEl.classList.add("d-none");
    inputValue = 1;
}

function onChooseScissor() {
    rockImgEl.classList.add("d-none");
    paperImgEl.classList.add("d-none");
    scissorImgEl.classList.remove("d-none");
    goButtonEl.classList.remove('d-none');
    resultEl.textContent = "";
    buttonContainerEl.classList.add("d-none");
    inputValue = 2;
}

resultEl.style.color = "white";

function onGo() {

    spinnerEl.classList.remove("d-none");
    setTimeout(function() {
        let compInput = Math.floor(Math.random() * 3);
        if (inputValue === -1) {
            resultEl.textContent = "Please Choose Anyone !!!";
            resultEl.style.color = "pink";
        } else {
            rspMainContainerEl.removeChild(resultImgContainerEl);
            res2ContainerEl.classList.remove("d-none");

            if (inputValue === 0) {
                user.src = "https://res.cloudinary.com/df2kcpkgv/image/upload/v1654036509/rock_lqqgym.jpg";
            }
            if (inputValue === 1) {
                user.src = "https://res.cloudinary.com/df2kcpkgv/image/upload/v1654036508/paper_vtgrpx.png";
            }
            if (inputValue === 2) {
                user.src = "https://res.cloudinary.com/df2kcpkgv/image/upload/v1654036508/scissor_u4bvbp.png";
            }
            if (compInput === 0) {
                comp.src = "https://res.cloudinary.com/df2kcpkgv/image/upload/v1654036509/rock_lqqgym.jpg";
            }
            if (compInput === 1) {
                comp.src = "https://res.cloudinary.com/df2kcpkgv/image/upload/v1654036508/paper_vtgrpx.png";
            }
            if (compInput === 2) {
                comp.src = "https://res.cloudinary.com/df2kcpkgv/image/upload/v1654036508/scissor_u4bvbp.png";
            }

            if (inputValue === compInput) {
                resultEl.textContent = "Match Draw !!!";
                resultEl.style.color = "#FEE715FF";
                inputValue = -1;
            } else if ((inputValue === 0 && compInput === 2) || (inputValue === 1 && compInput === 0) || (inputValue === 2 && compInput === 1)) {
                resultEl.textContent = " Congratulations !!!";
                resultEl.style.color = "lightgreen";
                inputValue = -1;
            } else {
                resultEl.textContent = "Computer Wins !!!";
                resultEl.style.color = "maroon";
                inputValue = -1;
            }
            goButtonEl.classList.add('d-none');
            buttonContainerEl.classList.remove("d-none");

        }
        spinnerEl.classList.add("d-none");
        buttonContainerEl.classList.add("d-none");
    }, 1000);



}

function onReset() {
    rockImgEl.classList.remove("d-none");
    paperImgEl.classList.remove("d-none");
    scissorImgEl.classList.remove("d-none");
    rspMainContainerEl.appendChild(resultImgContainerEl);
    res2ContainerEl.classList.add("d-none");
    buttonContainerEl.classList.remove("d-none");
    goButtonEl.classList.add('d-none');
    inputValue = -1;
    resultEl.textContent = "Choose One !!!";
    resultEl.style.color = "white";



}