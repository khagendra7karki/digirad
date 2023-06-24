var audioElement = $('#audio-player');
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
    // var title = $( audioTracks ).find('title').text();   
    audioElement.attr('src', url);
    audioElement.load() 
}