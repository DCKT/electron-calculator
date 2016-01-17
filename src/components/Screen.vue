<template>
  <div class="screen">
    
    <div v-if="state.action">
      <div class="waiting">
        <span class="waitingValue">
          {{ state.waitingValue }}
        </span>
        <span class="action">
          {{ state.action }}
        </span>
      </div>
      
      {{ state.value }}
    </div>

    <div v-else>
      {{ state.value }}
    </div>
  </div>
</template>

<script>
import CalcStore from '../stores/CalcStore.js';

export default {
  data() {
    return {
      state: CalcStore.state,
    }
  }
}
</script>

<style>

.screen {
  background: rgba(200,200,200,.7);
  height: 80px;
  line-height: 80px;
  font-weight: bold;
  font-size: 34px;
  text-align: right;
  padding-right: 20px;
}

.waiting {
  transition: all 1s;
  font-size: 14px;
  position: absolute;
  top: -28px;
  right: 30px;
}

</style>