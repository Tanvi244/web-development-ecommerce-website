
const menu=document.queryselector('#menubar');
let navbar=document.queryselector('.navbar');

menu.onclick=()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');

}
let slides=document.queryselectorAll('.slide.container');
let index= 0;

function next()
{
	slides[index].classList.remove('active');
	index=(index+1) % slides.length;
	slides[index].classList.add('active')
}
function prev()
{
	slides[index].classList.remove('active');
	index=(index-1 + slide.length) % slides.length;
	slides[index].classList.add('active')
}

document.queryselectorAll('.Features-image-1').forEach(image_1 =>{
     image_1.addEventListener('click', () =>{
     	var src = image_1.getAttribute('src');
        document.queryselector('.big-image-1').src  = src;
    });
  });

document.queryselectorAll('.Features-image-2').forEach(image_2 =>{
     image_2.addEventListener('click', () =>{
     	var src = image_2.getAttribute('src');
        document.queryselector('.big-image-2').src  = src;
    });
  });

document.queryselectorAll('.Features-image-3').forEach(image_3 =>{
     image_3.addEventListener('click', () =>{
     	var src = image_3.getAttribute('src');
        document.queryselector('.big-image-1').src  = src;
    });
  });
  
