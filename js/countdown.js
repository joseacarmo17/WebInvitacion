const weddingDate = new Date("2027-05-15T12:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  document.getElementById("days").innerHTML =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerHTML =
    Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").innerHTML =
    Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("seconds").innerHTML =
    Math.floor((distance / 1000) % 60);
}, 1000);
