<template>
  <table class="actions">
    <tr class="actions-raw">
      <td class="actions-cell" @click="updateAction">
        +
      </td>
    </tr>
    <tr class="actions-raw">
      <td class="actions-cell" @click="updateAction">
        -
      </td>
    </tr>
    <tr class="actions-raw">
      <td class="actions-cell" @click="updateAction">
        x
      </td>
    </tr>
    <tr class="actions-raw">
      <td class="actions-cell" @click="updateAction">
        /
      </td>
    </tr>
    <tr class="actions-raw">
      <td class="actions-cell" @click="updateAction">
        =
      </td>
    </tr>
  </table>
</template>

<script>
import CalcStore from '../stores/CalcStore.js';

export default {
  methods: {
    updateAction(e) {
      const action = e.target.innerText;

      CalcStore.updateAction(action);
    }
  }
}
</script>

<style>

.actions {
  width: 20%;
  height: calc(100% - 80px);
  text-align: center;
  background: rgba(50, 50, 50, .8);
}

.actions-cell {
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  vertical-align: middle;
}

.actions-cell:hover {
  background: rgba(70, 70, 70, .8);
}

</style>