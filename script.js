const div = document.querySelector('div');

setInterval(() => {
  const time = new Date();
  div.textContent = time.toLocaleTimeString('en-US', { hour12: true });
}, 1000);
