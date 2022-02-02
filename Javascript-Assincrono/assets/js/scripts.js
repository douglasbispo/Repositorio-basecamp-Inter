const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");

const getCats = async () => {

    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return data.webpurl;

    /* try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }
    catch (e) {
        console.log(e.message);
    } */

}

const loadImg = async () => {
    const catImag = document.getElementById("cat");
    catImag.src = await getCats();
}

catBtn.addEventListener("click", loadImg);

loadImg();