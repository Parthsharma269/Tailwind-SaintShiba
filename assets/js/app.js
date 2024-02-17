const menuicon = document.querySelector(".menuicon")
const menulist = document.querySelector(".menulist")
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("active")
    menuicon.classList.toggle("change")
    document.body.classList.toggle("overflow-hidden")
})

let accordianitem = document.querySelectorAll(".accordian-item");
accordianitem.forEach(function (item) {
    item.addEventListener("click", function () {
        const isitactive = item.classList.contains("active");
        accordianitem.forEach(function (item) {
            item.classList.remove("active");
        })
        if (!isitactive) {
            item.classList.toggle("active");
        }
    })
});