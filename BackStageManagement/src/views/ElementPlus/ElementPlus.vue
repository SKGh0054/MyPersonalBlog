<template>
  <div class="element-container">
    <el-space wrap>

      <!-- Element Plus中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible = true">Element Plus中文文档</el-button>
      <el-dialog v-model="dialogVisible" width="95%" title="Element Plus中文文档">
        <iframe src="https://element-plus.gitee.io/zh-CN/component/button.html" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Vue.js中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible1 = true">Vue.js中文文档</el-button>
      <el-dialog v-model="dialogVisible1" width="95%" title="Vue.js中文文档">
        <iframe src="https://cn.vuejs.org/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Vite.js中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible2 = true">Vite.js中文文档</el-button>
      <el-dialog v-model="dialogVisible2" width="95%" title="Vite.js中文文档">
        <iframe src="https://cn.vitejs.dev/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Vue Router中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible3 = true">Vue Router中文文档</el-button>
      <el-dialog v-model="dialogVisible3" width="95%" title="Vue Router中文文档">
        <iframe src="https://router.vuejs.org/zh/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Pinia中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible4 = true">pinia中文文档</el-button>
      <el-dialog v-model="dialogVisible4" width="95%" title="Pinia中文文档">
        <iframe src="https://pinia.vuejs.org/zh/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Vuex中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible5 = true">Vuex中文文档</el-button>
      <el-dialog v-model="dialogVisible5" width="95%" title="Vuex中文文档">
        <iframe src="https://vuex.vuejs.org/zh/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Ant Design Vue中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible6 = true">Ant Design Vue中文文档</el-button>
      <el-dialog v-model="dialogVisible6" width="95%" title="Ant Design Vue中文文档">
        <iframe src="https://next.antdv.com/docs/vue/introduce-cn" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Bulma中文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible7 = true">Bulma中文文档</el-button>
      <el-dialog v-model="dialogVisible7" width="95%" title="Bulma中文文档">
        <iframe src="https://www.bulmacss.cn/doc/book/2.html" class="element-iframe"></iframe>
      </el-dialog>

      <!-- VueUse英文文档 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible8 = true">VueUse英文文档</el-button>
      <el-dialog v-model="dialogVisible8" width="95%" title="VueUse英文文档">
        <iframe src="https://vueuse.org/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Echarts中文首页 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible9 = true">Echarts中文首页</el-button>
      <el-dialog v-model="dialogVisible9" width="95%" title="Echarts中文首页">
        <iframe src="https://echarts.apache.org/zh/index.html" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Lodash英文首页 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible10 = true">Lodash英文首页</el-button>
      <el-dialog v-model="dialogVisible10" width="95%" title="Lodash英文首页">
        <iframe src="https://lodash.com/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Screenfull GitHub地址 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible11 = true">Screenfull GitHub地址</el-button>
      <el-dialog v-model="dialogVisible11" width="95%" title="Screenfull GitHub地址">
        <a href="https://github.com/sindresorhus/screenfull#readme" target="_blank" rel="noopener noreferrer">Screenfull
          GitHub地址</a>
      </el-dialog>

      <!-- Sass英文首页 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible12 = true">Sass英文首页</el-button>
      <el-dialog v-model="dialogVisible12" width="95%" title="Sass英文首页">
        <iframe src="https://sass-lang.com/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Expressjs英文地址 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible13 = true">Expressjs英文地址</el-button>
      <el-dialog v-model="dialogVisible13" width="95%" title="Expressjs英文地址">
        <iframe src="https://expressjs.com/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- Jsonwebtoken GitHub地址 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible14 = true">Jsonwebtoken GitHub地址</el-button>
      <el-dialog v-model="dialogVisible14" width="95%" title="Jsonwebtoken GitHub地址">
        <a href="https://github.com/auth0/node-jsonwebtoken" target="_blank" rel="noopener noreferrer">Jsonwebtoken
          GitHub地址</a>
      </el-dialog>

      <!-- Node-mysql2 GitHub地址 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible15 = true">Node-mysql2 GitHub地址</el-button>
      <el-dialog v-model="dialogVisible15" width="95%" title="Node-mysql2 GitHub地址">
        <a href="https://github.com/sidorares/node-mysql2#readme" target="_blank" rel="noopener noreferrer">Node-mysql2
          GitHub地址</a>
      </el-dialog>

      <!-- Nodemon英文地址 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible16 = true">Nodemon英文地址</el-button>
      <el-dialog v-model="dialogVisible16" width="95%" title="Nodemon英文地址">
        <iframe src="https://nodemon.io/" class="element-iframe"></iframe>
      </el-dialog>

      <!-- NeteaseCloudMusicApi GitHub地址 -->
      <el-button round color="#626aef" :dark="isDark" plain class="documentation" type="primary"
        @click="dialogVisible17 = true">NeteaseCloudMusicApi GitHub地址</el-button>
      <el-dialog v-model="dialogVisible17" width="95%" title="NeteaseCloudMusicApi GitHub地址">
        <a href="https://github.com/Binaryify/NeteaseCloudMusicApi" target="_blank"
          rel="noopener noreferrer">NeteaseCloudMusicApi GitHub地址</a>
      </el-dialog>


    </el-space>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const dialogVisible = ref(false);
const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)
const dialogVisible3 = ref(false)
const dialogVisible4 = ref(false)
const dialogVisible5 = ref(false)
const dialogVisible6 = ref(false)
const dialogVisible7 = ref(false)
const dialogVisible8 = ref(false)
const dialogVisible9 = ref(false)
const dialogVisible10 = ref(false)
const dialogVisible11 = ref(false)
const dialogVisible12 = ref(false)
const dialogVisible13 = ref(false)
const dialogVisible14 = ref(false)
const dialogVisible15 = ref(false)
const dialogVisible16 = ref(false)
const dialogVisible17 = ref(false)

</script>

<style lang="scss" scoped>
.el-button {
  margin: 20px;

  &.documentation {
    margin: 20px 0;
    // background-color: red;
  }
}

:deep(.el-dialog) {
  position: fixed;
  left: 30px;
  top: 20px;
  bottom: 20px;
  margin: 0;

  .el-dialog__header {
    margin: 0;
    height: 60px;
    border-bottom: 2px solid $app-bgc;
  }

  .el-dialog__body {
    height: calc(100% - 60px);

    .element-iframe {
      height: 100%;
      width: 100%;
    }
  }
}

.element-container{
  margin-top: 25px;
}

a {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  border: 2px solid #333;
  border-radius: 5px;
  transition: all 0.3s ease;
}

a:hover {
  background-color: #333;
  color: #fff;
}
</style>
