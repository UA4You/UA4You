var m1 = 
window.onload = function(){
	var map = L.map('map').setView([38.384500, -0.513800], 16);
	  aux = map;
	  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	    maxZoom: 18
	  }).addTo(map);

	L.control.scale().addTo(map);

	var m1 = L.marker([38.38879542833995, -0.515285290612924]).addTo(map);
	var m2 = L.marker([38.385751, -0.517099]).addTo(map);//Facultad Derecho
	var m3 = L.marker([38.385188, -0.516788]).addTo(map);//Paraninfo
	var m4 = L.marker([38.383136, -0.516176]).addTo(map);//Club social I
	var m5 = L.marker([38.384490, -0.516391]).addTo(map);//Aulario I
	var m6 = L.marker([38.382934, -0.513355]).addTo(map);//Club social II
	var m7 = L.marker([38.383304, -0.512239]).addTo(map);//Biblio general
	var m8 = L.marker([38.382627, -0.510700]).addTo(map);//Optica
	var m9 = L.marker([38.384515, -0.510280]).addTo(map);//Aulario II
	var m10 = L.marker([38.384733, -0.512011]).addTo(map);//Rectorado
	var m11 = L.marker([38.385296, -0.509297]).addTo(map);//Colegio Mayor
	var m12 = L.marker([38.386776, -0.511314]).addTo(map);//Poli I
	var m13 = L.marker([38.387380, -0.518085]).addTo(map);//Facultad de ciencias VI - Aulario
	var m14 = L.marker([38.387959, -0.519780]).addTo(map);//Facultad de Educación
	var m15 = L.marker([38.382949, -0.514197]).addTo(map);//Facultad de Ciencias Económicas y Empresariales
	var m16 = L.marker([38.382250, -0.512246]).addTo(map);//German Bernecer
	var m17 = L.marker([38.382519, -0.511481]).addTo(map);//Institutos Universitarios
	var m18 = L.marker([38.382870, -0.509862]).addTo(map);//Poli IV
	var m19 = L.marker([38.386108, -0.514464]).addTo(map);//Facultad de Filosofia y Letras I
	var m20 = L.marker([38.385427, -0.514561]).addTo(map);//Facultad de Filosofia y Letras II
	var m21 = L.marker([38.385015, -0.515473]).addTo(map);//Facultad de Filosofia y Letras II
	var m22 = L.marker([38.380910, -0.511825]).addTo(map);//Museo de la Universidad de Alicante
	var m23 = L.marker([38.382475, -0.514795]).addTo(map);//Centro de control de seguridad
	var m24 = L.marker([38.383871, -0.514595]).addTo(map);//Facultad de ciencias de la salud
	var m25 = L.marker([38.382162, -0.513039]).addTo(map);//Centro Comercial
	var m26 = L.marker([38.384709, -0.513273]).addTo(map);//Torre de control
	var m27 = L.marker([38.385807, -0.513497]).addTo(map);//Pabellón del Alumnado
	var m28 = L.marker([38.386010, -0.512836]).addTo(map);//
	var m29 = L.marker([38.385770, -0.512824]).addTo(map);//Pabellón Jorge Juan
	var m30 = L.marker([38.386060, -0.512111]).addTo(map);//Facultad de Educación I
	var m31 = L.marker([38.386783, -0.512208]).addTo(map);//Poli III
	var m32 = L.marker([38.387502, -0.512508]).addTo(map);//Poli II
	var m33 = L.marker([38.387409, -0.513398]).addTo(map);//Facultad de Ciencias V
	var m34 = L.marker([38.387252, -0.514075]).addTo(map);//Pabellón de Biotecnologia
	var m35 = L.marker([38.386525, -0.513021]).addTo(map);//Pabellón Universitario 13
	var m36 = L.marker([38.386373, -0.513709]).addTo(map);//Pabellon Universitario 12
	var m37 = L.marker([38.387889, -0.513933]).addTo(map);//Facultad de ciencias IV
	var m38 = L.marker([38.387783, -0.514515]).addTo(map);//Facultad de ciencias III
	var m39 = L.marker([38.388027, -0.513431]).addTo(map);//Servicios de Informática
	var m40 = L.marker([38.383545, -0.511108]).addTo(map);//Ciencias Sociales
	var m41 = L.marker([38.386726, -0.518921]).addTo(map);//Area de experimentación industrial y de servicios
	var m42 = L.marker([38.387216, -0.514905]).addTo(map);//Facultad de Ciencias I
	var m43 = L.marker([38.386792, -0.515769]).addTo(map);//Facultad de Ciencias II
	var m44 = L.marker([38.386784, -0.514610]).addTo(map);//Biblioteca de Ciencias
	var m45 = L.marker([38.388198, -0.512825]).addTo(map);//Pabellón de Prevención y apoyo audiovisual
	var m46 = L.marker([38.387180, -0.515529]).addTo(map);//Cafeteria facultad de ciencias
	var m47 = L.marker([38.387272, -0.511527]).addTo(map);//Cafeteria escuela politecnica superior
	var m48 = L.marker([38.381981, -0.508269]).addTo(map);//Aulario III

	m1.bindPopup("<b>Zona Deportiva</b><br>Descripción");
	m2.bindPopup("<b>Facultad de Derecho</b><br>Descripción");
	m3.bindPopup("<b>Paraninfo</b><br>Descripción");
	m4.bindPopup("<b>Club Social I</b><br>Descripción");
	m5.bindPopup("<b>Aulario I</b><br>Descripción");
	m6.bindPopup("<b>Club Social II</b><br>Descripción");
	m7.bindPopup("<b>Biblioteca General</b><br>Descripción");
	m8.bindPopup("<b>Óptica y Optometría</b><br>Descripción");
	m9.bindPopup("<b>Aulario II</b><br>Edificio pensado para recoger una gran plaza o eje compositivo delimitado por edificios de gran tamaño y/o de una cuerta carga representativa");
	m10.bindPopup("<b>Rectorado y Servicios Generales</b><br>Descripción");
	m11.bindPopup("<b>Colegio Mayor</b><br>Descripción");
	m12.bindPopup("<b>Escuela Politécnica Superior I</b><br>Descripción");
	m13.bindPopup("<b>Facultad de Ciencias VI - Aulario</b><br>Descripción");
	m14.bindPopup("<b>Facultad de Educación</b><br>Descripción");
	m15.bindPopup("<b>Facultad de Ciencias Económicas y Empresariales</b><br>Descripción");
	m16.bindPopup("<b>German Bernecer</b><br>Descripción");
	m17.bindPopup("<b>Institutos Universitarios</b><br>Descripción");
	m18.bindPopup("<b>Escuela Politécnica Superior IV</b><br>Descripción");
	m19.bindPopup("<b>Facultad de Filosofia y Letras I</b><br>Descripción");
	m20.bindPopup("<b>Facultad de Filosofia y Letras II</b><br>Descripción");
	m21.bindPopup("<b>Facultad de Filosofia y Letras III</b><br>Descripción");
	m22.bindPopup("<b>Museo de la Universidad de Alicante</b><br>Descripción");
	m23.bindPopup("<b>Centro de control de seguridad</b><br>Descripción");
	m24.bindPopup("<b>Facultad de ciencias de la salud</b><br>Descripción");
	m25.bindPopup("<b>Centro Comercial</b><br>Descripción");
	m26.bindPopup("<b>Torre de Control</b><br>Descripción");
	m27.bindPopup("<b>Pabellón del Alumnado</b><br>Descripción");
	m28.bindPopup("<b>Facultad de Educación III</b><br>Descripción");
	m29.bindPopup("<b>Pabellón Jorge Juan</b><br>Descripción");
	m30.bindPopup("<b>Facultad de Educación I</b><br>Descripción");
	m31.bindPopup("<b>Escuela Politécnica Superior III</b><br>Descripción");
	m32.bindPopup("<b>Escuela Politécnica Superior II</b><br>Descripción");
	m33.bindPopup("<b>Facultad de Ciencias V</b><br>Descripción");
	m34.bindPopup("<b>Pabellón de Biotecnologia</b><br>Descripción");
	m35.bindPopup("<b>Pabellón Universitario 13</b><br>Descripción");
	m36.bindPopup("<b>Pabellón Universitario 12</b><br>Descripción");
	m37.bindPopup("<b>Facultad de ciencias IV</b><br>Descripción");
	m38.bindPopup("<b>Facultad de ciencias III</b><br>Descripción");
	m39.bindPopup("<b>Servicios de Informática</b><br>Descripción");
	m40.bindPopup("<b>Ciencias Sociales</b><br>Descripción");
	m41.bindPopup("<b>Area de experimentación industrial y de servicios</b><br>Descripción");
	m42.bindPopup("<b>Facultad de Ciencias I</b><br>Descripción");
	m43.bindPopup("<b>Facultad de Ciencias II</b><br>Descripción");
	m44.bindPopup("<b>Biblioteca de Ciencias</b><br>Descripción");
	m45.bindPopup("<b>Pabellón de Prevención y apoyo audiovisual</b><br>Descripción");
	m46.bindPopup("<b>Cafeteria facultad de ciencias</b><br>Descripción");
	m47.bindPopup("<b>Cafeteria escuela politecnica superior</b><br>Descripción");
	m48.bindPopup("<b>Aulario III</b><br>Descripción");
}