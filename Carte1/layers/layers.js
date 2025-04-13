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
var format_Partdubtiusagersidentiel_4 = new ol.format.GeoJSON();
var features_Partdubtiusagersidentiel_4 = format_Partdubtiusagersidentiel_4.readFeatures(json_Partdubtiusagersidentiel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partdubtiusagersidentiel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partdubtiusagersidentiel_4.addFeatures(features_Partdubtiusagersidentiel_4);
var lyr_Partdubtiusagersidentiel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Partdubtiusagersidentiel_4, 
                style: style_Partdubtiusagersidentiel_4,
                popuplayertitle: 'Part du bâti à usage résidentiel',
                interactive: true,
    title: 'Part du bâti à usage résidentiel<br />\
    <img src="styles/legend/Partdubtiusagersidentiel_4_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Partdubtiusagersidentiel_4_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Partdubtiusagersidentiel_4_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Partdubtiusagersidentiel_4_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Partdubtiusagersidentiel_4_4.png" /> 80 - 100<br />' });
var format_Densitdevgtation_5 = new ol.format.GeoJSON();
var features_Densitdevgtation_5 = format_Densitdevgtation_5.readFeatures(json_Densitdevgtation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densitdevgtation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densitdevgtation_5.addFeatures(features_Densitdevgtation_5);
var lyr_Densitdevgtation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densitdevgtation_5, 
                style: style_Densitdevgtation_5,
                popuplayertitle: 'Densité de végétation (%)',
                interactive: true,
    title: 'Densité de végétation (%)<br />\
    <img src="styles/legend/Densitdevgtation_5_0.png" /> 0 - 14<br />\
    <img src="styles/legend/Densitdevgtation_5_1.png" /> 14 - 28<br />\
    <img src="styles/legend/Densitdevgtation_5_2.png" /> 28 - 44<br />\
    <img src="styles/legend/Densitdevgtation_5_3.png" /> 44 - 66<br />\
    <img src="styles/legend/Densitdevgtation_5_4.png" /> 66 - 100<br />' });
var format_Densitbtie_6 = new ol.format.GeoJSON();
var features_Densitbtie_6 = format_Densitbtie_6.readFeatures(json_Densitbtie_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densitbtie_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densitbtie_6.addFeatures(features_Densitbtie_6);
var lyr_Densitbtie_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densitbtie_6, 
                style: style_Densitbtie_6,
                popuplayertitle: 'Densité bâtie (%)',
                interactive: true,
    title: 'Densité bâtie (%)<br />\
    <img src="styles/legend/Densitbtie_6_0.png" /> 2 - 8<br />\
    <img src="styles/legend/Densitbtie_6_1.png" /> 8 - 16<br />\
    <img src="styles/legend/Densitbtie_6_2.png" /> 16 - 24<br />\
    <img src="styles/legend/Densitbtie_6_3.png" /> 24 - 39<br />\
    <img src="styles/legend/Densitbtie_6_4.png" /> 39 - 69<br />' });
var format_Morphologieurbaine_7 = new ol.format.GeoJSON();
var features_Morphologieurbaine_7 = format_Morphologieurbaine_7.readFeatures(json_Morphologieurbaine_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Morphologieurbaine_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morphologieurbaine_7.addFeatures(features_Morphologieurbaine_7);
var lyr_Morphologieurbaine_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Morphologieurbaine_7, 
                style: style_Morphologieurbaine_7,
                popuplayertitle: 'Morphologie urbaine',
                interactive: true,
    title: 'Morphologie urbaine<br />\
    <img src="styles/legend/Morphologieurbaine_7_0.png" /> Centre urbain<br />\
    <img src="styles/legend/Morphologieurbaine_7_1.png" /> Tissu mixte et dense<br />\
    <img src="styles/legend/Morphologieurbaine_7_2.png" /> Collectif haut discontinu<br />\
    <img src="styles/legend/Morphologieurbaine_7_3.png" /> Résidentiel dense<br />\
    <img src="styles/legend/Morphologieurbaine_7_4.png" /> Résidentiel épars<br />\
    <img src="styles/legend/Morphologieurbaine_7_5.png" /> Zones d\'activités<br />' });

lyr_OSMStandard_0.setVisible(false);lyr_ESRITopo_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(false);lyr_MontpellierMditerraneMtropole_3.setVisible(true);lyr_Partdubtiusagersidentiel_4.setVisible(false);lyr_Densitdevgtation_5.setVisible(false);lyr_Densitbtie_6.setVisible(false);lyr_Morphologieurbaine_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRITopo_1,lyr_GoogleSatellite_2,lyr_MontpellierMditerraneMtropole_3,lyr_Partdubtiusagersidentiel_4,lyr_Densitdevgtation_5,lyr_Densitbtie_6,lyr_Morphologieurbaine_7];
lyr_MontpellierMditerraneMtropole_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NOM': 'NOM', 'NATURE': 'NATURE', 'area': 'area', });
lyr_Partdubtiusagersidentiel_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Hauteur moyenne du bâti résidentiel': 'Hauteur moyenne du bâti résidentiel', 'Part du bâti résidentiel dans la maille': 'Part du bâti résidentiel dans la maille', 'Nombre de parcelles': 'Nombre de parcelles', 'surf_maille': 'surf_maille', 'Densité de bâti (%)': 'Densité de bâti (%)', 'Densité de végétation (%)': 'Densité de végétation (%)', 'Longueur totale des routes': 'Longueur totale des routes', 'Écart-type des hauteurs du bâti résidentiel': 'Écart-type des hauteurs du bâti résidentiel', 'Classif': 'Classif', 'surf_expl_sum': 'surf_expl_sum', 'energy_bat_sum': 'energy_bat_sum', 'irrad_moy_pond': 'irrad_moy_pond', 'potentiel_scenario1': 'potentiel_scenario1', 'Tissu identifié': 'Tissu identifié', 'potentiel_scenario2': 'potentiel_scenario2', 'energy15': 'energy15', 'energy60': 'energy60', 'irrad_pond_sc3': 'irrad_pond_sc3', 'potentiel_scenario3': 'potentiel_scenario3', 'irrad_pond_sc4': 'irrad_pond_sc4', 'potentiel_scenario4': 'potentiel_scenario4', });
lyr_Densitdevgtation_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Hauteur moyenne du bâti résidentiel': 'Hauteur moyenne du bâti résidentiel', 'Part du bâti résidentiel dans la maille': 'Part du bâti résidentiel dans la maille', 'Nombre de parcelles': 'Nombre de parcelles', 'surf_maille': 'surf_maille', 'Densité de bâti (%)': 'Densité de bâti (%)', 'Densité de végétation (%)': 'Densité de végétation (%)', 'Longueur totale des routes': 'Longueur totale des routes', 'Écart-type des hauteurs du bâti résidentiel': 'Écart-type des hauteurs du bâti résidentiel', 'Classif': 'Classif', 'surf_expl_sum': 'surf_expl_sum', 'energy_bat_sum': 'energy_bat_sum', 'irrad_moy_pond': 'irrad_moy_pond', 'potentiel_scenario1': 'potentiel_scenario1', 'Tissu identifié': 'Tissu identifié', 'potentiel_scenario2': 'potentiel_scenario2', 'energy15': 'energy15', 'energy60': 'energy60', 'irrad_pond_sc3': 'irrad_pond_sc3', 'potentiel_scenario3': 'potentiel_scenario3', 'irrad_pond_sc4': 'irrad_pond_sc4', 'potentiel_scenario4': 'potentiel_scenario4', });
lyr_Densitbtie_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Hauteur moyenne du bâti résidentiel': 'Hauteur moyenne du bâti résidentiel', 'Part du bâti résidentiel dans la maille': 'Part du bâti résidentiel dans la maille', 'Nombre de parcelles': 'Nombre de parcelles', 'surf_maille': 'surf_maille', 'Densité de bâti (%)': 'Densité de bâti (%)', 'Densité de végétation (%)': 'Densité de végétation (%)', 'Longueur totale des routes': 'Longueur totale des routes', 'Écart-type des hauteurs du bâti résidentiel': 'Écart-type des hauteurs du bâti résidentiel', 'Classif': 'Classif', 'surf_expl_sum': 'surf_expl_sum', 'energy_bat_sum': 'energy_bat_sum', 'irrad_moy_pond': 'irrad_moy_pond', 'potentiel_scenario1': 'potentiel_scenario1', 'Tissu identifié': 'Tissu identifié', 'potentiel_scenario2': 'potentiel_scenario2', 'energy15': 'energy15', 'energy60': 'energy60', 'irrad_pond_sc3': 'irrad_pond_sc3', 'potentiel_scenario3': 'potentiel_scenario3', 'irrad_pond_sc4': 'irrad_pond_sc4', 'potentiel_scenario4': 'potentiel_scenario4', });
lyr_Morphologieurbaine_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Hauteur moyenne du bâti résidentiel': 'Hauteur moyenne du bâti résidentiel', 'Part du bâti à usage résidentiel': 'Part du bâti à usage résidentiel', 'Nombre de parcelles': 'Nombre de parcelles', 'surf_maille': 'surf_maille', 'Densité bâtie (%)': 'Densité bâtie (%)', 'Densité de végétation (%)': 'Densité de végétation (%)', 'Somme de la longueur des routes (mètre)': 'Somme de la longueur des routes (mètre)', 'Écart-type des hauteurs du bâti résidentiel': 'Écart-type des hauteurs du bâti résidentiel', 'Classif': 'Classif', 'surf_expl_sum': 'surf_expl_sum', 'energy_bat_sum': 'energy_bat_sum', 'irrad_moy_pond': 'irrad_moy_pond', 'potentiel_scenario1': 'potentiel_scenario1', 'Tissu identifié': 'Tissu identifié', 'potentiel_scenario2': 'potentiel_scenario2', 'energy15': 'energy15', 'energy60': 'energy60', 'irrad_pond_sc3': 'irrad_pond_sc3', 'potentiel_scenario3': 'potentiel_scenario3', 'irrad_pond_sc4': 'irrad_pond_sc4', 'potentiel_scenario4': 'potentiel_scenario4', });
lyr_MontpellierMditerraneMtropole_3.set('fieldImages', {'fid': '', 'ID': '', 'CODE_SIREN': '', 'NOM': '', 'NATURE': '', 'area': '', });
lyr_Partdubtiusagersidentiel_4.set('fieldImages', {'fid': '', 'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'row_index': '', 'col_index': '', 'Hauteur moyenne du bâti résidentiel': '', 'Part du bâti résidentiel dans la maille': '', 'Nombre de parcelles': '', 'surf_maille': '', 'Densité de bâti (%)': '', 'Densité de végétation (%)': '', 'Longueur totale des routes': '', 'Écart-type des hauteurs du bâti résidentiel': '', 'Classif': '', 'surf_expl_sum': '', 'energy_bat_sum': '', 'irrad_moy_pond': '', 'potentiel_scenario1': '', 'Tissu identifié': '', 'potentiel_scenario2': '', 'energy15': '', 'energy60': '', 'irrad_pond_sc3': '', 'potentiel_scenario3': '', 'irrad_pond_sc4': '', 'potentiel_scenario4': '', });
lyr_Densitdevgtation_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Hauteur moyenne du bâti résidentiel': 'TextEdit', 'Part du bâti résidentiel dans la maille': 'TextEdit', 'Nombre de parcelles': 'Range', 'surf_maille': 'TextEdit', 'Densité de bâti (%)': 'TextEdit', 'Densité de végétation (%)': 'TextEdit', 'Longueur totale des routes': 'TextEdit', 'Écart-type des hauteurs du bâti résidentiel': 'TextEdit', 'Classif': 'Range', 'surf_expl_sum': 'TextEdit', 'energy_bat_sum': 'TextEdit', 'irrad_moy_pond': 'TextEdit', 'potentiel_scenario1': 'TextEdit', 'Tissu identifié': 'TextEdit', 'potentiel_scenario2': 'TextEdit', 'energy15': 'TextEdit', 'energy60': 'TextEdit', 'irrad_pond_sc3': 'TextEdit', 'potentiel_scenario3': 'TextEdit', 'irrad_pond_sc4': 'TextEdit', 'potentiel_scenario4': 'TextEdit', });
lyr_Densitbtie_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Hauteur moyenne du bâti résidentiel': 'TextEdit', 'Part du bâti résidentiel dans la maille': 'TextEdit', 'Nombre de parcelles': 'Range', 'surf_maille': 'TextEdit', 'Densité de bâti (%)': 'TextEdit', 'Densité de végétation (%)': 'TextEdit', 'Longueur totale des routes': 'TextEdit', 'Écart-type des hauteurs du bâti résidentiel': 'TextEdit', 'Classif': 'Range', 'surf_expl_sum': 'TextEdit', 'energy_bat_sum': 'TextEdit', 'irrad_moy_pond': 'TextEdit', 'potentiel_scenario1': 'TextEdit', 'Tissu identifié': 'TextEdit', 'potentiel_scenario2': 'TextEdit', 'energy15': 'TextEdit', 'energy60': 'TextEdit', 'irrad_pond_sc3': 'TextEdit', 'potentiel_scenario3': 'TextEdit', 'irrad_pond_sc4': 'TextEdit', 'potentiel_scenario4': 'TextEdit', });
lyr_Morphologieurbaine_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Hauteur moyenne du bâti résidentiel': 'TextEdit', 'Part du bâti à usage résidentiel': 'TextEdit', 'Nombre de parcelles': 'Range', 'surf_maille': 'TextEdit', 'Densité bâtie (%)': 'TextEdit', 'Densité de végétation (%)': 'TextEdit', 'Somme de la longueur des routes (mètre)': 'TextEdit', 'Écart-type des hauteurs du bâti résidentiel': 'TextEdit', 'Classif': 'Range', 'surf_expl_sum': 'TextEdit', 'energy_bat_sum': 'TextEdit', 'irrad_moy_pond': 'TextEdit', 'potentiel_scenario1': 'TextEdit', 'Tissu identifié': 'TextEdit', 'potentiel_scenario2': 'TextEdit', 'energy15': 'TextEdit', 'energy60': 'TextEdit', 'irrad_pond_sc3': 'TextEdit', 'potentiel_scenario3': 'TextEdit', 'irrad_pond_sc4': 'TextEdit', 'potentiel_scenario4': 'TextEdit', });
lyr_MontpellierMditerraneMtropole_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CODE_SIREN': 'no label', 'NOM': 'no label', 'NATURE': 'no label', 'area': 'no label', });
lyr_Partdubtiusagersidentiel_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Hauteur moyenne du bâti résidentiel': 'hidden field', 'Part du bâti résidentiel dans la maille': 'no label', 'Nombre de parcelles': 'hidden field', 'surf_maille': 'hidden field', 'Densité de bâti (%)': 'hidden field', 'Densité de végétation (%)': 'hidden field', 'Longueur totale des routes': 'hidden field', 'Écart-type des hauteurs du bâti résidentiel': 'hidden field', 'Classif': 'hidden field', 'surf_expl_sum': 'hidden field', 'energy_bat_sum': 'hidden field', 'irrad_moy_pond': 'hidden field', 'potentiel_scenario1': 'hidden field', 'Tissu identifié': 'header label - always visible', 'potentiel_scenario2': 'hidden field', 'energy15': 'hidden field', 'energy60': 'hidden field', 'irrad_pond_sc3': 'hidden field', 'potentiel_scenario3': 'hidden field', 'irrad_pond_sc4': 'hidden field', 'potentiel_scenario4': 'hidden field', });
lyr_Densitdevgtation_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Hauteur moyenne du bâti résidentiel': 'hidden field', 'Part du bâti résidentiel dans la maille': 'hidden field', 'Nombre de parcelles': 'hidden field', 'surf_maille': 'hidden field', 'Densité de bâti (%)': 'hidden field', 'Densité de végétation (%)': 'no label', 'Longueur totale des routes': 'hidden field', 'Écart-type des hauteurs du bâti résidentiel': 'hidden field', 'Classif': 'hidden field', 'surf_expl_sum': 'hidden field', 'energy_bat_sum': 'hidden field', 'irrad_moy_pond': 'hidden field', 'potentiel_scenario1': 'hidden field', 'Tissu identifié': 'header label - always visible', 'potentiel_scenario2': 'hidden field', 'energy15': 'hidden field', 'energy60': 'hidden field', 'irrad_pond_sc3': 'hidden field', 'potentiel_scenario3': 'hidden field', 'irrad_pond_sc4': 'hidden field', 'potentiel_scenario4': 'hidden field', });
lyr_Densitbtie_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Hauteur moyenne du bâti résidentiel': 'hidden field', 'Part du bâti résidentiel dans la maille': 'hidden field', 'Nombre de parcelles': 'hidden field', 'surf_maille': 'hidden field', 'Densité de bâti (%)': 'no label', 'Densité de végétation (%)': 'hidden field', 'Longueur totale des routes': 'hidden field', 'Écart-type des hauteurs du bâti résidentiel': 'hidden field', 'Classif': 'hidden field', 'surf_expl_sum': 'hidden field', 'energy_bat_sum': 'hidden field', 'irrad_moy_pond': 'hidden field', 'potentiel_scenario1': 'hidden field', 'Tissu identifié': 'header label - always visible', 'potentiel_scenario2': 'hidden field', 'energy15': 'hidden field', 'energy60': 'hidden field', 'irrad_pond_sc3': 'hidden field', 'potentiel_scenario3': 'hidden field', 'irrad_pond_sc4': 'hidden field', 'potentiel_scenario4': 'hidden field', });
lyr_Morphologieurbaine_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Hauteur moyenne du bâti résidentiel': 'inline label - always visible', 'Part du bâti à usage résidentiel': 'inline label - always visible', 'Nombre de parcelles': 'inline label - always visible', 'surf_maille': 'hidden field', 'Densité bâtie (%)': 'inline label - always visible', 'Densité de végétation (%)': 'inline label - always visible', 'Somme de la longueur des routes (mètre)': 'inline label - always visible', 'Écart-type des hauteurs du bâti résidentiel': 'inline label - always visible', 'Classif': 'hidden field', 'surf_expl_sum': 'hidden field', 'energy_bat_sum': 'hidden field', 'irrad_moy_pond': 'hidden field', 'potentiel_scenario1': 'hidden field', 'Tissu identifié': 'no label', 'potentiel_scenario2': 'hidden field', 'energy15': 'hidden field', 'energy60': 'hidden field', 'irrad_pond_sc3': 'hidden field', 'potentiel_scenario3': 'hidden field', 'irrad_pond_sc4': 'hidden field', 'potentiel_scenario4': 'hidden field', });
lyr_Morphologieurbaine_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});