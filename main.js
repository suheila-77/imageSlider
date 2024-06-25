const images =[
    "https://img.freepik.com/premium-photo/view-sea-water-foam-beach-dramatic-sunset_611712-9.jpg?w=740",
    "https://img.freepik.com/premium-photo/sunset-sea-beautiful-mountains-clouds_115509-442.jpg?w=740",
    "https://img.freepik.com/free-photo/vertical-shot-beach-surrounded-by-sea-waves-cloudy-sky-beautiful-sunset_181624-61071.jpg?t=st=1719303998~exp=1719307598~hmac=aa70fe82cea082a3e3eed309e3a61f6375ded1af5e3273d7b70f092b466f7261&w=740",
    "https://img.freepik.com/free-photo/breathtaking-sunset-calm-ocean-surrounded-by-hills_181624-11355.jpg?t=st=1719304052~exp=1719307652~hmac=2203e12b2445f189f69e5de20c40cc169e234174780a8abd44d94e686111b990&w=740",
    "https://img.freepik.com/free-photo/beach-sunset_1204-72.jpg?t=st=1719304075~exp=1719307675~hmac=efe09ca3b25743408e85ac4a05f8f1cde0394a3bcec98d51a6313240d13b32f2&w=740",
    
]


let currentindex =0;

let nextBtn = document.querySelector("#next-button")
let prevBtn = document.querySelector("#prev-button")
let slider = document.querySelector("#slider-image")
 let p =  document.querySelector("#p")





nextBtn.addEventListener("click", function(){
    if(currentindex< images.length-1){
        slider.src = images[currentindex]
        currentindex++
    p.innerHTML= currentindex;
    }
     if( currentindex == images.length-1){
        p.innerHTML="dhamaad"
     }
    })

prevBtn.addEventListener("click", function(){
   if(currentindex>0){
       currentindex--
    slider.src = images[currentindex]
    p.innerHTML= currentindex;
   }

})



// var images = [
//     'image1.jpg',
//     'image2.jpg',
//     'image3.jpg',
//     'image4.jpg',
//     'image5.jpg'
//   ];
  
//   var currentIndex = 0;
  
//   var sliderImage = document.getElementById('slider-image');
//   var prevButton = document.getElementById('prev-button');
//   var nextButton = document.getElementById('next-button');
//   var indexDisplay = document.getElementById('index-display');
  
//   function showImage(index) {
//     sliderImage.src = images[index];
//     indexDisplay.textContent = (index + 1) + ' / ' + images.length;
//   }
  
//   prevButton.addEventListener('click', function() {
//     if (currentIndex > 0) {
//       currentIndex = currentIndex - 1;
//     } else {
//       currentIndex = images.length - 1;
//     }
//     showImage(currentIndex);
//   });
  
//   nextButton.addEventListener('click', function() {
//     if (currentIndex < images.length - 1) {
//       currentIndex = currentIndex + 1;
//     } else {
//       currentIndex = 0;
//     }
//     showImage(currentIndex);
//   });
  
//   // Initialize the slider with the first image
//   showImage(currentIndex);
  