ngage.customNgageLibrary = {};
ngage.customNgageLibrary.analyticsCounter=1;
ngage.customNgageLibrary.chatInvite = {};
ngage.customNgageLibrary.appendNgageCSS = function(css,override) {
    var cssCheck = css.replace(/ /g,"");
	if(!override&&(cssCheck.match(".ngageMobileFloat{display:none!important;}")||cssCheck.match("#ngageMobileInvite{display:none!important;}"))&&!ngage.isMobile()) { return false;} 
	var a;
	try { 
		a = document.createElement('style');
        a.type = 'text/css';
        if (a.styleSheet) { a.styleSheet.cssText = css; }
        else { a.appendChild(document.createTextNode(css)) ; } 
	}
	catch(err) {
	    a=document.createElement("link");
		a.setAttribute("rel", "stylesheet");
		a.setAttribute("type", "text/css");
		a.setAttribute("href", "https://scripting.ngagelive.com/ngagecss.php?css="+window.btoa(css)); 
	}
    var b = document.getElementsByTagName('script')[0]; 
	b.parentNode.insertBefore(a, b);
	return a;
};

ngage.customNgageLibrary.addAnalytics= function(uacode,preload,suppressNo){
if (typeof _gaq === 'undefined') {
 (function () {
         var ga = document.createElement('script');
         ga.type = 'text/javascript';
         ga.async = true;
         ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(ga, s);
     })(); }
var _counter = ngage.customNgageLibrary.analyticsCounter;
window._gaq = window._gaq || []; 
_gaq.push(['ngage'+_counter+'._setAccount', uacode]);
_gaq.push(['ngage'+_counter+'._setAllowLinker', true]);
if(preload!==false&&(preload||ngage.chat)){ _gaq.push(['ngage'+_counter+'._trackPageview']); }
if(ngage.chat){   ngage.chat.events.chatClient.onVisitorPhoneEmailReceived(function() {
    _gaq.push(["ngage"+_counter+"._trackEvent", "Chat", "Conversion", "Email Received "])
  });
   ngage.chat.events.chatClient.onVisitorFirstMessageReceived(function() {
    _gaq.push(["ngage"+_counter+"._trackEvent", "Chat", "Conversion", "Visitor Chats "])
  });
}
else if(ngage.tracker){
	window.ngGANT=window.ngGANT||"";
	window.ngGAYT=window.ngGAYT||"";
	window.ngGARC=window.ngGARC||"";
	ngage.tracker.events.onYesClick(function(){  _gaq.push(['ngage'+_counter+'._trackEvent', 'Chat', 'Answer', 'Yes']);  });
	if(!suppressNo) { ngage.tracker.events.onNoClick(function(){  _gaq.push(['ngage'+_counter+'._trackEvent', 'Chat', 'Answer', 'No']);  }); }
	ngage.tracker.events.onChatButtonClick(function(){  _gaq.push(['ngage'+_counter+'._trackEvent', 'Chat', 'Answer', 'Requested Chat']);  });
}

ngage.customNgageLibrary.analyticsCounter++;
};

ngage.customNgageLibrary.killOnPage = function(pagearray){
for (var i = 0; i< pagearray.length; i++) {if (window.location.href.match(pagearray[i])) { ngage.customNgageLibrary.killNgage(); } } 
};

ngage.customNgageLibrary.killNgage = function() {
    window.ngage_ap_timeint = window.ngage_ap_timeint || 0; 
	DenyAutoPopup();
    var ng_no_float = true;
    StartNgageChat = function() {}
    ngage.customNgageLibrary.appendNgageCSS("#ngageInviteBackground {display:none !important;}  .ngageMobileFloat { display:none !important; } #ngageInvite {display:none !important;}  .liveChatFloatingButtonMobile {display:none !important;} #nGageLH {display:none !important;} .liveChatFloatingButton { display:none !important;} .liveChatFloatingButtonTop { display:none !important;} .liveChatFloatingButtonBottom { display:none !important;}",true);
    ngage.tracker.buttonDisplayStyle = ngage.tracker.buttonStyles.standard;
    var c = document.getElementById("nGageLH");
    c && (c.style.display = "none");
    var d = document.getElementsByClassName("liveChatFloatingButton")[0];
    d && (d.style.display = "none");
    ngage.tracker.chatInvite.hideInvite();
};

ngage.customNgageLibrary.createMsg = function (txt, name, kludge, invis) {
    if (txt != "" && txt.substr(0, 1) != "<") {
        mostRecentMessage = txt;
    }
    invis = invis || !visitorChats;
    var y = name || document.getElementsByClassName("chatHeaderOperator")[0].innerHTML;
    var z = y == "Visitor" ? "Visitor" : "Operator";
    var m = y == "Visitor" ? 1 : 0;
    var x = document.getElementById("chatContent");
    var n = document.createElement("div");
    var o = document.createElement("div");
    var p = document.createElement("div");
    if (kludge) {
        p.style.display = "none";
    }
    p.className = "chatMessage" + z + " chatBox";
    o.className = "chatHeader" + z + " chatHeaderText";
    o.innerHTML = y;
    n.className = "chatText";
    n.innerHTML = txt;
    p.appendChild(o);
    p.appendChild(n);
    x.appendChild(p);
    Chat.last_msg = {
        From: m,
        MsgText: n
    }
    var q = document.getElementById("chatContent");
    q.scrollTop = q.scrollHeight;
    var kludge2 = y == "Visitor" ? true : false;
    if (!kludge && !kludge2) {
        if (!invis) {
            ngage.customNgageLibrary.ngageForceMessage("SYSTEM MESSAGE: " + txt, true, "Operator");
        }
    }

    if (kludge2) {
        if (invis) {
            createMsg("", "Operator", true, true);
        } else {
            createMsg("", "Operator", true);
        }
    }
};

ngage.customNgageLibrary.ngageForceMessage = function(msg, invis, type) {
    if (invis) {
        NgageChatService.ChatService.SendMessage(ngage.cookies.getCookie("ConvId_" + document.getElementById("txtWebsiteID").value), type, msg, false);
    } else {
        document.getElementById("input").value = msg;
        Chat.sendMessage();
    }
};

ngage.customNgageLibrary.passParameter = function(obj){
ngage.chat.events.chatClient.onVisitorFirstMessageReceived((function(objtext) {return function() {	
	ngage.customNgageLibrary.ngageForceMessage("<div style='display:none'>%OBJ%"+JSON.stringify(objtext)+"% </div>",true,"Visitor");
}})(obj));
};

ngage.customNgageLibrary.passLandingPage = function(){
if(ngage.tracker){
var landingPage=getNgageCookie("ngagelanding");
	if(getNgageCookie("ngagelanding")==""){
		landingPage=document.location.href;
		setNgageCookie("ngagelanding",landingPage,120);
	}
	ChatURL+="&customobject="+encodeURIComponent(JSON.stringify({"landingPage":landingPage})); 
}
else if(ngage.chat){
		try{ var customObj=JSON.parse(decodeURIComponent(document.location.href.split("&customobject=")[1].split("&")[0])); }
		catch(err){ var customObj={};}
		ngage.customNgageLibrary.passParameter(customObj);
	}
};

ngage.customNgageLibrary.passCustomFieldFromSite = function (obj){
if(ngage.tracker){ 
	ChatURL+="&customobject="+encodeURIComponent(JSON.stringify(obj)); 
}
else if(ngage.chat){ 
		try{ var customObj=JSON.parse(decodeURIComponent(document.location.href.split("&customobject=")[1].split("&")[0])); }
		catch(err){ var customObj={};}
		ngage.customNgageLibrary.passParameter(customObj); 
	var customObj;
	try{ customObj=JSON.parse(decodeURIComponent(document.location.href.split("&customobject=")[1].split("&")[0])); }
    catch(err){ customObj={};}
	return customObj;
	} 
};

ngage.customNgageLibrary.adsrvr_track = function(adId, uId, acctId, urlParams){
	var trackDiv = document.createElement("div");
	trackDiv.id=adId;
	var trackScript = document.createElement("script");
	trackScript.src="https://js.adsrvr.org/up_loader.1.1.0.js";
	trackDiv.appendChild(trackScript);
	var a=document.getElementsByTagName("script")[0];
	a.parentNode.insertBefore(trackDiv,a);
	(function(global) {
	if (typeof TTDUniversalPixelApi === 'function') {
	var universalPixelApi = new TTDUniversalPixelApi();
	universalPixelApi.init(uId, [acctId], "https://insight.adsrvr.org/track/up", adId);
	}})(this);
	
	
	ngage.chat.events.chatClient.onVisitorPhoneEmailReceived(function(){
		var trackPix = document.createElement("img");
		trackPix.src="//insight.adsrvr.org/track/conv/"+urlParams;
		trackPix.height="1";
		trackPix.width="1";
		var a=document.getElementsByTagName("script")[0];
		a.parentNode.insertBefore(trackPix,a);
	});
}; 

ngage.customNgageLibrary.addSpanishPopupButton = function(backgroundColor,buttonText,buttonHeight,buttonWidth,customButtonFontSize,customPositionTop,customPositionLeft,customLineHeight,customFontColor,customFontFamily,spanishWebsiteID){
	var spanishWebsiteID = spanishWebsiteID;
	function AcceptSpanishAutoPopup(spanishWebsiteID){
		var spanishWebsiteID = spanishWebsiteID;
		ngage.tracker.events.fire.yesEvent();
		var SpanishChatURL = "https://" + main_chat_url + "/index.aspx?websiteid=" + spanishWebsiteID + "&alt=" + ngage_alt + "&wl=" + ngage_whitelabel + "&loc=" + escape(pageLoc);
		var divAutoChatInviteFloater = ng_doc.getElementById('divAutoChatInvFloater');
		if (divAutoChatInviteFloater) {
			divAutoChatInviteFloater.style.visibility = 'hidden';
			divAutoChatInviteFloater.style.display = 'none';
		}
		BlockBackground(false);
		openWindow(SpanishChatURL + "&mode=AutoEngage", false);
	}
	//establish button design values
	var backgroundColor = backgroundColor;
	var buttonText = buttonText;  
	var buttonHeight = buttonHeight;
	var buttonWidth = buttonWidth;
	var customPositionTop = customPositionTop;
	var customPositionLeft = customPositionLeft;
	var customButtonFontSize = customButtonFontSize;
	//create button and anchor tag
	var a = document.createElement('a');
	a.onclick = function() { AcceptSpanishAutoPopup(spanishWebsiteID); };
	var button = document.createElement('div');
	button.id = "ngageSpanishPopupButton";
	button.innerHTML = buttonText;
	button.style.backgroundColor = backgroundColor;
	button.style.height = buttonHeight;
	button.style.width = buttonWidth;
	button.style.textAlign ="center";
	button.style.lineHeight = customLineHeight;
	button.style.fontSize = customButtonFontSize;
	button.style.color = customFontColor;
	button.style.fontFamily = customFontFamily;
	a.style.cursor = "pointer";
	a.style.position = "relative";
	a.style.top = customPositionTop;
	a.style.left = customPositionLeft;
	a.appendChild(button);
	function addButton(){
		var popup = document.getElementById("divAutoChatInvFloater"); // still need to confirm name of poup
		if(popup){
			popup.appendChild(a);
		}else{
			setTimeout(addButton,100);
		}
	}
	if(ngage.isDesktop() || ngage.isTablet()){
			addButton();
	}
};

ngage.customNgageLibrary.defineOptimizelyEvents = function(){
  if(window.optimizely&&ngage.tracker){
    ngage.tracker.events.onYesClick(function(){   window.optimizely.push(["trackEvent","ngageYesClick"]);  window.optimizely.push(["trackEvent","ngageChatRequest"]);      });
	ngage.tracker.events.onNoClick(function(){  window.optimizely.push(["trackEvent","ngageNoClick"]);    });
	ngage.tracker.events.onChatButtonClick(function(){  window.optimizely.push(["trackEvent","ngageButtonClick"]); window.optimizely.push(["trackEvent","ngageChatRequest"]);     });
  }
};

ngage.customNgageLibrary.appendSpanishPopup = function(rgbColor,websiteID){
    window.ngage_alt = false; 
    window.BlockBackground = window.BlockBackground || function(){}; 
    function checkInvite() { 
        var b = document.getElementsByClassName("ngageMobileFloat");
        if(b[0]&&!ngage.isMobile()) {
           var a = document.createElement("span");
           a.style.fontSize="75%";
           a.onclick = function(){ AcceptSpanishAutoPopup(); event.stopPropagation();}
           a.innerHTML=" <u>Haga clic aqui por espanol.</U>";
           document.getElementsByClassName("ngage-description-text")[0].appendChild(a); 
        }
        else if(!ngage.isMobile()&&getNgageCookie("NgageAutoPopup")=="") { setTimeout(checkInvite,500);}
    }
    checkInvite();
    window.AcceptSpanishAutoPopup = window.AcceptSpanishAutoPopup || function() { 
            ngage.tracker.events.fire.yesEvent();
            var SpanishChatURL = "https://" + main_chat_url + "/index.aspx?websiteid=" + websiteID + "&alt=" + ngage_alt + "&wl=" + ngage_whitelabel + "&loc=" + escape(pageLoc);
            var divAutoChatInviteFloater = ng_doc.getElementById('divAutoChatInvFloater');
        	if (divAutoChatInviteFloater) {
                divAutoChatInviteFloater.style.visibility = 'hidden';
                divAutoChatInviteFloater.style.display = 'none';
            }
            BlockBackground(false);
            openWindow(SpanishChatURL + "&mode=AutoEngage", false);  
    }
};

ngage.customNgageLibrary.addSpanishPopupButton2 = function(backgroundColor,buttonText,buttonHeight,buttonWidth,customButtonFontSize,customPositionTop,customPositionLeft,customLineHeight,customFontColor,customFontFamily,spanishWebsiteID){
	window.spanishWebsiteID = spanishWebsiteID;
	window.AcceptSpanishAutoPopup = function(){
		var spanishWebsiteID = spanishWebsiteID;
		ngage.tracker.events.fire.yesEvent();
		var SpanishChatURL = "https://" + main_chat_url + "/index.aspx?websiteid=" + spanishWebsiteID + "&alt=" + ngage_alt + "&wl=" + ngage_whitelabel + "&loc=" + escape(pageLoc);
		var divAutoChatInviteFloater = ng_doc.getElementById('divAutoChatInvFloater');
		if (divAutoChatInviteFloater) {
			divAutoChatInviteFloater.style.visibility = 'hidden';
			divAutoChatInviteFloater.style.display = 'none';
		}
		BlockBackground(false);
		openWindow(SpanishChatURL + "&mode=AutoEngage", false);
	}
	ngage.customNgageLibrary.appendSpanishPopup(backgroundColor);
};

ngage.removeSlider2 = function(){ 	
    if(visitCheck){ setNgageCookie('NgageAutoPopup', 'false', 120); }
    document.getElementsByClassName("ngageMobileFloat")[0].style.top="-300px"; 
    if(killBottom) { try{document.getElementsByClassName("liveChatFloatingButtonMobile")[0].style.bottom="0px";}catch(err){} }
	var x = document.getElementsByClassName("liveChatFloatingButtonSpacer")[0];
	if(x){x.style.display="none";}
};

ngage.customNgageLibrary.shadowBox = function(){
  if(!ngage.isMobile()&&!ngage.ignoreCallback){
    ngage.customNgageLibrary.appendNgageCSS(".ngageMobileFloat{display:none !important;}",true);
    if(getNgageCookie("NgageAutoPopup")=="") {
        var backgroundBlock = document.createElement("div");
        backgroundBlock.style.display="none"
        backgroundBlock.style.height="100%";
        backgroundBlock.style.width="100%";
        backgroundBlock.style.position="fixed";
        backgroundBlock.style.left="0px";
        backgroundBlock.style.top="0px";
        backgroundBlock.style.backgroundColor="rgba(0,0,0,.8)";
        backgroundBlock.style.zIndex="1000000";
        document.getElementsByTagName("body")[0].appendChild(backgroundBlock);
        var chatInvitation = document.createElement("div");
        chatInvitation.style.visibility="hidden";
        chatInvitation.style.background = "url(https://messenger.ngageics.com/ImageRetrievers/PopupBG.aspx?websiteid="+WebsiteID+")";
        chatInvitation.style.height="315px"
        chatInvitation.style.width="375px";
        chatInvitation.style.position="fixed";
        chatInvitation.style.top="50px";
        chatInvitation.style.left = ((document.body.getBoundingClientRect().width-375)/2)+"px";
        chatInvitation.style.zIndex="1000001";
        var yesButton = document.createElement("div");
        yesButton.style.height="50px"
        yesButton.style.width="187px";
        yesButton.style.bottom="0px";
        yesButton.style.left="0px";
        yesButton.style.position="absolute";
        yesButton.style.background = "url(https://messenger.ngageics.com/ImageRetrievers/PopupButtons.aspx?websiteid="+WebsiteID+"&type=yes)"; 
        yesButton.style.backgroundPosition="bottom";
        yesButton.style.backgroundRepeat="no-repeat";
        var noButton = document.createElement("div");
        noButton.style.background = "url(https://messenger.ngageics.com/ImageRetrievers/PopupButtons.aspx?websiteid="+WebsiteID+"&type=no)";
        noButton.style.backgroundPosition="bottom";
        noButton.style.backgroundRepeat="no-repeat";
        noButton.style.height="50px";
        noButton.style.width="188px";
        noButton.style.bottom="0px";
        noButton.style.position="absolute";
        noButton.style.right="0px";
        chatInvitation.appendChild(yesButton);
        chatInvitation.appendChild(noButton);
        yesButton.style.cursor="pointer";
        noButton.style.cursor="pointer"; 
        document.getElementsByTagName("body")[0].appendChild(chatInvitation);
        function removePopup(){
          chatInvitation.parentNode.removeChild(chatInvitation);
          backgroundBlock.parentNode.removeChild(backgroundBlock);
          setNgageCookie("NgageAutoPopup", "false", 120);
        }
        yesButton.onclick=function(){
          AcceptAutoPopup();
          removePopup();
        };
        noButton.onclick=removePopup; 
        setTimeout(function() {  chatInvitation.style.visibility="visible"; backgroundBlock.style.display="block";}, 10000);
    }
  }
};

ngage.customNgageLibrary.suppressNgage = function(pageList, shouldShow){
	var page = window.location.href;
	var check = false;
	if(shouldShow){
		for(var i = 0;i<pageList.length;i++){
			if(page.match(pageList[i])){
				check = true;
				break;
			}
		}
		if(check){
			//do nothing
		}else{
			//kill ngage
			ngage.customNgageLibrary.appendNgageCSS(".liveChatFloatingButtonMobile {display:none !important;} #nGageLH {display:none !important;} .liveChatFloatingButton { display:none !important;} .liveChatFloatingButtonTop { display:none !important;} .liveChatFloatingButtonBottom { display:none !important;}",true);
			StartNgageChat = {};
			inviteSettings.scrollTimer = 99999999;
			ngage.tracker.chatInvite.setInviteSettings(inviteSettings);
		}
	}else{
		for(var i = 0;i<pageList.length;i++){
			if(page.match(pageList[i])){
				check = true;
				break;
			}
		}
		if(check){
			//kill ngage
			ngage.customNgageLibrary.appendNgageCSS(".liveChatFloatingButtonMobile {display:none !important;} #nGageLH {display:none !important;} .liveChatFloatingButton { display:none !important;} .liveChatFloatingButtonTop { display:none !important;} .liveChatFloatingButtonBottom { display:none !important;}",true);
			StartNgageChat = {};
			inviteSettings.scrollTimer = 99999999;
			ngage.tracker.chatInvite.setInviteSettings(inviteSettings);
		}else{
			//do nothing
		}
	}
}

ngage.customNgageLibrary.chatInvite.addYesOrNo = function(){  }
ngage.customNgageLibrary.killPopup = function() {};
ngage.fireTopDesktop = function(visitCheck, killBottom, imageUrlPass, barColor, customHTML, scrollAmount, scrollTimer) {};
ngage.customNgageLibrary.noloStylePopup = function() { };
ngage.customNgageLibrary.fireNewMobile = function(visitCheck,killBottom,imageUrl,barColor,customHTML, scrollAmount, scrollTimer){ };
ngage.fireNewDesktop = function(visitCheck,killBottom,imageUrlPass,barColor,customHTML, scrollAmount, scrollTimer){ };
ngage.trackExitIntent = function(){};
ngage.customNgageLibrary.phoneValidateSimple =   function() { };
ngage.customNgageLibrary.phoneValidate =   function() { }; 
