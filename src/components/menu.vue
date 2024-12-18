<template>
  <div class="menu-container" id="menu">
    <h1 class="menu-title">Daftar Menu Makanan</h1>
    <ul class="menu-list">
      <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
        <img :src="item.img" alt="" />
        <h2 class="menu-item-name">{{ item.name }}</h2>
        <p class="menu-item-price">Harga: {{ item.price }}</p>
        <p class="menu-item-description">{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import mieayamImg from '../assets/mieayam.jpeg'
import imgPaketKatering from '../assets/paketKatering15.jpeg'
import ayambakarImg from '../assets/ayam bakar.jpg'
import ayambakarImgNasi from '../assets/ayambakar1.jpg'
import ayamGoreng from '../assets/ayamgoreng.jpg'
import ayamGorengNasi from '../assets/ayamgoreng1.jpg'
import leleGoreng from '../assets/lelegoreng.jpg'
import leleGorengNasi from '../assets/leleGoreng11.jpg'
import nasiGoreng from '../assets/nasigoreng.jpg'
export default {
  data() {
    return {
      menuItems: [
        {
          name: 'Nasi Goreng',
          price: 15000,
          description: 'Nasi goreng dengan ayam suwir dan telur.',
          img: nasiGoreng,
        },
        {
          name: 'Mie Ayam bakar dada',
          price: 15000,
          description: 'Mie dengan ayam bakar dada,topping ayam manis dan sayuran segar.',
          img: mieayamImg,
        },
        {
          name: 'ayam bakar + nasi',
          price: 20000,
          description: 'ayam bakar plus nasi dengan harga terjangkau di tambah sambal dan lalapan',
          img: ayambakarImgNasi,
        },
        {
          name: 'ayam goreng + nasi',
          price: 20000,
          description: 'ayam goreng plus nasi dengan harga terjangkau di tambah sambal dan lalapan',
          img: ayamGoreng,
        },
        {
          name: 'lele goreng + nasi',
          price: 18000,
          description: 'lele goreng plus nasi dengan harga terjangkau di tambah sambal dan lalapan',
          img: leleGorengNasi,
        },
        {
          name: 'ayam bakar + sambal + lalapan',
          price: 17000,
          description: 'ayam bakar tanpa nasi dengan harga terjangkau di tambah sambal dan lalapan',
          img: ayambakarImg,
        },
        {
          name: 'lele goreng + sambal + lalapan',
          price: 14000,
          description:
            'lele goreng tanpa nasi dengan harga terjangkau di tambah sambal dan lalapan',
          img: leleGoreng,
        },
        {
          name: 'ayam goreng + sambal + lalapan',
          price: 17000,
          description:
            'ayam goreng tanpa nasi dengan harga terjangkau di tambah sambal dan lalapan',
          img: ayamGorengNasi,
        },
        {
          name: 'paket katering',
          price: 15000,
          description: 'ayam dada + nasi hanya tersedia untuk katering saja ',
          img: imgPaketKatering,
        },
      ],
    }
  },
  filters: {
    formatCurrency(value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(value)
    },
  },
}
</script>

<style scoped>
.menu-container {
  width: 80%;
  margin: 20px auto;
  padding: 30px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.menu-title {
  text-align: center;
  font-size: 1.8em;
  color: #333;
  margin-bottom: 20px;
}

.menu-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 25px;
  list-style: none;
  padding: 0;
}

.menu-item {
  /* border: 1px solid #ddd; */
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 10px;
  background-color: #fff;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.menu-item:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
}
.menu-item img {
  width: 100%;
  height: 300px;
  object-fit: fill;
}
.menu-item-name {
  font-size: 1.4em;
  color: #444;
  margin: 0 0 10px;
}

.menu-item-price {
  font-size: 1.1em;
  color: #777;
  margin: 0 0 5px;
}

.menu-item-description {
  font-size: 1em;
  color: #555;
  margin: 0;
}
</style>
