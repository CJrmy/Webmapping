var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRITopo_1 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MontpellierMditerraneMtropole_3 = new ol.format.GeoJSON();
var features_MontpellierMditerraneMtropole_3 = format_MontpellierMditerraneMtropole_3.readFeatures(json_MontpellierMditerraneMtropole_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontpellierMditerraneMtropole_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontpellierMditerraneMtropole_3.addFeatures(features_MontpellierMditerraneMtropole_3);
var lyr_MontpellierMditerraneMtropole_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontpellierMditerraneMtropole_3, 
                style: style_MontpellierMditerraneMtropole_3,
                popuplayertitle: 'Montpellier Méditerranée Métropole',
                interactive: false,
                title: '<img src="styles/legend/MontpellierMditerraneMtropole_3.png" /> Montpellier Méditerranée Métropole'
            });
var format_Morphologieurbaine_4 = new ol.format.GeoJSON();
var features_Morphologieurbaine_4 = format_Morphologieurbaine_4.readFeatures(json_Morphologieurbaine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Morphologieurbaine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morphologieurbaine_4.addFeatures(features_Morphologieurbaine_4);
var lyr_Morphologieurbaine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Morphologieurbaine_4, 
                style: style_Morphologieurbaine_4,
                popuplayertitle: 'Morphologie urbaine',
                interactive: false,
    title: 'Morphologie urbaine<br />\
    <img src="styles/legend/Morphologieurbaine_4_0.png" /> Centre urbain<br />\
    <img src="styles/legend/Morphologieurbaine_4_1.png" /> Tissu mixte et dense<br />\
    <img src="styles/legend/Morphologieurbaine_4_2.png" /> Collectif haut discontinu<br />\
    <img src="styles/legend/Morphologieurbaine_4_3.png" /> Résidentiel dense<br />\
    <img src="styles/legend/Morphologieurbaine_4_4.png" /> Résidentiel épars<br />\
    <img src="styles/legend/Morphologieurbaine_4_5.png" /> Zones d\'activités<br />' });
var format_PotentielphotovoltaqueMWh_5 = new ol.format.GeoJSON();
var features_PotentielphotovoltaqueMWh_5 = format_PotentielphotovoltaqueMWh_5.readFeatures(json_PotentielphotovoltaqueMWh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentielphotovoltaqueMWh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentielphotovoltaqueMWh_5.addFeatures(features_PotentielphotovoltaqueMWh_5);
var lyr_PotentielphotovoltaqueMWh_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotentielphotovoltaqueMWh_5, 
                style: style_PotentielphotovoltaqueMWh_5,
                popuplayertitle: 'Potentiel photovoltaïque (MWh)',
                interactive: true,
    title: 'Potentiel photovoltaïque (MWh)<br />\
    <img src="styles/legend/PotentielphotovoltaqueMWh_5_0.png" /> 0 - 3581<br />\
    <img src="styles/legend/PotentielphotovoltaqueMWh_5_1.png" /> 3581 - 6822<br />\
    <img src="styles/legend/PotentielphotovoltaqueMWh_5_2.png" /> 6822 - 12110<br />\
    <img src="styles/legend/PotentielphotovoltaqueMWh_5_3.png" /> 12110 - 22609<br />\
    <img src="styles/legend/PotentielphotovoltaqueMWh_5_4.png" /> 22609 - 40810<br />\
    <img src="styles/legend/PotentielphotovoltaqueMWh_5_5.png" /> 40810 - 64516<br />' });

lyr_OSMStandard_0.setVisible(false);lyr_ESRITopo_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_MontpellierMditerraneMtropole_3.setVisible(true);lyr_Morphologieurbaine_4.setVisible(false);lyr_PotentielphotovoltaqueMWh_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRITopo_1,lyr_GoogleSatellite_2,lyr_MontpellierMditerraneMtropole_3,lyr_Morphologieurbaine_4,lyr_PotentielphotovoltaqueMWh_5];
lyr_MontpellierMditerraneMtropole_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NOM': 'NOM', 'NATURE': 'NATURE', 'area': 'area', });
lyr_Morphologieurbaine_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Hauteur moyenne du bâti résidentiel': 'Hauteur moyenne du bâti résidentiel', 'Part du bâti à usage résidentiel': 'Part du bâti à usage résidentiel', 'Nombre de parcelles': 'Nombre de parcelles', 'surf_maille': 'surf_maille', 'Densité bâtie (%)': 'Densité bâtie (%)', 'Densité de végétation (%)': 'Densité de végétation (%)', 'Somme de la longueur des routes (mètre)': 'Somme de la longueur des routes (mètre)', 'Écart-type des hauteurs du bâti résidentiel': 'Écart-type des hauteurs du bâti résidentiel', 'Classif': 'Classif', 'surf_expl_sum': 'surf_expl_sum', 'energy_bat_sum': 'energy_bat_sum', 'irrad_moy_pond': 'irrad_moy_pond', 'potentiel_scenario1': 'potentiel_scenario1', 'Tissu identifié': 'Tissu identifié', 'potentiel_scenario2': 'potentiel_scenario2', 'energy15': 'energy15', 'energy60': 'energy60', 'irrad_pond_sc3': 'irrad_pond_sc3', 'potentiel_scenario3': 'potentiel_scenario3', 'irrad_pond_sc4': 'irrad_pond_sc4', 'potentiel_scenario4': 'potentiel_scenario4', });
lyr_PotentielphotovoltaqueMWh_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Hauteur moyenne du bâti résidentiel': 'Hauteur moyenne du bâti résidentiel', 'Part du bâti à usage résidentiel': 'Part du bâti à usage résidentiel', 'Nombre de parcelles': 'Nombre de parcelles', 'surf_maille': 'surf_maille', 'Densité bâtie (%)': 'Densité bâtie (%)', 'Densité de végétation (%)': 'Densité de végétation (%)', 'Longueur totale des routes': 'Longueur totale des routes', 'Écart-type des hauteurs du bâti résidentiel': 'Écart-type des hauteurs du bâti résidentiel', 'Classif': 'Classif', 'surf_expl_sum': 'surf_expl_sum', 'energy_bat_sum': 'energy_bat_sum', 'irrad_moy_pond': 'irrad_moy_pond', 'Potentiel sol MWh/an S1': 'Potentiel sol MWh/an S1', 'MWh/an': 'MWh/an', 'Morphologie identifiée': 'Morphologie identifiée', 'energy15': 'energy15', 'energy60': 'energy60', 'irrad_pond_sc3': 'irrad_pond_sc3', 'potentiel_scenario3': 'potentiel_scenario3', 'irrad_pond_sc4': 'irrad_pond_sc4', 'potentiel_scenario4': 'potentiel_scenario4', });
lyr_MontpellierMditerraneMtropole_3.set('fieldImages', {'fid': '', 'ID': '', 'CODE_SIREN': '', 'NOM': '', 'NATURE': '', 'area': '', });
lyr_Morphologieurbaine_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Hauteur moyenne du bâti résidentiel': 'TextEdit', 'Part du bâti à usage résidentiel': 'TextEdit', 'Nombre de parcelles': 'Range', 'surf_maille': 'TextEdit', 'Densité bâtie (%)': 'TextEdit', 'Densité de végétation (%)': 'TextEdit', 'Somme de la longueur des routes (mètre)': 'TextEdit', 'Écart-type des hauteurs du bâti résidentiel': 'TextEdit', 'Classif': 'Range', 'surf_expl_sum': 'TextEdit', 'energy_bat_sum': 'TextEdit', 'irrad_moy_pond': 'TextEdit', 'potentiel_scenario1': 'TextEdit', 'Tissu identifié': 'TextEdit', 'potentiel_scenario2': 'TextEdit', 'energy15': 'TextEdit', 'energy60': 'TextEdit', 'irrad_pond_sc3': 'TextEdit', 'potentiel_scenario3': 'TextEdit', 'irrad_pond_sc4': 'TextEdit', 'potentiel_scenario4': 'TextEdit', });
lyr_PotentielphotovoltaqueMWh_5.set('fieldImages', {'fid': '', 'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'row_index': '', 'col_index': '', 'Hauteur moyenne du bâti résidentiel': '', 'Part du bâti à usage résidentiel': '', 'Nombre de parcelles': '', 'surf_maille': '', 'Densité bâtie (%)': '', 'Densité de végétation (%)': '', 'Longueur totale des routes': '', 'Écart-type des hauteurs du bâti résidentiel': '', 'Classif': '', 'surf_expl_sum': '', 'energy_bat_sum': '', 'irrad_moy_pond': '', 'Potentiel sol MWh/an S1': '', 'MWh/an': '', 'Morphologie identifiée': '', 'energy15': '', 'energy60': '', 'irrad_pond_sc3': '', 'potentiel_scenario3': '', 'irrad_pond_sc4': '', 'potentiel_scenario4': '', });
lyr_MontpellierMditerraneMtropole_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CODE_SIREN': 'no label', 'NOM': 'no label', 'NATURE': 'no label', 'area': 'no label', });
lyr_Morphologieurbaine_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Hauteur moyenne du bâti résidentiel': 'inline label - always visible', 'Part du bâti à usage résidentiel': 'inline label - always visible', 'Nombre de parcelles': 'inline label - always visible', 'surf_maille': 'hidden field', 'Densité bâtie (%)': 'inline label - always visible', 'Densité de végétation (%)': 'inline label - always visible', 'Somme de la longueur des routes (mètre)': 'inline label - always visible', 'Écart-type des hauteurs du bâti résidentiel': 'inline label - always visible', 'Classif': 'hidden field', 'surf_expl_sum': 'hidden field', 'energy_bat_sum': 'hidden field', 'irrad_moy_pond': 'hidden field', 'potentiel_scenario1': 'hidden field', 'Tissu identifié': 'no label', 'potentiel_scenario2': 'hidden field', 'energy15': 'hidden field', 'energy60': 'hidden field', 'irrad_pond_sc3': 'hidden field', 'potentiel_scenario3': 'hidden field', 'irrad_pond_sc4': 'hidden field', 'potentiel_scenario4': 'hidden field', });
lyr_PotentielphotovoltaqueMWh_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Hauteur moyenne du bâti résidentiel': 'hidden field', 'Part du bâti à usage résidentiel': 'hidden field', 'Nombre de parcelles': 'hidden field', 'surf_maille': 'hidden field', 'Densité bâtie (%)': 'hidden field', 'Densité de végétation (%)': 'hidden field', 'Longueur totale des routes': 'hidden field', 'Écart-type des hauteurs du bâti résidentiel': 'hidden field', 'Classif': 'hidden field', 'surf_expl_sum': 'hidden field', 'energy_bat_sum': 'hidden field', 'irrad_moy_pond': 'hidden field', 'Potentiel sol MWh/an S1': 'hidden field', 'MWh/an': 'inline label - always visible', 'Morphologie identifiée': 'inline label - always visible', 'energy15': 'hidden field', 'energy60': 'hidden field', 'irrad_pond_sc3': 'hidden field', 'potentiel_scenario3': 'hidden field', 'irrad_pond_sc4': 'hidden field', 'potentiel_scenario4': 'hidden field', });
lyr_PotentielphotovoltaqueMWh_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});