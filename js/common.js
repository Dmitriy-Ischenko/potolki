$(document).ready(function() {

	
	
/**** mini calc *************/	

$('.mc_input_place input').keyup(function(){
   //  $(this).val(parseInt($(this).val()));
    if(parseInt($(this).val())>100){$(this).val('100');}
    if(parseInt($(this).val()<0)){$(this).val('0');}
   
	
     $(".mc_price").html(mcCalc($(this).val())+'<span> руб.</span>');
     $("#mc_slider-horizontal").slider({ value: $(this).val()});
});

 $(function() {
	
     
    $(".mc_price").html(mcCalc(10)+'<span> руб.</span>');	
	
    $("#mc_slider-horizontal").slider({
      range: "min",
      min: 1,
      max: 100,
	  step:1,
      value: 10,
      slide: function( event, ui ) {
       cc=ui.value;
		$(".mc_input_place input").val(cc);
		var res=mcCalc(cc);
		$(".mc_price").html(res+'<span> руб.</span>');
      }
    });
  });

 // $('.mc_price').draggable();
  
function mcCalc(cc){
	if (typeof type !== "undefined")
	{
		return cc*cena[type];
	}else{
		return cc;
	}
}

/*****************************************/

    var owl = $(".carousel_about");
	owl.owlCarousel({
		items : 1,
		loop:true,
		dots:true,
		nav:false,
		navText: ['',''],
		responsive:{
        0:{
            items:1
        },
        750:{
            items:1
        },
       
    }
		 
	});

 
    var owl = $(".carousel");
	owl.owlCarousel({
	//	items : 2,
		loop:true,
		dots:false,
		nav:true,
		navText: ['',''],
		responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        
        
       
    }
		 
	});
    var owl = $(".carousel-gallery");
	owl.owlCarousel({
	//	items : 2,
		loop:true,
		dots:false,
		nav:true,
		navText: ['',''],
		responsive:{
        0:{
            items:1
        },
        750:{
            items:1
        },
        992:{
            items:1
        },
        
       
    }
		 
	});
    
     var owl = $(".otz_carousel");
	owl.owlCarousel({
	//	items : 2,
		loop:true,
		dots:false,
		nav:true,
		navText: ['',''],
		responsive:{
        0:{
            items:1
        },
        750:{
            items:1
        },
        992:{
            items:1
        },
        
       
    }
		 
	});
    
/******************/	
	
	
	// отправка форм

	$('#zakaz_5min').click(function()
	{
            var name=$('.v_name').val();
            var tel=$('.v_tel').val();
    //Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'callback2' }]);
            $.ajax({
                    type: "POST",
                    url: "/forms.php",
                    data: "name="+name+"&tel="+tel+'&f=callback2',
                    success: function(data){ 
                         if (data=='ok')
                         {

                         //	alert ('Заявка успешно отправлена');
                                 $('.v_name').val('');
                                 $('.v_tel').val('');
                                 $('#hide-layout').fadeIn(300);								
                                 $('#spasibo').fadeIn(300);								
                                 SendComagic(name,tel,'callback2','');
                         }
                         else
                         {
                                         alert ('Ошибка при отправлении!!!  Сервер не отвечает!!!  Пожалуйста повторите отправку позже, или свяжитесь с нами по телефону +380-66-182-21-37');
                         };

                         } 
                    });
	});	
	
        
        
        
        $('#zakaz_rassr').click(function()
	{
		var name=$('.r_name').val();
		var tel=$('.r_tel').val();
	//Comagic.push(['addOfflineRequest', {name: name,  phone: tel, message: 'callback2' }]);
		$.ajax({
			   type: "POST",
			   url: "/forms.php",
			   data: "name="+name+"&tel="+tel+'&f=rassrochka',
			   success: function(data){ 
				if (data=='ok')
				{
				
				//	alert ('Заявка успешно отправлена');
					$('.r_name').val('');
					$('.r_tel').val('');
					$('#hide-layout').fadeIn(300);								
					$('#spasibo').fadeIn(300);								
					SendComagic(name,tel,'rassrochka','');
				}
				else
				{
						alert ('Ошибка при отправлении!!!  Сервер не отвечает!!!  Пожалуйста повторите отправку позже, или свяжитесь с нами по телефону +380-66-182-21-37');
				};
					
				} 
		 });
	
	
	});
        
        $('#callback-send1').click(function()
	{
	
		var name=$('.popup1 .pop_name').val();
		var tel=$('.popup1 .pop_tel').val();
		var type=$('.popup1 .pop_type').val();
		

		$.ajax({
			   type: "POST",
			   url: "/forms.php",
			   data: "name="+name+"&tel="+tel+'&f='+type,
			   success: function(data){ 
				if (data=='ok')
				{
					
					//alert ('Заявка успешно отправлена');
					$('#popup1').fadeOut(300);
					$('.pop_name').val('');
					$('.pop_tel').val('');
					$('#spasibo').fadeIn(300);
					SendComagic(name,tel,type,'');
				}
				else
				{
						alert ('Ошибка при отправлении!!!  Сервер не отвечает!!!  Пожалуйста повторите отправку позже, или свяжитесь с нами по телефону +380-66-182-21-37');
				};
					
				} 
		 });
	
	
	});
        
        $('#low_sand').click(function()
	{
            var name='NA';
            var tel=$('#low_tel').val();
            var type='low';

            $.ajax({
                    type: "POST",
                    url: "/forms.php",
                    data: "name="+name+"&tel="+tel+'&f='+type,
                    success: function(data){ 
                         if (data=='ok')
                         {
                             //alert ('Заявка успешно отправлена');

                             $('#low_tel').val('');
                             $('#hide-layout').fadeIn(300);	
                             $('#spasibo').fadeIn(300);
                             SendComagic(name,tel,type,'');
                         }
                         else
                         {
                             alert ('Ошибка при отправлении!!!  Сервер не отвечает!!!  Пожалуйста повторите отправку позже, или свяжитесь с нами по телефону +380-66-182-21-37');
                         };

                     } 
             });
	}); 
        
        $('#tovar_zakaz').click(function()
	{
            var name=$('.t_name').val();
            var tel=$('.t_tel').val();
            var email=$('.t_email').val();
            var txt=$('.t_txt').val();
            var art=$('.t_art').val();
            var id=$('.t_id').val();
            var type='item_send';

            $.ajax({
                    type: "POST",
                    url: "/forms.php",
                    data: "name="+name+"&tel="+tel+'&f='+type+"&email="+email+"&txt="+txt+"&art="+art+"&id="+id,
                    success: function(data){ 
                         if (data=='ok')
                         {
                             //alert ('Заявка успешно отправлена');

                             $('#low_tel').val('');
                             $('#hide-layout').fadeIn(300);	
                             $('#spasibo').fadeIn(300);
                             SendComagic(name,tel,type,'');
                         }
                         else
                         {
                             alert ('Ошибка при отправлении!!! Сервер не отвечает!!!  Пожалуйста повторите отправку позже, или свяжитесь с нами по телефону +380-66-182-21-37');
                         };

                     } 
             });
	});
        
        
        
        
       $('#callback-pozdr').click(function()
        {

                $.cookie('was', true, {  
                        expires: 1,  
                        path: '/'  
                  });   	
                var name=$('.pozdr_name').val();
                var tel=$('.pozdr_tel').val();


                $.ajax({
                           type: "POST",
                           url: "/forms.php",
                           data: "name="+name+"&tel="+tel+'&f=pozdr',
                           success: function(data){ 
                                if (data=='ok')
                                {

                                //	alert ('Заявка успешно отправлена');
                                        $('.pozdr_name').val('');
                                        $('.pozdr_tel').val('');
                                        $('#pozdr').fadeOut(300);
                                         $('#hide-layout_pozdr').fadeOut(300);	
                                         $('#hide-layout').fadeIn(300);	
                                        $('#spasibo').fadeIn(300);								
                                        SendComagic(name,tel,'pozdr','');
                                }
                                else
                                {
                                                alert ('Ошибка при отправлении!!! Сервер не отвечает!!! Пожалуйста повторите отправку позже, или свяжитесь с нами по телефону +380-66-182-21-37');
                                };

                                } 
                 });


        }); 

});

$("#low_tel").inputmask("+380 99-999-9999");
$(".v_tel").inputmask("+380 99-999-9999");
$(".r_tel").inputmask("+380 99-999-9999");
$(".pop_tel").inputmask("+380 99-999-9999");
$(".pozdr_tel").inputmask("+380 99-999-9999");
$(".t_tel").inputmask("+380 99-999-9999");




function callback_tel(){
	$('.popup1 .pop_type').val('call');
	$('.popup1 .header').html('ВАМ ПЕРЕЗВОНИТЬ?');
	$('.popup1 .header_sub').html('Мы перезвоним через 10 секунд!');
	$('#hide-layout, #popup1').fadeIn(300);
}

function callback_zamer(){
	$('.popup1 .pop_type').val('zamer');
	$('.popup1 .header').html('ВЫЗОВ ЗАМЕРЩИКА');
	$('.popup1 .header_sub').html('Мы перезвоним через 10 секунд!');
	$('#hide-layout, #popup1').fadeIn(300);
}
