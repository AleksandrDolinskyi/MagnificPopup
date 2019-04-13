$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true 
});

$('button').magnificPopup({
  items: {
      src: '<div class="white-popup">Dynamically created popup</div>',
      type: 'inline'
  },
  closeBtnInside: true
});