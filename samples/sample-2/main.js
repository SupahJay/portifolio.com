const input = document.querySelector("textarea");
const comments=document.querySelector(".comments");
document.querySelector("#xx")
            .onclick = () => {
    let new_comment = document.createElement("section");
    new_comment.innerHTML = `<img src=\"\" alt=\"\" class=\"user_img img\">\n<div class=\"comment_area\">\n    <h3>Anonymous<\/h3>\n    <p>${
        input.value.replace(/(?:\r\n|\r|\n)/g, '<br>')//turn raw comment into a html
        }<\/p>\n<\/div>`
    comments.insertBefore(new_comment, comments.lastElementChild);
    input.value=""
}