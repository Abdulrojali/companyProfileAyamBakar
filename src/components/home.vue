<template>
  <section class="home" id="home">
    <div class="hero">
      <h1>
        selamat datang di
        <section>ayam bakar pak untung</section>
      </h1>
      <p>menyediakan berbagai macam makanan saji yang murah dan lezat</p>
    </div>
  </section>
</template>

<script>
import header2 from '../assets/header2.jpeg'
export default {
  data() {
    return {
      imgHeader: header2,
    }
  },
}
</script>

<style scoped>
section {
  color: white;
  text-transform: capitalize;
  font-weight: 900;
  margin-bottom: 20px;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url('@/assets/homebackground.jpg');
  /* background-color: red; */
  color: white;
  font-weight: 800;
  text-align: center;
  padding: 20px;
  object-fit: fill;
}

.hero {
  max-width: 60%;
}

.hero h1 {
  font-size: 4em;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 30px;
}

.hero a {
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1.3em;
  font-weight: 670;
  text-transform: capitalize;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hero button:hover {
  background-color: #eee;
}
</style>
