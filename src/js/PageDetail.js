const PageDetail = (argument) => {

    const preparePage = () => {
        const cleanedArgument = argument.replace(/\s+/g, "-");

        const fetchGame = (url, argument) => {
            let finalURL = url + argument;

            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    let { name, released, description, background_image, clip, rating, ratings_count } = response;

                    let articleDOM = document.querySelector(".page-detail .article");

                    articleDOM.querySelector("h1.title").innerHTML = name;
                    articleDOM.querySelector("p.released-date span").innerHTML = released;
                    articleDOM.querySelector("p.description").innerHTML = description;
                });
        };

        fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
    };

    const render = () => {
        pageContent.innerHTML = `
            <sectionn class="page-detail">
                <div class="article">
                    <h1 class="title"></h1>
                    <p class="release-date">Releases date : <span></span></p>
                    <p class="description"></p>
                </div>
            </section>
            `;
        preparePage();
    };

    render();
};

export { PageDetail };