document.getElementById('search-button').addEventListener('click', function() {
    let query = document.getElementById('search-box').value.toLowerCase();
    let elements = document.querySelectorAll('.searchable');

    elements.forEach(function(element) {
        if (element.textContent.toLowerCase().includes(query)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});