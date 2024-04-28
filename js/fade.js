function doStuff (callback) {
    callback();

}

doStuff(function () {
    document.body.className = 'visible';
});