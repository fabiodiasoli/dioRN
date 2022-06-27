import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 
'https://avatars.githubusercontent.com/u/102769680?v=4';

const urlToMyGithub = 'https://github.com/fabiodiasoli';

const App = () => {

    const handlePressGoToGithub = async ()=>{
        console.log('Verificando Link');
        Linking.canOpenURL (urlToMyGithub);
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res){
            console.log('Link aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={'#010409'} barStyle="light-content"/>
        <View style={style.content}>
            <Image 
            acessibility='Fabio Dias' 
            style={style.avatar} 
            source={{uri: imageProfileGithub }}
            />
           <Text style={[style.defaultText, style.name]}>Fábio Dias</Text>
           <Text style={[style.defaultText, style.nickname]}>fabiodiasoli</Text>
           <Text style={[style.defaultText, style.description]}>It Student | email: fabiodiasoli@gmail.com
           </Text>
           <Pressable onPress={handlePressGoToGithub}>
           <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
                Open in Github
                </Text>
                </View>
                </Pressable>
                </View>
                </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
container: {
    backgroundColor: '#010409',
    flex: 1,//Expandir para a tela inteira
    justifyContent:'center'
},
content:{
    alignItems:'center', 
    // flexDirection:'row', -> para inserir itens lado a lado
    padding: 20,
},
avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
},
defaultText:{
    color: colorFontGithub,
},
name:{
    fontWeight:'bold',
    fontSize: 24,
},
nickname:{
    fontSize:18,
    const: colorDarkFontGithub,
},
description:{
    fontWeight:'bold',
    fontSize:14,
},
button:{
    marginTop:20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
},
textButton:{
    fontWeight:'bold',
    fontSize:16,
},
});