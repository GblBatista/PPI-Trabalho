document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById("search");
    searchBar.addEventListener('input', function () {
        filterTable(searchBar.value.toLowerCase());
    });

    function filterTable(searchText) {
        const table = document.getElementById("table");
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(function (row) {
            const name = row.getElementsByTagName('td')[0].textContent.toLowerCase();
            if (name.includes(searchText)) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        });
    }
});
