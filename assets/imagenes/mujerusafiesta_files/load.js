

if (typeof _tb_dis === 'undefined' || _tb_dis === null) {
    var _tb_dis = false;
}
if (!_tb_dis) {
    var pm_ppy = "noxvo-network";

    var _pmep = '//widget.perfectmarket.com/';
    var _pmep_geo = '//geo.perfectmarket.com/';
    if (document.URL.indexOf('https://') > -1) {
        _pmep = _pmep.replace(/88\//gi, '90/');
        _pmep_geo = _pmep_geo.replace(/88\//gi, '90/');
    }
    var _pmpmk = pm_ppy + '/pmk-202003261.6.js';
    var _pmasync = true;
    var _pmoptimization = true;
    var _pmoptimizationmanipulation = true;
    var _pmhp = false;
    var _pmsb = false;

    function _pmloadfile(fileName) {

        if (_pmasync) {
            var js, elements = document.getElementsByTagName("head")[0];
            js = document.createElement("script");
            js.setAttribute("type", "text/javascript");
            js.setAttribute("src", fileName);
            js.setAttribute('async','');
            elements.appendChild(js);
        } else {
            document.writeln('<script src=' + fileName + '></script>');
        }
    }

    var pmk, pmglb, pmfa, pmad, pmdebug_c;
    pmglb = pmglb || null;
    pmfa = pmfa || null;
    pmad = pmad || null;
    pmdebug_c = pmdebug_c || null;
    pmk = pmk || null;
    var _pmenv = _tb_getUrlParameter('pmenv');
    //pm async
    var _pma = _tb_getUrlParameter('_pma');
    if (_pma == true) {
        _pmasync = true;
    }

    if (_pmenv && _pmenv == 'sandbox' && !_pmsb) {

        _pmep = '//widget.sandbox.perfectmarket.com/';
        _pmep_geo = '//geo.sandbox.perfectmarket.com/';
        var _tb_d = new Date();
        var _tb_rand = _tb_d.getTime();
        _pmpmk = pm_ppy + "/load.js?" + _tb_rand;
    }

    (function () {
        var sc = 'script', doc = document;
        _pmloadfile(_pmep + _pmpmk);
    })();
    function pmws_request_done() {
        var sc = "script", doc = document;
        if (doc.all && !window.opera) {
            doc.write('<' + sc + ' type="text/javascript" id="pm_contentloadtag" defer="defer" src="javascript:void(0)"><\/' + sc + '>');
            var pm_contentloadtag = doc.getElementById("pm_contentloadtag");
            if (pm_contentloadtag)pm_contentloadtag.onreadystatechange = function () {
                if (this.readyState == "complete") return;
            }
        }
        _pmloadfile(_pmep + _pmpmk);
    }


    function _tb_getUrlParameter(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }


     /** Generated CJS **/ if (window.location.href.indexOf('formulatv.com/videos/') > -1) {
       var _pm_ecd = {
        'sp': '1',
        'at': '//span[@class="author"]/text() | //span[@class="author"]//a'
    };
} 
else if (window.location.href.indexOf('formulatv.com/') > -1) {
  var _pm_ecd = {
        'opd': ["headline"],
        'hd':'//div[@class="headline"]//h1',
        'sx': '(//div[@class="barb-bar"]//button[@class="barb3"]//font)[2] | //button[@class="barb3"]/text()',
        'at': '//span[@class="author"]/text() | //span[@class="author"]//a'
    };
} 
else if (window.location.href.indexOf('www.losreplicantes.com/') > -1) {
    var _pm_ecd = {
        'sx': '//ul/li/a[@class="on"]',
        'at': '//div[@class="info"]//span[contains(@class,"author")]/a',
        'opd': ["image"],
        'im': '//div[contains(@id, "article")]/div/img/@src',

    };
} else if (window.location.href.indexOf('www.ecartelera.com/') > -1) {
    var _pm_ecd = {
        'sp': '1',
        'hd': '//div[contains(@class, "header")]//h1',
        'opd': ["headline"]

    };
}
else if (window.location.href.indexOf('www.bekia.es/') > -1) {
     var _pm_ecd = {
        'sx': '(//div[@id="breadc"]//span)[2]'
};
}
else {
    var _pm_ecd = {
        'sx': '(//div[@class="barb-bar"]//button[@class="barb3"]//font)[2] | //button[@class="barb3"]/text()',
        'at': '//span[@class="author"]/text() | //span[@class="author"]//a'
    };
}


var _tb_vpx = [{
        'xpath': '//div[@class="embedFTV"]//iframe',
        'attr': 'iframe'
    },
    {
        'xpath': '//div[@class="videocontent"]',
        'attr': 'div'
    },
    {
        'xpath': '//div[@id="embedLR"]//iframe',
        'attr': 'iframe'
    },
    {
        'xpath': '//div[@id="wrapper-contenido"]//iframe[contains(@src,"video")]',
        'attr': 'iframe'
    },
    {
        'xpath': '//iframe[contains(@class, "videoEC")]',
        'attr': 'iframe'
    },
    {
        'xpath': '//iframe[contains(@src, "video")]',
        'attr': 'iframe'
    },
    {
        'xpath': '//div[contains(@class,"video-js")]//video[@poster=""]',
        'attr': 'div'
    }
];


var _tb_vautop = false;

/** Generated CJS end **/ 
}