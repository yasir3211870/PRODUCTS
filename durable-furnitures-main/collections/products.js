(function() {
  const searchBar = document.getElementById('searchBar');
  const searchBtn = document.getElementById('searchBtn');
  const clearBtn = document.getElementById('clearBtn');
  const productCols = document.querySelectorAll('#productsRow .product-col');
  let noResults = document.getElementById('noResults');

  if (!noResults) {
    noResults = document.createElement('div');
    noResults.id = 'noResults';
    noResults.className = 'no-results mt-4';
    noResults.style.display = 'none';
    noResults.style.textAlign = 'center';
    noResults.textContent = 'No products found.';
    document.getElementById('productsRow').parentNode.appendChild(noResults);
  }

  function normalize(str) { return (str||'').toLowerCase().trim(); }

  function filterProducts() {
    const query = normalize(searchBar.value);
    let anyVisible = false;

    productCols.forEach(col => {
      const dataName = normalize(col.dataset.name);
      const titleText = normalize(col.querySelector('.product-title').textContent);
      const hay = dataName || titleText;

      if(query === '' || hay.includes(query)) {
        col.style.display = '';
        anyVisible = true;

        const card = col.querySelector('.product-card');
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        col.style.display = 'none';
      }
    });

    noResults.style.display = anyVisible ? 'none' : 'block';
  }

  searchBar.addEventListener('input', filterProducts);
  if(searchBtn) searchBtn.addEventListener('click', e => { e.preventDefault(); filterProducts(); });
  if(clearBtn) clearBtn.addEventListener('click', () => { searchBar.value=''; filterProducts(); searchBar.focus(); });
  const searchForm = document.getElementById('searchForm');
  if(searchForm) searchForm.addEventListener('submit', e => { e.preventDefault(); filterProducts(); });

  // Animate cards on initial load
  window.addEventListener('load', () => {
    productCols.forEach((col,i)=>{
      const card = col.querySelector('.product-card');
      card.style.opacity=0;
      card.style.transform='translateY(20px)';
      setTimeout(()=>{ card.style.transition='opacity 0.4s ease, transform 0.4s ease'; card.style.opacity=1; card.style.transform='translateY(0)'; }, i*80);
    });
  });

  filterProducts();
})();