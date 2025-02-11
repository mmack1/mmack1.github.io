document.addEventListener('DOMContentLoaded', function() {
    const infoCards = document.querySelectorAll(".info-card");
    let open = false;  // Start with open being false
    let needToOpen = true;
    const filterButtons = document.querySelectorAll('.filter-btn');
    /* const projectItems = document.querySelectorAll('.project-item'); */
    const seeMore = document.querySelectorAll('.see-more-btn');


    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            infoCards.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

 
    infoCards.forEach(item => {
        item.addEventListener('mouseenter', () => {
           
            item.classList.add('hovered'); 
        });
        item.addEventListener('mouseleave', () => {
            // Remove the class when the hover ends
            item.classList.remove('hovered');
        });
    });
    
    // Initially hide the exit and info elements
    infoCards.forEach(card => {
        const exitButton = card.querySelector(".exit");
        if (exitButton) exitButton.style.display = "none"; // hide the exit button initially
    });


    // Set up event listeners for each card
    infoCards.forEach(card => {
        card.addEventListener("click", function() {
            const exitButton = card.querySelector(".exit");
            const info = card.querySelector(".info");
            const begin = card.querySelector(".begin");

            if (needToOpen) {
                console.log("if");
                open = true;
                needToOpen = false;
                // Remove 'full' class from siblings
                const siblings = Array.from(card.parentElement.children).filter(child => child !== card);

                siblings.forEach(sibling => {
                    sibling.classList.remove("full");
                    sibling.classList.add("side");
                    sibling.style.display = "none";  // Set display to 'block' for side cards
                });

                // Add 'full' class to the clicked project item
                card.classList.add("full");

                // Remove 'side' class from clicked item and add to siblings
                card.classList.remove("side");

                // Show the 'exit' button and the '.info' element
                if (exitButton) exitButton.style.display = "inline";
                if (info) info.style.display = "block";
                if (begin) begin.style.display = "none";

                  // Toggle the open state to false after opening
            } else {
                console.log("else");
                open = false;
                needToOpen = true;
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
                if (begin) begin.style.display = "block";
            }
        });
    });
});

    
 
