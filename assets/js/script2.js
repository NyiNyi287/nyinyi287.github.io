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
