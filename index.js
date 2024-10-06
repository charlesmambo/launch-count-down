// Set the countdown date (adjust this to your desired end date)
const countdownDate = new Date().getTime() + 8 * 24 * 60 * 60 * 1000;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    // If the countdown is over, display zeros
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    return;
  }

  // Calculate days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
  document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;
};

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
