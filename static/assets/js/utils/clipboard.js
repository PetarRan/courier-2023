var clipboard = new ClipboardJS('#copy');

clipboard.on('success', function (e) {
    var alertMessage = document.querySelector('.alert');
    alertMessage.classList.remove('hidden');
    setTimeout(function () {
        alertMessage.classList.add('hidden');
    }, 3000);
});