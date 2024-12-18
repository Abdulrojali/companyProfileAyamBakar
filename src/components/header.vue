<template>
  <header class="header" id="header">
    <div class="logo">
      <RouterLink to="/">ayam bakar pak untung</RouterLink>
    </div>
    <nav class="navigation">
      <ul>
        <li v-for="(data, index) in anchor" :key="index">
          <a :href="data.path">{{ data.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      anchor: [
        { name: 'home', path: '#home' },
        { name: 'profile', path: '#about' },
        { name: 'menu', path: '#menu' },
        { name: 'location', path: '#location' },
      ],
    }
  },
}
</script>
<style scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: red;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation ul li {
  margin-left: 20px;
}

.navigation ul li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.navigation ul li a:hover {
  color: #f39c12;
}

@media (max-width: 768px) {
  .navigation ul {
    flex-direction: column;
    background-color: #34495e;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    display: none;
    padding: 10px 0;
    text-align: center;
  }

  .navigation ul.show {
    display: flex;
  }

  .navigation ul li {
    margin: 10px 0;
  }
}
</style>
