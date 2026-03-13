// components/Basarimlar.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tema } from '../constants/Tema';
import { Basarim } from '../hooks/useOyunMekanigi';

interface BasarimlarProps {
  seviye: number;
  xp: number;
  basarimlar: Basarim[];
}

export const Basarimlar = ({ seviye, xp, basarimlar }: BasarimlarProps) => {
  return (
    <View style={stiller.konteyner}>
      {/* Üst Kısım: Seviye ve XP Bilgisi */}
      <View style={stiller.seviyeAlani}>
        <View style={stiller.rozet}>
          <Text style={stiller.seviyeMetni}>Seviye {seviye}</Text>
        </View>
        <Text style={stiller.xpMetni}>{xp} XP Değer</Text>
      </View>

      {/* Alt Kısım: Kazanılan/Kilitli Rozetler (Achievements) */}
      <View style={stiller.basarimListesi}>
        <Text style={stiller.basarimBaslik}>Başarımların</Text>
        <View style={stiller.ikonListesi}>
          {basarimlar.map(basarim => (
            <View 
              key={basarim.id} 
              style={[
                stiller.ikonKutusu, 
                // Eğer kilitliyse arkaplanı gri yap
                !basarim.kilidiAcildi && stiller.kilitliKutu
              ]}
            >
              <Text 
                style={[
                  stiller.ikon, 
                  // Eğer kilitliyse emojiyi yarı saydam yap
                  !basarim.kilidiAcildi && { opacity: 0.3 }
                ]}
              >
                {basarim.ikon}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const stiller = StyleSheet.create({
  konteyner: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  seviyeAlani: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  rozet: {
    backgroundColor: Tema.renkler.rozetArkaPlan,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: Tema.olculer.koseOvalligi,
    marginRight: 10,
    ...Tema.golgeler.buton, // Küçük tatlı gölge
  },
  seviyeMetni: {
    fontWeight: '900', // Çok kalın
    color: Tema.renkler.rozetMetin,
    fontSize: 18,
    textTransform: 'uppercase', // Play Store stili büyük harf
  },
  xpMetni: {
    fontSize: 18,
    fontWeight: '800',
    color: Tema.renkler.xpMetin,
  },
  basarimListesi: {
    width: '100%',
    backgroundColor: Tema.renkler.arkaPlan, // Kartın içinde gömülü alan
    padding: 16,
    borderRadius: Tema.olculer.koseOvalligi,
    alignItems: 'center',
  },
  basarimBaslik: {
    fontSize: 15,
    color: Tema.renkler.altMetin,
    fontWeight: '700',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ikonListesi: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12, 
  },
  ikonKutusu: {
    backgroundColor: Tema.renkler.kartArkaPlan,
    width: 48,
    height: 48,
    borderRadius: 24, // Tam yuvarlak
    alignItems: 'center',
    justifyContent: 'center',
    ...Tema.golgeler.buton,
  },
  kilitliKutu: {
    backgroundColor: '#E5E7EB', // Tema dosyasındaki boş renk (gri)
    elevation: 0, // Kilitli şeylerin gölgesi olmaz (daha sönük durur)
    shadowOpacity: 0,
  },
  ikon: {
    fontSize: 24, // Emoji boyutu
  }
});
