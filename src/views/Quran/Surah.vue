<template>
    <div class="quran">
        <div class="d-flex">
            <div class="h4">Qur'an</div>
        </div>
        <div class="row">
            <div v-for="surat in chapter" :key="surat.id" class="col-lg-4 mb-4">
                <div class="card" @click="read(surat.id)">
                    <div class="card-body">
                        <div class="d-flex">
                            <span class="flex-grow-1">{{surat.id}}.</span>
                            <span>{{surat.name_arabic}}</span>
                        </div>
                        <div class="d-flex">
                            <span class="flex-grow-1">{{surat.name_simple}}</span>
                            <span>Jumlah Ayat: {{surat.verses_count}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapState} from 'vuex'
export default {
  mounted(){
    this.get_quran()
  },
  computed:{
      ...mapState({
          chapter: state => state.quran.surah
      })
  },
  methods:{
    ...mapActions({
        get_quran: 'quran/get_surah',
        read:'quran/read'
    })
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