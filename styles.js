var showModalButton = document.getElementById("showModal");
        var modal = document.getElementById("myModal");
        var closeModalButton = document.getElementById("closeModal");

        showModalButton.addEventListener("click", function() {
            modal.style.display = "block";
        });

        closeModalButton.addEventListener("click", function() {
            modal.style.display = "none";
        });
