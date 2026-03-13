// components/DurumCubugu.tsx

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Tema } from '../constants/Tema';

interface DurumCubuguProps {
  etiket: string;
  deger: number;
  ikon: string;
}

export const DurumCubugu = ({ etiket, deger, ikon }: DurumCubuguProps) => {
  const animasyonluGenislik = useRef(new Animated.Value(deger)).current;

  useEffect(() => {
    Animated.spring(animasyonluGenislik, {
      toValue: deger,
      friction: 6, // Biraz daha canlı bir sekme hissi
      tension: 40,
      useNativeDriver: false, 
    }).start();
  }, [deger]);

  const getRenkler = () => {
    if (deger >= 70) return { ana: Tema.renkler.durumDolu, golge: Tema.renkler.durumDoluGolge };
    if (deger >= 30) return { ana: Tema.renkler.durumOrta, golge: Tema.renkler.durumOrtaGolge };
    return { ana: Tema.renkler.durumKritik, golge: Tema.renkler.durumKritikGolge };
  };

  const renk = getRenkler();

  return (
    <View style={stiller.konteyner}>
      <View style={stiller.etiketSatiri}>
        <View style={stiller.ikonMetinSarmal}>
          <Text style={stiller.ikon}>{ikon}</Text>
          <Text style={stiller.etiketYazisi}>{etiket}</Text>
        </View>
        <Text style={[stiller.yuzdeYazisi, { color: renk.ana }]}>%{deger}</Text>
      </View>
      
      {/* Çubuğun Şık Dış Kabuğu */}
      <View style={stiller.cubukArkaPlan}>
        {/* Hareketli ve 3D Hissiyatlı Dolgu */}
        <Animated.View 
          style={[
            stiller.cubukDolu, 
            { 
              width: animasyonluGenislik.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%']
              }),
              backgroundColor: renk.ana,
              borderBottomColor: renk.golge, // Alt kısmında ince koyu çizgi efekti
              borderBottomWidth: 3, 
            }
          ]} 
        >
          {/* Üstteki beyaz ışık parlaması (Duolingo effect) */}
          <View style={stiller.isikParlama} />
        </Animated.View>
      </View>
    </View>
  );
};

const stiller = StyleSheet.create({
  konteyner: {
    width: '100%',
    marginBottom: 18,
  },
  etiketSatiri: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ikonMetinSarmal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ikon: {
    fontSize: 18,
  },
  etiketYazisi: {
    fontSize: Tema.fontlar.durumMetni,
    fontWeight: '800', // Daha tok
    color: Tema.renkler.anaMetin,
  },
  yuzdeYazisi: {
    fontSize: Tema.fontlar.durumMetni,
    fontWeight: '900',
  },
  cubukArkaPlan: {
    height: 22, // Çok daha etli ve Premium
    backgroundColor: Tema.renkler.durumBos,
    borderRadius: Tema.olculer.koseOvalligi,
    overflow: 'hidden',
  },
  cubukDolu: {
    height: '100%',
    borderRadius: Tema.olculer.koseOvalligi,
    overflow: 'hidden', // Işık parlaması köşelerden taşmasın
  },
  isikParlama: {
    height: '35%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.25)', // Üst kısımda ince bir beyazlık bırakır
  }
});
