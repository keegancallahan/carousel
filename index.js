// eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 3=["3/A.5","3/z.5","3/y.5","3/x.5","3/w.5","3/C.5"];a i=0;a 6=[];4 h(){i>0?e(--i):0}4 d(){i+1<3.b?e(++i):j()}4 e(){$("#k-g-7-9").F("E",3[i]);$("#c-7>D").G("u")}4 j(){a 8=0;f(6.b!==0){6.t(4(q){8+=v(q)});8=(s.B((8/6.b)*m)/m).Q(2)}$("#k-g-7-9+U").T("W H V X Y. S R K J: "+8)}$(I).L(4(){$("#c-7").9("M",4(){f(i<3.b){6[i]=$("#c-7").P();d()}});$("#r-p .o[l=\'O\']").9("n",d);$("#r-p .o[l=\'N\']").9("n",h)});',61,61,'|||images|function|jpg|votes|vote|ave|on|var|length|your|nextImage|changeImage|if|to|previousImage||calculateVotes|image|value|100|click|btn|wrapper|element|buttons|Math|forEach|selected|parseInt|food6|food5|food4|food3|food2|round|food7|option|src|attr|removeAttr|have|document|was|score|ready|change|Back|Skip|val|toFixed|deliciousness|Total|text|div|reached|You|the|end'.split('|'),0,{}))


var images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg"];
var index = 0;

var previousImage = function(index, length) {
  if (index<=0) {
    return length-1;
  } else {
    return index-1;
  }
}
var nextImage = function(index, length) {
  return ((index+1)% length);
}

$("#buttons-wrapper .btn[value='Skip']").on("click", function() {
  index = nextImage(index, images.length);
  $("#image-to-vote-on").attr("src", images[index]);
});

$("#buttons-wrapper .btn[value='Back']").on("click", function() {
  index = previousImage(index, images.length);
  $("#image-to-vote-on").attr("src", images[index]);
});
