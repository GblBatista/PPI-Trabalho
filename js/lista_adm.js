document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search');
    searchBar.addEventListener('input', function () {
        filterTable(searchBar.value.toLowerCase());
    });

    function filterTable(searchText) {
        const rows = document.querySelectorAll('.accordion-item');

        rows.forEach(function (row) {
            const name = row.querySelector('.name').textContent.toLowerCase();
            if (name.includes(searchText)) {
                row.style.display = 'block';
            } else {
                row.style.display = 'none';
            }
        });
    }
});
