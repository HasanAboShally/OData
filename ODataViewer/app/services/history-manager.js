
app.service("HistoryManager", function () {

    var demoLinks = [
        "http://google.com/odata.svc",
        "http://yahoo.com/odata.svc",
        "http://ynet.co.il/odata.svc",
        "http://linkedin.com/odata.svc",
    ];

    function getLinks() {
        return demoLinks;
    }

    return {
        getLinks: getLinks
    }
});