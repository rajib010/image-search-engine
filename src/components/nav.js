function navBar() {
    return `
        <nav>
            <div class="wrapper">
                <div class="logo"><a href="./index.html">raJiB</a></div>
                <ul class="nav-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li>
                        <a href="#">Our Services
                            <i class="fa-solid fa-caret-down"></i>
                        </a>
                        <ul class="drop-menu">
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                            <li><a href="#">Service 4</a></li>
                        </ul>
                    </li>
                    <li><a href="./contact.html">Contact</a></li>
                    <li id="signIn"><a href="">Sign In
                            <i class="fa-sharp fa-solid fa-user-plus"></i>
                        </a></li>
                </ul>
                <div class="icon1">
                    <i class="fa-solid fa-bars" id="menuIcon"></i>
                </div>
            </div>
        </nav>
        `
}

export default navBar;