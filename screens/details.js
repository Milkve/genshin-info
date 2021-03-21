import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions , StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
// import data from "../data/characters-info.json";
import data from "../data/characters/klee.json";

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

export default function Details() {
  const [character, setCharacter] = React.useState(data);

  const collapsedInitialState = false;

  const [collapsedProfile, setCollapsedProfile] = React.useState(collapsedInitialState);
  const [collapsedConstellations, setCollapsedConstellations] = React.useState(collapsedInitialState);
  const [collapsedTalents, setCollapsedTalents] = React.useState(collapsedInitialState);

  const toggleExpandedProfile = () => {
    setCollapsedProfile(!collapsedProfile);
  };
  const toggleExpandedConstellations = () => {
    setCollapsedConstellations(!collapsedConstellations);
  };
  const toggleExpandedTalents = () => {
    setCollapsedTalents(!collapsedTalents);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.view}>
          <View style={styles.viewImage}>
            <Image
              resizeMethod='auto'
              source={{
                uri: character.img,
              }}
              style={styles.image}
            >
            </Image>
          </View>
          <View style={styles.viewInfo}>
            <Text> Nombre: {character.name} </Text>
            <Text> Vision: {character.vision} </Text>
            <Text> Rareza: {character.star} </Text>
            <Text> Arma: {character.weapon} </Text>
            <Text> Cumpleaños: {character.birthday} </Text>
            <Text> Constelación: {character.astrolabeName} </Text>
            <Text> Afiliación: {character.allegiance} </Text>
          </View>
        </View>
        
        <TouchableOpacity onPress={toggleExpandedProfile}>
          <View style={styles.collapsed}>
            <View style={styles.collapsedTitle}>
              <Text style={styles.viewProfile}> Perfil </Text>
            </View>
            <View style={styles.collapsedIcon}>
              <Text> { collapsedProfile ? 'Mostrar' : 'Ocultar'} </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={collapsedProfile} align="center">
          <View style={styles.viewProfile}>
            <Text> {character.profile} </Text>
          </View>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpandedTalents}>
          <View style={styles.collapsed}>
            <View style={styles.collapsedTitle}>
              <Text style={styles.viewProfile}> Talentos </Text>
            </View>
            <View style={styles.collapsedIcon}>
              <Text> { collapsedTalents ? 'Mostrar' : 'Ocultar'} </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={collapsedTalents} align="center">
          <View style={styles.viewInfoTwoSection}>
            <View style={styles.viewInfoTwoSectionImage}>
              <Image
                resizeMethod='auto'
                source={{
                  uri: character.talents.normalAttack.image,
                }}
                style={styles.imageTalent}
              ></Image>
              <Text> {character.talents.normalAttack.name} </Text>
            </View>
            <View style={styles.viewInfoTwoSectionText}>
              <Text> Ataque normal: {character.talents.normalAttack.normal} </Text>
              <Text> Ataque cargado: {character.talents.normalAttack.charged} </Text>
              <Text> Ataque descendiente: {character.talents.normalAttack.plunging} </Text>
            </View>
          </View>
          <View style={styles.viewInfoTwoSection}>
            <View style={styles.viewInfoTwoSectionImage}>
              <Image
                resizeMethod='auto'
                source={{
                  uri: character.talents.elementalSkill.image,
                }}
                style={styles.imageTalent}
              ></Image>
              <Text> {character.talents.elementalSkill.name} </Text>
            </View>
            <View style={styles.viewInfoTwoSectionText}>
              <Text> {character.talents.elementalSkill.desc} </Text>
            </View>
          </View>
          <View style={styles.viewInfoTwoSection}>
            <View style={styles.viewInfoTwoSectionImage}>
              <Image
                resizeMethod='auto'
                source={{
                  uri: character.talents.ultimateSkill.image,
                }}
                style={styles.imageTalent}
              ></Image>
              <Text> {character.talents.ultimateSkill.name} </Text>
            </View>
            <View style={styles.viewInfoTwoSectionText}>
              <Text> {character.talents.ultimateSkill.desc} </Text>
            </View>
          </View>
          {
            character.talents.sprint.name !== "" && (
              <View style={styles.viewInfoTwoSection}>
                <View style={styles.viewInfoTwoSectionImage}>
                  <Image
                    resizeMethod='auto'
                    source={{
                      uri: character.talents.sprint.image,
                    }}
                    style={styles.imageTalent}
                  ></Image>
                  <Text> {character.talents.sprint.name} </Text>
                </View>
                <View style={styles.viewInfoTwoSectionText}>
                  <Text> {character.talents.sprint.desc} </Text>
                </View>
              </View>
            )
          }
          <View style={styles.viewInfoTwoSection}>
            <View style={styles.viewInfoTwoSectionImage}>
              <Image
                resizeMethod='auto'
                source={{
                  uri: character.talents.passive1.image,
                }}
                style={styles.imageTalent}
              ></Image>
              <Text> {character.talents.passive1.name} </Text>
            </View>
            <View style={styles.viewInfoTwoSectionText}>
              <Text> {character.talents.passive1.desc} </Text>
            </View>
          </View>
          <View style={styles.viewInfoTwoSection}>
            <View style={styles.viewInfoTwoSectionImage}>
              <Image
                resizeMethod='auto'
                source={{
                  uri: character.talents.passive2.image,
                }}
                style={styles.imageTalent}
              ></Image>
              <Text> {character.talents.passive2.name} </Text>
            </View>
            <View style={styles.viewInfoTwoSectionText}>
              <Text> {character.talents.passive2.desc} </Text>
            </View>
          </View>
          <View style={styles.viewInfoTwoSection}>
          <View style={styles.viewInfoTwoSectionImage}>
            <Image
              resizeMethod='auto'
              source={{
                uri: character.talents.fieldSkill.image,
              }}
              style={styles.imageTalent}
            ></Image>
            <Text> {character.talents.fieldSkill.name} </Text>
          </View>
          <View style={styles.viewInfoTwoSectionText}>
            <Text> {character.talents.fieldSkill.desc} </Text>
          </View>
        </View>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpandedConstellations}>
          <View style={styles.collapsed}>
            <View style={styles.collapsedTitle}>
              <Text>Constelaciones</Text>
            </View>
            <View style={styles.collapsedIcon}>
              <Text> { collapsedConstellations ? 'Mostrar' : 'Ocultar'} </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={collapsedConstellations} align="center">
          {
            [1,2,3,4,5,6].map( (i) => {
              return (
                <View style={styles.viewInfoTwoSection} key={i}>
                  <View style={styles.viewInfoTwoSectionImage}>
                    <Image
                      resizeMethod='auto'
                      source={{
                        uri: character.constellations[i].img,
                      }}
                      style={styles.imageTalent}
                    ></Image>
                    <Text> {character.constellations[i].name} </Text>
                  </View>
                  <View style={styles.viewInfoTwoSectionText}>
                    <Text> {character.constellations[i].effect} </Text>
                  </View>
                </View>
              )
            })
          }
        </Collapsible>      

      </ScrollView>
      <StatusBar 
        hidden={true} 
        style="auto" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1966e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    padding: StatusBar.currentHeight,
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: 'wrap',
    marginTop: Dimensions.get('window').height*0.01,
  },
  image: {
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').height*0.3,
  },
  viewImage:{
    width: Dimensions.get('window').width*0.45,
  },
  viewInfo: {
    marginTop: Dimensions.get('window').height*0.03,
    width: Dimensions.get('window').width*0.45,
  },
  viewProfile: {
    marginHorizontal: Dimensions.get('window').height*0.03,
    marginVertical: Dimensions.get('window').height*0.01,
  },
  viewInfoTwoSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
    marginHorizontal: Dimensions.get('window').height*0.01,
    marginVertical: Dimensions.get('window').height*0.01,
  },
  viewInfoTwoSectionImage: {
    justifyContent: "center",
    flexWrap: 'wrap',
    alignItems: "center",
    width: Dimensions.get('window').width*0.2,
  },
  viewInfoTwoSectionText: {
    justifyContent: "center",
    width: Dimensions.get('window').width*0.55,
  },
  imageTalent: {
    width: Dimensions.get('window').width*0.2,
    height: Dimensions.get('window').height*0.1,
  },
  collapsed:{
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
    marginHorizontal: Dimensions.get('window').height*0.03,
    marginVertical: Dimensions.get('window').height*0.01,
  },
  collapsedTitle: {
    justifyContent: "center",
    flexWrap: 'wrap',
    alignItems: "center",
    width: Dimensions.get('window').width*0.6,
  },
  collapsedIcon: {
    justifyContent: "center",
    width: Dimensions.get('window').width*0.2,
  }
});