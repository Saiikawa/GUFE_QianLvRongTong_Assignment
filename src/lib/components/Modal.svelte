<script>
  let { show = $bindable(false), title = '', children } = $props();
  
  function handleClose() {
    show = false;
  }
  
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }
  
  function handleKeydown(e) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if show}
  <div class="modal-overlay" onclick={handleOverlayClick} role="dialog" aria-modal="true">
    <div class="modal-content">
      <button class="modal-close" onclick={handleClose} aria-label="关闭">×</button>
      {#if title}
        <h2 class="modal-title">{title}</h2>
      {/if}
      {@render children()}
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: #fff;
    border-radius: 12px;
    padding: 35px;
    max-width: 500px;
    width: 90%;
    position: relative;
    animation: modalSlideIn 0.3s ease;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 32px;
    height: 32px;
    border: none;
    background: #f3f4f6;
    border-radius: 50%;
    font-size: 22px;
    color: #6b7280;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-close:hover {
    background: #e5e7eb;
  }
  
  .modal-title {
    font-size: 24px;
    color: var(--primary);
    margin-bottom: 25px;
  }
</style>
