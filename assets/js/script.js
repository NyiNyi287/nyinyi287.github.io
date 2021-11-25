
$(document).ready(function () {
    $(".icon2").on("click", function () {
        $.ajax({
            url: "insert.php",
            method: "POST",
            data: {
                sender_id: $('#sender_id').val(),
                toUser_id: $('#toUser_id').val(),
                message: $('#message').val()
            },
            dataType: "text",
            success: function (data) {
                $('#message').val("")
            }
        });
    });
    setInterval(function () {
        $.ajax({
            url: "post.php",
            method: "POST",
            data: {
                sender_id: $('#sender_id').val(),
                toUser_id: $('#toUser_id').val(),
            },
            dataType: "text",
            success: function (data) {

                $("#messageBody").html(data);
                $("#messageBody").scrollTop($("#messageBody")[0].scrollHeight);
            }
        });
    }, 700);










})


// const search = document.querySelector(".search-buttom");
// const search_input = document.querySelector(".search-value");
// const search_value = search_input.value;

// function showUser() {
//     console.log("hello");
//     //     var xmlhttp = new XMLHttpRequest();
//     //         xmlhttp.onreadystatechange = function() {
//     //         if (this.readyState == 4 && this.status == 200) {
//     //             document.querySelector(".body").innerHTML = this.responseText;
//     //         };
//     //         };
//     //         xmlhttp.open("GET", "search.php?q=" + str, true);
//     //         console.log(str);
//     //         xmlhttp.send();
//     //    

//     search.addEventListener("click", function () { alert("Hello World!"); });

// };
