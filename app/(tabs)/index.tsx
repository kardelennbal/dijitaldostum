import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Tema } from '../../constants/Tema';
import { EvcilHayvanAnaPaneli } from '../../components/EvcilHayvanAnaPaneli';

export default function AnaEkran() {
  return (
    <SafeAreaView style={stiller.anaKonteyner}>
      <View style={stiller.baslikAlani}>
        <Text style={stiller.anaBaslik}>Dijital Dostum</Text>
        <Text style={stiller.altBaslik}>Beta v2.0</Text>
      </View>
      
      {/* 
        Tüm karmaşayı tek bir bileşene taşıdık! 
        Artık index.tsx tertemiz.
      */}
      <EvcilHayvanAnaPaneli isim="Tarçın" />
    </SafeAreaView>
  );
}

const stiller = StyleSheet.create({
  anaKonteyner: {
    flex: 1,
    backgroundColor: Tema.renkler.arkaPlan,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baslikAlani: {
    alignItems: 'center',
    marginBottom: 40,
  },
  anaBaslik: {
    fontSize: Tema.fontlar.baslik,
    fontWeight: '900', // En kalın React Native Font Weight
    color: Tema.renkler.anaMetin,
    letterSpacing: 1,
  },
  altBaslik: {
    fontSize: 14,
    color: Tema.renkler.altMetin,
    fontWeight: 'bold',
    marginTop: 5,
    letterSpacing: 2,
    textTransform: 'uppercase',
  }
});