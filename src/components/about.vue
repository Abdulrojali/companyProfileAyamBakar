<template>
  <div class="profile-container" id="about">
    <img :src="imgData" alt="Logo Ayam Bakar Pak Untung" class="profile-logo" />
    <div class="profile-header">
      <h1 class="profile-name">Ayam Bakar Pak Untung</h1>
      <p class="profile-description">
        Terletak di kawasan strategis Jalan Raya, Babakan Pari, Cidahu, Kabupaten Sukabumi, Arema
        Ayam Bakar Pak Untung menawarkan sajian ayam bakar dengan cita rasa khas yang memadukan
        bumbu tradisional dan proses panggang sempurna. Restoran ini menjadi pilihan utama bagi
        pengunjung lokal maupun wisatawan yang ingin menikmati hidangan autentik khas Jawa Barat
        dengan suasana yang asri dan nyaman.
      </p>
      <ul class="profile-details">
        <li>
          <strong>Alamat:</strong> Jalan Raya, Babakan Pari, Cidahu, Sukabumi Regency, West Java
          43359
        </li>
        <li><strong>Jam Operasional:</strong> 09:00 - 21:00 WIB</li>
        <li><strong>Nomor Telepon:</strong> +62 811-9876-5432</li>
        <li><strong>Spesialisasi:</strong> Ayam Bakar, Ikan Bakar, Sambal Khas, Lalapan</li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerImg from '../assets/header2.jpeg'
export default {
  name: 'ProfileAyamBakar',
  data() {
    return {
      imgData: headerImg,
    }
  },
}
</script>

<style scoped>
.profile-container {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 30px;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
}

.profile-header {
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 20px;
}

.profile-logo {
  width: 100%;
  height: 500px;
  object-fit: fill;
  margin-bottom: 15px;
}

.profile-name {
  width: 80%;
  font-size: 1.8em;
  color: #d35400;
}

.profile-description {
  width: 80%;
  text-align: start;
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
}

.profile-details {
  list-style: none;
  padding: 0;
  font-size: 1em;
  color: #333;
}

.profile-details li {
  width: 80%;
  margin-bottom: 10px;
}

.profile-details strong {
  color: #d35400;
}
@media only screen and (max-width: 600px) {
  .profile-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
