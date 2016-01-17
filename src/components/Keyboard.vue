<template>
  <table class="keyboard">
    <tr class="keyboard-raw">
      <td class="keyboard-cell" @click="updateScreen">
        7
      </td>
      <td class="keyboard-cell" @click="updateScreen">
        8
      </td>
      <td class="keyboard-cell" @click="updateScreen">
        9
      </td>
    </tr>
    <tr class="keyboard-raw">
      <td class="keyboard-cell" @click="updateScreen">
        4
      </td>
      <td class="keyboard-cell" @click="updateScreen">
        5
      </td>
      <td class="keyboard-cell" @click="updateScreen">
        6
      </td>
    </tr>
    <tr class="keyboard-raw">
      <td class="keyboard-cell" @click="updateScreen">
        1
      </td>
      <td class="keyboard-cell" @click="updateScreen">
        2
      </td>
      <td class="keyboard-cell" @click="updateScreen">
        3
      </td>
    </tr>
    <tr class="keyboard-raw">
      <td class="keyboard-cell" @click="updateScreen">
        .
      </td>
      <td class="keyboard-cell" @click="updateScreen">
        0
      </td>
      <td class="keyboard-cell keyboard-cell--empty">
      </td>
    </tr>
  </table>
</template>

<script>
import CalcStore from '../stores/CalcStore.js';

export default {
  methods: {
    updateScreen(e) {
      const value = e.target.innerText;

      CalcStore.updateValue(value);
    }
  }
}
</script>

<style>

.keyboard {
  width: 80%;
  height: calc(100% - 80px);
  text-align: center;
  background: #303030;
  float: left;
}

.keyboard-cell {
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  vertical-align: middle;
}

.keyboard-cell:not(.keyboard-cell--empty):hover {
  background: rgba(30,30,30, .5);
}

</style>