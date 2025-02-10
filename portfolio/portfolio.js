document.addEventListener('DOMContentLoaded', function() {
    const infoCards = document.querySelectorAll(".info-card");
    let open = false;  // Start with open being false

    // Initially hide the exit and info elements
    infoCards.forEach(card => {
        const exitButton = card.querySelector(".exit");
        if (exitButton) exitButton.style.display = "none"; // hide the exit button initially
    });

    const info = document.querySelector(".info");
    if (info) info.style.display = "none"; // hide the .info initially

    // Set up event listeners for each card
    infoCards.forEach(card => {
        card.addEventListener("click", function() {
            const exitButton = card.querySelector(".exit");

            if (open) {
                // Remove 'full' class from siblings
                const siblings = Array.from(card.parentElement.children).filter(child => child !== card);
                siblings.forEach(sibling => sibling.classList.remove("full"));

                // Add 'full' class to the clicked project item
                card.classList.add("full");

                // Remove 'side' class from clicked item and add to siblings
                card.classList.remove("side");
                siblings.forEach(sibling => sibling.classList.add("side"));

                // Show the 'exit' button and the '.info' element
                if (exitButton) exitButton.style.display = "inline";
                if (info) info.style.display = "block";

                open = false;  // Toggle the open state to false after opening
            } else {
                // Remove 'full' and 'side' class from the clicked item
                card.classList.remove("full");
                card.classList.remove("side");

                // Set display to 'block' for all sibling cards with class 'side'
                const siblings = Array.from(card.parentElement.children).filter(child => child !== card);
                siblings.forEach(sibling => {
                    sibling.classList.remove("full");
                    sibling.classList.add("side");
                    sibling.style.display = "block";  // Set display to 'block' for side cards
                });

                // Hide the 'exit' button and the '.info' element
                if (exitButton) exitButton.style.display = "none";
                if (info) info.style.display = "none";

                open = true;  // Toggle the open state to true after closing
            }
        });
    });
});

 