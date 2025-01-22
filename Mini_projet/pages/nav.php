<header>
<script>
        let currentZoom = 1.0; // Initial zoom level (100%)

        // Zoom Out Function
        function zoomOutPage() {
            currentZoom -= 0.1; // Decrease zoom by 10%
            if (currentZoom < 0.5) currentZoom = 0.5; // Minimum zoom level (50%)
            applyZoom();
        }

        // Zoom In Function
        function zoomInPage() {
            currentZoom += 0.1; // Increase zoom by 10%
            if (currentZoom > 2.0) currentZoom = 2.0; // Maximum zoom level (200%)
            applyZoom();
        }

        // Reset Zoom Function
        function resetZoom() {
            currentZoom = 1.0; // Reset to 100%
            applyZoom();
        }

        // Apply Zoom Effect
        function applyZoom() {
            document.body.style.transform = `scale(${currentZoom})`; // Scale the entire page
            document.body.style.transformOrigin = "top left"; // Set scaling origin
        }
    </script>
    <div class="zoom">
        <a class="zoom" href="#" onclick="zoomInPage()">Zoom In</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="zoom" href="#" onclick="zoomOutPage()">Zoom Out</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="zoom" href="#" onclick="resetZoom()">Reset Zoom</a>
    </div>


<h1>Bienvenue à mon site de Formule 1</h1>

    <div class="navi">
        <a class="navi" href="homepage.php">Home Page</a>
        <a class="navi" href="cal_2025.php">Calendrier 2025</a>
        <a class="navi" href="pilotes.php">Pilotes</a>
        <a class="navi" href="equipe.php">Équipes</a>
        <a class="navi" href="technologies.php">Technologies</a>
        <a class="navi" href="femmes_en_F1.php">Les femmes en F1</a>
    </div>
</header>