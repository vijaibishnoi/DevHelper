document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");
  
   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 
   ripple.style.animation = `ripple-effect .4s  linear`;
   ripple.onanimationend = () => {
     document.body.removeChild(ripple);
     
   }
  
}


const all = document.body.getElementsByTagName("*");
for (var i = 0;  i < all.length; ++i) {
  all[i].onclick = (event) => event.stopPropagation();
}

const style = document.createElement("style");
style.innerText = ".ripple { width: 10px; height: 10px; background-color: transparent; position: fixed; border-radius: 50%; border: 1px solid #ffffff59; } @keyframes ripple-effect { to { transform:scale(15); opacity: 0.01; } }";

document.body.appendChild(style);
