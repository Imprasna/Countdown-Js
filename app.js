    var countDown = new Date("October 26, 2020").getTime()
    var x = setInterval(function (){
        var now = new Date().getTime()
        var distance = countDown - now

        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        document.getElementById('timer').innerHTML = days + "d" + " " +  + hours + "h"  + " " +  + minutes + "m"  + " " +  + seconds + "s"

        if (distance < 0) {
            clearInterval(x)
            document.getElementById('timer').innerHTML = "Expired"
        }
    }, 1000);

    var countDownTime = new Date("November 19, 2020").getTime()
    var y = setInterval(function (){
        var nowTime = new Date().getTime()
        var distanceTime = countDownTime - nowTime

        var days = Math.floor(distanceTime / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distanceTime % (1000 * 60)) / 1000)

        document.getElementById('mine').innerHTML = days + "d" + " " +  + hours + "h"  + " " +  + minutes + "m"  + " " +  + seconds + "s"

        if (distanceTime < 0) {
            clearInterval(y)
            document.getElementById('mine').innerHTML = "Expired"
        }
    }, 1000);