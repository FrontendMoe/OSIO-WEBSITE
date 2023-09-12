function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId)
    if (section) {
      var sectionTop = section.offsetTop
      window.scrollTo({
        top: sectionTop - 50,
        behavior: 'smooth',
      })
    }
}
export {scrollToSection}