
app.service("MetaDataManager", function () {

    var _json = [
     { "type": "entity", "name": "Contacts", "description": "dfh", "iconSource": "database-icon.png", "order": "" },
     { "type": "entity", "name": "Products", "description": "fgdfgfdg", "iconSource": "database-icon.png", "order": "" },
     { "type": "entity", "name": "Customers", "description": "rergfdsvd", "iconSource": "database-icon.png", "order": "" },
     { "type": "entity", "name": "Bills", "description": "xcvcxver", "iconSource": "database-icon.png", "order": "" },
     { "type": "entity", "name": "Data", "description": "cvrghreh", "iconSource": "database-icon.png", "order": "" },
     { "type": "entity", "name": "Customers", "description": "eFefrgrg", "iconSource": "database-icon.png", "order": "" },
     { "type": "query", "name": "result", "description": "hthtrhre", "iconSource": "query.png", "order": "" },
     { "type": "query", "name": "add", "description": "ewgegsdg", "iconSource": "query.png", "order": "" },
     { "type": "query", "name": "sum", "description": "hjgfjttg", "iconSource": "query.png", "order": "" },
     { "type": "query", "name": "sort", "description": "rehrehre", "iconSource": "query.png", "order": "" }
    ];

    // Changes XML to JSON
    function xmlToJson(xml) {

        // Create the return object
        var obj = {};

        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = xmlToJson(item);
                } else {
                    if (typeof (obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(xmlToJson(item));
                }
            }
        }
        return obj;
    };

    function get() {
        return _json;
    }

    function set(xml) {
        _json = xmlToJson(xml);
    }

    return {
        getMetaData: get,
        setMetaData: set
    }
});