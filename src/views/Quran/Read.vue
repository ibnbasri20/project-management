<template>
    <div class="read">
        <div class="row">
            <div v-for="baca in read" class="col-lg-12" :key="baca.id">
                <div class="card mb-2">
                    <div class="card-body">
                        {{baca.text_madani}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            read: state => state.quran.read_surah
        })
    },
}
</script>

<style lang="scss">
.read{
    margin-top:3em;
}
</style>