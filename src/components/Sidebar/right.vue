<template>
    <div class="sidebar-right">
        <div class="notification">
            <div class="notification-title mb-3 mt-2">
                <span class="title">Notification</span>
                <i class="fa fa-bell"></i>
                <div class="bg-cirle"></div>
            </div>
            <div class="notifcation-list">
                <router-link to="#S" class="item d-flex align-items-center mb-2">
                    <div class="mr-2">
                        <div class="icon-circle bg-green">
                        <i class="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div class="elipsis">
                        <div class="small text-gray-500">December 12, 2019</div>
                        <span class="small font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </router-link>
                <router-link to="#S" class="item d-flex align-items-center mb-2">
                    <div class="mr-2">
                        <div class="icon-circle bg-green">
                        <i class="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div class="elipsis">
                        <div class="small text-gray-500">December 12, 2019</div>
                        <span class="small font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </router-link>
                <router-link to="#S" class="item d-flex align-items-center mb-2">
                    <div class="mr-2">
                        <div class="icon-circle bg-green">
                        <i class="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div class="elipsis">
                        <div class="small text-gray-500">December 12, 2019</div>
                        <span class="small font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </router-link>
                <router-link to="#S" class="item d-flex align-items-center mb-2">
                    <div class="mr-2">
                        <div class="icon-circle bg-green">
                        <i class="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div class="elipsis">
                        <div class="small text-gray-500">December 12, 2019</div>
                        <span class="small font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                </router-link>
                <router-link to="/notifi" class="small">
                    <span>See All</span>
                </router-link>
            </div>
        </div><!--Notification -->
        
    </div>
</template>

<style lang="scss" scoped>
.sidebar-right{
    position: fixed;
    right:0;
    width:13em;
    @media(max-width:991px){
        right:-13em;
    }
    .notification{
        padding:.6em;
        max-height:340px;
        overflow:hidden;
        .notification-title{
            font-size:14px;
            font-weight:bold;
            text-transform: uppercase;
            display:flex;
            position: relative;
            .title{
                flex:1;
            }
        }
        .item{
            white-space: normal;
            padding-top: .5rem;
            padding-bottom: .5rem;
            line-height: 1.3rem;
            display: block;
            width: 100%;
            clear: both;
            font-weight: 400;
            color: #3a3b45;
            text-align: inherit;
            white-space: nowrap;
            background-color: transparent;
            border: 0;
            text-decoration:none;
        }
    }
}
.icon-circle {
    height: 2.5rem;
    width: 2.5rem;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.elipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.bg-green{
    background:#48BB78;
}
.bg-cirle{
    height: .55rem;
    width: .55rem;
    border-radius: 100%;
    position: absolute;
    top:-3px;
    right:-3px;
    border: .125rem solid red;
    background:red;
}
</style>