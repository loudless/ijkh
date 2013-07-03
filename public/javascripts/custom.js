
//Функция показа пароля
$(function(){
    $(".showpassword").each(function(index,input) {
        var $input = $(input);
        $('<label class="showpasswordlabel"/>').append(
            $(" <input type='checkbox' id='show_pass_input' class='showpasswordcheckbox reg_freeze'>").click(function() {
                var change = $(this).is(":checked") ? "text" : "password";
                var rep = $("<input type='" + change + "' />")
                    .attr("id", $input.attr("id"))
                    .attr("name", $input.attr("name"))
                    .attr('class', $input.attr('class'))
                    .attr('placeholder', $input.attr('Пароль'))
                    .val($input.val())
                    .insertBefore($input);
                $input.remove();
                $input = rep;
                $input.attr('placeholder','Пароль');
             })
        ).append($("<span class='login_input_check_pass' />").html("<p>Показать пароль</p>")).insertAfter($input);
    });
});



$(document).ready(function($) {
//      растягиваем на весь экран контейнер
/*$(window).load(function() {
    var Window = $(window),
        $container = $('.nexus'),
        aspectRatio = $container.height();
        alert(aspectRatio)
    function Resize(){
        if ( Window.height() > aspectRatio) {
            $container
                        .removeClass();
             $container           .addClass('containerheight');
        }   
        else {}
    }
    Window.resize(function(){
        Resize();
    }).trigger('resize');
});*/



// Непонятно зачем нужная функция установки высоты контейнеров по высоте окна

// $('body').height($(window).height());
// $(".nexus").height($(window).height());    


//      синий квадрат в чекбоксе off/on

    $('.login_input_check').click(function(){
        if ($('#some_input').is(':checked')){
            $('.login_input_check').css('background-image','url(/images/checkbox_off.png)')
        }
        else {
            $('.login_input_check').css('background-image','url(/images/checkbox_on.png)')
        }
    })

    $('.login_input_check_pass').click(function(){
        if ($('#show_pass_input').is(':checked')){
            $('.login_input_check_pass').css('background-image','url(/images/checkbox_off.png)')
        }
        else {
            $('.login_input_check_pass').css('background-image','url(/images/checkbox_on.png)')
        }
    })

//      проверки импутов

    $('.login_input_check_oferta').click(function(){
        if ($('#some_input_oferta').is(':checked')){
            $('.login_input_check_oferta').css('background-image','url(/images/checkbox_off.png)')
            $('.oferta_link_disable').css('display','block');
            $('.submit_button_oferta').css('background-color','#8da9bc');
            $('.submit_button_oferta').css('color','#6a7f8d');
            $('.submit_button_oferta').css('text-shadow','1px 1px 0px #FFF');
        }
        else {
            $('.login_input_check_oferta').css('background-image','url(/images/checkbox_on.png)');
            $('.oferta_link_disable').css('display','none');
            $('.submit_button_oferta').css('background-color','#0071bc');
            $('.submit_button_oferta').css('color','#FFF');
            $('.submit_button_oferta').css('text-shadow','none');
        }
    })


    $('#reg_oferta_second_check').click(function(){
        if ($('.accept_oferta').find('#some_input').is(':checked')){
            $('.reg_oferta_second_check').css('background-image','url(/images/checkbox_off.png)')
            $('.reg_disable').css('display','block');
            $('.accept_data_button').css('background-color','#8da9bc');
            $('.accept_data_button').css('color','#6a7f8d');
            $('.accept_data_button').css('text-shadow','1px 1px 0px #FFF');
            $('.accept_data_button').attr('disabled','disabled');
        }
        else {
            $('.reg_oferta_second_check').css('background-image','url(/images/checkbox_on.png)');
            $('.reg_disable').css('display','none');
            $('.accept_data_button').css('background-color','#0071bc');
            $('.accept_data_button').css('color','#FFF');
            $('.accept_data_button').css('text-shadow','none');
            $('.accept_data_button').removeAttr('disabled');
        }
    });

//      всплытие дивов регистрации

    $('.accept_data_button').click(function(){
        $('#div_place').fadeIn('slow');
        //var HeightScreen = $(window).height();
        //$(HeightScreen).scrollBottom('slow')
    })

//  наполнение карточки объекта
    $('#accept_place_button').click(function(){
        var name = $('#reg_place_name').attr('value')
        var city = $('#reg_place_city').attr('value')
        var street = $('#reg_place_street').attr('value')
        var building = $('#reg_place_building').attr('value')
        var apartment = $('#reg_place_apartment').attr('value')
        $('.object_name').find('input').attr('value', name).show('slow');
        $('.object_adress').find('p').show('slow');
        $('.object_adress').find('.adress_blue').attr('value', city + ', ' + street + ', ' + building + ', ' + apartment).show('slow');
        $('#place_box').fadeOut('slow',function(){
            $('#service_box').fadeIn('fast');
        });
    })
     
    

//  меню

    $('.menulistLiDrop').mouseenter(function(){
        $('.menulistLiDrop').find('.dropdownMenu').slideDown('fast').show();
        $('.menulistLiDrop').hover(function() {
        }, function(){ 
        $('.menulistLiDrop').find(".dropdownMenu").slideUp('fast'); 
        });
    })

//      отрисовка селектов

$('select').each(function(){
    var select = $(this)
    var selectBoxContainer = $('<div>',{
        width       : '100%',
        class       : 'tzSelect',
        html        : '<div class="selectBox" id=' + this.getAttribute("id") + '></div>'
    });
 
    var dropDown = $('<ul>',{class:'dropDown'});
    var selectBox = selectBoxContainer.find('.selectBox');
    
    // Цикл по оригинальному элементу select
    
        select.find('option').each(function(i){
            var option = $(this);
            
            if(i==select.is('selected')){
                selectBox.html(option.text());
            }
            if(option.data('skip')){
                return true;
            }

            var li = $('<li>',{
                   html:   '<p>'+option.text()+'</p>'

                });

           li.attr("class", option.attr('class'));
           li.attr("id", option.attr('id'));
           li.attr("listType", option.attr('listType'));
           li.attr("serviceTypeId", option.attr('serviceTypeId'));
           li.attr("vendorId", option.attr('vendorId'));
           li.attr('onclick','sortFun(this);');

            li.attr('rel',option.val());
                if (li.attr('rel') % 2 == 0){
                   li.addClass('secondcolor')
                 // li.attr("class", option.attr('class'))
            }  

            li.click(function(){
                 
                selectBox.html(option.text());
                dropDown.trigger('hide');
                // изменения в оригинальном элементе select:
                select.val(option.val());
                 
                return false;
            });
             
            dropDown.append(li);
    });     
    selectBoxContainer.append(dropDown.hide());
    select.hide().after(selectBoxContainer);
     
    // Привязываем show и hide к элементу dropDown:
     
    dropDown.bind('show',function(){
       if(dropDown.is(':animated')){
            return false;
        }
         
        selectBox.addClass('expanded');
        dropDown.slideDown();

    }).bind('hide',function(){
         
        if(dropDown.is(':animated')){
            return false;
        }         

        selectBox.removeClass('expanded');
        dropDown.slideUp();        

    }).bind('toggle',function(){
        if(selectBox.hasClass('expanded')){
            dropDown.trigger('hide');
        }
        else dropDown.trigger('show');
    });
     
    selectBox.click(function(){
        
        dropDown.trigger('toggle');
        return false;
        
    });

    $(document).click(function(){
        dropDown.trigger('hide');
    });
});


$(".pay_text a:first-child").attr("class","object_selected"); //выделение первого элемента списка объектов/"счетов"
$(this).remove();

//     всплытие окон в профиле

    $('#profile_edit_button').click(function(){
        var ValueCheck = $('#profile_edit_button').attr('value')
        if (ValueCheck == 'Редактировать'){
            $('#profile_container').fadeOut('fast',function(){
                $('#profile_edit_container').fadeIn('slow')
                $('#profile_edit_button').attr('value','Сохранить')
                $('#profile_edit_button').prop('type','submit')
            })
        }
        else {
            $('#profile_edit_container').fadeOut('fast',function(){
                $('#profile_container').fadeIn('slow')
                $('#profile_edit_button').attr('value','Редактировать')
                $('#profile_edit_button').prop('type','button')
            })
        }
        
    })

//  Редактироване мест  

    // $('.place_edit_button').click(function(){
    //     var ValueCheck = $('.place_edit_button').attr('value')
    //     if (ValueCheck == 'Редактировать'){
    //         $('#place_info_container').fadeOut('fast',function(){
    //             $('#place_edit_container').fadeIn('slow')
    //             $('.place_edit_button').attr('value','Сохранить')
    //             $('.place_edit_button').attr('type','submit')
    //         })
    //     }
    //     else {
    //         $('#place_edit_container').fadeOut('fast',function(){
    //             $('#place_info_container').fadeIn('slow')
    //             $('.place_edit_button').attr('value','Редактировать')
    //             $('.place_edit_button').attr('type','button')
    //         })
    //     }
        
    // })

//  при наведении на объекты при платеже

            $('.object').mouseenter(function(){
               // $(this).css('background-color','#e8eef2');
                    $('.object').click(function(){
                    $('.pay_text').find('.object_selected').attr('class','object')
                    $(this).attr('class','object_selected');
                })


                var TrueClass = $(this).attr('class')
                $(this).mouseleave(function(){
                 //   $('.object').css('background-color','#d5e6f2');
                    
                })
            })



        // $('.service_pay').click(function(){
        //     $('.service_pay_block').find('.service_pay_selected').attr('class','service_pay')
        //     $(this).attr('class','service_pay_selected');
        // })



    // $('.service_pay').mouseenter(function(){
    //     //$(this).css('background-color','#d5e6f2');

    //     var TrueClass = $(this).attr('class')
    //     $(this).mouseleave(function(){
    //     //    $('.service_pay').css('background-color','#e8eef2');
            
    //     })
    // })

});

//  при наведении на объекты при платеже
function servicePayClick(thisElem)
{
    $('.service_pay_block').find('.service_pay_selected').attr('class','service_pay')
    $(thisElem).attr('class','service_pay_selected');
}

// рендер плашек
function popUpRender(message)
{
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    var scrollBottomValue = document.documentElement.scrollHeight - document.documentElement.clientHeight - scrolled;
    //alert(scrollBottomValue);
    if (scrollBottomValue >97){
        scrollBottomValue=97;
    }

    scrollBottomValue = 115 - scrollBottomValue;
    $('.for_pop_up').css('bottom',scrollBottomValue+'px');
    $('.for_pop_up').prepend('<div onclick="this.remove();" class="pop_up_div">' + '<h3>Информация</h3><p>' +  message + '</p></div>'); 
    $('.pop_up_div').fadeIn(1000);

    //var intervalID = setInterval(function() { $(".for_pop_up div:last-child").remove(); }, 3000);
    //setInterval(function() { if ($(".for_pop_up").html()==' ') {clearInterval(intervalID);} }, 1000);
    // $(".for_pop_up div:last-child").delay(2000).fadeOut(1000);
    // setTimeout('$(".for_pop_up").delay(5000).html("")', 5000);
    //$(".for_pop_up").delay(5000).html("");
}

//Отслеживание скроллинга для нормального отображения всплывающих сообщений

window.onscroll = function() { 

  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  var scrollBottomValue = document.documentElement.scrollHeight - document.documentElement.clientHeight - scrolled;
    if (scrollBottomValue >97){
        scrollBottomValue=97;
    }
    
  scrollBottomValue = 115 - scrollBottomValue;
   $('.for_pop_up').css('bottom',scrollBottomValue+'px');

}



// Функция сортировки услуг.

function sortFun(thisEl){
   // var myClass="'" + bla.attr("id")+ "'"; $(myClass).hide();
     //console.log(thisEl.getAttribute("listType"));
    //serviceTypeId=thisEl.getAttribute("serviceTypeId");
     //$(".vendors_option").show();
     //$("."+listId).hide();
     // var listType = thisEl.getAttribute("class");

    listType=thisEl.getAttribute("listtype");

     switch (listType)
     {
        case 'serviceType':
        // console.log('Услуга');
        var serviceTypeId=thisEl.getAttribute("id");
        $("[listtype=vendor]").hide();
        $("[servicetypeid="+serviceTypeId+"]").show();
        $('#serviceFreeze').css('height','50%');
        $("div#service_vendor_id").css("background-color", "#e8eef2");
        $("div#service_vendor_id").css("color", "#00558d");
        break

        case 'userTariff':
        $('#serviceFreeze').css('height','20%');
        $("[vendorid="+0+"]").show();
        break

        case 'vendor':
        // console.log('Вендор');
        var vendorId=thisEl.getAttribute("id");
        $("[listtype=tariff]").hide();
        $("[vendorid="+vendorId+"]").show();
        $('#serviceFreeze').css('height','16%');
        $("div#service_tariff_template_id").css("background-color", "#e8eef2");
        $("div#service_tariff_template_id").css("color", "#00558d");
        break

        case 'tariff':
        // console.log('Тариф');
        var hasReadings=thisEl.getAttribute("hasReadings");
        var tariffTemplateId = thisEl.getAttribute("id");
        $(".filed_template_section").hide();
        $("[tarifftemplateid="+tariffTemplateId+"]").slideDown();
        $('.dog_number').removeAttr("disabled");
        break

        case 'catalog':
        var catalogId=thisEl.getAttribute("id");
        $('.catalog_category').hide();
        $("#freelance_category_"+catalogId).show();
        $("#non_utility_service_type_"+catalogId).show();
        //alert("[freelance_category_"+catalogId+"]");
        break

        case 'showAllCategories':
        $('.catalog_category').show();
        break

        default:
        break
     }
}




