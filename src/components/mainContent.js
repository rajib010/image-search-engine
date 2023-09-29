function mainContent(){
    return `
    <main class="search-main">
        <h1>Image Search Engine</h1>
        <form class="search-form">
            <input type="text" autocomplete="off" placeholder="Search for any images..." spellcheck="false"
                id="search-for">
            <button id="search-btn">Search</button>
        </form>
        <p id="description"></p>
        <div class="search-results">
        </div>
        <button id="show-moreBtn">More <i class="fa-solid fa-plus"></i></button>
    </main>
    `
};

export default mainContent;