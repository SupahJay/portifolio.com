var menu = document.querySelector(".menu-container"), nav = document.getElementById("nav");
window.addEventListener("click", function(click){
    if( menu.contains(click.target) || ( menu.classList.contains("x") && !nav.contains(click.target) )){
        click.preventDefault();
        menu.firstElementChild.classList.toggle("x");
        menu.classList.toggle("x");
    }
})
function scrollToView(){
    observer = new IntersectionObserver( post => {
        post.forEach( individual => {
            if(individual.isIntersecting) { individual.target.style.opacity=1; observer.unobserve(individual.target) }
        })},
    { root: null,  threshold: 0.55 });
    [...arguments].forEach( post =>{observer.observe(post);post.style.opacity=0;})
}