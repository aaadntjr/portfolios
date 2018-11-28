$(document).ready(function(){
    console.log(location.href);

    //gnb 누르면 이동
    $(".gnb_list>a").click(function(){
        $("html, body").animate({
            scrollTop: $($.attr(this,"href")).offset().top
        },400);
        return false;
    });

    $(window).scroll(function(){
        var top = $(this).scrollTop();
        console.log(top);

        if(top >= 100) {
            $("header").addClass("fixed");
        }else {
            $("header").removeClass("fixed");
        }
    });
    


    // 지도 불러오기
    var home = new naver.maps.LatLng(36.357144, 127.451906);
    var mapOptions = {
        center: home,
        zoom: 10,
    };
    
    var map = new naver.maps.Map('map', mapOptions);

    
    marker = new naver.maps.Marker({
        map: map,
        position: home
    });/* 지도 끝 */
});/* ready function */