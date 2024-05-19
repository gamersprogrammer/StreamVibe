document.getElementById('navbarIcon').addEventListener('click', function ()  {
    document.getElementById('hidden-content').classList.toggle('hidden-one')
});

const collapsibleBtns = document.querySelectorAll('.fa-plus');

collapsibleBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const parent = this.parentElement;
    const isActive = parent.classList.contains('content');

    // Close other active sections
    document.querySelectorAll('.ques').forEach(elem => {
      if (elem !== parent && elem.classList.contains('content')) {
        elem.classList.remove('content');
        const content = elem.querySelector('.contentText');
        content.style.display = 'none';
      }
    });
})
});
