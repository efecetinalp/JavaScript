
//liste öğelerini bul + ekle
let ulDOM = document.querySelector("#list")
ulDOM.addEventListener('submit', addNew)

//li öğesini bul
let ullength = document.getElementsByTagName("li");

//öğeleri sil
function removeAll() {
    liDOM.remove();
}

//öğeleri denetle
function check() {
    this.classList.toggle("checked");
}

//yeni -li öğesi ekle
function addNew() {
    let liDOM = document.createElement('li')
    if (document.querySelector("#task").value.trim()) {
        liDOM.innerHTML = document.querySelector("#task").value
        ulDOM.appendChild(liDOM)
        document.querySelector("#task").value = ""
        let icon_ = document.createElement("i")
        icon_.classList.add("bi", "bi-x-circle", "float-right", "mr-2")
        console.log(liDOM)
        liDOM.appendChild(icon_)

        liDOM.onclick = check;

        icon_.addEventListener('click', function () {
            console.log("Silinme işlemi gerçekleşti")
            icon_.parentNode.remove(icon_);
            $(".success.delete").toast("show");
        })
        $(".success.add").toast("show");
    } else {
        $(".error").toast("show");
    }

    const removeAllDOM = document.querySelector("#btnRemoveAll");
    removeAllDOM.addEventListener("click", function () {
        (liDOM.classList.contains("checked")) ? (liDOM.remove(), $(".success.delete").toast("show")) : $(".error.deleteAll").toast("show");

    });

}

