(function(){

var winRef = top;
var sc_href = document.location.href;

function locateTopBanner(className,callback)
{
    var f;
    var td;
    var googletag = winRef.googletag;
    var document= winRef.document;


    if(document.location.href.match(/filmaffinity/))
    {
        var el=document.getElementById("top-ad");
        if(el)          
            callback(el);
        return;
    }

    if(sc_href.match(/publimetro/)||sc_href.match(/aristeguionline/)|| sc_href.match(/aristeguinoticias/))
    {
        var el=document.getElementsByClassName("sc-desktopwallpaper")[0];
        if(el)          
            callback(el);
        return;
    }

    if(sc_href.match(/nuevamujer/)||sc_href.match(/fayerwayer/))
    {
        var el=document.getElementById("ad_skin");
        if(el)          
            callback(el);
        return;
    }

    if(document.location.href.match(/vozpopuli/))
    {
        var el=document.getElementById("sas_71877");
        if(el)          
            callback(el);
        return;
    }
    
    if(document.location.href.match(/juanfutbol/))
    {
        var el=document.getElementById("div-gpt-ad-1478274385544-0");
        if(el)          
            callback(el);
        return;
    }

    if(document.location.href.match(/enfemenino/))
    {
        var el=document.getElementById("div-gpt-ad-banner_atf_wrapper");
        if(el)          
            callback(el);
        return;
    }
    
    
    if(document.location.href.match(/europapress.es/))
    {
        var el=document.getElementById("sc-top");
        if(el)          
            callback(el);
        return;
    }


    if(document.location.href.match(/latina.pe/))
    {
        var el=document.getElementById("Top1");
        if(el)          
            callback(el);
        return;
    }

    //SITEREP
    if(sc_href.match(/www.mundo-geo.es/)||sc_href.match(/fourfourtwo.es/)||sc_href.match(/revistaoxigeno.es/)||sc_href.match(/planeta2030.es/)||sc_href.match(/trailrun.es/)||sc_href.match(/triatlonweb.es/)||sc_href.match(/ciclismoafondo.es/)||sc_href.match(/sportlife.es/)||sc_href.match(/motociclismo.es/)||sc_href.match(/soycorredor.es/)||sc_href.match(/mountainbike.es/)||sc_href.match(/autopista.es/)||sc_href.match(/hogarmania/)||sc_href.match(/navarratelevision.es/)||sc_href.match(/cotilleo.es/)||sc_href.match(/descubrir.com/))
    {
        var el=document.getElementsByClassName("sc-top")[0];
        if(el)          
            callback(el);
        return;
    }

    //A3
    if(sc_href.match(/atresplayer/)||sc_href.match(/antena3/)||sc_href.match(/lasexta/)||sc_href.match(/atresmedia/)||sc_href.match(/correryfitness/)||sc_href.match(/ondacero/)||sc_href.match(/europafm/))
    {
        var el=document.querySelector('div[id^=sas_35211');
        if(el)          
            callback(el);
        return;
    }
    //NOX
    if(sc_href.match(/losreplicantes/)|| sc_href.match(/bekia/)||sc_href.match(/formulatv/)||sc_href.match(/menzig.es/)||sc_href.match(/gadgetos/)||sc_href.match(/zonared/))
    {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))){
            var el=document.getElementsByClassName("noxvo-sc-fixed")[0];
            if(el)          
                callback(el);
            return;
        }
        else {
            var el=document.getElementById("sc-top");
            if(el)          
                callback(el);
            return;
        }
    }
    //TELEVISA
    if(sc_href.match(/televisa/)||sc_href.match(/lasestrellas/)|| sc_href.match(/tudn/))
    {
        var el=document.getElementById("1x1");
        if(el)          
            callback(el);
        return;
    }

    
    if(f=winRef.document.getElementsByClassName(className))
    {
        if(f.length == 1)
        {
            td=f[0];
            callback(td);
            return;
        }
/*        else if (f=winRef.document.getElementsByClassName("sc-top")[0]) {
            td=f;
            callback(td);
            return;
        } */
        //NNJJ 
        else if (f=winRef.document.getElementById("sas_52030")) {
            td=f;
            callback(td);
            return;
        } //TESTPAGE
        else if (f=winRef.document.getElementById("sc-desktopwallpaper")) {
            td=f;
            callback(td);
            return;
        }
    }
    

    
        if(typeof googletag != "undefined")
        {
        googletag.cmd.push(function(){
            var au=googletag.pubads().getSlots();
            var maxSize=null;
            var st=(((t = document.documentElement) || (t = document.body.parentNode))
                && typeof t.scrollTop == 'number' ? t : document.body).scrollTop;

            for(var l=0;l<au.length;l++)
            {
                var dd=document.getElementById(au[l].getSlotElementId());
                if(!dd)
                    continue;
                var bbox=dd.getBoundingClientRect();
                if(bbox.height < 10)
                    continue;
                var hh=bbox.top+st;
                var w=dd.offsetWidth;
                if(hh > 1200)
                    continue;
                if(maxSize==null || maxSize.w < w || (maxSize.w == w && hh < maxSize.top))
                {
                    maxSize={w:bbox.width,div:dd,slot:au[l],top:hh}
                    continue;
                }
            }
            if(maxSize)
            {
                callback(maxSize.div);
            }
        });
        }
        else
        {
            var id_exist = document.getElementById("sc-desktopwallpaper");
            if (id_exist) {
                return
            }else {
                var th=document.createElement("div");
                // Existe un elemento llamado "innerDiv"? (Preview de google)
                var iD=document.getElementById("innerDiv") || document.body;
                iD.insertBefore(th,null);
                th.id="sc-desktopwallpaper";
                callback(th);
            }

        }
} // end locateTopBanner


function locateMPUBanner(className,callback)
{
    var f;
    var td;
    var document=winRef.document;

 
    // sc-takeover
    if (f=winRef.document.getElementsByClassName(className)){

        if(f.length == 1){
            td=f[0];
            callback(td);
            return;
        } // siterep
        else if (f=winRef.document.getElementById("sc-mpu-top")) 
        {
            td=f;
            callback(td);
            return;
        }
        else if (f=winRef.document.getElementById("div-gpt-ad-1393321029209-2")) 
        {
            td=f;
            callback(td);
            return;
        }

    } //
    else {
        var id_exist = winRef.document.getElementById("sc-mpu-top");
        if (id_exist) {
            return
        } else {
                var th=document.createElement("div");
                // Existe un elemento llamado "innerDiv"? (Preview de google)
                var iD=document.getElementById("innerDiv") || document.body;
                iD.insertBefore(th,null);
                th.id="sc-takeover";
                callback(th);
            }

        }
} 
// end locate MPU


var targetWindow=null;
winRef.addEventListener("message",function(event){
    var googletag=winRef.googletag;
    var document=winRef.document;

    try {
        var decoded = JSON.parse(event.data);
        if(typeof decoded.type=="undefined" || decoded.type!="SMC")
            return;
        var body = winRef.document.body;
        switch(decoded.subtype) {
            case "HELLO":
            {
                if(targetWindow!=null)
                    return;
                targetWindow=event.source;
                event.source.postMessage(JSON.stringify({"type": "SMC", "subtype": "ACK"}),"*");

            }break;
            case "CREATIVE": // SERVICE_CASE
            {
                winRef._SMC_SkinParams = decoded;
                var f=function() {

                        switch (decoded.creative.serviceType) {
                            case "skin": {
                                loadPerSiteFixes();
                                serveSkin(decoded.creative);
                                body.className += ' sc-rmp sc-skin';
                            }
                                break;

                            case "skinLD": {
                                loadPerSiteFixes();
                                serveSkinLD(decoded.creative);
                                body.className += ' sc-rmp sc-skin-LD';
                            }
                                break;

                            case "skinTP": {
                                loadPerSiteFixes();
                                serveSkin(decoded.creative);
                                body.className += ' sc-rmp sc-skinTP';
                            }
                                break;
                            case "videowall": {
                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                loadPerSiteFixes();
                                serveVideoWall(targetDiv, decoded.creative);
                                body.className += ' sc-rmp sc-skin-exp sc-skin-wall';
                                });
                            }
                                break;
                            case "skinInteractive": {
                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                loadSkinInteractive();
                                loadPerSiteFixes();
                                serveVideoWall(targetDiv, decoded.creative);
                                body.className += ' sc-rmp sc-skin-exp sc-skin-wall';
                                });
                            }
                                break;
                            case "videowall2": {
                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                loadPerSiteFixes();
                                serveVideowall2(targetDiv, decoded.creative);
                                body.className += ' sc-rmp sc-skin-exp sc-skin-wall';
                                });
                            }
                                break;
                            case "skinExp": {

                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                loadPerSiteFixes();
                                serveSkinExp(targetDiv, decoded.creative);
                                body.className += ' sc-rmp sc-skin-exp';
                                });
                            }
                                break;

                            case "skinExpLD": {

                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                loadPerSiteFixes();
                                serveSkinExpLD(targetDiv, decoded.creative);
                                body.className += ' sc-rmp sc-skin-exp-LD';
                                });
                            }
                                break;
                            case "mobilevideowall": {
                                mobilevideowall(decoded.creative);
                            }
                                break;

                            case "mobilevideowallTP": {
                                mobilevideowall(decoded.creative);
                            }
                                break;

                            case "fixedscroller": {
                                fixedscroller(decoded.creative);
                            }
                                break;
                                
                            case "expandbanner": { 
                                loadExpandBannerPerSiteFixes();
                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                serveexpandbanner(targetDiv, decoded.creative);
                                body.className += ' sc-rmp-expandbanner-desktop sc-skin-exp';
                                });
                            }
                                break;

                            case "expandbanner2": { 
                                //loadExpandBannerPerSiteFixes();
                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                serveexpandbanner2(targetDiv, decoded.creative);
                                body.className += ' sc-rmp-expandbanner-desktop sc-skin-exp';
                                });
                            }
                                break;

                            case "expandbannerMobile": { 
                                loadExpandBannerMobilePerSiteFixes();
                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                serveexpandbannerMobile(targetDiv, decoded.creative);
                                body.className += ' sc-rmp-expandbanner-mobile';
                                });
                            }
                                break;

                            case "osa": { 
                                loadOSAPerSiteFixes();
                                serveosaMobile(decoded.creative);
                                body.className += ' sc-rmp-osa';
                            }
                                break;

                            case "takeover": { 
                                loadTakeoverPerSite();
                                locateMPUBanner("sc-takeover", function (targetDiv) {
                                serveTakeover(targetDiv, decoded.creative);
                                body.className += ' sc-rmp-takeover';
                                });
                            }
                                break;

                            case "interstitial": { 
                                loadInterstitialPerSite();
                                body.className += ' sc-rmp-interstitial';
                                serveInterstitial(decoded.creative);
                            }
                                break;
                                
                            case "bannernoexpand": { 
                                loadExpandBannerPerSiteFixes();
                                locateTopBanner("sc-desktopwallpaper", function (targetDiv) {
                                servebannernoexpand(targetDiv, decoded.creative);
                                body.className += ' sc-rmp sc-skin';
                                });
                            }
                                break;

                            case "bxsDesktop": { 
                                loadBxsDesktop();
                                locateTopBanner("bxs-bb", function (targetDiv) {
                                serverbxsDesktop(targetDiv, decoded.creative);
                                body.className += ' bxs-desktop';
                                });
                            }
                                break;

                            case "bxsMobile": { 
                                loadBxsMobile();
                                locateTopBanner("bxs-bb", function (targetDiv) {
                                serverbxsMobile(targetDiv, decoded.creative);
                                body.className += ' bxs-mobile';
                                });
                            }
                                break;
                        }

                }
                if(typeof googletag != "undefined") {
                    googletag.cmd.push(function () {
                        f.apply(winRef);
                    });
                } 
                else if (sc_href.match(/atresplayer/)) {
                    if (!document.body.classList.contains('sc-rmp')) {
                        f.apply(winRef); 
                    } else {
                        return;
                    }
                }
                else {
                   f.apply(winRef); 
                }
            }
        }



    }
    catch(e)
    {

    }
});



function loadScript(url) {
    var googletag=winRef.googletag;
    var document=winRef.document;
    
    var sc = document.createElement("script");
    sc.src = url;
    sc.async = "async";
    document.body.appendChild(sc);
}

// Size es 980x250 o 300x250..o lo que se parsee
function loadFTCreative(src, id, size, click, w) {
    var document=winRef.document;
    
    w.ftClick = click;
    w["ftExpTrack_" + id] = "";
    w.ftX = "";
    w.ftY = "";
    w.ftZ = "";
    w.ftOBA = 1;
    w.ftContent = "";
    w.ftCustom = "";
    w["ft" + size + "_OOBclickTrack"] = "";
    w.ftRandom = Math.random() * 1000000;
    w["ftClick_" + id] = ftClick;
    w["ftCustomViewTrack_" + id] = '';
    /*if(typeof(ft_referrer)=="undefined"){w.ft_referrer=(function(){var r="";if(w==top){r=w.location.href;}else{try{r=w.parent.location.href;}catch(e){}r=(r)?r:document.referrer;}while(encodeURIComponent(r).length>1000){r=r.substring(0,r.length-1);}return r;}());}
     var ftDomain = (w==top)?"":(function(){var d=document.referrer,h=(d)?d.match("(?::q/q/)+([qw-]+(q.[qw-]+)+)(q/)?".replace(/q/g,decodeURIComponent("%"+"5C")))[1]:"";return (h&&h!=location.host)?"&ft_ifb=1&ft_domain="+encodeURIComponent(h):"";}());*/
    var ftDomain = document.location.href.replace(/http[s]{0,1}:\/\//, '');
    var ft_referrer = ftDomain;
    var ftTag = document.createElement("script");
    ftTag.id = "ft_servedby_" + id;
    ftTag.src = src + "?ftx=" + ftX + "&fty=" + ftY + "&ftadz=" + ftZ + "&ftscw=" + ftContent + "&ft_custom=" + ftCustom + "&ftOBA=" + ftOBA + ftDomain + "&ft_agentEnv=" + (w.mraid || w.ormma ? "1" : "0") + "&ft_referrer=" + encodeURIComponent(ft_referrer) + "&cachebuster=" + ftRandom;
    ftTag.name = "ftscript_" + size;
    var f=function(){document.body.appendChild(ftTag);}
    if(w.document.readyState=="loading")
        w.document.addEventListener('readystatechange',f);
    else
        f();


}

function loadNOFTCreative(id) {
    var document=winRef.document;
    
        var f=function(){document.body.appendChild(ftTag);}
    if(w.document.readyState=="loading")
        w.document.addEventListener('readystatechange',f);
    else
        f();

}


/*libs_*/
function loadPerSiteFixes() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/Skins/skin_collapse_css_template.js");
}

function loadSkinInteractive() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/Skins/skin_interactive.js");
}

function loadVideoWallMobilePerSiteFixes() {
    loadScript("https://sc-devel.s3.eu-central-1.amazonaws.com/videowallmobile/new/videoparalaxnew_collapse_css_template.js");
}

function loadFixedScrollerPerSiteFixes() {
    loadScript("https://sc-devel.s3.eu-central-1.amazonaws.com/FixedSroller/fixedScroller_collapse.js");
}

function loadExpandBannerPerSiteFixes() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/billboard/billboard_collapse_css_template.js");
}

function loadExpandBannerMobilePerSiteFixes() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/viewability/320x100_splash_collapse_template.js");
}

function loadTakeoverPerSite() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/takeover/takeover_collapse_template.js");
}

function loadInterstitialPerSite() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/interstitial/interstitial_collapse_template.js");
}

function loadOSAPerSiteFixes() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/videowallmobile/new/rmp_osa_collapse_css_template.js");
}

function loadBxsDesktop() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/brandxsite/970x250_brandxsite_publicis_template.js");
}

function loadBxsMobile() {
    loadScript("https://s3.eu-central-1.amazonaws.com/sc-devel/brandxsite/320x100_brandxsite_publicis_template.js");
}
/*_libs*/

/*serve_*/

function serveSkin(adsParams) {

    //loadFTCreative(adsParams.banner_src,adsParams.ftdiv,adsParams.banner_size,window);
    
    adjustContainer(adsParams, "980px");
}
// >> LD
function serveSkinLD(adsParams) {

    //loadFTCreative(adsParams.banner_src,adsParams.ftdiv,adsParams.banner_size,window);
    
    adjustContainerLD(adsParams, "980px");
} 
function mobilevideowall(adsParams) {

    //loadFTCreative(adsParams.banner_src,adsParams.ftdiv,adsParams.banner_size,window);
    loadVideoWallMobilePerSiteFixes();
    adjustContainer(adsParams, "100%");
}

function fixedscroller(adsParams) {

    //loadFTCreative(adsParams.banner_src,adsParams.ftdiv,adsParams.banner_size,window);
    loadFixedScrollerPerSiteFixes();
    //adjustContainer(adsParams, "100%");
}

function serveosaMobile(targetDiv,adsParams) {
    //loadFTCreative(adsParams.banner_src,adsParams.ftdiv,adsParams.banner_size,window);
    loadOSAPerSiteFixes();
    adjustContainer(adsParams, "100%");
}

function serveexpandbanner(targetDiv,adsParams) {
    var document=winRef.document;
        targetDiv.style.position="relative";
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);

    loadExpandBannerPerSiteFixes();
    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,top);
}

function serveexpandbanner2(targetDiv,adsParams) {
    var document=winRef.document;
        targetDiv.style.position="relative";
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);

    //loadExpandBannerPerSiteFixes();
    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,top);
}

function bannernoexpand(targetDiv,adsParams) {
    var document=winRef.document;
        targetDiv.style.position="relative";
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="sc-noft-banner";
    targetDiv.appendChild(subDiv);

    loadExpandBannerPerSiteFixes();
    loadNOFTCreative(adsParams.banner_ftdiv,top);
}


function serveexpandbannerMobile(targetDiv,adsParams) {
    var document=winRef.document;
        targetDiv.style.position="relative";
        targetDiv.style.height = "100px";
        targetDiv.style.width = "320px";
        targetDiv.style.margin = "0px auto";  
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);

    loadExpandBannerMobilePerSiteFixes();
    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,top);
}

function serveTakeover(targetDiv,adsParams) {

    var document=winRef.document;
        targetDiv.style.position="relative";
        targetDiv.style.height="250px";
        targetDiv.style.width="300px";
        targetDiv.style.margin="0px auto";
        targetDiv.style.overflow="visible";
        targetDiv.className += ' sc-takeover';
        
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);

    loadTakeoverPerSite();
    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,top);
}

function serveInterstitial(adsParams) {

    loadInterstitialPerSite();
    //loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,top);
}

function serverbxsDesktop(targetDiv,adsParams) {
    var document = winRef.document;
        targetDiv.style.position="relative";
        targetDiv.style.height = "250px";
        targetDiv.style.width = "970px";
        targetDiv.style.margin = "0px auto";
        targetDiv.style.zIndex = "auto";

    var subDiv = document.createElement("div");
        subDiv.style.position="absolute";
        subDiv.id="ftdiv"+adsParams.banner_ftdiv;
        targetDiv.appendChild(subDiv);

    loadBxsDesktop();
    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,top);
}


function serverbxsMobile(targetDiv,adsParams) {
    var document=winRef.document;
        targetDiv.style.position="relative";
        targetDiv.style.height = "100px";
        targetDiv.style.width = "320px";
        targetDiv.style.margin = "0px auto";

    var subDiv=document.createElement("div");
        subDiv.style.position="absolute";
        subDiv.id="ftdiv"+adsParams.banner_ftdiv;
        
    targetDiv.appendChild(subDiv);

    loadBxsMobile();
    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,top);
}


function serveVideoWall(targetDiv,adsParams) {
    
    var document=winRef.document;

    targetDiv.style.position="relative";
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);


    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,winRef);

    var size = winRef.screen.width;
    var bgRandom = Math.random() * 1000000;
    if (size >= 1025) {
        adsParams.image = 'https://cdn.flashtalking.com/42249/assets/bg_transparent.png?'+bgRandom;
    } else if (size > 800 && size < 1025) {
        adsParams.image = 'https://cdn.flashtalking.com/42249/assets/bg_transparent.png?'+bgRandom;
    } else if (size <= 800) {
        adsParams.image = 'https://cdn.flashtalking.com/42249/assets/bg_transparent.png?'+bgRandom;
    }
    if(typeof adsParams.background_image!="undefined")
        adsParams.image=adsParams.background_image;

    // Funci?n de gesti?n del evento del click
    setupBodyBackground(adsParams);
    if(adsParams.background_src!="")
       loadFTCreative(adsParams.background_src, adsParams.background_ftdiv, adsParams.background_size, adsParams.click, winRef);
}


function serveVideowall2(targetDiv,adsParams) {
    
    var document=winRef.document;

    targetDiv.style.position="relative";
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);


    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,winRef);

    

    var size = winRef.screen.width;
    var bgRandom = Math.random() * 1000000;
    if (size >= 1025) {
        adsParams.image = 'https://cdn.flashtalking.com/42249/assets/bg_transparent.png?'+bgRandom;
    } else if (size > 800 && size < 1025) {
        adsParams.image = 'https://cdn.flashtalking.com/42249/assets/bg_transparent.png?'+bgRandom;
    } else if (size <= 800) {
        adsParams.image = 'https://cdn.flashtalking.com/42249/assets/bg_transparent.png?'+bgRandom;
    }
    if(typeof adsParams.background_image!="undefined")
        adsParams.image=adsParams.background_image;

    // Funci?n de gesti?n del evento del click
   // setupBodyBackground(adsParams);
    if(adsParams.background_src!="")
       loadFTCreative(adsParams.background_src, adsParams.background_ftdiv, adsParams.background_size, adsParams.click, winRef);
}

function serveSkinExp(targetDiv,adsParams) {
    
    var document=winRef.document;

    targetDiv.style.position="relative";
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);

    adsParams.image=adsParams.background_image;
    setupBodyBackground(adsParams);


    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,winRef);

}

function serveSkinExpLD(targetDiv,adsParams) {
    
    var document=winRef.document;

    targetDiv.style.position="relative";
    var subDiv=document.createElement("div");
    subDiv.style.position="absolute";
    subDiv.id="ftdiv"+adsParams.banner_ftdiv;
    targetDiv.appendChild(subDiv);

    adsParams.image=adsParams.background_image;
    setupBodyBackgroundLD(adsParams);


    loadFTCreative(adsParams.banner_src,adsParams.banner_ftdiv,adsParams.banner_size,adsParams.click,winRef);

}

function setupBodyBackground(adsParams) {

    // Suponemos que no estamos en un iframe
    var body = winRef.document.body;


    if(sc_href.match(/todotest/)||sc_href.match(/fourfourtwo/)||sc_href.match(/autopista/)||sc_href.match(/motociclismo.es/)||sc_href.match(/ecuestre.es/)||sc_href.match(/revistaoxigeno.es/)||sc_href.match(/trailrun/)||sc_href.match(/triatlon/)||sc_href.match(/sportlife/)||sc_href.match(/womenshealth/)||sc_href.match(/soycorredor/)||sc_href.match(/runners.es/)||sc_href.match(/menshealth/))
    {
        //body.add("wallpaper-web");
        body.className += ' wallpaper-web';
        body.style.backgroundPosition = "50% 0%";
        noClick=true;
    }
    else if(sc_href.match(/libertaddigital/) || sc_href.match(/libremercado/)) {
        body.style.backgroundPositionX = "50%";
        parent.publd.encaja_skin('scroll');

    }
    else {
        //Si es cualquier otro

        body.style.backgroundPosition = "50% 0%";

    }

    body.style.cursor = 'default';
    body.style.backgroundRepeat = "no-repeat";
    body.style.minHeight = "500px";
    body.style.width = "100%";
    body.style.backgroundColor = adsParams.backgroundColor;
    body.style.backgroundAttachment = adsParams.attachment;
    if(typeof adsParams.image!="undefined")
        body.style.backgroundImage="url('"+adsParams.image+"')";
    var skin_backGroundClick = function(e) {
        EE = e ? e : event;
        if (!EE)
            return;
        var t = EE.target ? EE.target : EE.srcElement;
        if ((!t || t.tagName != "BODY"  ) && t.parentNode.tagName != "BODY")
            return;

        var ad=winRef.open(adsParams.click+(typeof adsParams.destinationUrl==""?"":adsParams.destinationUrl));
    }
    body.addEventListener("click", skin_backGroundClick);
}

function setupBodyBackgroundLD(adsParams) {
    // Suponemos que no estamos en un iframe
    var body = winRef.document.body;


    if(sc_href.match(/todotest/)||sc_href.match(/fourfourtwo/)||sc_href.match(/autopista/)||sc_href.match(/motociclismo.es/)||sc_href.match(/ecuestre.es/)||sc_href.match(/revistaoxigeno.es/)||sc_href.match(/trailrun/)||sc_href.match(/triatlon/)||sc_href.match(/sportlife/)||sc_href.match(/womenshealth/)||sc_href.match(/soycorredor/)||sc_href.match(/runners.es/)||sc_href.match(/menshealth/))
    {
        //body.add("wallpaper-web");
        body.className += ' wallpaper-web';
        body.style.backgroundPosition = "50% 0%";
        noClick=true;
    }
    else if(sc_href.match(/libertaddigital/) || sc_href.match(/libremercado/)) {
        console.log('sc_message: new Skin is loaded');
        parent.publd.encaja_skin('scroll');

        var sc_loc = window.location; 

        var bodyPage = winRef.document.body;
        var body = document.createElement('div');
            body.classList.add('sc_body_box');
            body.style.height = window.innerHeight + "px"; 
             
            bodyPage.insertBefore(body, bodyPage.getElementsByTagName('div')[0]);
            body.style.backgroundPositionX = "50%";

            // if (sc_loc.pathname == "/") {
            //     body.style.top = "160px";
            // } else {
            //     body.style.top = "80px";
            // }

                // if (sc_point >= 0) {
                //     body.style.top = sc_point[sc_point - 1].offsetTop + 'px';
                // }
        var srollCounter = [];
        var dir;
        var lastPoint = 1;
        function scScroll() {
            var sc_height = window.innerHeight;
            var scrollpos = parent.window.scrollY;
            srollCounter.push(scrollpos);
            // SI - scroll indicator
            var SI = srollCounter[srollCounter.length - 100];
            if (SI < scrollpos) {
                dir = 'down';
            }else if (SI >= scrollpos) {
                dir = 'up';
            }

            function add_width_on_scroll() {
                document.getElementsByClassName('sc_body_box')[lastPoint - 1].style.minHeight = sc_height + scrollpos + "px";
            }
            var sc_point = document.querySelectorAll('hr.contenedor');
            var sc_actualPoint = sc_point.length;
            if(scrollpos > 1 && sc_actualPoint < lastPoint){
                // add_width_on_scroll();
            }
            console.log('sc_message: sc_point is: ' + sc_point.length + ' and direction is: ' + dir + ' and last point is: ' + lastPoint);
            if (sc_actualPoint === lastPoint && dir === 'down' && sc_actualPoint > 0) {
                console.log('checkpoint SMCS: ' + lastPoint);
                lastPoint++;
                var body = document.createElement('div');
                body.classList.add('sc_body_box');
                body.style.height = window.innerHeight +"px"; 
                 
                bodyPage.insertBefore(body, bodyPage.getElementsByTagName('div')[0]);
                body.style.backgroundPositionX = "50%";
                body.style.top = sc_point[sc_actualPoint - 1].offsetTop + 'px';
                body.style.backgroundColor = adsParams.backgroundColor;
                body.style.backgroundAttachment = adsParams.attachment;
                if(typeof adsParams.image!="undefined")
                    body.style.backgroundImage="url('"+adsParams.image+"')";
                var skin_backGroundClick = function(e) {
                    EE = e ? e : event;
                    if (!EE)
                        return;
                    var t = EE.target ? EE.target : EE.srcElement;
                    if ((!t || t.tagName != "BODY"  ) && t.parentNode.tagName != "BODY")
                        return;

                    var ad=winRef.open(adsParams.click+(typeof adsParams.destinationUrl==""?"":adsParams.destinationUrl));
                }
                body.addEventListener("click", skin_backGroundClick);
            }
        }
        // scScroll();

        window.addEventListener('scroll', function(){
            scScroll();
        });
    }
    else {
        //Si es cualquier otro

        body.style.backgroundPosition = "50% 0%";

    }

    body.style.cursor = 'default';
    body.style.backgroundRepeat = "no-repeat";
    body.style.minHeight = "500px";
    body.style.width = "100%";
    body.style.backgroundColor = adsParams.backgroundColor;
    body.style.backgroundAttachment = adsParams.attachment;
    if(typeof adsParams.image!="undefined")
        body.style.backgroundImage="url('"+adsParams.image+"')";
    var skin_backGroundClick = function(e) {
        EE = e ? e : event;
        if (!EE)
            return;
        var t = EE.target ? EE.target : EE.srcElement;
        if ((!t || t.tagName != "BODY"  ) && t.parentNode.tagName != "BODY")
            return;

        var ad=winRef.open(adsParams.click+(typeof adsParams.destinationUrl==""?"":adsParams.destinationUrl));
    }
    body.addEventListener("click", skin_backGroundClick);
}

function adjustContainer(adsParams,width)
{
    var document=winRef.document;
    setupBodyBackground(adsParams);
    var topDoc = winRef.document;
    // PRESET GENERAL
    var theTimer = setInterval(function() {
        element = winRef.document.getElementById('ftdiv' + adsParams.ftdiv);
        if (!element)
            return;
        element.style.width = width;
        element.style.height = adsParams.height + "px";
        element.style.margin = "0px auto";
        element.style.position = "relative";
        clearInterval(theTimer);
    }, 100);
}


function adjustContainerLD(adsParams,width)
{
    var document=winRef.document;
    setupBodyBackgroundLD(adsParams);
    var topDoc = winRef.document;
    // PRESET GENERAL
    var theTimer = setInterval(function() {
        element = winRef.document.getElementById('ftdiv' + adsParams.ftdiv);
        if (!element)
            return;
        element.style.width = width;
        element.style.height = adsParams.height + "px";
        element.style.margin = "0px auto";
        element.style.position = "relative";
        clearInterval(theTimer);
    }, 100);
}


function setupBackground(adsParams)
{
    if(typeof adsParams.image==="undefined")
        return;

    var body;
    try {
        body = winRef.document.body;
    } catch(e) {
        // 
    }

    var size = winRef.screen.width;
    body.style.cursor = '[%CURSOR%]';

    setupBodyBackground(adsParams);
}


window.scSkinCleaner = function () {
    var body = document.body;
    var sc_ftdivBg = document.getElementsByClassName('sc-ftdivBg')[0];
    try {
        body.style.cursor = 'default';
        body.style.minHeight = "none";
        body.style.width = "100%";
        body.style.background = "rgb(5, 4, 5)";
        body.classList.remove("sc-atresplayer");
        sc_ftdivBg.remove();
    } catch(err){}
    console.log("sc-skin-cleaner");  
}

})();

