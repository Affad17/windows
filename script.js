document.addEventListener("DOMContentLoaded", function() {
    const aboutLinkHeader = document.getElementById('about-link-header');
    const aboutLinkNav = document.getElementById('about-link-nav');
    const aboutDescription = document.getElementById('about-description');

    // Tambahkan event listener untuk tautan "Tentang Kami" di header
    aboutLinkHeader.addEventListener('click', function(event) {
        event.preventDefault();
        toggleAboutDescription();
        scrollToTop();
    });

    // Tambahkan event listener untuk tautan "Tentang Kami" di navigasi
    aboutLinkNav.addEventListener('click', function(event) {
        event.preventDefault();
        toggleAboutDescription();
        scrollToTop();
    });

    function toggleAboutDescription() {
        // Periksa apakah deskripsi sudah ditampilkan atau tidak
        if (aboutDescription.style.display === 'none') {
            // Jika belum ditampilkan, tampilkan deskripsi
            aboutDescription.style.display = 'block';
        } else {
            // Jika sudah ditampilkan, sembunyikan deskripsi
            aboutDescription.style.display = 'none';
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});
