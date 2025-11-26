var heroSlideIndex = 1;
var heroCarouselTimer;

showHeroSlides(heroSlideIndex);
startHeroCarousel();

function heroCarouselNext() {
  showHeroSlides((heroSlideIndex += 1));
  resetHeroCarousel();
}

function heroCarouselPrev() {
  showHeroSlides((heroSlideIndex -= 1));
  resetHeroCarousel();
}

function heroCarouselGoTo(n) {
  showHeroSlides((heroSlideIndex = n));
  resetHeroCarousel();
}

function showHeroSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hero_slide");
  var indicators = document.getElementsByClassName("hero_indicator");

  if (n > slides.length) {
    heroSlideIndex = 1;
  }
  if (n < 1) {
    heroSlideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" w3-white", "");
  }

  slides[heroSlideIndex - 1].style.display = "block";
  indicators[heroSlideIndex - 1].className += " w3-white";
}

function startHeroCarousel() {
  heroCarouselTimer = setInterval(function () {
    showHeroSlides((heroSlideIndex += 1));
  }, 3000);
}

function resetHeroCarousel() {
  clearInterval(heroCarouselTimer);
  startHeroCarousel();
}

function showLouisvilleAccordion(evt, contentId) {
  var i, accordBtns, accordIndicators, accordContents;
  var activeContent = document.getElementById(contentId);
  var activeBtn = evt.currentTarget;
  var activeIndicator = activeBtn.firstElementChild;

  if (activeContent.className.indexOf("w3-show") == -1) {
    accordBtns = document.getElementsByClassName("louisville_accord_btn");
    for (i = 0; i < accordBtns.length; i++) {
      accordBtns[i].className = accordBtns[i].className.replace(
        "w3-teal",
        "w3-black"
      );
    }
    accordIndicators = document.getElementsByClassName(
      "louisville_accord_indicator"
    );
    for (i = 0; i < accordIndicators.length; i++) {
      accordIndicators[i].className = accordIndicators[i].className.replace(
        "fa-minus",
        "fa-plus"
      );
    }
    accordContents = document.getElementsByClassName(
      "louisville_accord_content"
    );
    for (i = 0; i < accordContents.length; i++) {
      accordContents[i].className = accordContents[i].className.replace(
        " w3-show",
        ""
      );
    }

    activeContent.className += " w3-show";
    activeBtn.className = activeBtn.className.replace("w3-black", "w3-teal");
    activeIndicator.className = activeIndicator.className.replace(
      "fa-plus",
      "fa-minus"
    );
  } else {
    activeContent.className = activeContent.className.replace(" w3-show", "");
    activeBtn.className = activeBtn.className.replace("w3-teal", "w3-black");
    activeIndicator.className = activeIndicator.className.replace(
      "fa-minus",
      "fa-plus"
    );
  }
}
