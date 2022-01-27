const width = document.getElementById('imgwidth');
const height = document.getElementById('imgheight');
const format = document.getElementById('imgformat');
const size = document.getElementById('imgfontsize');
const color = document.getElementById('imgcolor');
const background = document.getElementById('background');
const text = document.getElementById('imgtext');


const generator = document.getElementById('generator');
const placeholder = document.getElementById('tooloutput');

generator.addEventListener('click', () => {
    placeholder.innerHTML = `<img src="https://placehold.jp/${size.value}/${background.value}/${color.value}/${width.value}x${height.value}.${format.value}?text=${text.value}" style="max-width:100%">`
});
