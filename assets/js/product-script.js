$(document).ready(function() {

    $(".form-select").click(function(){
        setTimeout(function(){
            var variantStock = $('[data-product-stock]').text();
            // console.log(variantStock);
            if(variantStock >= 1){ 
                $(".form-field.form-field--stock").addClass("in-stock");
                $(".form-field.form-field--stock").removeClass("out-stock");   
                // console.log("instock to");
                          
            }else if(variantStock == "0"){
                $(".form-field.form-field--stock").addClass("out-stock");
                $(".form-field.form-field--stock").removeClass("in-stock");
            }else{
            }
        },1000);  
    });

    setTimeout(function(){
        var variantStock = $('[data-product-stock]').text();
        if(window.BCData.product_attributes.instock == true){
            setTimeout(function(){

                $(".form-field.form-field--stock").removeClass("u-hiddenVisually");
                $(".form-field.form-field--stock").addClass("in-stock");
                

            },1000);

        }else{
            setTimeout(function(){
                $(".form-field.form-field--stock").removeClass("u-hiddenVisually");
                $(".form-field.form-field--stock").addClass("out-stock");
              
            },1000);
        }
    },1000);
});


//===================

$(document).ready(function(){
    $('.nav-tab').click(function(e) {
        //Toggle tab link
        $(this).addClass('nav-tab-active').siblings().removeClass('nav-tab-active');

      //Toggle target tab
        $($(".tab-content")).addClass('active').siblings().removeClass('active');

    });

    $('.image-layers img.first').click(function(e) {
        $('.image-layers img.first').hide();
        $('.image-layers img.sec').show();
        $('.types-of-foams .text-section.first').hide();
        $('.types-of-foams .text-section.sec').show();
    });
    $('.image-layers img.sec').click(function(e) {
        $('.image-layers img.sec').hide();
        $('.image-layers img.third').show();
        $('.types-of-foams .text-section.sec').hide();
        $('.types-of-foams .text-section.third').show();
    });
    $('.image-layers img.third').click(function(e) {
        $('.image-layers img.third').hide();
        $('.image-layers img.fourth').show();
        $('.types-of-foams .text-section.third').hide();
        $('.types-of-foams .text-section.fourth').show();
    });
    $('.image-layers img.fourth').click(function(e) {
        $('.image-layers img.fourth').hide();
        $('.image-layers img.fifth').show();
        $('.types-of-foams .text-section.fourth').hide();
        $('.types-of-foams .text-section.fifth').show();
    });
    $('.image-layers img.fifth').click(function(e) {
        $('.image-layers img.fifth').hide();
        $('.image-layers img.first').show();
        $('.types-of-foams .text-section.fifth').hide();
        $('.types-of-foams .text-section.first').show();
    });
  
});


//==================================
$(document).ready(function () {
    $('.nav-tab').click(function(e) {
        //Toggle tab link
        $(this).addClass('nav-tab-active').siblings().removeClass('nav-tab-active');

        //Toggle target tab
        // console.log($($(this).attr('href')).addClass('active').siblings().removeClass('active'));

        
        });

        // 
        $.fn.wrapInTag = function(opts) {
  
            var tag = opts.tag || 'strong',
                words = opts.words || [],
                regex = RegExp(words.join('|'), 'gi'),
                replacement = '<'+ tag +'>$&</'+ tag +'>';
            
            return this.html(function() {
                return $(this).text().replace(regex, replacement);
            });
            };

            $(".measurementData td.productView-info-value.size").wrapInTag({

                tag: 'b',
                words: ['King', 'Full', 'Queen', 'Twin']
            });

            console.log();

    });
//==========================

$(document).ready(function() {
    // Special Features
        if ($(".show-features > div").find("ul").length > 0) {
            $('.special-feature').show();
        } else {
            $('.special-feature').hide();
        }
    // Product Warranty
        if ($(".table-warranty").length > 0){
            $("#product--warranty").show();
        }else{
            $("#product--warranty").hide();
        }
    // Product Measurement
        if ($(".measurementData").length > 0){
            $("#prod--measurement").show();
        }else{
            $("#prod--measurement").hide();
        }
    // Product Specification
        if($(".Product_spec--table").length > 0){
            $(".specification--container").show();
        }else{
            $(".specification--container").hide();
        }
}); 

//========================================
$(document).ready(function() {
    $('.grn-matt-form .form-select#attribute_select_182').on('change', function() {
          var value = $(this).val();
          // alert(value);
          if(value == "378"){
            //   console.log(`6"`);
              $(".prodview-anatomy.green-anatomy div img").attr('src','https://cdn11.bigcommerce.com/s-z2qdisybty/product_images/uploaded_images/gt-6.gif?t=1641369872&_gl=1*52ddif*_ga*MTgzNTE5MzI1My4xNjE3Nzc3MjAy*_ga_WS2VZYPC6G*MTY0MTM2OTg5Ni41NTUuMC4xNjQxMzY5ODk2LjYw');
          }else if(value == "383"){
            //   console.log("8");
              $(".prodview-anatomy.green-anatomy div img").attr('src','https://cdn11.bigcommerce.com/s-z2qdisybty/product_images/uploaded_images/gt-8.gif?t=1641369877&_gl=1*1tjl55z*_ga*MTgzNTE5MzI1My4xNjE3Nzc3MjAy*_ga_WS2VZYPC6G*MTY0MTM2OTg5Ni41NTUuMC4xNjQxMzY5ODk2LjYw');
          }else if(value == "384"){
            //   console.log(`10"`);
              $(".prodview-anatomy.green-anatomy div img").attr('src','https://cdn11.bigcommerce.com/s-z2qdisybty/product_images/uploaded_images/gt-10.gif?t=1641369881&_gl=1*1tjl55z*_ga*MTgzNTE5MzI1My4xNjE3Nzc3MjAy*_ga_WS2VZYPC6G*MTY0MTM2OTg5Ni41NTUuMC4xNjQxMzY5ODk2LjYw');
          }else if(value == "385"){
            //   console.log(`12"`);
              $(".prodview-anatomy.green-anatomy div img").attr('src','https://cdn11.bigcommerce.com/s-z2qdisybty/product_images/uploaded_images/gt-12.gif?t=1641369885&_gl=1*489t08*_ga*MTgzNTE5MzI1My4xNjE3Nzc3MjAy*_ga_WS2VZYPC6G*MTY0MTM2OTg5Ni41NTUuMC4xNjQxMzY5ODk2LjYw');
          }else if(value == "386"){
            //   console.log(`14"`);
              $(".prodview-anatomy.green-anatomy div img").attr('src','https://cdn11.bigcommerce.com/s-z2qdisybty/product_images/uploaded_images/gt-14.gif?t=1641369890&_gl=1*489t08*_ga*MTgzNTE5MzI1My4xNjE3Nzc3MjAy*_ga_WS2VZYPC6G*MTY0MTM2OTg5Ni41NTUuMC4xNjQxMzY5ODk2LjYw');
          }else{
            //   console.log("Choose Options");
              $(".prodview-anatomy.green-anatomy div img").attr('src','https://cdn11.bigcommerce.com/s-z2qdisybty/product_images/uploaded_images/bed-anatomy-02.gif?t=1637111885&_gl=1*w8wq5a*_ga*MTgzNTE5MzI1My4xNjE3Nzc3MjAy*_ga_WS2VZYPC6G*MTYzNzExMTQwNy4zODAuMS4xNjM3MTExODgyLjQ2');

          }
      });
  
  });
  
//=============================================
$(document).ready(function(){
    function addEventListenerStamped(el, eventName, handler) { 
        if (el.addEventListener) { el.addEventListener(eventName, handler); }
        else { el.attachEvent('on' + eventName, function () { handler.call(el); }); } 
        }

        // Listening for event
        addEventListenerStamped(document, '##replaceWithEventName##', function(e) {

        });
        // Example
        // Listening for reviews widget loaded event
        addEventListenerStamped(document, 'stamped:reviews:loaded', function(e) {
            var count = $('#tab-reviews').attr('data-count');
            var reviews = $('#label_reviews');
            var str = '';
            if(count < 1 ){
                str  = '( No ratings yet )';	
            }else{
                str = '(' + count + ' reviews )';
            }
            reviews.text(str);
        });
  //GETTING THE VALUES OF SIZE
  var values = $.map($(".form-select.form-select--small[size] :not(option[value=''])"), function(e, index) { 
    
    index+=1;
    return e.text; 
  
  });

    function hasNumber(myString) {
        return /\d/.test(myString);
    }


    var containsNumber = hasNumber(values);
    if(containsNumber == true){

      
      $('.measurementData td.test-data').text(values.join(', '));
    }else{
      $('.measurementData td.test-data').text(values.join(', '));
    }
    


    $.fn.wrapInTag = function(opts) {

      var tag = opts.tag || 'strong'
        , words = opts.words || []
        , regex = RegExp(words.join('|'), 'gi') // case insensitive
        , replacement = '<'+ tag +'>$&</'+ tag +'>';

      return this.html(function() {
        return $(this).text().replace(regex, replacement);
      });
      };

      // Usage
      $(".measurementData td.test-data").wrapInTag({
      tag: 'b',
      words: ['King', 'Queen', 'Twin', 'Cal King', 'XL', 'Full' ]
        
      });
      // GETTING THE VALUES OF THICKNESS
      var values = $.map($(".form-select.form-select--small[thickness] :not(option[value=''])"), function(e, index) { 
        // alert(index);
        return e.text ;
      });
      $(".measurementData td.data-thick").text(values.join(', '));

      if(values == ""){
          $(".measurementData.thickness").hide();
      }else{
        $(".measurementData.thickness").show();
      }

  });   

//===============================
$(document).ready(function(){
    $(".other-detail label").on('click', function() {
        $(this).toggleClass('is-active');
    });
});     
