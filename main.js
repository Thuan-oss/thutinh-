// Thay đổi nội dung búc thư ở đây
var letterContent =" Hí lô bé !Đây mới là bất ngờ chính đây là thư tay hí hí >< . Lần đầu viết thư tay luôn á 🥲. Doài bước vào ý chính hoaii. Món quà này tuy trễ hơn so với dự định nhưng mà hong saoo ! Thựn sẽ bù đắp trong giấy viết tay này hí hí.  Cảm ơn bé đã 1 năm qua đã cùng Thựn chia sẻ và đồng hành cùng Thựn. Thực sự mà nói á thì 1 năm thì cũng không ngắn quá nhưng cũng chưa đủ dài. Mặc dù Thựn hay suy nghĩ nhiều, đôi lúc lại vụng về, đôi khi lại làm bé buồn lại khiến thựn cũng buồn theo 😞...Nhưng mà bé biết không ? Mặc dù vẫn muốn nói iu hơn nhưng mà lần này cho Thựn bày tỏ sự cảm mến này nháa ? Bản thân Thựn thấy Thựn vẫn nhận được nhiều thứ không chỉ là sự quan tâm từ bé nè, mà còn phía Thựn. Thựn biết quan tâm nè, biết chủ động nè, biết suy nghĩ để tốt hơn nè, và bản thân Thựn cảm thấy iu bé hơn nữa ! Nhiều khi suy nghĩ ai đâu mà nói hoài một chuyện như cảm ơn hết lần này đến lần khác hay việc cảm thấy bé đẹp và dễ thương mà nói mãii😗. Nghĩ là không có thiệt nhưng ở đây có một người thiệt nè 🥹 . Ở trong là quà Thựn làm đó thấy đẹp hong hí hí. Thựn sẽ hông nói mấy icon đó liên quan đến từng câu chuyện nào là để bé đoán đóaa ! Cuối cùng là chúc mừng chúng ta đã đi qua 1 năm nhé ! Yêu bé nhiềuuu 😘 "


// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})