import { Actor, HttpAgent } from "https://unpkg.com/@dfinity/agent@latest?module";

// IDL ve backend bağlantısını ayarlıyoruz
const idlFactory = ({ IDL }) => {
  const Reservation = IDL.Record({
    reservationId: IDL.Text,
    customerName: IDL.Text,
    destination: IDL.Text,
  });

  return IDL.Service({
    addReservation: IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
    listReservations: IDL.Func([], [IDL.Vec(Reservation)], ["query"]),
    deleteReservation: IDL.Func([IDL.Text], [IDL.Text], []),
    clearReservations: IDL.Func([], [IDL.Text], []),
  });
};

const canisterId = "<CANISTER_ID>"; // Backend Canister ID'nizi buraya ekleyin
const agent = new HttpAgent({ host: "http://127.0.0.1:8000" }); // Yerel ortam için
const taxiReservationSystem = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

// HTML elementlerini seçiyoruz
const reservationForm = document.getElementById("reservationForm");
const customerNameInput = document.getElementById("customerName");
const destinationInput = document.getElementById("destination");
const deleteForm = document.getElementById("deleteForm");
const deleteIdInput = document.getElementById("deleteId");
const listReservationsBtn = document.getElementById("listReservations");
const clearReservationsBtn = document.getElementById("clearReservations");
const reservationsList = document.getElementById("reservationsList");

// Rezervasyon ekleme işlemi
reservationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const customerName = customerNameInput.value;
  const destination = destinationInput.value;

  const response = await taxiReservationSystem.addReservation(customerName, destination);
  alert(response);
});

// Rezervasyon silme işlemi
deleteForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const reservationId = deleteIdInput.value;

  const response = await taxiReservationSystem.deleteReservation(reservationId);
  alert(response);
});

// Rezervasyonları listeleme
listReservationsBtn.addEventListener("click", async () => {
  const reservations = await taxiReservationSystem.listReservations();
  reservationsList.innerHTML = reservations
    .map(
      (r) =>
        `<li>ID: ${r.reservationId} | Name: ${r.customerName} -> ${r.destination}</li>`
    )
    .join("");
});

// Tüm rezervasyonları temizleme
clearReservationsBtn.addEventListener("click", async () => {
  const response = await taxiReservationSystem.clearReservations();
  alert(response);
  reservationsList.innerHTML = "";
});
