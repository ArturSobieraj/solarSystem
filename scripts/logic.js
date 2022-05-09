let articleTitle = document.getElementById('title');
let articleContent = document.getElementById('text');

addEventListener("click", function(e) {
    let title = document.getElementById('title');
    let text = document.getElementById('text');
    e.preventDefault;
    title.classList.remove("animate");
    text.classList.remove("animate");
    void title.offsetWidth;
    void text.offsetWidth;
    title.classList.add("animate");
    text.classList.add("animate");
});

let loadMainText = () => {
    articleTitle.innerHTML = solarSystemObject.title;
    articleContent.innerHTML = solarSystemObject.content;
    document.getElementById("images").innerHTML = solarSystemObject.images;
}

let loadObject = object => {
    let objectToLoad = null;
    switch (object) {
        case "sun": {
            objectToLoad = sunObject;
            break;
        }
        case "merkury": {
            objectToLoad = merkuryObject;
            break;
        }
        case "wenus": {
            objectToLoad = wenusObject;
            break;
        }
        case "earth": {
            objectToLoad = earthObject;
            break;
        }
        case "mars": {
            objectToLoad = marsObject;
            break;
        }
        case "jupiter": {
            objectToLoad = jupiterObject;
            break;
        }
        case "saturn": {
            objectToLoad = saturnObject;
            break;
        }
        case "uranium": {
            objectToLoad = uraniumObject;
            break;
        }
        case "neptune": {
            objectToLoad = neptuneObject;
            break;
        }
        case "ceres": {
            objectToLoad = ceresObject;
            break;
        }
        case "pluton": {
            objectToLoad = plutonObject;
            break;
        }
        case "haumea": {
            objectToLoad = haumeaObject;
            break;
        }
        case "makemake": {
            objectToLoad = makemakeObject;
            break;
        }
        case "eris": {
            objectToLoad = erisObject;
            break;
        }
        case "kuiper": {
            objectToLoad = kuiperObject;
            break;
        }
    }
    articleTitle.innerHTML = objectToLoad.title;
    articleContent.innerHTML = objectToLoad.content;
    document.getElementById("images").innerHTML = objectToLoad.images;
    articleTitle.scrollIntoView();
}

window.onload = loadMainText();

