<template>
    <div class="sidebar">
        <ul>
            <li>
                <router-link to="/">
                    <i class="fa fa-home"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/#profile">
                    <i class="fa fa-user"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/quran">
                    <i class="fa fa-quran"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/#5125">
                    <i class="fa fa-cube"></i>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.sidebar{
    width:5em;
    position: fixed;
    height:100%;
    background:#68D391;
    display: flex;
    flex-direction: column;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0px;
        flex:1;
        flex-direction:column;
        li{
            list-style:none;
            a{
                color:white;
                width:3em;
                height:3em;
                margin-bottom:.5em;
                display:flex;
                justify-content: center;
                align-items:center;
                border-radius:10px;
                text-decoration: none;
                font-size:15px;
            }
        }
    }
}
.router-active{
  background:#48BB78;
}
</style>