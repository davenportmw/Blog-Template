'use strict';

function goToPost() {
    let sitename = "/views/blog-post-" + arguments[0] + ".html";
    window.location.href = sitename;
}
