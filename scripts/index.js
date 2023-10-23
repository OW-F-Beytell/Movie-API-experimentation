$('#genres').on('click', '.btn', function(event) {
    // console.log("Hello World")

    if ($(this).hasClass('selectedFilter')) {
        $(this).removeClass('selectedFilter');
    }
    else {
        $(this).addClass('selectedFilter').siblings().removeClass('selectedFilter');

        activeFilter = $('.selectedEntry').val();
    }

    console.log(activeFilter);
    // $.ajax({
    //     type: "GET",
    //     // url: "https://api.themoviedb.org/3/movie/11?api_key=453832e297403c7f70c5984dbfa5ebc9",
    //     url: "https://api.themoviedb.org/3/discover/movie?api_key=453832e297403c7f70c5984dbfa5ebc9",
    //     success: function(data) {
    //         movieArrayResult = data;
    //     }
    // }).done(function(){
    //     console.log(movieArrayResult);
    // })
});
$(document).ready(function () {
    // console.log("Hello World")

    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/discover/movie?api_key=453832e297403c7f70c5984dbfa5ebc9",
        success: function(data) {
            movieArrayResult = data;
        }
    }).done(function(){
        loadArray(movieArrayResult.results);
    })
});

function loadArray(array) {
    console.log(movieArrayResult);
    for (let i = 0; i < array.length; i++) {
        currElement = array[i];
        $("#moviesBody").append($("#movie-entry").html());

        let currentChild = $("#moviesBody").children().eq(i);

        $(currentChild).find("#name").text(currElement.title);
        $(currentChild).find("#genre").text(currElement.release_date);
        $(currentChild).find("#release").text(currElement.release_date);
        $(currentChild).find("#score").text(currElement.vote_average);
        $(currentChild).find("#description").text(currElement.overview);
        $(currentChild).find("#poster").html('<div style="width: 100px; height: 133px; background-image : https://api.themoviedb.org/3/?api_key=453832e297403c7f70c5984dbfa5ebc9/NNxYkU70HPurnNCSiCjYAmacwm.jpg;"></div>');
    }
}