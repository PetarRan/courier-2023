var clipboard = new ClipboardJS('#copy');

$("#copy").click(function (event) {
    event.preventDefault();
    alert("Copied to Clipboard!")
});
