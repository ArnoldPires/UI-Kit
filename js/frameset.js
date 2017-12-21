function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(function() {
    var bottomElem = $(".resizable-bottom");
    var resizable = $(".resizable-top");
    var bottomElemOriginalHeight = bottomElem.height();
    $(".resizable-top").resizable({
        handles: 's',
        resize: function(event, ui) {
            bottomElem.height(bottomElemOriginalHeight - (ui.element.outerHeight() - ui.originalSize.height));

        },
        stop: function(event, ui) {
            bottomElemOriginalHeight = bottomElem.height();
        },
        //This has the effect of minHeight for bottomElem
        maxHeight: $(".resizable-top").height()

    });
});
