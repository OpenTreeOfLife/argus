// the location of the TNRS query service
//url = "http://localhost:7474/db/data/ext/TNRS/graphdb/doTNRSForNames";
url = "http://opentree-dev.bio.ku.edu:7474/db/data/ext/TNRS/graphdb/doTNRSForTrees"; // need to validate this address

function loadTreeData(form) {

    var treeStr = form.treeString.value;
    var jsonQueryString = '{"treeString":"' + treeStr + '"}';
    var method = "POST";
    var xobj = new XMLHttpRequest();

/*
    // call tnrs to get results
    xobj.open(method, url, false);
    xobj.setRequestHeader("Accept", "");
    xobj.setRequestHeader("Content-Type","application/json");
    xobj.send(jsonquerystring);

    // parse json response
    var jsonRespStr = xobj.responseText;
    var respData = JSON.parse(jsonRespStr); */
    
    // TEMP
    var respData = jsonQueryString;

    // make the form that holds the tnrs results
    makeTreeForm(respData);

}

function makeTreeForm(respData) {

    alert(respData);

/*    // necessary wrapper: wait for page to load
    $(document).ready( function(){

        // create the form; results are organized in unordered lists
        var results = $("<ul class='results'></ul>");
        $("body").append(results);

        // for each queried name
        for(var i = 0; i < respData.results.length; i++) {

            // get the name itself
            var queriedName = respData.results[i].queried_name;
            var nameResultIdString = "taxEntry" + i;

            // create a sublist to hold matches to this name
            $(results).append("<li class='label'> results for '" + queriedName + "'</li>")
            var nameResult = $("<ul></ul>");
            $(results).append(nameResult);

            // print all matches to the sublist
            var matches = respData.results[i].matches;
            for (var j = 0; j < matches.length; j++) {
                var thisMatch = matches[j];
                //alert(thisMatch.matchedNodeName);

                var thisMatchResult = $("<li></li>");

                var matchForm = $("<form method='LINK' action='browser.html'></form>").append("<input type='hidden' name='domsource' value='ottol' />").append("<input type='hidden' name='nodeid' value='"+thisMatch.matchedNodeId+"' />").append("<input type='submit' value='View'>");
                
                thisMatchResult.append(matchForm).append("<span class='matchname'>"+thisMatch.matchedNodeName+"</span>").append("<span>"+thisMatch.nomenCode+"</span>").append("<span>"+roundDecimal(thisMatch.score,3)+"</span>");

                $(nameResult).append(thisMatchResult);
                
                // highlight odd match rows
                if (j % 2 == 0)
                    thisMatchResult.attr("class","highlight");
            }
        }

        if (respData.results.length == 0) {
            $(results).append("<li class='label'>No results found for: " + queriedName + "</li>")
        }

    }); */
}
