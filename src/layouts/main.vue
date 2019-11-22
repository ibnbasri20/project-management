<template>
    <div id="app">
        <Sidebar />
        <div class="page-app">
            <main class="app">
                <div class="container-fluid">
                    <router-view />
                </div>
            </main>
        </div>
        <Right />
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/sidebar.vue'
import Right from '@/components/Sidebar/right.vue'
export default {
    components:{Sidebar,Right}
}
</script>

<style lang="scss" scoped>
.page-app{
    flex:1;
    background:#F7FAFC;
    margin-left:5em;
    margin-right:13em;
    @media(max-width:991px){
        margin-right:0em;
    }
}

</style>    