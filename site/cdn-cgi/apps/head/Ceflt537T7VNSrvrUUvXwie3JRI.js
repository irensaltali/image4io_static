;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="bdc3eb0b5fb01f313127ecb3e307d3b3";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["iyqnicHUufze"]={appId:"5WU-5JC_CQYe",scope:{}};;CloudflareApps.installs["iyqnicHUufze"].options={"cloudname":"i4io"};;CloudflareApps.installs["iyqnicHUufze"].URLPatterns=["^image4.io/en/blog/?.*$","^image4.io/tr/blog/?.*$"];;CloudflareApps.installs["iyqnicHUufze"].product={"id":"image4io"};;CloudflareApps.installs["p7OfhCvsXBKV"]={appId:"-wm7WSX-F1xo",scope:{}};;CloudflareApps.installs["p7OfhCvsXBKV"].options={};;if(CloudflareApps.matchPage(CloudflareApps.installs['iyqnicHUufze'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['iyqnicHUufze'].options;var initialized=false;function mainFetchUrl(){var origin=new URL(window.location.origin);var protocol='';if(origin.protocol!='https:'){protocol='http://';}
else{protocol='https://';}
var fetch=new URL(protocol+'cdn.image4.io/'+options.cloudname+'/fetch/f_auto/');return fetch;}
function imageUrl(src){var absoluteRegex=new RegExp('^(?:[a-z]+:)?\/\/.*\.(jpg|png|jpeg|webp)$','i');var relativeRegex=new RegExp('^(?:[\.]{0,2})?\/{0,2}.*\.(jpg|png|jpeg|webp)$','i');if(absoluteRegex.test(src)){return new URL(src);}
else if(relativeRegex.test(src)){var url=new URL(src,new URL(window.location.origin));return url;}}
function updateElements(){if(options&&options.cloudname){var imgs=document.getElementsByTagName("img");var fetch=mainFetchUrl();for(var i=0;i<imgs.length;i++){if(imgs[i].dataset.src){var url=imageUrl(imgs[i].dataset.src);imgs[i].src=fetch.href+url.href;}}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;updateElements();}})}else{updateElements()}
window.CloudflareApps.installs['iyqnicHUufze'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['p7OfhCvsXBKV'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['p7OfhCvsXBKV'].options;var initialized=false;function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/;domain="+window.location.hostname;}
function getParameterByName(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,'\\$&');var regex=new RegExp('[?&]'+name+'(=([^&#]*)|&|#|$)'),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g,' '));}
function checkCookie(cname){var cookie=getCookie(cname);if(cookie!=""){return true;}else{return false}}
function removeURLParameter(url,parameter){var urlparts=url.split('?');if(urlparts.length>=2){var prefix=encodeURIComponent(parameter)+'=';var pars=urlparts[1].split(/[&;]/g);for(var i=pars.length;i-->0;){if(pars[i].lastIndexOf(prefix,0)!==-1){pars.splice(i,1);}}
return urlparts[0]+(pars.length>0?'?'+pars.join('&'):'');}
return url;}
function setReferralCookie(){var ref=getParameterByName('ref');var newUrl=removeURLParameter(window.location.href,'ref');if(ref!=null&&!checkCookie('__pc_ref')){setCookie('__pc_ref',ref,30);}
if(history.pushState){window.history.pushState('','',newUrl);}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){if(initialized==false){initialized=true;setReferralCookie();}})}else{setReferralCookie()}
window.CloudflareApps.installs['p7OfhCvsXBKV'].scope={setOptions:function(nextOptions){options=nextOptions
setReferralCookie()}}}())}