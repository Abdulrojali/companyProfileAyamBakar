<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    phoneNumber="628123456789"
    message="Halo, saya ingin bertanya tentang produk Anda."
    class="whatsapp-icon"
  >
    <i class="fab fa-whatsapp"></i>
  </a>
</template>

<script>
export default {
  name: 'WhatsappIcon',
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.message)
      return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`
    },
  },
}
</script>

<style>
.whatsapp-icon {
  margin-left: 40px;
  font-size: 5em; /* Ukuran ikon */
  position: fixed;
  bottom: 30px;
  color: #25d366; /* Warna hijau WhatsApp */
  text-decoration: none;
  transition: transform 0.3s;
}

.whatsapp-icon:hover {
  transform: scale(1.2); /* Efek zoom saat hover */
}
/* i {
  font-size: 7em;
  position: fixed;
  bottom: 80px;
  left: 50px;
  color: green;
  cursor: pointer;
}
i:hover {
  opacity: 0.8;
} */
</style>
