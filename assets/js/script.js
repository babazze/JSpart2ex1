var img = document.getElementById('image0');
//img.addEventListener('Mouseover', changeImage); <- cette ligne ne sert pas car la function backImage est appaler avec l'attribut "onmouseover"
function changeImage()
{
  img.src="assets/img/dessin2.png"
}
//img.addEventListener('Mouseout', backImage); <- cette ligne ne sert pas car la function backImage est appaler avec l'attribut "onmouseout"
function backImage()
{
  img.src="assets/img/dessin1.png"
}
