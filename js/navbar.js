document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
  
    openBtn.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        sidebar.style.left = '0';
      } else {
        sidebar.style.left = '0';
        document.querySelector('.main-content').style.marginLeft = '250px';
      }
    });
  
    closeBtn.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        sidebar.style.left = '-100%';
      } else {
        sidebar.style.left = '-250px';
        document.querySelector('.main-content').style.marginLeft = '0';
      }
    });
  });
  /*-------------popup-----------------*/
  
// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}
// rating
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})