async function getconstantin() {
    const response = await fetch(`http://worldtimeapi.org/api/timezone`, {
        mode: "cors"
    });
    const movies = await response.json();
    for (const key in movies) {
        if (Object.hasOwnProperty.call(movies, key)) {
            const element = movies[key];
            document.getElementById("seltime").innerHTML = document.getElementById("seltime").innerHTML + `<option value=${element}>${element}</option>`
        }
    }
}
async function selected() {
    const text =
        const resp2 = await fetch(`http://worldtimeapi.org/api/timezone/${document.getElementById("seltime").value}`)
    var time = resp2.json()
    document.getElementById("time").innerText = time["datetime"]
}