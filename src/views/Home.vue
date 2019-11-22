<template>
  <div class="home">
    <div class="d-flex mb-3">
      <div class="h6">
        Dashboard
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mb-3">
        <div class="banner bg-primary text-white">
          <div class="col-xl-2 col-lg-3 col-md-12">
            <img src="../assets/undraw_dev_productivity_umsq.svg" alt="image" class="image">
          </div>
          <div class="page-content col-xl-7 col-lg-6 col-md-12"> 
            <div class="span mb-1">Selamat Menjalankan Produktifitas Saepudin</div> 
            <div class="small"><q>Sometimes the people with the worst past, create the best future</q>. -Umar Ibn Khattab</div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <div class="card-body">
            saf
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <div class="card-body">
            saf
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3">
        <div class="card">
          <div class="card-body">
            saf
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  mounted(){
    this.get_quran()
  },
  methods:{
    get_quran(){
      axios.get('http://staging.quran.com:3000/api/v3/chapters/7/verses?text_type=words&language=id&translations=21&recitation=1').then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  margin-top:3em;
}
.card{
  border:none;
}
.image{
  height: 100px !important;
  width: 100px;
}
.banner{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    padding: 10px 15px;
}
</style>


