<<<<<<< HEAD
$("#search-button").on("click", function () {



    $.ajax({
        url: "search.php",
        method: "POST",
        data: {
            search_value: $("#search_value").val()
        },
        dataType: "text",
        success: function (data) {
            $('.search_value').val("");
            $('.body').html(data)
        }
    });
})
=======
$("#search-button").on("click", function () {



    $.ajax({
        url: "search.php",
        method: "POST",
        data: {
            search_value: $("#search_value").val()
        },
        dataType: "text",
        success: function (data) {
            $('.search_value').val("");
            $('.body').html(data)
        }
    });
})
>>>>>>> 2a53df39bbca5c60b5f3e5e78f19cb2f54830d65
