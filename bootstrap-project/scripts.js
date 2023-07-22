// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


let containerA = new ProgressBar.Circle(circleA, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0b7b9e', width: 1 },
  to: { color: '#035b7a', width: 2 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});


let containerB = new ProgressBar.Circle(circleB, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0b7b9e', width: 1 },
  to: { color: '#035b7a', width: 2 },
  // Set default step function for all animate calls
  step: function (state, circle2) {
    circle2.path.setAttribute('stroke', state.color);
    circle2.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle2.value() * 100);
    if (value === 0) {
      circle2.setText('');
    } else {
      circle2.setText(value);
    }

  }
});




let containerC = new ProgressBar.Circle(circleC, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0b7b9e', width: 1 },
  to: { color: '#035b7a', width: 2 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
//bar.text.style.fontFamily = 'Helvetica, sans-serif';


let containerD = new ProgressBar.Circle(circleD, {
  color: '#fff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0b7b9e', width: 1 },
  to: { color: '#035b7a', width: 2 },
  // Set default step function for all animate calls
  step: function (state, circle4) {
    circle4.path.setAttribute('stroke', state.color);
    circle4.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle4.value() * 100);
    if (value === 0) {
      circle4.setText('');
    } else {
      circle4.setText(value);
    }

  }
});


    containerA.text.style.fontFamily = '"Merriweather","Raleway", Helvetica, sans-serif';
    containerA.text.style.fontSize = '2rem';
    containerB.text.style.fontFamily = '"Merriweather","Raleway", Helvetica, sans-serif';
    containerB.text.style.fontSize = '2rem';
    containerC.text.style.fontFamily = '"Merriweather","Raleway", Helvetica, sans-serif';
    containerC.text.style.fontSize = '2rem';
    containerD.text.style.fontFamily = '"Merriweather","Raleway", Helvetica, sans-serif';
    containerD.text.style.fontSize = '2rem';
    containerA.animate(1.0);  // Number from 0.0 to 1.0
    containerB.animate(1.0);  // Number from 0.0 to 1.0
    containerC.animate(1.0);  // Number from 0.0 to 1.0
    containerD.animate(1.0);  // Number from 0.0 to 1.0





// Parallax
$('#data-area').parallax({ imageSrc: 'assents/img/cidadeparallax.png' })
$('#apply-content').parallax({ imageSrc: 'assents/img/pattern.png' })