var metadata = {
    "@Version": "1.0",
    "DataServices": {
        "Schema": {
            "@Namespace": "informea",
            "EntityType": [
                {
                    "@Name": "DecisionDocument",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "id"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "id",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "url",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "language",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "content",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "size",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "mimeType",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "filename",
                            "@Nullable": "true"
                        }
                    ]
                },
                {
                    "@Name": "VocabularyTerm",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "VocabularyTerm"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "term",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "namespace",
                            "@Nullable": "false"
                        }
                    ]
                },
                {
                    "@Name": "LocalizableString",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "value"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "language",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "value",
                            "@Nullable": "false"
                        }
                    ]
                },
                {
                    "@Name": "Decision",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "id"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "protocolVersion",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "id",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "link",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "type",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "status",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "number",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "treaty",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "published",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "meetingId",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "meetingTitle",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "meetingUrl",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "updated",
                            "@Nullable": "false"
                        }
                    ],
                    "NavigationProperty": [
                    	{
                    		"@Name": "Contacts",
                    		"@ToRole": "Contacts"
                    	},
                        {
                            "@Name": "documents",
                            "@Relationship": "informea.FK_documents_Decisions",
                            "@FromRole": "Decisions",
                            "@ToRole": "documents"
                        },
                        {
                            "@Name": "title",
                            "@Relationship": "informea.FK_title_Decisions",
                            "@FromRole": "Decisions",
                            "@ToRole": "title"
                        },
                        {
                            "@Name": "longTitle",
                            "@Relationship": "informea.FK_longTitle_Decisions",
                            "@FromRole": "Decisions",
                            "@ToRole": "longTitle"
                        },
                        {
                            "@Name": "summary",
                            "@Relationship": "informea.FK_summary_Decisions",
                            "@FromRole": "Decisions",
                            "@ToRole": "summary"
                        },
                        {
                            "@Name": "content",
                            "@Relationship": "informea.FK_content_Decisions",
                            "@FromRole": "Decisions",
                            "@ToRole": "content"
                        },
                        {
                            "@Name": "keywords",
                            "@Relationship": "informea.FK_keywords_Decisions",
                            "@FromRole": "Decisions",
                            "@ToRole": "keywords"
                        }
                    ]
                },
                {
                    "@Name": "Contact",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "id"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "protocolVersion",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "id",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "country",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "prefix",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "firstName",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "lastName",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "position",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "institution",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "department",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "address",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "email",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "phone",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "fax",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "updated",
                            "@Nullable": "false"
                        }
                    ],
                    "NavigationProperty": {
                        "@Name": "treaties",
                        "@Relationship": "informea.FK_treaties_Contacts",
                        "@FromRole": "Contacts",
                        "@ToRole": "treaties"
                    }
                },
                {
                    "@Name": "Treaty",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "value"
                        }
                    },
                    "Property": {
                        "@Name": "value",
                        "@Nullable": "false"
                    }
                },
                {
                    "@Name": "Meeting",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "id"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "protocolVersion",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "id",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "treaty",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "url",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "start",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "end",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "repetition",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "kind",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "type",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "access",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "status",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "imageUrl",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "imageCopyright",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "location",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "city",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "country",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "latitude",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "longitude",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "updated",
                            "@Nullable": "false"
                        }
                    ],
                    "NavigationProperty": [
                        {
                            "@Name": "title",
                            "@Relationship": "informea.FK_title_Meetings",
                            "@FromRole": "Meetings",
                            "@ToRole": "title"
                        },
                        {
                            "@Name": "description",
                            "@Relationship": "informea.FK_description_Meetings",
                            "@FromRole": "Meetings",
                            "@ToRole": "description"
                        }
                    ]
                },
                {
                    "@Name": "CountryReport",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "id"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "protocolVersion",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "id",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "treaty",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "country",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "submission",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "url",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "updated",
                            "@Nullable": "false"
                        }
                    ],
                    "NavigationProperty": {
                        "@Name": "title",
                        "@Relationship": "informea.FK_title_CountryReports",
                        "@FromRole": "CountryReports",
                        "@ToRole": "title"
                    }
                },
                {
                    "@Name": "NationalPlan",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "id"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "protocolVersion",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "id",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "treaty",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "country",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "type",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "submission",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "url",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "updated",
                            "@Nullable": "false"
                        }
                    ],
                    "NavigationProperty": {
                        "@Name": "title",
                        "@Relationship": "informea.FK_title_NationalPlans",
                        "@FromRole": "NationalPlans",
                        "@ToRole": "title"
                    }
                },
                {
                    "@Name": "Site",
                    "Key": {
                        "PropertyRef": {
                            "@Name": "id"
                        }
                    },
                    "Property": [
                        {
                            "@Name": "id",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "type",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "country",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "treaty",
                            "@Nullable": "false"
                        },
                        {
                            "@Name": "url",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "latitude",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "longitude",
                            "@Nullable": "true"
                        },
                        {
                            "@Name": "updated",
                            "@Nullable": "false"
                        }
                    ],
                    "NavigationProperty": {
                        "@Name": "name",
                        "@Relationship": "informea.FK_name_Sites",
                        "@FromRole": "Sites",
                        "@ToRole": "name"
                    }
                }
            ],
            "Association": [
                {
                    "@Name": "FK_documents_Decisions",
                    "End": [
                        {
                            "@Role": "Decisions",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "documents",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_longTitle_Decisions",
                    "End": [
                        {
                            "@Role": "Decisions",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "longTitle",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_summary_Decisions",
                    "End": [
                        {
                            "@Role": "Decisions",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "summary",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_content_Decisions",
                    "End": [
                        {
                            "@Role": "Decisions",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "content",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_keywords_Decisions",
                    "End": [
                        {
                            "@Role": "Decisions",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "keywords",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_treaties_Contacts",
                    "End": [
                        {
                            "@Role": "Contacts",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "treaties",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_title_Meetings",
                    "End": [
                        {
                            "@Role": "Meetings",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "title",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_description_Meetings",
                    "End": [
                        {
                            "@Role": "Meetings",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "description",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_title_CountryReports",
                    "End": [
                        {
                            "@Role": "CountryReports",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "title",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_title_NationalPlans",
                    "End": [
                        {
                            "@Role": "NationalPlans",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "title",
                            "@Multiplicity": "*"
                        }
                    ]
                },
                {
                    "@Name": "FK_name_Sites",
                    "End": [
                        {
                            "@Role": "Sites",
                            "@Multiplicity": "0..1"
                        },
                        {
                            "@Role": "name",
                            "@Multiplicity": "*"
                        }
                    ]
                }
            ],
            "EntityContainer": {
                "@Name": "InforMEAService",
                "@IsDefaultEntityContainer": "true",
                "EntitySet": [
                    {
                        "@Name": "title",
                        "@EntityType": "informea.LocalizableString"
                    },
                    {
                        "@Name": "Decisions",
                        "@EntityType": "informea.Decision"
                    },
                    {
                        "@Name": "documents",
                        "@EntityType": "informea.DecisionDocument"
                    },
                    {
                        "@Name": "longTitle",
                        "@EntityType": "informea.LocalizableString"
                    },
                    {
                        "@Name": "summary",
                        "@EntityType": "informea.LocalizableString"
                    },
                    {
                        "@Name": "content",
                        "@EntityType": "informea.LocalizableString"
                    },
                    {
                        "@Name": "keywords",
                        "@EntityType": "informea.VocabularyTerm"
                    },
                    {
                        "@Name": "Contacts",
                        "@EntityType": "informea.Contact"
                    },
                    {
                        "@Name": "treaties",
                        "@EntityType": "informea.Treaty"
                    },
                    {
                        "@Name": "Meetings",
                        "@EntityType": "informea.Meeting"
                    },
                    {
                        "@Name": "description",
                        "@EntityType": "informea.LocalizableString"
                    },
                    {
                        "@Name": "CountryReports",
                        "@EntityType": "informea.CountryReport"
                    },
                    {
                        "@Name": "NationalPlans",
                        "@EntityType": "informea.NationalPlan"
                    },
                    {
                        "@Name": "name",
                        "@EntityType": "informea.LocalizableString"
                    },
                    {
                        "@Name": "Sites",
                        "@EntityType": "informea.Site"
                    }
                ]
            }
        }
    }
};

function Intellisense(metadata){
	this.meatadata = metadata;
	this.sets = this.meatadata.DataServices.Schema.EntityContainer.EntitySet;
	this.types = this.meatadata.DataServices.Schema.EntityType;
	this.lastProperties = [];
	this.queryOps = [{'@Name':'$filter'}, {'@Name':'$expand'}, {'@Name':'$select'}, {'@Name': '$orderby'},
					 {'@Name':'$top'}, {'@Name':'$skip'}, {'@Name':'$inlinecount'}, {'@Name':'$format'}];
	this.queryLogicalOps = [{'@Name': 'eq'},{'@Name': 'ne'},{'@Name': 'gt'}, {'@Name': 'ge'}, {'@Name': 'lt'},
							{'@Name': 'le'}, {'@Name': 'and'}, {'@Name': 'or'}, {'@Name': 'not'}];
	this.queryArithmaticOps=[{'@Name': 'add'}, {'@Name': 'sub'}, {'@Name': 'mul'}, {'@Name': 'div'}, {'@Name': 'mod'}];
}

/**
 * Get the Index of the array that it's @Name property equals to a given string name
 * 
 * @private
 * @param {Array} arr the array to search.
 * @param {string} name the string to search for.
 * @returns {number} the index of the array if found , -1 else. 
 */
Intellisense.prototype.getIndexByName = function(arr, name){
	var i = 0;
	for (i; i < arr.length; i++){
		if (arr[i]['@Name'] === name){
			return i;
		}
	}
	return -1;
};

/**
 * 
 */
Intellisense.prototype.getPropertiesByPType = function(arr, typeIndex, pType){
	var properties = [];
	var arrObj = {};
	
	properties = this.types[typeIndex][pType];
	
	if (Array.isArray(properties)){
		for (var p in properties){
			arrObj = properties[p];
			arrObj.Type = pType;
			arr.push(arrObj);
		}
	}else if(properties){
		arrObj = properties;
		arrObj.Type = pType;
		arr.push(arrObj);
	}
};

/**
 * 
 */
Intellisense.prototype.getTypeProperties = function(typeIndex){
	var retVal = [];
	this.getPropertiesByPType(retVal, typeIndex, 'Property');
	this.getPropertiesByPType(retVal, typeIndex, 'NavigationProperty');
	return retVal;
};

/**
 * Get the EntityType included in EntitySet
 * 
 * @private
 * @param {number} setIndex the EntitySet index
 * @returns {number} the index of the EntityType -1 else
 */
Intellisense.prototype.getTypeIndex = function(setIndex){
	var type = this.sets[setIndex]['@EntityType'].split('.').pop();
	return this.getIndexByName(this.types, type);
};

/**
 * Get the Intellisense for the given str from array of possible word complitions.
 * 
 * @private
 * @param {string} str the partial string to complete.
 * @param {Array} arr possible Intellisense to chose from.
 * @returns {Array} array of the strings that complete str. 
 */
Intellisense.prototype.getIntellisenseFromArr = function(str , arr){
	var retVal = [];
	var i = 0;
	for (i; i < arr.length; i++){
		if (arr[i]['@Name'].toLowerCase().indexOf(str.toLowerCase()) == 0){
			retVal.push(arr[i]);
		}
	}
	return retVal;
};

/**
 * 
 */
Intellisense.prototype.getExpectedType = function(parts){
	
	if(this.getIndexByName(this.sets, parts[0].split('(')[0]) == -1){
		return [];
	}
	
	var setIndex = this.getIndexByName(this.sets, parts[0].split('(')[0]);
	var type = this.getTypeIndex(setIndex);
	var properties = this.getTypeProperties(type);
	var propertyIndex = -1;
	var selecting = false;
	
	for (var i = 1; i < parts.length - 1; i++){
		propertyIndex = this.getIndexByName(properties, parts[i].split('(')[0]);
		if(propertyIndex < 0){
			return [];
		}
		selecting = (parts[i-1].split('(').length > 1) ? true : false;
		if(selecting && properties[propertyIndex].Type == 'NavigationProperty'){
			set =  properties[propertyIndex]['@ToRole'];
			setIndex = this.getIndexByName(this.sets, set);
			type = this.getTypeIndex(setIndex);
			properties = this.getTypeProperties(type);
		}else{
			return [];
		}
		
	}
	
	return properties;
};

/**
 * Get the intellisense for the resource path part of the url
 * 
 * @private
 * @param {string} resource the current resource path
 * @returns {Array} the intellisense array for str.
 */
Intellisense.prototype.getResourceIntellisense = function(resource){
	var parts = resource.split('/');
	
	if (parts.length == 1){
		return this.getIntellisenseFromArr(parts[0], this.sets);
	}
	
	this.lastProperties = this.getExpectedType(parts);
	return this.getIntellisenseFromArr(parts[parts.length - 1], this.lastProperties);
};

/**
 * Get The Intellisense for the query part of the url.
 * 
 * @private
 * @param {string} query the query part of the url.
 * @returns the intellisense for the given string.
 */
Intellisense.prototype.getQueryIntellisense = function(query){
	var lastQuery = query.split('&').pop();
	var parts = lastQuery.split('=');
	if(parts.length == 1){
		return this.getIntellisenseFromArr(parts[0], this.queryOps);
	}
	
	//TODO move to it's own method
	var last = parts[1].split(/\s+/).pop();
	return this.getIntellisenseFromArr(last, this.queryLogicalOps.concat(this.queryArithmaticOps, this.lastProperties));
};

/**
 * Get the intellisense for given string.
 * 
 * @param {string} str
 * @returns {Array} the intellisense array for str.
 */
Intellisense.prototype.getIntellisense = function(str){
	var parts = str.split('?');
	if (parts.length == 1){
		return this.getResourceIntellisense(parts[0]);
	}
	if (parts.length == 2){
		return this.getQueryIntellisense(parts[1]);
	}
	return [];
};
