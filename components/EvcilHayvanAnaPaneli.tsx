// components/EvcilHayvanAnaPaneli.tsx

import React from 'react';
import { View, Text, StyleSheet, DimensionValue } from 'react-native';
import { Tema } from '../constants/Tema';
import { DurumCubugu } from './DurumCubugu';
import { useOyunMekanigi } from '../hooks/useOyunMekanigi';
import { Basarimlar } from './Basarimlar';
import { BouncyButon } from './BouncyButon';

interface Props {
  isim: string;
}

export const EvcilHayvanAnaPaneli = ({ isim }: Props) => {
  const {
    aclik, mutluluk, seviye, xp, oyunBitti, basarimlar, evrim,
    besle, oyna, sifirla
  } = useOyunMekanigi();

  const durumEmojisiAl = () => {
    if (oyunBitti) return '💀';
    // Evrim türüne göre ana emoji değişiyor
    if (evrim === 'Efsanevi 🦅') return mutluluk > 70 ? '🦅' : '🦉';
    if (evrim === 'Çocuk 🐥') return mutluluk > 70 ? '🐥' : '🐣';
    
    // Varsayılan Bebek
    if (mutluluk === 100) return '🤩';
    if (mutluluk > 70) return '🐣';
    if (aclik < 50) return '🥚'; // Açlıktan yumurtaya döndü
    return '🐣';
  };

  return (
    <View style={stiller.kart}>
      {/* Oyunlaştırma: XP, Seviye ve Rozetler Paneli */}
      <Basarimlar seviye={seviye} xp={xp} basarimlar={basarimlar} />

      {/* Ana Karakter (Emoji) ve Bilgileri */}
      <View style={stiller.karakterAlani}>
        <Text style={stiller.emoji}>{durumEmojisiAl()}</Text>
        <Text style={stiller.baslik}>{isim}</Text>
        <Text style={stiller.altBaslik}>{evrim}</Text>
      </View>

      {/* Premium Duolingo Tarzı Durum Çubukları */}
      <View style={stiller.durumAlani}>
        <DurumCubugu etiket="Tokluk Seviyesi" deger={aclik} ikon="🍖" />
        <DurumCubugu etiket="Mutluluk Düzeyi" deger={mutluluk} ikon="🧶" />
      </View>

      {/* Aksiyon Alanı - Yepyeni BouncyButon'lar Kullanılıyor */}
      {oyunBitti ? (
        <View style={stiller.oyunBittiAlani}>
          <Text style={stiller.oyunBittiMetni}>Oyun Bitti! {isim} seni terk etti.</Text>
          <View style={{ marginTop: 20, width: '100%' }}>
            <BouncyButon 
              metin="🔄 Yeni Hayata Başla" 
              renk={Tema.renkler.sifirlaButon} 
              koyuRenk="#6D28D9" // Koyu Mor
              onPress={sifirla} 
            />
          </View>
        </View>
      ) : (
        <View style={stiller.butonAlani}>
          <BouncyButon 
            metin="Besle" 
            altMetin="+25 XP" 
            renk={Tema.renkler.besleButon} 
            koyuRenk={Tema.renkler.besleGolge}
            genislik={'47%' as DimensionValue}
            onPress={besle} 
          />
          <BouncyButon 
            metin="Oyna" 
            altMetin="+15 XP" 
            renk={Tema.renkler.oyunButon} 
            koyuRenk={Tema.renkler.oyunGolge}
            genislik={'47%' as DimensionValue}
            onPress={oyna} 
          />
        </View>
      )}
    </View>
  );
};

const stiller = StyleSheet.create({
  kart: {
    backgroundColor: Tema.renkler.kartArkaPlan,
    padding: Tema.olculer.paddingAna,
    borderRadius: Tema.olculer.koseOvalligi,
    alignItems: 'center',
    width: Tema.olculer.kartGenislik as DimensionValue,
    ...Tema.golgeler.kart, // Gölgeler Tema.ts içinde 'kart' altında tanımlı
  },
  karakterAlani: {
    alignItems: 'center',
    marginBottom: 35, // Daha ferah
  },
  emoji: {
    fontSize: Tema.fontlar.emojiBuyuk,
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.15)', // Tıknaz ve derin gölge
    textShadowOffset: { width: 0, height: 8 },
    textShadowRadius: 15,
  },
  baslik: {
    fontSize: Tema.fontlar.kartBaslik,
    fontWeight: '900',
    color: Tema.renkler.anaMetin,
    letterSpacing: 0.5,
  },
  altBaslik: {
    fontSize: Tema.fontlar.altBaslik,
    color: Tema.renkler.xpMetin, // Evrim kısmı mor ve prestijli görünsün
    fontWeight: '800',
    marginTop: 4,
  },
  durumAlani: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10, 
  },
  butonAlani: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  oyunBittiAlani: {
    alignItems: 'center',
    width: '100%',
  },
  oyunBittiMetni: {
    color: Tema.renkler.durumKritik,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  }
});
