(function ($) {
    $.fn.zoomy = function(urls, options) {
        if(!urls) return;
        if(typeof urls === 'string') urls = [urls];
        if(!this.hasClass('zoom')) this.addClass('zoom');
        //OPTIONS
        if(!options) options = {};
        if(urls.length<2) options.thumbHide=1;
        if(options.height || options.width) {
            var st = (options.height) ? 'height:'+options.height+'px;' : '';
            if(options.width) st+='width:'+options.width+'px;';
            this.attr('style',st);
        }
        if(options.thumbRight || options.thumbLeft) this.addClass('zoom-right');
        if(options.thumbLeft) this.addClass('zoom-left');
        //REND
        var thumbMode = (typeof urls[0] === 'string') ? 0 : 1;
        var firstImage = (thumbMode) ? urls[0].image : urls[0];
        var h = '<div class="zoom-main"><span class="zoom-mousemove" style="background-image: url('+firstImage+')">';
        h+='<img src="'+firstImage+'" /></span></div>';
        //THUMBS
        if(!options.thumbHide) {
            h+="<div class='zoom-thumb'>";
            $.each(urls,function(i,url){
                var image  = (thumbMode) ? url.image : url;
                var thumb  = (thumbMode) ? url.thumb : url;
                h+="<a class='zoom-click' data-url='"+image+"' data-index='"+i+"'><img src='"+thumb+"' /></a>";
            });
            h+="</div>";
        }
        if(options.thumbHide) this.addClass('zoom-thumb-hide');
        this.html(h);
        this.find('.zoom-mousemove').on('mousemove',function(e){
            var zoomer = e.currentTarget;
            e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
            e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
            x = offsetX/zoomer.offsetWidth*100
            y = offsetY/zoomer.offsetHeight*100
            zoomer.style.backgroundPosition = x + '% ' + y + '%';
        });
        var event = (options.thumbHover) ? 'mouseover' : 'click';
        this.find('.zoom-click').on(event,function(){
            var main = $(this).parent().parent().find('.zoom-main > span')
            $(main).attr('style',"background-image: url("+$(this).attr('data-url')+")");
            $(main).find('img').attr('src',$(this).attr('data-url'));
        });
    };
}(jQuery));