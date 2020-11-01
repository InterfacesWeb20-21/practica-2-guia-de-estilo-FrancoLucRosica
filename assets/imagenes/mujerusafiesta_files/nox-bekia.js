sctiltle = function(s) {
       var r = s.toLowerCase(s);
       r = r.replace(new RegExp(/[àáâãäå]/g), "a");
       r = r.replace(new RegExp(/æ/g), "ae");
       r = r.replace(new RegExp(/ç/g), "c");
       r = r.replace(new RegExp(/[èéêë]/g), "e");
       r = r.replace(new RegExp(/[ìíîï]/g), "i");
       r = r.replace(new RegExp(/ñ/g), "n");
       r = r.replace(new RegExp(/[òóôõö]/g), "o");
       r = r.replace(new RegExp(/œ/g), "oe");
       r = r.replace(new RegExp(/[ùúûü]/g), "u");
       r = r.replace(new RegExp(/[ýÿ]/g), "y");
       r = r.replace(new RegExp(/[,\/]/g), ",")
       return r;
}
googletag.cmd.push(function() {
	var mapping_scnoxvo = googletag.sizeMapping().addSize([320, 200], [[300, 600], [125, 125], [200, 200], 'fluid']).addSize([729, 200], [[300, 600], 'fluid']).addSize([980, 200], [[728, 90], [970, 250], [980, 200]]).addSize([1025, 200], [[728, 90], [980, 200], [970, 250], [125, 125], [200, 200], [980, 250]]).build();
	var mapping_scnoxvobday = googletag.sizeMapping().addSize([320, 200], [300, 250]).addSize([729, 200], [300, 250]).addSize([980, 200], [[800, 250]]).addSize([1025, 200], [[800, 250]]).build();
	var mapping_scnoxvomputop = googletag.sizeMapping().addSize([320, 200], [[300, 250], 'fluid']).addSize([729, 200], [[300, 250], 'fluid']).addSize([980, 200], [[300, 600], [300, 250], 'fluid']).addSize([1025, 200], [[300, 600], [300, 250], 'fluid']).build();
	if (document.location.href.indexOf("bekiamoda.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/moda', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/moda', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/moda', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modaBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modaBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiabelleza.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/belleza', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/belleza', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/belleza', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/bellezaBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/bellezaBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiaviajes.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/viajes', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/viajes', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/viajes', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/viajesBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/viajesBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiapareja.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/pareja', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/pareja', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/pareja', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/parejaBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/parejaBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiapadres.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/padres', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/padres', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/padres', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/padresBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/padresBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiasalud.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/salud', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/salud', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/salud', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/saludBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/saludBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiacocina.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/cocina', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/cocina', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/cocina', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/cocinaBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/cocinaBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiamascotas.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/mascotas', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/mascotas', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/mascotas', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/mascotasBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/mascotasBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekianavidad.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/navidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/navidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/navidad', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/navidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/navidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiahoroscopo.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/horoscopo', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/horoscopo', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/horoscopo', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/horoscopoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/horoscopoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("es.bekia.tv/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/tv', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/tv', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/tv', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/tvBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/tvBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiafit.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/fit', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/fit', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/fit', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/fitBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/fitBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiapsicologia.com/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/psicologia', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/psicologia', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/psicologia', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/psicologiaBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/psicologiaBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/animales") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/belleza-y-salud") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/ecologia-y-medio-ambiente") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/problemas-de-salud") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/esoterismo") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/nutricion") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/recetas-sanas") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/reflexiones") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/medicina-natural") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com/vida-sana") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/resto', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/resto', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/restoBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("enbuenasmanos.com") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/home', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineOutOfPageSlot('/5555/NOX-ENBUENASMANO.ES/home', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/home', [[300, 600], 'fluid', [300, 250]], 'sc-mpu-top').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/brandday', [800, 250], 'sc-brandday').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/homeBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-ENBUENASMANO.ES/homeBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/celebrities/noticias/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/realeza/noticias/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/sociedad/noticias/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/cine/noticias/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/television/noticias/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/musica/noticias/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/videos/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekia.es/fotos/") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/actualidad', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidad', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/actualidadBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else if (document.location.href.indexOf("bekiahogar.com") != -1) {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/hogar', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/hogar', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/hogar', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/hogarBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/hogarBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	} else {
		var seccion = window.location.pathname.split(/[:.\/ -]/).join(',').toLowerCase();
		var tags2 = document.title.split(/[:.\/ -]/).join(',');
		var tags = sctiltle(tags2);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/home', [[980, 200], [970, 250], [728, 90], [125, 125]], 'sc-top').defineSizeMapping(mapping_scnoxvo).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		// googletag.defineOutOfPageSlot('/5555/NOX-BEKIA.ES/home', 'sc-oop').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/home', ['fluid', [300, 250], [300, 600]], 'sc-mpu-top').defineSizeMapping(mapping_scnoxvomputop).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/homeBTF', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/homeBTF2', ['fluid', [300, 250], [300, 600]], 'sc-mpu-btf2').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/modulo', [[700, 150], 'fluid'], 'sc-modulo').addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
		googletag.defineSlot('/5555/NOX-BEKIA.ES/brandday', [800, 250], 'sc-brandday').defineSizeMapping(mapping_scnoxvobday).addService(googletag.pubads()).setTargeting("lazy", "activated").setTargeting("tags", tags).setTargeting("seccion", seccion);
	}
	googletag.pubads().enableLazyLoad();
	googletag.pubads().enableLazyLoad({
		fetchMarginPercent : 1
	});
	googletag.pubads().enableLazyLoad({
		fetchMarginPercent : 50,
		renderMarginPercent : 10,
		mobileScaling : 0
	});
	googletag.enableServices();
	googletag.display('sc-brandday');
	googletag.display('sc-mpu-btf');
	googletag.display('sc-mpu-btf2');
});