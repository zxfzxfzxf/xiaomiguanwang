/**
 * Created by lenovo on 2017/11/5.
 */
oTabList=document.getElementsByClassName('tab-list')[0];
aLi2=oTabList.getElementsByTagName('li');
aTabContent=document.getElementsByClassName('tab-content');
for(var i=0;i<aLi2.length;i++){
    aLi2[i].index=i;
    aLi2[i].onmouseover=function () {
        change(this);
    }
}

function change(obj,num) {
    for(var i=0;i<aLi2.length;i++){
        aLi2[i].className='';
    }
    obj.className='tab-active';
    for(var i=0;i<aTabContent.length;i++){
        aTabContent[i].className='tab-content hide';
    }
    aTabContent[obj.index].className='tab-content';
}