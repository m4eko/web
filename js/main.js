function doStuff (callback) {
    // do all app scripts here...
    callback();

}

doStuff(function () {
    document.body.className = 'visible';
});