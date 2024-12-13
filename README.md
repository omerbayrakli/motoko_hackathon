# Taksi Rezervasyon Sistemi

İstanbul gibi büyük şehirlerdeki taksi sorunları, ulaşımın bir parçası olan taksilerin erişilebilirliğini ve verimliliğini olumsuz etkileyebilir. Bu proje, kullanıcıların taksi rezervasyonlarını kolayca yönetebileceği bir **Taksi Rezervasyon Sistemi** sunmaktadır. Proje, kullanıcıların rezervasyon oluşturmasına, rezervasyonları görüntülemesine ve mevcut rezervasyonları yönetmesine olanak tanır.

---

## 📌 Amaç

Bu proje, İstanbul gibi yoğun trafik ve yüksek talep olan şehirlerde, taksi rezervasyonlarının dijital bir platform üzerinden kolayca yönetilmesini sağlamayı amaçlamaktadır.

- **Taksi erişilebilirliği sorunlarını çözmek**: Kullanıcılar, dijital platform üzerinden rezervasyonlarını yapabilir ve yönetebilir.
- **Verimliliği artırmak**: Taksiler daha organize bir şekilde yönlendirilebilir.
- **Kullanıcı deneyimini geliştirmek**: Kullanıcı dostu bir arayüz ile rezervasyon süreci hızlandırılır.

---

## 🚀 Özellikler

- **Rezervasyon Ekleme**: Kullanıcı adı ve gidilecek yer bilgisi ile rezervasyon ekleyebilirsiniz.
- **Rezervasyon Listeleme**: Tüm mevcut rezervasyonlar görüntülenebilir.
- **Rezervasyon Silme**: Rezervasyon ID'si ile belirli bir rezervasyonu silebilirsiniz.
- **Tüm Rezervasyonları Temizleme**: Tüm rezervasyonları tek tıkla kaldırabilirsiniz.

---

## 🛠️ Kurulum

### Dosyalar tek tek yüklenmiştir. Normalde src klasörünün içerisinde app.js , index.html , main.mo vardı. Fakat github'a yüklerken dosya halinde yükleyemediğim için bu şekilde ayrı ayrı yükledim. Dosyaları çalıştırıken uzantıları kontrol etmenizde fayda var.

### 1. Gereksinimler

Projenin çalışması için aşağıdaki araçların sisteminizde kurulu olması gerekmektedir:
- **Node.js**: [Node.js İndir](https://nodejs.org/)
- **DFINITY SDK**: [DFINITY SDK Kurulumu](https://internetcomputer.org/docs/current/developer-docs/quickstart/hello10mins/)
- **Canister Yönetimi**: Proje, bir canister üzerinde çalışmaktadır.

### 2. Projeyi Çalıştırma

1. **DFINITY Ortamını Başlatın**:
   ```bash
   dfx start --background
