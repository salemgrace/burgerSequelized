// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");

        var eatBurger = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});