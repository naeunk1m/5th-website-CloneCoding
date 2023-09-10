$(function(){



    gsap.to('.image-wrapper',{
        scrollTrigger:{
            trigger:".image-scroll",
            start:"0% 0%",
            end:"100% 100%",
            markers: true,
            scrub:0,
            invalidateOnRefresh: true
        },
        xPercent:-100,
        x:function(){
            return window.innerWidth;
        }
    })

    $('.scorll-img-area .bg').each(function(index,element){
        gsap.to($(this).find('img'),{
            scrollTrigger:{
                trigger:element,
                start:"0% 100%",
                end:"100% 0%",
                // markers:true,
                scrub:1,
            },
            yPercent:-30,
        })
    })
        
    gsap.to('.sc-spread-scroll .bg',{
        scrollTrigger:{
            trigger:'.sc-spread-scroll',
            start:"50% 100%",
            end:"100% 50%",
            // markers:true,
            scrub:0,
        },
        width:0,
    })

    gsap.to('.sc-showcase2 .motion-img.img8 img',{
        scrollTrigger:{
            trigger:'.sc-showcase2 .motion-img.img8',
            start:"0% 100%",
            end:"100% 50%",
            // markers:true,
            scrub:0,
        },
        width:'100vw',
    })







})