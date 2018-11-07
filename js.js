(function () {
    var button = document.querySelector("#openSesame");
    var safeHash = "r"//any hash that dont has any id linked to it
    button.addEventListener("click", function() {
            button.classList.toggle("hide")
            var form = document.createElement("div")
            form.innerHTML = `<form action="https://formspree.io/moabelgomes@gmail.com" method="POST" class="email center">
            <p>Você pode falar comigo por:</p>
            <div class="options">
                <a target="_blank" class="icon" href="https://m.me/moabe.limagomes">
                    <svg fill="#67dffa">
                        <use xlink:href="#messenger" href="#messenger"></use>
                    </svg>
                    <p>Facebook<br>Messenger</p>
                </a>
                <a target="_blank" class="icon" href="mailto:moabelgomes@hotmail.com">
                    <svg fill="#735aff">
                        <use xlink:href="#mail" href="#mail"></use>
                    </svg>
                    <p>Email</p>
                </a>
                <a target="_blank" class="icon" href="tel:85986116857">
                    <svg fill="#58f57d">
                        <use xlink:href="#phone" href="#phone"></use>
                    </svg>
                    <p>Telefone</p>
                </a>
            </div>
            <p>Ou por aqui mesmo:</p>
                <input type="text" name="name" class="seamless" id="name" placeholder="Nome">
                <input type="email" name="email" class="seamless" placeholder="Email">
                <textarea name="text" class="seamless" placeholder="Mensagem"></textarea>
                <input type="submit" class="cta small" value="Enviar">
            </form>`
            // form.classList.add("email");
            button.parentNode.parentNode.appendChild(form)
        })

    if (!!urlChecker()) { changeHashBack() }
    window.addEventListener("hashchange", changeHashBack)

    function changeHashBack() {
        if (urlChecker() && urlChecker() != safeHash) { 
            window.addEventListener("click", whenClickOut)
            document.body.style.overflow="hidden"
        }
    }

    function whenClickOut(click) {
        var mainItem = document.querySelector("#" + urlChecker())
        if (mainItem && !mainItem.contains(click.target)) {
            window.location.href = "#" + safeHash;
            window.removeEventListener("click", whenClickOut)
            document.body.style.overflow="auto"
        }
    }

    function urlChecker() {
        var hash;
        if (window.location.hash) {
            hash = window.location.hash;
        } else if (document.location.hash) {
            hash = document.location.hash;
        } else if (location.hash) {
            hash = location.hash;
        }
        if (hash && hash.substring(0, 1) == '#') {
            hash = hash.substring(1, hash.length);
        }
        return hash
    }
    //history.pushState(null, null, window.location.href.split('#')[0])
}())