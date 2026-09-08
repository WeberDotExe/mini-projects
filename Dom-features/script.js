// 1. feature of changing bacground color inside the rectangle

var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function (dets) {
  var rectangleco = rect.getBoundingClientRect();
  var insiderectangle = Math.floor(dets.clientX - rectangleco.left);

  if (insiderectangle < rectangleco.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,
      rectangleco.width / 2,
      255,
      0,
      insiderectangle
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    var greencolor = gsap.utils.mapRange(
      rectangleco.width / 2,
      rectangleco.width,
      0,
      255,
      insiderectangle
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,${greencolor},0)`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "#333",
  });
});


// 2. feature of image hovering inside the div

var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
  val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity = 1
  })
  val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity = 0
  })
  val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left = dets.x+"px"
  })
})

// instagram story feature

var arr = [
  {
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",

    story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    story:"https://images.unsplash.com/photo-1715833027976-7183e02993da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",

    story:"https://images.unsplash.com/photo-1715937524587-1ef54d432e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fHw%3D"
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1664298006486-726e73592bf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5mdCUyMGJlYXJ8ZW58MHx8MHx8fDA%3D",

    story:"https://plus.unsplash.com/premium_photo-1674507267058-490bb10989dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D"
  },
  {
    dp: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",

    story:"https://images.unsplash.com/photo-1716222165023-b907904d7920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
  }
]

var clutter = "";
arr.forEach(function(elem,idx){
  clutter += `   <div id="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});

document.querySelector("#stories").innerHTML = clutter;

var stories = document.querySelector("#stories");
var fullScreen = document.querySelector("#fullScreen");

stories.addEventListener("click",function(dets){
  fullScreen.style.display = "block"
  fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function(){
  fullScreen.style.display = "none"
  },3000)
})
