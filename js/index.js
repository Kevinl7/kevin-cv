

//封装找id 函数
function $g(id){
    return document.getElementById(id);
}

function initial(e) {
    var section = document.getElementsByTagName("section");
    var wrap = document.getElementsByClassName('wrap')[0];
    var cY = window.screen.availHeight;
    wrap.style.height = 6 * cY + "px";
    for (var i = 0; i < section.length; i++) {
        section[i].style.height = cY + "px";
    }

    var num = 0;
    var clock =true;
    var dh = document.getElementById('hjdh');
    dh.style.display='none';
    //IE google 浏览器 鼠标滑轮事件
    document.body.addEventListener('mousewheel',function(e) {
        dhf();
        e = e || window.event;

        if (e.wheelDelta) {
            if(clock){
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    if (num == 0) {
                        return;
                    }
                    num--;
                    wrap.style.top = -cY * num + 'px';

                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时
                    if (num == 5) {
                        return;
                    }
                    num++;
                    wrap.style.top = -cY * num + 'px';
                }
                clock = false;
            }
            else{
                setTimeout(function(){
                    clock=true;
                },1000)
            }

        }

        console.log(wrap.style.top);
        //第一页特效
         if(parseInt(wrap.style.top)==-cY){
                var ion = $g('intro-icon');
                var iul = document.getElementsByClassName('iul')[0];
                var itxt = document.getElementsByClassName('itxt')[0];
                var sl1 =setInterval(function(){
                    ion.style.left = '4rem';
                    ion.style.top = '0px';

                },1000)
                var sl2 =setInterval(function(){
                    iul.style.top="1.8rem";
                    iul.style.left ='0.3rem';

                },1800)
                var sl3 =setInterval(function(){
                    itxt.style.top="1.8rem";
                    itxt.style.left="4.1rem";
                },2600)
            }
        //第二页特效
        if(parseInt(wrap.style.top)==-2*cY){
            var slt = document.getElementsByClassName('skill-title')[0];
            slt.style.webkitTransform = "rotate(720deg)";
            slt.style.MozTransform = "rotate(720deg)";
            slt.style.msTransform = "rotate(720deg)";
            slt.style.OTransform = "rotate(720deg)";
            slt.style.transform = "rotate(720deg)";


            setTimeout(function(){
                var slg = document.querySelectorAll('.skills .slls');
                for(var i=0; i<slg.length; i++){
                    slg[i].style.webkitTransform = "scale(1)";
                    slg[i].style.transform = "scale(1)";
                }
            },1000)
        }
        //第三页特效
        if(parseInt(wrap.style.top)==-3*cY){
            setTimeout(function(){
                var bwP = $g('bwP');
                bwP.style.opacity='1';
            },1000)

        }



    });

    //火狐 浏览器 鼠标滑轮事件
    document.body.addEventListener("DOMMouseScroll",function(e){
        dhf();
        if (e.detail) {
            if(clock){
                if (e.detail <0) { //当滑轮向上滚动时
                    if (num == 0) {
                        return;
                    }
                    num--;
                    wrap.style.top = -cY * num + 'px';
                    console.log(e);
                }
                if (e.detail > 0) { //当滑轮向下滚动时
                    if (num == 5) {
                        return;
                    }
                    num++;
                    wrap.style.top = -cY * num + 'px';
                }
                clock = false;
            }else{
                setTimeout(function(){
                    clock = true;
                },1000)
            }

        }
        //第一页特效
        if(parseInt(wrap.style.top)==-cY){
            var ion = $g('intro-icon');
            var iul = document.getElementsByClassName('iul')[0];
            var itxt = document.getElementsByClassName('itxt')[0];
            var sl1 =setInterval(function(){
                ion.style.left = '4rem';
                ion.style.top = '0px';

            },1000)
            var sl2 =setInterval(function(){
                iul.style.top="1.8rem";
                iul.style.left ='0.3rem';

            },1800)
            var sl3 =setInterval(function(){
                itxt.style.top="1.8rem";
                itxt.style.left="4.1rem";
            },2600)
        }
        //第二页特效
        if(parseInt(wrap.style.top)==-2*cY){
            var slt = document.getElementsByClassName('skill-title')[0];
            slt.style.webkitTransform = "rotate(720deg)";
            slt.style.MozTransform = "rotate(720deg)";
            slt.style.msTransform = "rotate(720deg)";
            slt.style.OTransform = "rotate(720deg)";
            slt.style.transform = "rotate(720deg)";


            setTimeout(function(){
                var slg = document.querySelectorAll('.skills .slls');
                for(var i=0; i<slg.length; i++){
                    slg[i].style.webkitTransform = "scale(1)";
                    slg[i].style.transform = "scale(1)";
                }
            },1000)
        }
        //第三页特效
        if(parseInt(wrap.style.top)==-3*cY){
            setTimeout(function(){
                var bwP = $g('bwP');
                bwP.style.opacity='1';
            },1000)

        }


    });



    //导航条事件
    function dhf(){
        if(wrap.style.top!=0){
            dh.style.display='block';
        }
        else{
            dh.style.display='none';
        }
    }



    dh.addEventListener('click',function(){
        wrap.style.top=0;
        dh.style.display='none';
        num=0;
    })

     //更改图片
    var photo = $g('myPhoto');
    photo.addEventListener('mouseenter',function(){
        this.src='img/z11.png';
    });
    photo.addEventListener('mouseleave',function(){
        this.src='img/photo.png';
    })

    var sections = document.getElementsByTagName('section');

    //第四页特效 轮播图
    var ppr = document.getElementsByClassName('ppr')[0];
    var ppl = document.getElementsByClassName('ppl')[0];
    var ul = document.getElementsByClassName('lbul')[0];
    var lis = ul.children;
    var tbx=0;
    ppr.addEventListener('click',function(){
        if(tbx==4){
            return false;
        }
        else{
            for(var i =0; i<lis.length-2; i++){
                lis[i].style.display="none";
            }
            tbx++;
            lis[tbx].style.display="block";
        }

    })
    ppl.addEventListener('click',function(){
        if(tbx==0){
            return false;
        }
        else{
            for(var i =0; i<lis.length-2; i++){
                lis[i].style.display="none";
            }
            tbx--;
            lis[tbx].style.display="block";
        }




    })

}
//添加 load 事件
window.addEventListener('load',initial,false);
