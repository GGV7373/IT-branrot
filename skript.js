document.addEventListener("DOMContentLoaded", function () {
    const searchForms = document.querySelectorAll('search form');
    searchForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Nice try! But the search feature is as real as AI consciousness. 😜");
        });
    });
});
