<template>
    <div class="quran">
        <div class="d-flex">
            <div class="h4">Qur'an</div>
        </div>
        <div class="row">
            <div v-for="ayah in verses" class="col-lg-12 mb-1">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <span class="flex-grow-1">{{ayah.verse_number}}</span>
                            <span class="font-ayah">{{ayah.text_madani}}</span>
                        </div>
                        <div>
                            <div v-for="terjemah in ayah.translations">
                                {{terjemah.text}}
                            </div>
                        </div>
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
  data(){
      return{
          verses:[]
      }
  },
  mounted(){
    this.get_quran()
  },
  methods:{
    get_quran(){
      axios.get('http://staging.quran.com:3000/api/v3/chapters/1/verses?text_type=words&language=id&translations=21&recitation=1').then((res) => {
        console.log(res.data)
        this.verses = res.data.verses
      })
    }
  }
}
</script>

<style lang="scss">
.quran{
    margin-top: 3em;
}
.font-ayah{
    font-size:27px;
}

</style>