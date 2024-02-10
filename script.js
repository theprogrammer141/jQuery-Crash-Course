//---------------------SELECTORS-----------------------
// $('h1').hide();
// $('h1#heading1').hide();
// $('h1.heading2').hide();
// $('.heading2').hide();

// $('p span').css('color', 'red');

// $('ul#list li:first').css('color', 'red');
// $('ul#list li:last').css('color', 'green');
// $('ul#list li:even').css('background-color', 'yellow');
// $('ul#list li:odd').css('background-color', 'gray');

// $(':button').hide();
// $(':submit').hide();
// $(':text').hide();

// $('[href]').css('color', 'red');
// $('a[href = "https://yahoo.com"]').css('color', 'green');

// $('*').hide();
//-------------------------------------------------------


//---------------------------EVENTS-----------------------
// $('#btn1').click(function(){
//     alert('button clicked!');
// });

// $('#btn1').on('click', function(){
//     alert('button clicked!');
// });

// $('#btn1').click(function()
// {
//     $('.para1').hide();
// })

// $('#btn1').click(function()
// {
//     $('.para1').toggle();
// })

// $('#btn2').click(function()
// {
//     $('.para1').show();
// })

// $('#btn1').dblclick(function()
// {
//     $('.para1').toggle();
// })

// $('#btn1').hover(function()
// {
//     $('.para1').toggle();
// })

// $('#btn1').on('mouseenter',function()
// {
//     $('.para1').hide();
// })
// $('#btn1').on('mouseleave',function()
// {
//     $('.para1').show();
// })

// $('#btn1').on('mousemove',function()
// {
//     $('.para1').toggle();
// })

// $('#btn1').on('mousedown',function()
// {
//     $('.para1').toggle();
// })

// $('#btn1').on('mouseup',function()
// {
//     $('.para1').toggle();
// })

// $('#btn1').click(function(e){
//      console.log(e);
//      alert(e.currentTarget.id);
//      alert(e.currentTarget.innerHTML);
//      alert(e.currentTarget.outerHTML);
//      alert(e.currentTarget.className);
// });

// $('#btn1').on('mousemove',function(e)
// {
//     console.log("Coords: Y:" + e.clientY + " X:" + e.clientX);    
// })

// $(document).on('mousemove',function(e)
// {
//     console.log("Coords: Y:" + e.clientY + " X:" + e.clientX);    
// })

// $(document).on('mousemove',function(e)
// {
//     $('#coords').html("Coords: Y:" + e.clientY + " X:" + e.clientX);    
// })

// $('input').focus(function()
// {
//     // alert('Focus');
//     $(this).css('background', 'pink');
// })

// $('input').blur(function()
// {
//     // alert('Focus');
//     $(this).css('background', 'white');
// })

// $('input').keyup(function(e)
// {
//     console.log(e.target.value);
// })

// $('select#gender').change(function(e)
// {
//     alert(e.target.value);
// })

// $('#form').submit(function(e)
// {
//     e.preventDefault();
//     let name = $('input#name').val();
//     console.log(name);
// })
//-------------------------------------------------------

//---------------------DOM MANIPULATION-------------------
// $('p.para1').css('color', 'red');
// $('p.para1').css({color:'red',background:'#ccc'});
// $('p.para2').addClass('myClass');
// $('p.para2').removeClass('myClass');
// $('#btn1').click(function()
// {
//     $('p.para2').toggleClass('myClass');
// })

// $('#myDiv').text('Hello World');
// $('#myDiv').html('<h3>Hello World</h3>');
// alert($('#myDiv').text());

// $('ul').append('<li>Append List Item</li>');
// $('ul').prepend('<li>Prepend List Item</li>');

// $('.para1').appendTo('.para2');
// $('.para1').prependTo('.para2');

// $('ul').before('<h4>Hello</h4>');
// $('ul').after('<h4>World</h4>');
// $('ul').empty();
// $('ul').detach();

// $('a').attr('target', '_blank');
// alert($('a').attr('href'));
// $('a').removeAttr('target');

// $('p').wrap('<h1>');
// $('p').wrapAll('<h1>');

// $('#newItem').keyup(function(e)
// {
//     let code = e.which;
//     if(code === 13)
//     {
//         e.preventDefault();
//         $('ul').append('<li>' + e.target.value + '</li>');
//     }
// });

// let myArr = ['Brad', 'Kelley', 'Nate', 'Jose'];

// $.each(myArr, function(i, val)
// {
//     $('#Users').append('<li>' + val + '</li>');
// })

// let newArr = $('ul#list li').toArray();
// $.each(newArr, function(i, val)
// {
//     console.log(val.innerHTML);
// })
//-------------------------------------------------------

//----------------EFFECTS & ANIMATIONS--------------------
// $('#btnFadeOut').click(function()
// {
//     $('#box').fadeOut(3000, function()
//     {
//         $('#btnFadeOut').text('Its Gone');
//     });
// });

// $('#btnFadeIn').click(function()
// {
//     $('#box').fadeIn();
// });

// $('#btnFadeTog').click(function()
// {
//     $('#box').fadeToggle(1000);
// });

// $('#btnSlideUp').click(function()
// {
//     $('#box').slideUp();
// });

// $('#btnSlideDown').click(function()
// {
//     $('#box').slideDown();
// });

// $('#btnSlideTog').click(function()
// {
//     $('#box').slideToggle(2000);
// });

// $('#btnStop').click(function()
// {
//     $('#box').stop();
// });

// $('#moveRight').click(function()
// {
//     $('#box2').animate(
//         {
//             left: 500,
//             height: '300px',
//             width: '300px',
//             opacity: '0.5'
//         }
//     )
// });

// $('#moveLeft').click(function()
// {
//     $('#box2').animate(
//         {
//             left: 0,
//             height: '100px',
//             width: '100px',
//             opacity: '1'
//         }
//     )
// });

// $('#moveAround').click(function()
// {
//     let box = $('#box2');
//     box.animate({
//         left: 300
//     });
//     box.animate({
//         top: 300
//     });
//     box.animate({
//         left: 0,
//         top: 300
//     });
//     box.animate({
//         left: 0,
//         top: 0
//     });
// })
//--------------------------------------------------------

//---------------------AJAX------------------------------
// $('#result').load('test1.html', function(responseTxt, statusTxt, xhr)
// {
//     if(statusTxt === "success")
//     {
//         alert('It went fine');
//     }else if(statusTxt === "error")
//     {
//         alert('Error: '+xhr.statusText);
//     }
// });

// $.get('test.html', function(data)
// {
//     $('#result').html(data);
// })

// $.getJSON('users.json', function(data)
// {
//     $.each(data, function(i, user)
//     {
//         $('ul#users').append('<li>' + user.firstName + '</li>');
//     })
// })

// $('postForm').submit(function(e)
// {
//     e.preventDefault();

//     let title = $('#title').val();
//     let body = $('#body').val();
//     let url = $(this).attr('action');

//     $.post(url, {title:title, body:body}).done(function(data)
//     {
//         console.log('Post Saved');
//         console.log(data);
//     })
// })