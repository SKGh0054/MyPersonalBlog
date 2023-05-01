<template>
    <div id="components-back-top-demo-custom">
        <a-back-top>
            <div class="ant-back-top-inner">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </a-back-top>
    </div>
</template>

<script setup>

</script>

<style scoped>
#components-back-top-demo-custom .ant-back-top {
    bottom: 50px;
    right: 50px;
    border-radius: 20px;
    padding: 5px 10px;
}

#components-back-top-demo-custom .ant-back-top-inner {
    height: 30px;
    width: 30px;
    position: relative;
}

#components-back-top-demo-custom .ant-back-top-inner div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #00a7d0;
    height: 2px;
    border-radius: 2px;
}

#components-back-top-demo-custom .ant-back-top-inner div:nth-child(1) {
    transform: rotate(-45deg);
}

#components-back-top-demo-custom .ant-back-top-inner div:nth-child(2) {
    transform: rotate(45deg);
}

#components-back-top-demo-custom .ant-back-top-inner div:nth-child(3) {
    transform: translateY(-6px) rotate(45deg);
}

#components-back-top-demo-custom .ant-back-top:hover .ant-back-top-inner div {
    background-color: #1088e9;
}
</style>