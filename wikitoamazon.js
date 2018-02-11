var infoboxen = $('table.infobox');

var isbnLinks = infoboxen.find('a[href="/wiki/International_Standard_Book_Number"]');

isbnLinks.each(function(){
    var tdWithIsbn = $(this).parent().next();
    var isbnNumberLink = tdWithIsbn.children('a');
    var amazonLink = $('<a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=' +
                        isbnNumberLink.text() +
                        '"><img src="' +
                        chrome.runtime.getURL("amazonlogo.png") +
                        '" width="16" height="16" style="margin-left:10px"></a>');
    tdWithIsbn.append(amazonLink);
});
