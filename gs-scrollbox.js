function scrollDown(scrollBox){
    var contentHeight = parseFloat($(scrollBox).attr("data-content-height"));
    var contentPadding = parseFloat($(scrollBox).find(".gs-scrollbox-content").css("padding"));
    var boxHeight = parseFloat($(scrollBox).attr("data-box-height"));
    var scrollSpaceHeight = parseFloat($(scrollBox).attr("data-space-height"));
    var scrollBarHeight = parseFloat($(scrollBox).attr("data-bar-height"));
    console.log(contentHeight + " " + boxHeight + " " + scrollSpaceHeight + " " + scrollBarHeight);
    var currentContentTop = parseFloat($(scrollBox).find(".gs-scrollbox-content").css("top"));
    var currentBarTop = parseFloat($(scrollBox).find(".gs-scrollbar").css("top"));
    var newContentTop = Math.max(currentContentTop-(boxHeight/2) , boxHeight - contentHeight - 2*contentPadding);
    var newBarTop = Math.min(currentBarTop+(scrollBarHeight/2) , scrollSpaceHeight - scrollBarHeight);
    $(scrollBox).find(".gs-scrollbox-content").css("top", newContentTop + "px");
    $(scrollBox).find(".gs-scrollbar").css("top", newBarTop + "px");
}

function scrollUp(scrollBox){
    var contentHeight = parseFloat($(scrollBox).attr("data-content-height"));
    var boxHeight = parseFloat($(scrollBox).attr("data-box-height"));
    var scrollSpaceHeight = parseFloat($(scrollBox).attr("data-space-height"));
    var scrollBarHeight = parseFloat($(scrollBox).attr("data-bar-height"));
    console.log(contentHeight + " " + boxHeight + " " + scrollSpaceHeight + " " + scrollBarHeight);
    var currentContentTop = parseFloat($(scrollBox).find(".gs-scrollbox-content").css("top"));
    var currentBarTop = parseFloat($(scrollBox).find(".gs-scrollbar").css("top"));
    var newContentTop = Math.min(currentContentTop+(boxHeight/2) , 0);
    var newBarTop = Math.max(currentBarTop-(scrollBarHeight/2) , 0);
    $(scrollBox).find(".gs-scrollbox-content").css("top", newContentTop + "px");
    $(scrollBox).find(".gs-scrollbar").css("top", newBarTop + "px");
}


var scrollEvents = $(".gs-scrollbox");
for( var i=0; i<scrollEvents.length ; i++){
    var scrollBox = $(".gs-scrollbox").get(i);
    var contentHeight = parseFloat($(scrollBox).find(".gs-scrollbox-content").css("height"));
    $(scrollBox).attr("data-content-height", contentHeight);
    var boxHeight = parseFloat($(scrollBox).css("height"));
    $(scrollBox).attr("data-box-height", boxHeight);
    var scrollSpaceHeight = parseFloat($(scrollBox).find(".gs-scrollbar-space").css("height"));
    $(scrollBox).attr("data-space-height", scrollSpaceHeight);
    var scrollBarHeight = scrollSpaceHeight * ( boxHeight / contentHeight );
    $(scrollBox).attr("data-bar-height", scrollBarHeight);
    $(scrollBox).find(".gs-scrollbar").css("height", scrollBarHeight);
}


$(".gs-scrolldown").click(function(){
    var scrollBox = $(this).parent().parent();
    scrollDown(scrollBox);
});


$(".gs-scrollup").click(function(){
    var scrollBox = $(this).parent().parent();
    scrollUp(scrollBox);
});

$(".gs-scrollbox-content").on("wheel", function(e){
    var scrollBox = $(this).parent();
    if(e.originalEvent.deltaY>0)
        scrollDown(scrollBox);
    else if(e.originalEvent.deltaY<0)
        scrollUp(scrollBox);
});
