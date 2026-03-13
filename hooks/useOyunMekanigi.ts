// hooks/useOyunMekanigi.ts

import { useState, useEffect } from 'react';

export interface Basarim {
  id: string;
  isim: string;
  ikon: string;
  kilidiAcildi: boolean;
}

export type EvrimAsamasi = 'Bebek 🐣' | 'Çocuk 🐥' | 'Efsanevi 🦅';

export const useOyunMekanigi = () => {
  const [aclik, setAclik] = useState(50);
  const [mutluluk, setMutluluk] = useState(50);
  const [seviye, setSeviye] = useState(1);
  const [xp, setXp] = useState(0);
  const [oyunBitti, setOyunBitti] = useState(false);
  const [beslemeSayisi, setBeslemeSayisi] = useState(0);

  // Evrim state'i
  const [evrim, setEvrim] = useState<EvrimAsamasi>('Bebek 🐣');

  const [basarimlar, setBasarimlar] = useState<Basarim[]>([
    { id: '1', isim: 'İlk Besleme', ikon: '🍼', kilidiAcildi: false },
    { id: '2', isim: 'Mutluluk Zirvesi', ikon: '🎉', kilidiAcildi: false }, // Mutluluk 100 olunca
    { id: '3', isim: 'Çocuk Oldu', ikon: '🐥', kilidiAcildi: false }, // Level 5
    { id: '4', isim: 'Efsanevi Kuş', ikon: '🦅', kilidiAcildi: false }, // Level 10
  ]);

  const basarimKazan = (id: string) => {
    setBasarimlar(prev => 
      prev.map(b => b.id === id ? { ...b, kilidiAcildi: true } : b)
    );
  };

  const xpEkle = (miktar: number) => {
    let yeniXp = xp + miktar;
    let xpSiniri = seviye * 100;

    if (yeniXp >= xpSiniri) {
      setSeviye(prev => {
        const yeniSeviye = prev + 1;
        
        // Evrim ve Başarım Kontrolleri
        if (yeniSeviye === 5) {
          setEvrim('Çocuk 🐥');
          basarimKazan('3');
        } else if (yeniSeviye === 10) {
          setEvrim('Efsanevi 🦅');
          basarimKazan('4');
        }
        
        return yeniSeviye;
      });
      
      setXp(yeniXp - xpSiniri); 
      setAclik(100);
      setMutluluk(100);
      basarimKazan('2'); // Seviye atlayıp fullendiği için Mutluluk Zirvesi
    } else {
      setXp(yeniXp);
    }
  };

  useEffect(() => {
    if (aclik <= 0 || mutluluk <= 0) {
      setOyunBitti(true);
    }
    if (mutluluk === 100) basarimKazan('2');
  }, [aclik, mutluluk]);

  const besle = () => {
    if (oyunBitti) return;
    setAclik(prev => Math.min(100, prev + 20));
    xpEkle(25); // Hızlı level atlasın diye biraz artırdık
    
    if (beslemeSayisi === 0) basarimKazan('1');
    setBeslemeSayisi(prev => prev + 1);
  };

  const oyna = () => {
    if (oyunBitti) return;
    setMutluluk(prev => Math.min(100, prev + 25));
    setAclik(prev => Math.max(0, prev - 15)); // Oynamak acıktırır
    xpEkle(15);
  };

  const sifirla = () => {
    setAclik(50);
    setMutluluk(50);
    setSeviye(1);
    setXp(0);
    setOyunBitti(false);
    setBeslemeSayisi(0);
    setEvrim('Bebek 🐣');
  };

  return {
    aclik, mutluluk, seviye, xp, oyunBitti, basarimlar, evrim,
    besle, oyna, sifirla
  };
};
