<template>
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-content">
          <!-- Your modal content here -->
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Modal',
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    backdrop-filter: blur(5px); /* Apply blur effect */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    border-radius: 5px;
    padding: 20px;
  }
  
  .modal-content {
    /* Add styles for modal content */
  }
  </style>
  