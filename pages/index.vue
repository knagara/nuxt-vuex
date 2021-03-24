<template>
  <div class="container">
    <p>{{ $store.state.hello.message }}</p>
    <button
      @click="
        $store.dispatch('hello/updateMessageAction', 'Commit with payload')
      "
    >
      Dispatch
    </button>
  </div>
</template>

<script>
export default {};
</script>