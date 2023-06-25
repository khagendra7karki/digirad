var audioElement = $('#audio-player');
var audioTitle = $('#audio-title');
$( document ).ready( () =>{
    var audioTracks;
    $.ajax({
        url: 'audio.xml',
        dataType : 'xml',
        success: ( xml) =>{
            audioTracks = $(xml).find( 'track')
            loadTrack( audioTracks)
        },

        error: ( err ) =>{
            console.log( 'Errror loading XML file' + err )

        }

    })
})

function loadTrack( audioTracks ){
    var url = $( audioTracks ).find('url').text();
    var title = $( audioTracks ).find('title').text();
    audioTitle.text( title );
    audioElement.attr('src', url);
}
function getCurrentRadioShow() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    if (currentHour >= 0 && currentHour <= 5) {
        return "The early shift";
    } else if (currentHour >= 5 && currentHour <= 7) {
        return "Sunrise show";
    } else if (currentHour >= 7 && currentHour <= 10) {
        return "Breakfast show";
    } else if (currentHour >= 10 && currentHour <= 12) {
        return "Coffee club";
    } else if (currentHour >= 12 && currentHour <= 15) {
        return "Midday music";
    } else if (currentHour >= 15 && currentHour <= 18) {
        return "Drive by show";
    } else if (currentHour >= 18 && currentHour <= 19) {
        return "News hour";
    } else if (currentHour >= 19 && currentHour <=20) {
        return "Sports hour";
    } else if (currentHour >= 20 && currentHour <= 22) {
        return "The wind down";
    } else {
        return "Night sounds";
    }
}

window.onload = function() {
    var showElement = document.getElementById("currentShow");
    var currentShow = getCurrentRadioShow();
    showElement.innerHTML = currentShow;
};

