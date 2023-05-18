function updateCounterValue() {
    const counterValueSpan = document.getElementById('counterValue');
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter) {
      const counter = parseInt(savedCounter);
      counterValueSpan.textContent = counter;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('press');
  
    button.addEventListener('click', function() {
      let counter = parseInt(localStorage.getItem('counter')) || 0;
      counter += 1;
      localStorage.setItem('counter', counter);
    });
  
    updateCounterValue();
  }
  )
  /*function resetCounter() {
    localStorage.setItem('counter', '0');
    updateCounterValue();
  }
  resetCounter()
  */
;
  