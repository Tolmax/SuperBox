      // Код для управления слайдером
      var slider = document.querySelector('.slider');
      var images = slider.querySelectorAll('img');

      function next() {
        var active = images[images.length - 1];
        if (active.className === 'active') {
          active = images[0];
        } else {
          for (var i = 0; i < images.length; i++) {
            if (images[i].className === '') {
              active = images[i];
              break;
            }
          }
        }

        active.classList.add('active');
        images[0].classList.remove('active');
      }

      setInterval(next, 5000); // Переключает слайд каждые 5 секунд