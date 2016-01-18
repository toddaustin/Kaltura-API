kWidget.addReadyCallback(function(playerId) {
    window.kdp = $('#' + playerId).get(0);
    kdp.kBind('playlistReady', function() {
        myPlaylist = kdp.evaluate("{playlistAPI.dataProvider}");
    });

    var array = ["playlistFirstEntry","playlistMiddleEntry","playlistLastEntry"];
    for(var i = 0; i < 3; i++) {
        kdp.kBind(array[i], function() {
            var myIndex = kdp.evaluate("{playlistAPI.dataProvider.selectedIndex}");
            var entry_Id = myPlaylist.content[myIndex].entryId
            console.log(entry_id);
        });  
    }
});