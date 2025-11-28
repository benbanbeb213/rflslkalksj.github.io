function search(){
    let v = document.getElementById("searchInput").value.toLowerCase();

    if (v === "case closed" || v === "detective conan"){
        document.querySelector(".item").scrollIntoView({behavior:"smooth"});
    } else {
        alert("No results found.");
    }
}

function openAnime(name){
    if (name === "case-closed"){
        window.location.href = "watch.html";
    }
}
