const PageList = (argument = "") => {
    console.log("Page List", argument);

    const preparePage = () => {
        let cleanedArgument = argument.replace(/\s+/g, "-");
        let articles = "";

        const fetchList = (url, argument) => {
            let finalURL = url;
            if (argument) {
                finalURL = url + "?search" + argument;
            }

            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    response.results.forEach((article) => {
                        articles += `
                            <div class="cardGame">
                                <h1>${article.name}</h1>
                                <h2>${article.released}</h2>
                                <a href="#pagedetail/${article.id}">${article.id}</a>
                            </div>

                            <div class="center">
                                <div class="property-card">
                                    <a href="#pagedetail/${article.id}">
                                    <div class="property-image">
                                        <img src="${article.background_image}">
                                        <div class="property-image-title">
                                        <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. -->
                                        </div>
                                    </div></a>
                                    <div class="property-description">
                                    <h5> ${article.name} </h5>
                                    <p>${article.released}</p>
                                    </div>
                                    <a href="#">
                                    <div class="property-social-icons">
                                        <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions -->
                                    </div>
                                    </a>
                                </div>
                            </div>
                            
                            
                            <div class="col-md-4">
                                <h4 class="text-center"><strong>STYLE 3</strong></h4>
                                <hr>
                                <div class="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive">
                                    <div class="profile-content">
                                        <div class="profile-name">John Doe
                                            <p>@johndoedesigner</p>
                                        </div>
                                        <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="profile-overview">
                                                    <p>TWEETS</p>
                                                    <h4>1300</h4></div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="profile-overview">
                                                    <p>FOLLOWERS</p>
                                                    <h4>250</h4></div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="profile-overview">
                                                    <p>FOLLOWING</p>
                                                    <h4>168</h4></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            `;
                    });
                    document.querySelector(".page-list .articles").innerHTML = articles;
                });
        };

        fetchList("https://api.rawg.io/api/games", cleanedArgument);
    };

    const render = () => {
        pageContent.innerHTML = `
            <section class="page-list">
                <div class="articles">...loading</div>
            </section>
        `;

        preparePage();
    };

    render();
};

export { PageList };