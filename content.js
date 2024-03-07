// Listen for selection events
document.addEventListener("selectionchange", function () {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        var selectedText = range.toString();
        if (selectedText !== "") {
            // Highlight selected text
            var span = document.createElement("span");
            span.classList.add("highlighted");
            span.textContent = selectedText;
            range.deleteContents();
            range.insertNode(span);
            
            // Change text color to black
            span.style.color = "black";
        }
    }
});

// Listen for click events on highlighted text
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("highlighted")) {
        // Revert text color to original
        event.target.style.color = "";
        // Remove highlight
        var span = event.target;
        var textNode = document.createTextNode(span.textContent);
        span.parentNode.replaceChild(textNode, span);
    }
});
