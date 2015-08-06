var arr = null;

$(document).ready(function(){
    $('.code-copy').zclip({
        path:'js/ZeroClipboard.swf',
        copy:function(){

            //var code = codeCopy();
            return arr;
            
        }
    });
});

/*$('.code-copy').hover(function()
{
    console.log('ddcd');
});*/



function tabSwitch(tab_box,new_tab, new_content) {

    var code = document.getElementById(tab_box).childNodes[3].childNodes;
    var tab = document.getElementById(tab_box).childNodes[1].childNodes[1]
.childNodes;
    code[1].style.display = 'none';
    code[3].style.display = 'none';

    //document.getElementById('objective-c_code').style.display = 'none';
    //document.getElementById('swift_code').style.display = 'none';
    //document.getElementById(new_content).style.display = 'block';   
     
 
    tab[1].className = 'button-codebox';
    tab[3].className = 'button-codebox';

    if(new_tab==='objective-c_tab')
    {
        code[1].style.display = 'block';
        tab[1].className = 'button-codebox selected';
    }
    else
    {
        code[3].style.display = 'block';
        tab[3].className = 'button-codebox selected';
    }
    //document.getElementById('objective-c_tab').className = 'button-codebox';
    //document.getElementById('swift_tab').className = 'button-codebox';
    //document.getElementById(new_tab).className = 'button-codebox selected';      
}

function codeCopy()
{
    if(document.getElementById('objective-c_tab').className == "button-codebox")
    {
        arr = document.getElementById('swift_code').childNodes;
    }
    else
    {
        arr = document.getElementById('objective-c_code').childNodes;
    }
    return arr[0].textContent;
}

function copyCode(tab_box)
{
    console.log('ddcd');
    var tab = document.getElementById(tab_box).childNodes[1].childNodes[1]
.childNodes;
var area = document.getElementById(tab_box).childNodes[3].childNodes;

    if(tab[1].className === "button-codebox")
    {
        arr = area[3].textContent;
    }
    else
    {
        arr = area[1].textContent;
    }
    
}