// components/BouncyButon.tsx

import React, { useRef } from 'react';
import { Text, TouchableWithoutFeedback, Animated, StyleSheet, DimensionValue } from 'react-native';
import { Tema } from '../constants/Tema';

interface BouncyButonProps {
  onPress: () => void;
  metin: string;
  altMetin?: string; // Görevdeki gibi XP yazmak için
  renk: string;
  koyuRenk: string; // 3D gölge rengi için
  genislik?: DimensionValue;
}

export const BouncyButon = ({ onPress, metin, altMetin, renk, koyuRenk, genislik = '100%' }: BouncyButonProps) => {
  const animasyonDegeri = useRef(new Animated.Value(1)).current;
  const yukseklikFarki = useRef(new Animated.Value(0)).current;

  const basinca = () => {
    // 3D basılma efekti (hem küçülür hem gölgesi azalır)
    Animated.parallel([
      Animated.timing(animasyonDegeri, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: false,
      }),
      Animated.timing(yukseklikFarki, {
        toValue: 6, // Buton aşağı gölgeye doğru kayar
        duration: 50,
        useNativeDriver: false,
      })
    ]).start();
  };

  const birakinca = () => {
    // Eski haline şımarıkça (Bouncy) zıplayarak döner
    Animated.parallel([
      Animated.spring(animasyonDegeri, {
        toValue: 1,
        friction: 3,
        tension: 80,
        useNativeDriver: false,
      }),
      Animated.spring(yukseklikFarki, {
        toValue: 0,
        friction: 3,
        tension: 80,
        useNativeDriver: false,
      })
    ]).start(() => onPress());
  };

  return (
    <TouchableWithoutFeedback onPressIn={basinca} onPressOut={birakinca}>
      <Animated.View style={[stiller.konteyner, { width: genislik, transform: [{ scale: animasyonDegeri }] }]}>
        {/* Arkadaki koyu kısım (3D Gölge) */}
        <Animated.View style={[stiller.golgeAlani, { backgroundColor: koyuRenk, transform: [{ translateY: yukseklikFarki.interpolate({
            inputRange: [0, 6],
            outputRange: [6, 0] // Basılınca gölge küçülmez ama üstteki buton gölgeye yaklaşır
        }) }] }]} />
        
        {/* Üstteki basılabilir canlı renkli alan */}
        <Animated.View style={[stiller.butonYuzu, { backgroundColor: renk, transform: [{ translateY: yukseklikFarki }] }]}>
          <Text style={stiller.metin}>{metin}</Text>
          {altMetin && <Text style={stiller.altMetin}>{altMetin}</Text>}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const stiller = StyleSheet.create({
  konteyner: {
    marginBottom: 10,
    position: 'relative',
  },
  butonYuzu: {
    paddingVertical: 18,
    borderRadius: Tema.olculer.kucukKoseOvalligi,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2, // Gölgenin üstünde durur
  },
  golgeAlani: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: Tema.olculer.kucukKoseOvalligi,
    zIndex: 1, 
  },
  metin: {
    color: Tema.renkler.butonMetin,
    fontSize: Tema.fontlar.butonMetni,
    fontWeight: '900', // En kalın Duolingo fontu hissi
    textTransform: 'uppercase',
  },
  altMetin: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  }
});
