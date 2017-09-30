<!DOCTYPE html>
<html>

    <head>
        <title>Saurabh Totey</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="universal.css">
    </head>

    <body class="background col-md-12 tall">

    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse rounded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand importantText" href="#">Saurabh Totey</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link importantText" href="#">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link importantText" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link importantText" href="#">Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link importantText" href="#">Fun</a>
                </li>
            </ul>
        </div>
    </nav>

    <br/>

    <div class="container-fluid col-md-12 bg-inverse rounded row">
        <div class="col-md-2">
            <div class="inner-container rounded">
                <img class="rounded" src="images/me.jpg">
            </div>
        </div>
        <div class="rounded col-md-10">
            <div class="inner-container rounded tall">
                <h3>About me</h3>
                <p>Hello, I am Saurabh Totey. I live in Boulder, Colorado. I was born here on December 5th, 2000, but I lived in Boston for a few years. Currently, I attend Fairview Highschool. During and after school, I attend clubs such as Code Club, Math Club, Future Business Leaders of America, NACLO, Robotics, Stock Market Club, and Speech and Debate. In my freetime, I enjoy reading, playing videogames, watching various TV shows, practicing the piano and cello, and coding. Some things that I am currently trying to learn include network programming, digital art, and machine learning.</p>
            </div>
        </div>
    </div>

    <br/>

    <div class="container-fluid col-md-12 bg-inverse rounded row">
        <div class="col-md-4">
            <p class="importantText">Here you can select to learn about my favorite </p>
        </div>
        <div class="dropdown col-md-8 wide">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                Select<span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Coding Languages</a></li>
                <li><a class="dropdown-item" href="#">Pokémon</a></li>
                <li><a class="dropdown-item" href="#">TV Shows</a></li>
                <li><a class="dropdown-item" href="#">Video Games</a></li>
            </ul>
        </div>

        <div class="col-md-12" id="spacerFavorite" style="display: none;"><br/></div>

        <div class="col-md-8">
            <div class="inner-container rounded tall" style="display: none;">
                <p id="textFavoriteOne"></p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="inner-container rounded tall" style="display: none;">
                <img class="rounded" src="" id="pictureFavoriteOne">
            </div>
        </div>

        <div class="col-md-12" id="spacerFavorite" style="display: none;"><br/></div>

        <div class="col-md-8">
            <div class="inner-container rounded tall" style="display: none;">
                <p id="textFavoriteTwo"></p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="inner-container rounded tall" style="display: none;">
                <img class="rounded" src="" id="pictureFavoriteTwo">
            </div>
        </div>

        <div class="col-md-12" id="spacerFavorite" style="display: none;"><br/></div>

        <div class="col-md-8">
            <div class="inner-container rounded tall" style="display: none;">
                <p id="textFavoriteThree"></p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="inner-container rounded tall" style="display: none;">
                <img class="rounded" src="" id="pictureFavoriteThree">
            </div>
        </div>

    </div>

    </body>
</html>
