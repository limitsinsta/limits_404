document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Keep searchClips accessible globally
  window.searchClips = function () {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.custom-column');

    cards.forEach(card => {
      const title = card.querySelector('.custom-product-title').textContent.toLowerCase();
      card.style.display = title.includes(input) ? 'block' : 'none';
    });
  };
});
