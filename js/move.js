/**
 * Created by lenovo on 2017/10/29.
 */
var Obl = document.getElementById('brick-promo-list');
var aItem = Obl.getElementsByTagName('li')[0];
//    console.log(oItem);
aItem.onmouseover = function () {
    aItem.zIndex = 2;
    aItem.style.top = aItem.offsetTop - 1 + 'px';
    aItem.style.boxShadow='0 15px 30px rgba(0,0,0,0.1)';
}
aItem.onmouseout = function () {
    aItem.zIndex = 1;
    aItem.style.top = aItem.offsetTop + 1 + 'px';
    aItem.style.boxShadow='';
}


var oTab_item=document.getElementsByClassName('tab-item');
for(var i=0;i<oTab_item.length;i++){
    oTab_item[i].index=i;
    oTab_item[i].timer=null;
    oTab_item[i].onmouseover=function () {
        var oReview=this.getElementsByClassName('review-wrapper')[0];
        show(this,80,10);
        this.style.top = aItem.offsetTop - 1 + 'px';
        this.style.boxShadow='0 15px 30px rgba(0,0,0,0.1)';
    }
    oTab_item[i].onmouseout=function () {
        show(this,0,-10);
        this.style.top = aItem.offsetTop + 1 + 'px';
        this.style.boxShadow='';
    }

}
function show(obj,target,speed) {
    var oReview=obj.getElementsByClassName('review-wrapper')[0];
    oReview.style.opacity=1;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        if (oReview.offsetHeight==target)
        {
            clearInterval(obj.timer);
        }
        else{
            oReview.style.height=oReview.offsetHeight+speed+'px';
        }

    },20);

}