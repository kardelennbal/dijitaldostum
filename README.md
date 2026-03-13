# 🐾 Dijital Dostum - Beta v1.0

> Bir zamanların efsanesi sanal bebek (Tamagotchi), moder ve "Duolingo" esintili mükemmel bir UI ile geri döndü! Senin de artık cebinde sevgi bekleyen bir dostun var: **Tarçın**! 🐣
> apk: https://github.com/kardelennbal/dijitaldostum/releases/tag/v1.0
> youtube Linki: https://youtube.com/shorts/6jQ5hqHZEv8?feature=share 

---

## 🌟 Proje Hakkında

**Dijital Dostum**, React Native ve Expo yardımıyla geliştirilmiş, sevimli animasyonlara ve derinleştirilmiş oyunlaştırma (gamification) mekaniklerine sahip bir sanal evcil hayvan simülasyonudur. Amacın, dijital dostunun mutluluğunu ve tokluğunu yüksek tutup seviyeler atlamak, evrim mekaniklerini tetiklemek ve başarımları (rozetleri) toplamaktır! 🏆

## ✨ Özellikler ve Oyun Mekanikleri

### 1. 🧬 Evrim Sistemi (Evolution)

Dostun sen oynadıkça büyür ve gelişir! Seviye atladıkça görünümü de değişir:

- **Bebek (Seviye 1-4) 🐣 / 🤩** : Maceraya böyle başlıyoruz!
- **Çocuk (Seviye 5-9) 🐥** : Tarçın biraz daha büyüdü!
- **Efsanevi (Seviye 10+) 🦅 / 🦉** : Görkemli uçan bir efsane!

### 2. 📊 XP & Seviye Sistemi (Leveling)

Her seviye atlamak için gereken XP: `[Mevcut Seviye] * 100`. Bol bol etkinlik yap, seviyeleri tırman!
- **Besle (🍖)**: `+20 Tokluk` ve `+25 XP` verir! 
- **Oyna (🧶)**: `+25 Mutluluk` ve `+15 XP` verir, ama dikkat et, dostun yorulur ve `-15 Tokluk` (acıktırır) maliyeti vardır.

### 3. 🏅 Başarımlar ve Rozetler (Achievements)

Oyun içi eylemlerinle özel rozetlerin kilidini aç!

- 🍼 **İlk Besleme:** Dostuna ilk lokmasını verdiğinde!
- 🎉 **Mutluluk Zirvesi:** Tokluk ve mutluluğu fullediğinde (veya seviye atladığında) açılır!
- 🐥 **Çocuk Oldu:** Dostun 5. Seviyeye erdiğinde büyümenin gururu!
- 🦅 **Efsanevi Kuş:** 10. Seviyede gelen destansı başarı!

### 4. 🪦 Oyun Bitti (Game Over)

Dostunu çok fazla ihmal edersen (`Tokluk <= 0` veya `Mutluluk <= 0`), Tarçın seni terk eder... 💀
Ama üzülme, **"🔄 Yeni Hayata Başla"** butonu ile ona yeni bir başlangıç verebilirsin!

### 5. 🎨 Duolingo Tarzı Tema ve Arayüz (UI)
- **Soft Pastel Renkler:** Göz yormayan, pürüzsüz kart tasarımları.
- **Bouncy Butonlar (Zıplayan Butonlar):** Tıklandığında 3D basılma efekti veren eğlenceli ve dinamik etkileşim!
- **Kavisli Durum Çubukları:** Tokluk ve Mutluluk seviyelerini gösteren renk değiştiren (Yeşil, Turuncu, Kırmızı) dinamik ilerleme barları!

---

## 🛠️ Kurulum & Geliştirici Kılavuzu

Projeyi kendi bilgisayarında çalıştırmak istiyorsan, bu adımları takip et:

**1. Gerekli Paketleri Kurun:**
```bash
npm install
```

**2. Uygulamayı Başlatın:**
```bash
npx expo start
```

Uygulamayı telefonunda başlatmak için **Expo Go** uygulamasını indirebilir ya da Android/iOS simülatörlerini kullanabilirsin! 🚀

---

## 📂 Dizin Yapısı ve Önemli Dosyalar

- 🗂️ `app/(tabs)/index.tsx`: Tarçın'ın ana kontrol ekranı. Ana bileşenleri burada birleştiriyoruz.
- 🎨 `constants/Tema.ts`: Tüm UI renkleri, gölge ayarları ve boyutlarının yönetildiği tasarım havuzu.
- 🧩 `components/`: 
  - `EvcilHayvanAnaPaneli.tsx`: Ana hayvan paneli bileşeni.
  - `Basarimlar.tsx`: Rozet ve seviye yönetiminin UI kısmı.
  - `BouncyButon.tsx`: Duolingo tarzı 3D tıklanabilir fiziksel butonlar.
  - `DurumCubugu.tsx`: Tokluk ve mutluluk barımızın dinamiği.
- ⚙️ `hooks/useOyunMekanigi.ts`: Oyunun beyni! Alet edevat, XP hesaplamaları, oyun sonu evrimi, ve başarım mantıkları burada yaşar!

---

**Made with 💖 by a Digital Friend developer!**
