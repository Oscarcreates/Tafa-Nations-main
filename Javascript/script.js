
const hamburgerMenu = document.querySelector(".hamburger")
hamburgerMenu.addEventListener("click", showSidebar)
function showSidebar(e) {
  e.preventDefault();
  console.log("cliked")
  const sidebar = document.querySelector('.side-bar')
  sidebar.style.display = 'flex'
}

const close = document.querySelector('.closing')
console.log(close)
close.addEventListener('click', hideSidebar)
function hideSidebar(e) {
  e.preventDefault();
  const sidebar = document.querySelector('.side-bar')
  sidebar.style.display = 'none'
}


// const displayComedian = document.querySelector(".comedian")
// const displayContainer = document.querySelector(".comedian-display")

// displayComedian.addEventListener("click", showContent)
// function showContent () {

//   if( displayContainer.style.display === 'none'){
//     displayContainer.style.display = 'flex'
//   } else{
//     return "default"
//   }
// }

// const displaydj = document.querySelector(".dj")
// const displayContainer1 = document.querySelector(".dj-display")

// displaydj.addEventListener("click", showContent)
// function showContent () {

//   if( displayContainer1.style.display === 'none'){
//     displayContainer1.style.display = 'flex'
//   } else{
//     displayContainer1.style.display = 'none'
//   }
// }


const tabButtons = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn)=> {
  btn.addEventListener('click', ()=>{
    const targetId = btn.getAttribute('data-id');

    tabButtons.forEach((btn)=> btn.classList.remove("active"))
     tabContent.forEach((content)=> {
      content.classList.remove("active")
      if(content.id === targetId){
        content.classList.add('active')
      }
     })


  })
})


        emailjs.init("TKXCjE4l9JyeQwwCe");

document.getElementById("feature-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_0uz0luv", "template_2ce95yx", this)
  formData.portfolio = 'https://drive.google.com/drive/folders/1nqmW8MTeMAwSWbb7Cx1htGTX_o1iC9bE'

    .then(() => {
      alert("Form submitted successfully!");
    }, (error) => {
      alert("Failed to send form. Please try again.");
      console.log(error);
    });
});
























// // const hamburgerMenu = document.querySelector(".hamburger")
// // const sidebar = document.querySelector('.side-bar')
// // const closing = document.querySelector('.close-icon')

// // hamburgerMenu.addEventListener("click", (e) => {
// // sidebar.style.display ="flex"
  
// //   })

// //   closing.addEventListener("click", (e) =>{
// //    sidebar.style.display ="none"
  
// //   })

