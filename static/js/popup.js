$('.btn-example').click(function(){
        var $href = $(this).attr('href');
        layer_popup($href);
    });
    function layer_popup(el){
        var $el = $(el);        //레이어의 id를 $el 변수에 저장
        var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수
        var index = el.split('#layer')[1];
        isDim ? $('#dim-layer'+ index).fadeIn() : $el.fadeIn();

        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();

        // 화면의 중앙에 레이어를 띄운다.
        if ($elHeight < docHeight || (1091 < $elWidth && $elWidth < docWidth)){
          $el.css({
              marginTop: -$elHeight /2,
              marginLeft: -$elWidth/2
          })
        }
        else {
            $el.css({top: 0, left: 0});
        }

        $el.find('a.btn-layerClose').click(function(){
            $('#iframe'+index).attr('src', $('#iframe'+index).attr('src'));
            isDim ? $('#dim-layer'+ index).fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
            return false;
        });

        $('.layer .dimBg').click(function(){
            $('#dim-layer'+ index).fadeOut();
            return false;
        });

    }
