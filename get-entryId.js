kWidget.addReadyCallback( function( playerId ){
    kdp = document.getElementById( playerId );
   
    function getName() {    
        var entry_id = kdp.evaluate('{mediaProxy.entry.id}');
        console.log(entry_id);
    }

    kdp.kBind( "doPlay.test", function(){ //notice the .test postfix namespaces the event)
        getName();
        kdp.kUnbind('.test')
        });
});