   // Function to redirect user to the country's study page
function redirectToCountryPage(country) {
    // Convert the country to lowercase to match the URL format
    const countryUrl = country.toLowerCase();

    // Redirect to the appropriate page for the selected country
window.location.href = `detail.html?country=${countryUrl}`;
}

document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);

    e.addEventListener("mouseover", function () {
        // Get the current country ID (e.g., "Afghanistan", "Switzerland")
        const countryId = e.id;

        // Highlight the country by changing its fill color
        e.style.fill = "lightgreen"; // Change the color to your desired hover color

        // Update tooltip with the country name and move it with the mouse
        window.onmousemove = function (j) {
            const x = j.clientX;
            const y = j.clientY;
            const tooltip = document.getElementById('name');

            // Get current scroll position and adjust the tooltip position relative to the viewport
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            // Position the tooltip closer to the mouse, adjusted for scrolling
            tooltip.style.top = y + 10 + scrollY + 'px';  // Add scroll offset
            tooltip.style.left = x + 10 + 'px';  // Slight offset to the right of the mouse
        }

        // Make the tooltip visible and set the country name
        document.getElementById("name").style.opacity = 1;
        document.getElementById("namep").innerText = countryId;  // Set the country name in the tooltip
    });

    e.addEventListener("mouseleave", function () {
        // Reset the country fill color when mouse leaves
        e.style.fill = "#ececec";  // Reset to default color (light gray)

        // Hide the tooltip when mouse leaves
        document.getElementById("name").style.opacity = 0;
    });

    // On click, redirect user to the study page for the clicked country
    e.addEventListener("click", function () {
        redirectToCountryPage(e.id);  // Uncomment if you have the function for redirection
    });
});