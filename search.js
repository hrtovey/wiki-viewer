var searchWiki = function() {
    var inputSearch = $("#search-input");
    var submitSearch = $("#submit-search");
    var searchResults = $("#search-results");
    var searchAPIUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&namespace=0&format=json&search=";

    submitSearch.click(function() {
        searchResults.empty();
        if(typeof inputSearch !== "undefined") {
            var searchURL = searchAPIUrl + inputSearch.val() + "&callback=?";
            var list = $("<ul>", {
                "class" : "results-list"
            }).appendTo(searchResults);

            $.getJSON(searchURL, function(data) {
                for (i=0;i<data[1].length;i++) {
                    var link = $("<a>", {
                        "href" : data[3][i]
                    }).appendTo(list);

                    var item = $("<li>", {
                        "class" : "search-item"
                    }).appendTo(link);

                    $("<h2>", {
                        "text" : data[1][i]
                    }).appendTo(item);

                    $("<p>", {
                        "text" : data[2][i]
                    }).appendTo(item);

                }
            })
        }
    });
}



$(document).ready(function() {
    searchWiki();
});