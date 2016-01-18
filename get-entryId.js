kWidget.addReadyCallback( function( playerId ){
    kdp = document.getElementById( playerId );
    kdp.kBind( "doPlay.test", function(){ //notice the .test postfix namespaces the event)
        var entry_id = kdp.evaluate('{mediaProxy.entry.id}');
        console.log(entry_id);
        kdp.kUnbind('.test')
    });
});