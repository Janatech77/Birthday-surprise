function goToGallery() {
    window.location.href = "gallery.html";
}

function showSection(type) {
    const content = document.getElementById("content-area");

    if (type === "child") {
        content.innerHTML = `
            <h2>Childhood Memories 🧸</h2>
            <video controls>
                <source src="childhood.mp4" type="video/mp4">
            </video>
        `;
    }

    else if (type === "dance") {
        content.innerHTML = `
            <h2>Dance Moments 💃</h2>
            <video controls>
                <source src="Dance.mp4" type="video/mp4">
            </video>
        `;
    }

    else if (type === "art") {
        content.innerHTML = `
            <h2>Creative Art 🎨</h2>
            <video controls>
                <source src="art.mp4" type="video/mp4">
            </video>
        `;
    }

    else if (type === "family") {
        content.innerHTML = `
            <h2>Family ❤️</h2>
            <video controls>
                <source src="Fam.mp4" type="video/mp4">
            </video>
        `;
    }

    else if (type === "fun") {
        content.innerHTML = `
            <h2>Fun Time 😆</h2>
            <video controls>
                <source src="Fun.mp4" type="video/mp4">
            </video>
        `;
    }
}

// special page
function goToSpecial() {
    window.location.href = "special.html";
}

function goBack() {
    window.location.href = "gallery.html";
}

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoomed");
    });
});


