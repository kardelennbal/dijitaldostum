// constants/Tema.ts

export const Tema = {
  renkler: {
    // Soft pastel yastık gibi arka planlar (Duolingo tarzı)
    arkaPlan: '#F7F9FC',
    anaMetin: '#1F2937', // Kömür karası ama tam siyah değil
    altMetin: '#6B7280',
    kartArkaPlan: '#FFFFFF',
    // Neşeli ve doygun oyun butonları
    besleButon: '#FF4B4B', // Canlı kırmızımsı pembe
    besleGolge: '#CC3C3C',
    oyunButon: '#20D3C2', // Taze turkuaz
    oyunGolge: '#1AAC9A',
    sifirlaButon: '#8B5CF6', // Premium Mor
    butonMetin: '#FFFFFF',
    // Kavisli özel Progress Bar renkleri
    durumDolu: '#10B981', // Canlı Yeşil (Duolingo Doğru Rengi)
    durumDoluGolge: '#059669',
    durumOrta: '#F59E0B', // Sıcak Turuncu
    durumOrtaGolge: '#D97706',
    durumKritik: '#EF4444', // İkaz Kırmızısı
    durumKritikGolge: '#B91C1C',
    durumBos: '#E5E7EB',
    // Rozet & XP Özel
    rozetArkaPlan: '#FEF3C7',
    rozetMetin: '#D97706',
    xpMetin: '#6D28D9',
  },
  olculer: {
    paddingAna: 24,
    // Kullanıcı talebi: Yuvarlak, modern ve sevimli köşeler
    koseOvalligi: 30,
    kucukKoseOvalligi: 20,
    rozetOvalligi: 25,
    kartGenislik: '92%',
  },
  fontlar: {
    baslik: 36, // Daha büyük, daha çarpıcı
    kartBaslik: 28,
    altBaslik: 18,
    durumMetni: 16,
    butonMetni: 20,
    emojiBuyuk: 110, // Evrimleştiğinde daha heybetli dursun
  },
  golgeler: {
    // Derinlik hissi veren premium kart gölgeleri
    kart: {
      shadowColor: '#9CA3AF',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.15,
      shadowRadius: 24,
      elevation: 10,
    },
    // Bouncy buton için 3D basılma efektine hazırlık gölgesi
    buton: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
    }
  }
};
