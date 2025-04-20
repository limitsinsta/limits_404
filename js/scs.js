

    document.getElementById("current-year").textContent = new Date().getFullYear();



    function searchClips() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const cards = document.querySelectorAll('.custom-column');

      cards.forEach(card => {
        const title = card.querySelector('.custom-product-title').textContent.toLowerCase();
        card.style.display = title.includes(input) ? 'block' : 'none';
      });
    }

