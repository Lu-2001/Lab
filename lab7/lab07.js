const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let groups = document.getElementsByClassName("flex-container")[0];
let div1 = makeDiv();
let div2 = makeDiv();
let div3 = makeDiv();
let div4 = makeDiv();
let str = "Genre : ";

groups.appendChild(div1);
groups.appendChild(div2);
groups.appendChild(div3);
groups.appendChild(div4);

addContent(div1,1);
addContent(div2,2);
addContent(div3,3);
addContent(div4,4);


function makeButton() {
    let button = document.createElement("button");
    let btValue = document.createTextNode("Visit");
    button.appendChild(btValue);
    return button;
}

function makeDiv() {
    let div = document.createElement("div");
    div.classList.add("item");
    return div;
}

function addContent(div, num) {
    let p = document.createElement("h4");
    let str0 = str + works[num - 1]["tips"];
    let title = document.createTextNode(str0);
    p.appendChild(title);
    div.appendChild(p);//添加tips

    let h31 = document.createElement("div");
    let author = document.createElement("h3");
    author.style.display = "inline";
    let lifeTime = document.createElement("h5");
    lifeTime.style.display = "inline";
    lifeTime.style.marginLeft = "1em";
    let at = document.createTextNode(works[num - 1]["author"]);
    let strLt = "lifetime: " + works[num - 1]["lifetime"];
    let lt = document.createTextNode(strLt);
    author.appendChild(at);
    lifeTime.appendChild(lt);
    h31.appendChild(author);
    h31.appendChild(lifeTime);//添加人名等

    let h32 = document.createElement("div");
    let title2 = document.createElement("h3");
    let t2 = document.createTextNode("Popular Photos");
    title2.appendChild(t2);

    for (let i = 0; i < works[num - 1]["photos"].length; i++){
        let photo = document.createElement("span");
        let url = works[num - 1]["photos"][i];
        photo.innerHTML = '<img src ="' + url + '" class = "photo"/>';
        h32.appendChild(photo);//添加照片
    }

    h32.appendChild(title2);
    div.appendChild(h31);
    div.appendChild(h32);

    h31.classList.add("inner-box");//设置类
    h32.classList.add("inner-box");

    let button = makeButton();
    div.appendChild(button);
}

