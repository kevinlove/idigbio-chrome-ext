// The onClicked callback function.
function onClickHandler(info) {
    if (info.menuItemId == "commonname") {
    var searchPageUrl ='https://beta-portal.idigbio.org/portal/search?commonname='+ info.selectionText;
  } else if (info.menuItemId == "scientificname") {
    var searchPageUrl ='https://beta-portal.idigbio.org/portal/search?scientificname='+ info.selectionText;
  } else if (info.menuItemId == "collector") {
    var searchPageUrl ='https://beta-portal.idigbio.org/portal/search?collector='+ info.selectionText;
  } else if (info.menuItemId == "locality") {
    var searchPageUrl ='https://beta-portal.idigbio.org/portal/search?locality='+ info.selectionText;
  }
else {
    //Get Search page
    var searchPageUrl = 'https://beta-portal.idigbio.org/portal/search?scientificname='+ info.selectionText;
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
  chrome.contextMenus.create({"title": "Search iDigBio for:", "id": "fulltext", "contexts":[context]});
  chrome.contextMenus.create(
      {"title": "'%s' in Common Name", "parentId": "fulltext", "id": "commonname","contexts":[context]});
  chrome.contextMenus.create(
      {"title": "'%s' in Scientific Name", "parentId": "fulltext", "id": "scientificname","contexts":[context]});
  chrome.contextMenus.create(
      {"title": "'%s' in Collector", "parentId": "fulltext", "id": "collector","contexts":[context]});
  chrome.contextMenus.create(
      {"title": "'%s' in Locality", "parentId": "fulltext", "id": "locality","contexts":[context]});
  }
});



