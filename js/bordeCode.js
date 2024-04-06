const baseUrl = "https://localhost:7036/api/";

window.addEventListener("DOMContentLoaded", start);

function start() {
    getTip();
}
async function getTip() {

    const url = baseUrl + "Borde";
    const params = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }

  

    const response = await fetch(url, params);
    if (response.ok) {
        const data = await response.json();
        console.log(data['activity']);
        document.getElementById("tip").innerText = data['activity'];
        document.getElementById("BannerDiv").classList.remove("hide");
        document.getElementsByClassName("loader")[0].classList.add("hide");
    } else {
        console.log("EROOR");
        switchClassTo(document.getElementsByClassName("popup")[0], "hide", false);
    }

}
