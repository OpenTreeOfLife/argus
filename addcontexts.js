//baseurl = "http://localhost:7474/";
baseurl = "http://opentree-dev.bio.ku.edu:7476/";

function addcontexts() {

    // format the query to get the list of contexts
    var method = "POST";
    var xobj = new XMLHttpRequest();
    var url = baseurl + "db/data/ext/TNRS/graphdb/getContextsJSON";
//    alert(url);

    // call rest service to get list
    xobj.open(method, url, false);
    xobj.setRequestHeader("Accept", "");
    xobj.setRequestHeader("Content-Type","application/json");
    xobj.send();

    // parse json response
    var jsonRespStr = xobj.responseText;
    var respData = JSON.parse(jsonRespStr);

//    alert(jsonRespStr);

    // add the dropdown menu
    var contextMenu = $("<select name='contextName'>contexts</select>");
    $("#nameSearch").append(contextMenu);
    contextMenu.append("<option value='All life'>Taxonomic context:</option>");

    // fill in the menu values
    for (var group in respData) {
        var prefix = "";
        var first = true;
        for (var context in respData[group]) {
            if (first) {
                first = false;
            } else {
                prefix = "&nbsp;&nbsp;&nbsp;&nbsp;";
            }

            // add context to menu
            var contextName = respData[group][context];
            contextMenu.append("<option value='"+contextName+"'>" + prefix + contextName + "</option>");
        }
    }

}
