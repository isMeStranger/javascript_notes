// TODO: check if all the functions work
// IDEA: 
// i want to append the code of each js file 
// along with the execution result
// 
// in this file im using many methods to do so.
// 1. fetch the file, get the code from the file
// 2. append a code element with the code
// 3. get execution result
// 4. append execution result

function get_head_el(){
    let headTag = document.getElementsByTagName('head');
    return headTag;
}

function append_css_as_text(css) {
    let headTag = get_head_el()
    let defaultStyle = document.querySelector('.default-style');
    if (defaultStyle === null) {
        headTag.innerHTML += `<style class="default-style"> ${css}</style>`;
        return;
    }
    defaultStyle.innerHTML += css;
}
function append_css_tag(url){
    get_head_el().innerHTML+= fetch_code('./style.css');
}

function append_html(el, html) {
    el.innerHTML += '<br>' + html
}

function get_body_el() {
    return document.getElementsByTagName('body');
}

function get_el(selector) {
    return document.querySelector(selector);
}

function textarea_template(content) {
    return `<textarea = "code">${content}</textarea>`;
}

function code_result_template(content) {
    return `<div class="code-result">${content}</div>`;
}

function fetch_code(url) {
    let code;
    fetch(url)
        .then(response => response.text())
        .then(data => code = data)
        .catch(error => console.error(error));
    return code;
}

export default {
    get_body_el,
    get_el, code_result_template,
    textarea_template,
    append_html,
    fetch_code
}