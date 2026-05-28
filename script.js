document.querySelectorAll('.ball').forEach(ball => {
  ball.addEventListener('click', function() {
    alert('You clicked: ' + this.textContent);
  });
});