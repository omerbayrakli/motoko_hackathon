import Array "mo:base/Array";
import Nat "mo:base/Nat";    // Nat işlevlerini kullanmak için
import Int "mo:base/Int";    // Int -> Nat dönüşümü için
import Time "mo:base/Time";

actor TaxiReservationSystem {
    // Rezervasyon yapısı
    type Reservation = {
        reservationId: Text;
        customerName: Text;
        destination: Text;
    };

    var reservations: [Reservation] = [];

    // Benzersiz ID üretmek için zaman + sayaç
    var globalCounter: Nat = 0;
    func generateReservationId() : Text {
        let now = Int.abs(Time.now());  // Int -> Nat dönüşümü
        globalCounter += 1;
        // Örnek ID: ID_1699999999_5
        return "ID_" # Nat.toText(now / 1000000) # "_" # Nat.toText(globalCounter);
    };

    public func addReservation(customerName: Text, destination: Text) : async Text {
        let newId = generateReservationId();
        let newReservation : Reservation = {
            reservationId = newId;
            customerName = customerName;
            destination = destination;
        };
        reservations := Array.append(reservations, [newReservation]);
        return "Rezervasyon eklendi. ID: " # newId;
    };

    public func listReservations() : async [Reservation] {
        return reservations;
    };

    // Tekil rezervasyon silme
    public func deleteReservation(reservationId: Text) : async Text {
        var newReservations: [Reservation] = [];
        var found = false;

        // Yeni bir dizi oluşturarak silinecek rezervasyonu hariç tutuyoruz
        for (reservation in reservations.vals()) {
            if (reservation.reservationId != reservationId) {
                newReservations := Array.append(newReservations, [reservation]);
            } else {
                found := true;
            };
        };

        if (found) {
            reservations := newReservations;
            return "Rezervasyon silindi. ID: " # reservationId;
        } else {
            return "Belirtilen ID'ye sahip rezervasyon bulunamadı: " # reservationId;
        };
    };

    public func clearReservations() : async Text {
        reservations := [];
        return "Tüm rezervasyonlar temizlendi!";
    };
};
