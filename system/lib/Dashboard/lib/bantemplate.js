const _0x1d6811=_0x49a2;!function(e,t){const n=_0x49a2,o=_0x3147();for(;;)try{if(337222===-parseInt(n(408))/1+parseInt(n(551))/2*(-parseInt(n(452))/3)+-parseInt(n(563))/4*(parseInt(n(430))/5)+parseInt(n(434))/6+-parseInt(n(450))/7*(-parseInt(n(456))/8)+parseInt(n(525))/9*(parseInt(n(445))/10)+-parseInt(n(419))/11)break;o.push(o.shift())}catch(e){o.push(o.shift())}}();let idinpro,restarts=0;function changeTheme(e){const t=_0x49a2;let n=t(533)==e?t(533):t(461),o={data:tokenizer,mode:n},s=JSON[t(505)](o);document[t(422)]=t(518)+s+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",restarts+=1,restarts>=3&&(window.location[t(428)]=t(558)),document[t(527)](t(564))[t(428)]=t(533)==e?t(451):t(412),"light"==n?(document[t(527)](t(520))[t(552)](t(470),t(530)),document[t(527)](t(438)).setAttribute(t(406),"color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);"),document[t(527)](t(480)).setAttribute(t(406),"")):(document[t(527)](t(520))[t(552)]("class","fa-solid fa-moon"),document[t(527)](t(438))[t(552)](t(406),""),document.getElementById(t(480))[t(552)]("style",t(488))),document.getElementById("changeTheme")[t(552)]("data-bs-theme",n)}function profileAccount(){const e=_0x49a2;window[e(544)](e(503)+idinpro,e(500))}document[_0x1d6811(538)]=async function(){const e=_0x1d6811;e(460)===document[e(426)]&&fetch(e(535),{method:e(497),headers:{"Content-Type":e(415)},body:JSON[e(505)]({token:tokenizer,tokenizer:e(508)})})[e(420)]((t=>t[e(439)]()))[e(420)]((async t=>{const n=e;if(1!=t[n(506)])return Swal[n(532)]("Access Failed",n(513),n(543))[n(420)]((e=>{const t=n;1==e[t(471)]||e[t(455)],window[t(554)][t(428)]=t(449)}));{document[n(527)]("dp")[n(478)]=t[n(425)].profile,document[n(527)]("dps")[n(478)]=t.info[n(555)],idinpro=t[n(425)].id,document[n(527)]("nam")[n(504)]=t.info[n(502)];let e=JSON[n(476)](document[n(422)][n(548)]("; ").find((e=>e[n(447)](n(484))))[n(548)](" ")[0].split(" ")[0][n(474)](n(518),""))[n(466)],o=n(533)==e?"light":n(461),s=document[n(473)](n(492));s[n(428)]=n(533)==e?n(451):n(412),s[n(442)]=n(553),s.id="UmaruTheme",document[n(485)].appendChild(s),n(533)==e?(document[n(527)](n(520))[n(552)](n(470),n(530)),document.getElementById(n(438))[n(552)](n(406),n(488))):(document[n(527)](n(520))[n(552)](n(470),n(561)),document.getElementById(n(480)).setAttribute("style","color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);")),document[n(527)](n(437))[n(552)]("data-bs-theme",o);let i=document[n(527)](n(559));await new Promise((e=>setTimeout(e,1e3)));for(let e=9;e>=0;e--)i[n(406)].opacity="0."+e,await new Promise((e=>setTimeout(e,20)));i[n(406)][n(459)]=n(507),document[n(527)](n(423))[n(406)][n(459)]=n(516)}document.getElementById(n(560))[n(504)]+=t.sc,document[n(527)](n(496)).innerHTML+=t[n(496)]}))[e(410)]((e=>{}))};const extensions=[_0x1d6811(495),".mov",_0x1d6811(413),_0x1d6811(427),".wmv",_0x1d6811(462),_0x1d6811(482),_0x1d6811(463),".mpeg",".3gp",_0x1d6811(517),_0x1d6811(501),_0x1d6811(416),_0x1d6811(432),_0x1d6811(477)],videoExtensions=[_0x1d6811(495),_0x1d6811(537),".avi",".flv",".wmv",_0x1d6811(462),".m4v",_0x1d6811(463),".mpeg",_0x1d6811(509),".webm"];let welcome=document.getElementById("addons_welcome"),reason1=document[_0x1d6811(527)](_0x1d6811(528)),configs={};function saveAndRestart(){const e=_0x1d6811;configs.Addons[e(566)].user=welcome[e(468)],configs.Addons[e(566)][e(467)]=reason1[e(468)],welcome.value=configs[e(407)].isBanned[e(562)],reason1.value=configs[e(407)].isBanned[e(467)],fetch(e(535),{method:e(497),headers:{"Content-Type":e(415)},body:JSON[e(505)]({token:tokenizer,tokenizer:e(547),type:"save",data:configs})}).then((t=>t[e(439)]())).then((t=>{const n=e;1==t[n(506)]&&Swal[n(532)](n(494),n(411),n(506))}))[e(410)]((e=>{}))}function ResetToDefault(){const e=_0x1d6811;Swal.fire({title:e(567),text:e(458),icon:e(543),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:e(457),confirmButtonText:e(446)})[e(420)]((t=>{const n=e;t[n(471)]&&(configs[n(407)].isBanned.user=n(440),configs.Addons[n(566)][n(467)]=n(546),welcome[n(468)]=configs.Addons[n(566)][n(562)],reason1.value=configs[n(407)].isBanned.thread,fetch(n(535),{method:n(497),headers:{"Content-Type":n(415)},body:JSON[n(505)]({token:tokenizer,tokenizer:n(547),type:"save",data:configs})})[n(420)]((e=>e[n(439)]())).then((e=>{const t=n;1==e[t(506)]&&Swal[t(532)]("Operation successful",t(411),"success")}))[n(410)]((e=>{})))}))}function _0x49a2(e,t){const n=_0x3147();return _0x49a2=function(e,t){return n[e-=406]},_0x49a2(e,t)}function getDatas(e,t){const n=_0x1d6811,o=function(){let e=!0;return function(t,n){const o=e?function(){if(n){const e=n[_0x49a2(565)](t,arguments);return n=null,e}}:function(){};return e=!1,o}}();(function(){o(this,(function(){const e=_0x49a2,t=new RegExp(e(491)),n=new RegExp(e(526),"i"),o=_0x21324d("init");t[e(479)](o+"chain")&&n[e(479)](o+e(557))?_0x21324d():o("0")}))()})(),fetch(n(535),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:tokenizer,tokenizer:n(534),type:e})}).then((e=>e[n(439)]()))[n(420)]((o=>{const s=n;let i=document[s(527)](t);i[s(504)]="";for(const n in o[s(454)]){console[s(541)](n);let a,c=n[s(548)]("/"),r=c[c.length-1];n[s(472)](s(421))||(s(540)!=t||[s(501),".jpeg",s(432)][s(524)]((e=>n[s(472)](e))))&&(a=s(489)+(videoExtensions[s(524)]((e=>n[s(472)](e)))?n+s(501):n)+'" style="max-height: 130px;  min-height: 130px; max-width: 262px; margin-top: 10px;" onclick="window.open(\''+n+s(436),console[s(541)](t),1==o.image[n]?(i[s(504)]+='\n            <div class="col" id="items">\n          <div class="mostItem">\n            '+a+s(448)+(r[s(414)]>=25?r[s(483)](0,25)+s(417):r)+'</p>\n            <div class="form-check form-switch">\n              <button type="button" class="btn btn-danger" style="float: left; margin-left: 5px;" onClick="deleteThis(\''+n+s(556)+e+s(529)+n+s(431)+n+s(556)+e+s(435),document[s(527)](n)[s(545)]=!0):(i[s(504)]+=s(465)+a+s(448)+(r[s(414)]>=25?r[s(483)](0,25)+s(417):r)+s(536)+n+s(556)+e+s(529)+n+s(431)+n+s(556)+e+s(469),document[s(527)](n)[s(545)]=!1))}}))[n(410)]((e=>{}))}function deleteThis(e,t){const n=_0x1d6811;fetch(n(535),{method:n(497),headers:{"Content-Type":n(415)},body:JSON.stringify({token:tokenizer,tokenizer:n(499),type:n(464),event:e})})[n(420)]((e=>e.json())).then((e=>{const o=n;1==e[o(506)]&&o(510)==t&&getDatas(o(510),"getCustom")}))[n(410)]((e=>{}))}function _0x3147(){const e=["style","Addons","108766XsNgvx","map","catch","The operation was successful","lib/dark.css",".avi","length","application/json",".jpeg","...","join","1956207CNQHJT","then",".mp4.jpg","cookie","content","disable","info","readyState",".flv","href","target","80495kwTbUn",'" style="float: right; margin-right: 47px;  font-size: 1.6em;" onchange="switchData(\'',".png","The file should not be bigger than 20MB","2085642cNUEHx",'\')" checked>\n              </div>\n              <div class="mostItemPadding">\n            <div>\n          </div>\n        </div>\n            ',"', '_blank')\"></img>","changeTheme","lightModes","json","Your unable to use bot \n\nReason: {reason}","size","rel","onchange","call","10MeRpYH","Yes, reset it","startsWith",'\n            <p style="margin-top: 10px;">',"index.html","198583aQDuIJ","lib/light.css","592617QrAzkK","action","image","isDismissed","16VHduAJ","#d33","You can't undo this action","display","complete","dark",".mkv",".mpg","delete",'\n        <div class="col" id="items">\n          <div class="mostItem">\n            ',"mode","thread","value",'\')">\n              </div>\n              <div class="mostItemPadding">\n            <div>\n          </div>\n        </div>\n            ',"class","isConfirmed","endsWith","createElement","replace","bantemplateupload","parse",".gif","src","test","darkModes","values",".m4v","substring","key","head","while (true) {}","myFiles","color: rgb(96, 133, 255); text-shadow: 0 0 1em rgb(96, 133, 255);",'<img src="',"enable","function *\\( *\\)","link","onerror","Operation successful",".mp4","allright","POST","gger","bantemplatecore","_blank",".jpg","realname","https://facebook.com/","innerHTML","stringify","success","none","token",".3gp","random","onload","Error occurred while reading the file:","You must login first","error","string","block",".webm","key=",'{}.constructor("return this")( )',"DarkAndLight","result","files","constructor","some","5491863iCIhhV","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","getElementById","reason1",'\')"><i class="fa-solid fa-trash"></i><span style="margin-left: 10px;">Delete</span></button>\n              <input class="form-check-input" type="checkbox" role="switch" id="',"fa-solid fa-sun","Operation unsuccessful","fire","light","getbantemplatepic","/graphql",'</p>\n            <div class="form-check form-switch">\n              <button type="button" class="btn btn-danger" style="float: left; margin-left: 5px;" onClick="deleteThis(\'',".mov","onreadystatechange","name","getPicture","log","debu","warning","open","checked","Your thread is unable to use bot \n\nReason: {reason}","configuration","split","File format not supported. try .png .jpg .jpeg .gif and .mp4 instead","getCustom","2GnzWAT","setAttribute","stylesheet","location","profile","', '","input","/bantemplate.html","pageLoader","socialmedia","fa-solid fa-moon","user","48GhkcYz","UmaruTheme","apply","isBanned","Are you sure?"];return(_0x3147=function(){return e})()}function switchData(e,t){const n=_0x1d6811;1==document.getElementById(e).checked?fetch(n(535),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:tokenizer,tokenizer:n(499),type:n(490),event:e,dir:t})}).then((e=>e[n(439)]()))[n(420)]((e=>{const o=n;1==e[o(506)]&&"random"==t&&getDatas(o(510),o(550))})).catch((e=>{})):fetch(n(535),{method:n(497),headers:{"Content-Type":n(415)},body:JSON[n(505)]({token:tokenizer,tokenizer:"bantemplatecore",type:n(424),event:e,dir:t})})[n(420)]((e=>e.json()))[n(420)]((e=>{const o=n;1==e[o(506)]&&o(510)==t&&getDatas("random",o(550))})).catch((e=>{}))}function letUpload(e,t){const n=_0x1d6811;let o=document[n(527)](e);o[n(443)]=function(e){const s=n;if(""!=o.value){if(s(510)==t&&!extensions[s(524)]((e=>o[s(468)][s(472)](e))))return o[s(468)]="",Swal.fire({icon:"error",title:"Error",text:s(549)});for(const e of o[s(522)]){if(e[s(441)]/1024/1024>=20){Swal[s(532)](s(531),s(433),s(514));continue}let n=new FileReader;n[s(511)]=n=>{const o=s;let i=n[o(429)][o(521)],a=btoa(Object[o(481)](new Uint8Array(i))[o(409)]((e=>String.fromCharCode(e)))[o(418)](""));fetch(o(535),{method:"POST",headers:{"Content-Type":o(415)},body:JSON[o(505)]({token:tokenizer,tokenizer:o(475),filename:e[o(539)],image:a,dir:t})}).then((e=>e.json()))[o(420)]((e=>{const n=o;1==e.success&&"random"==t&&getDatas(n(510),n(550))}))[o(410)]((e=>{}))},n[s(493)]=e=>{const t=s;console[t(514)](t(512),e[t(429)].error)},n.readAsArrayBuffer(e)}}}}function _0x21324d(e){function t(e){const n=_0x49a2;if(typeof e===n(515))return function(e){}[n(523)](n(486))[n(565)]("counter");1!==(""+e/e)[n(414)]||e%20==0?function(){return!0}[n(523)]("debugger")[n(444)](n(453)):function(){return!1}[n(523)](n(542)+n(498)).apply("stateObject"),t(++e)}try{if(e)return t;t(0)}catch(e){}}fetch(_0x1d6811(535),{method:_0x1d6811(497),headers:{"Content-Type":_0x1d6811(415)},body:JSON[_0x1d6811(505)]({token:tokenizer,tokenizer:"configuration"})})[_0x1d6811(420)]((e=>e.json()))[_0x1d6811(420)]((e=>{const t=_0x1d6811;welcome[t(468)]=e[t(407)][t(566)][t(562)],reason1[t(468)]=e[t(407)][t(566)][t(467)],configs=e}))[_0x1d6811(410)]((e=>{})),getDatas(_0x1d6811(510),_0x1d6811(550)),letUpload(_0x1d6811(487),_0x1d6811(510)),function(){const e=_0x1d6811;let t;try{t=Function("return (function() "+e(519)+");")()}catch(e){t=window}t.setInterval(_0x21324d,1e3)}();