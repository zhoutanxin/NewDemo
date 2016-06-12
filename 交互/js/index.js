/**
 * Created by Administrator on 2016/3/5 0005.
 */

function index2About(){
    $("#about").css("z-index",10);
    $("#index").css("z-index",5);
    $("#anli").css("z-index",5);
    $("#about").animate({top:"0"},500,function(){
        $("#index").css({top:"100%"});
        $("#anli").css({top:"-100%"});
    });
    $(".top_menu_content span").html("经典案例<br/>Cases");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){about2Anli();});

    $(".bottom_menu_content span").html("首页<br/>Home");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){about2Index();});

    $('.lf_menu_content').attr('onclick','').unbind('click').click(function(){about2Product();})
}
function index2Anli(){
    $("#anli").css("z-index",10);
    $("#index").css("z-index",5);
    $("#about").css("z-index",5);
    $("#anli").animate({top:"0"},500,function(){
        $("#index").css({top:"-100%"});
        $("#about").css({top:"100%"});
    });

    $(".top_menu_content  span").html("首页<br/>Home");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){anli2Index();});

    $(".bottom_menu_content span").html("关于我们<br/>About");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){anli2About();});

    $('.lf_menu_content').attr('onclick','').unbind('click').click(function(){anli2Prodcut();});
}
function about2Anli() {
    $("#anli").css("z-index",10);
    $("#about").css("z-index",5);
    $("#index").css("z-index",5);
    $("#anli").animate({top: "0"}, 500, function () {
        $("#about").css({top: "100%"});
        $("#index").css({top: "-100%"});
    });

    $(".top_menu_content  span").html("首页<br/>Home");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){anli2Index();});

    $(".bottom_menu_content span").html("关于我们<br/>About");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){anli2About();});

    $('.lf_menu_content').attr('onclick','').unbind('click').click(function(){anli2Prodcut();});
}
function about2Index() {
    $("#index").css("z-index",10);
    $("#about").css("z-index",5);
    $("#anli").css("z-index",5);
    $("#index").animate({top: "0"}, 500, function () {
        $("#about").css({top: "-100%"});
        $("#anli").css({top: "100%"});
    });

    $(".top_menu_content  span").html("关于我们<br/>About");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){index2About();});

    $(".bottom_menu_content span").html("经典案例<br/>Cases");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){index2Anli();});
}
function about2Product() {
    $("#index").css("z-index",10);
    $("#about").css("z-index",5);
    $("#anli").css("z-index",5);
    $("#index").animate({top: "0"}, 500, function () {
        $("#about").css({top: "-100%"});
        $("#anli").css({top: "100%"});
        goProdcut();
    });

    $(".top_menu_content  span").html("关于我们<br/>About");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){index2About();});

    $(".bottom_menu_content span").html("经典案例<br/>Cases");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){index2Anli();});
}
function anli2Index() {
    $("#index").css("z-index",10);
    $("#anli").css("z-index",5);
    $("#about").css("z-index",5);
    $("#index").animate({top: "0"}, 500, function () {
        $("#anli").css({top: "100%"});
        $("#about").css({top: "-100%"});
    });
    $(".top_menu_content  span").html("关于我们<br/>About");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){index2About();});

    $(".bottom_menu_content span").html("经典案例<br/>Cases");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){index2Anli();});
}
function anli2About() {
    $("#about").css("z-index",10);
    $("#anli").css("z-index",5);
    $("#index").css("z-index",5);
    $("#about").animate({top: "0"}, 500, function () {
        $("#index").css({top: "100%"});
        $("#anli").css({top: "-100%"});
    });

    $(".top_menu_content span").html("经典案例<br/>Cases");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){about2Anli();});

    $(".bottom_menu_content span").html("首页<br/>Home");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){about2Index();});

    $('.lf_menu_content').attr('onclick','').unbind('click').click(function(){about2Product();});
}
function anli2Prodcut() {

//        $("#index").css("z-index",10);
//        $("#anli").css("z-index",5);
//        $("#about").css("z-index",5);
//        $("#index").animate({top: "0"}, 500, function () {
//            $("#anli").css({top: "100%"});
//            $("#about").css({top: "-100%"});
//            $("#mainContent").animate({left:"100%"},500);
//
//        });
//        anli2Index();
    $("#index").css("z-index",10);
    $("#anli").css("z-index",5);
    $("#about").css("z-index",5);
    $("#index").animate({top: "0"}, 500, function () {
        $("#anli").css({top: "100%"});
        $("#about").css({top: "-100%"});
        goProdcut();
    });
    $(".top_menu_content span").html("关于我们<br/>About");
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){index2About();});

    $(".bottom_menu_content span").html("经典案例<br/>Cases");
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){index2Anli();});


}
function product2Anli(){
    goIndex();
    $("#mainContent").animate({left:"0"},250,function(){
        index2Anli();
    });

}
function product2About(){
    goIndex();
    $("#mainContent").animate({left:"0"},250,function(){
        index2About();
    });
//        $(".lf_menu_content").attr('onclick','').unbind('click').click(function(){about2Product();});

}
function goProdcut(){
    $("#mainContent").animate({left:"100%"},250);
//        $(".middle_lf_menu").hide();
//        $(".middle_rf_menu").show();
    $(".middle_menu1").hide();
    $(".middle_lf_menu").hide();
    $(".right_more_menu").hide();

    $(".middle_menu2").show();
    $(".middle_rf_menu").show();
    $(".left_more_menu").show();

    $(".left_menu_icon").hide();
    $(".right_menu_icon").hide();
//        $(".lf_menu_content").text("首页");
//        $(".middle_lf_menu").removeClass("middle_lf_menu").addClass("middle_rf_menu");
//        $(".lf_menu").removeClass("lf_menu").addClass("rf_menu");
//        $(".lf_menu_content").removeClass("lf_menu_content").addClass("rf_menu_content");
//        $('.rf_menu_content').attr('onclick','').unbind('click').click(function(){goIndex();});
//        $(".right_menu_txt").text("更多");
//        $(".right_menu").removeClass("right_menu").addClass("left_menu");
//        $(".right_more_menu").removeClass("right_more_menu").addClass("left_more_menu");
//        $(".right_menu_txt").removeClass("right_menu_txt").addClass("left_menu_txt");
//        $('.left_menu_txt').attr('onclick','').unbind('click').click(function(){showLeftMore();});
//        $(".right_menu_icon").removeClass("right_menu_icon").addClass("left_menu_icon");
//
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){product2About();});
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){product2Anli();});
}
function goIndex(){
    $("#index").css("z-index",10);
    $("#anli").css("z-index",5);
    $("#about").css("z-index",5);

    $("#mainContent").animate({left:"0"},250);

    $(".middle_menu1").show();
    $(".middle_lf_menu").show();
    $(".right_more_menu").show();

    $(".middle_menu2").hide();
    $(".middle_rf_menu").hide();
    $(".left_more_menu").hide();


    $(".left_menu_icon").hide();
    $(".right_menu_icon").hide();
//        $(".rf_menu_content").text("产品服务");
//        $(".middle_rf_menu").removeClass("middle_rf_menu").addClass("middle_lf_menu");
//        $(".rf_menu").removeClass("rf_menu").addClass("lf_menu");
//        $(".rf_menu_content").removeClass("rf_menu_content").addClass("lf_menu_content");
//        $('.lf_menu_content').attr('onclick','').unbind('click').click(function(){goProdcut();});
//        $(".left_menu_txt").text("更多");
//        $(".left_menu").removeClass("left_menu").addClass("right_menu");
//        $(".left_more_menu").removeClass("left_more_menu").addClass("right_more_menu");
//        $(".left_menu_txt").removeClass("left_menu_txt").addClass("right_menu_txt");
//        $('.right_menu_txt').attr('onclick','').unbind('click').click(function(){showRightMore();});
//        $(".left_menu_icon").removeClass("left_menu_icon").addClass("right_menu_icon");
//
    $('.top_menu_content').attr('onclick','').unbind('click').click(function(){index2About();});
    $('.bottom_menu_content').attr('onclick','').unbind('click').click(function(){index2Anli();});
}
function showRightMore(){
    $(".right_menu_icon").toggle("fast");
}
function showLeftMore(){
    $(".left_menu_icon").toggle("fast");
}
function showLogin(){
    $(".login").toggle("fast",function(){
        $("#div_brg0001").height($(document).height());
        $("#div_brg0001").width($(document).width());
        $("#div_brg0001").appendTo("body");
        if($(".login").is(":hidden")){
            $("#div_brg0001").hide();
        }else{
            $("#div_brg0001").show();
        }
    });

}
