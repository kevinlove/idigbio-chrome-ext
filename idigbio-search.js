// The onClicked callback function.
function onClickHandler(info) {
    if (info.menuItemId == "commonname") {
    var searchPageUrl ='https://www.idigbio.org/portal/search?rq={%22commonname%22:%22'+ info.selectionText+'%22}';
  } else if (info.menuItemId == "scientificname") {
    var searchPageUrl ='https://www.idigbio.org/portal/search?rq={%22scientificname%22:%22'+ info.selectionText +'%22}';
  } else if (info.menuItemId == "collector") {
    var searchPageUrl ='https://www.idigbio.org/portal/search?rq={%22collector%22:%22'+ info.selectionText+'%22}';
  } else if (info.menuItemId == "locality") {
    var searchPageUrl ='https://www.idigbio.org/portal/search?rq={%22locality%22:%22'+ info.selectionText+'%22}';
  } else if (info.menuItemId == "alltext") {
    var searchPageUrl ='https://www.idigbio.org/portal/search?rq={%22data%22:{%22type%22:%22fulltext%22,%22value%22:%22'+ info.selectionText+'%22}}';
  } else if (info.menuItemId == "genus") {
    var searchPageUrl ='https://www.idigbio.org/portal/search?rq={%22genus%22:%22'+ info.selectionText+'%22}';
  } 
else {
    //Get Search page
    var searchPageUrl = 'https://www.idigbio.org/portal/search?rq={%22data%22:{%22type%22:%22fulltext%22,%22value%22:%22'+ info.selectionText + '%22}';
    };
    chrome.tabs.create({ url: searchPageUrl });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

  // Set up context menu tree at install time
  chrome.runtime.onInstalled.addListener(function() {
  // Create one item for each context type
  var contexts = ["selection"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
  // Create menus
  chrome.contextMenus.create({"title": "Search iDigBio for '%s'", "id": "fulltext", "contexts":[context]});
    chrome.contextMenus.create({"title": "in occurrence name fields:", "parentId": "fulltext", "id": "names","contexts":[context]});
      chrome.contextMenus.create({"title": "Common Name", "parentId": "names", "id": "commonname","contexts":[context]});
      chrome.contextMenus.create({"title": "Scientific Name", "parentId": "names", "id": "scientificname","contexts":[context]});
      chrome.contextMenus.create({"title": "Genus", "parentId": "names", "id": "genus","contexts":[context]});
    chrome.contextMenus.create({"title": "in Collector", "parentId": "fulltext", "id": "collector","contexts":[context]});
    chrome.contextMenus.create({"title": "in Locality", "parentId": "fulltext", "id": "locality","contexts":[context]});
    chrome.contextMenus.create({"title": "in any field", "parentId": "fulltext", "id": "alltext","contexts":[context]});
  }
});



