<script>
  import { onMount } from 'svelte';
  
  let isVisible = $state(false);
  let modalElement;
  
  function openModal() {
    isVisible = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    isVisible = false;
    document.body.style.overflow = '';
  }
  
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  
  function handleKeydown(e) {
    if (e.key === 'Escape' && isVisible) {
      closeModal();
    }
  }
  
  onMount(() => {
    // 使用事件委托，在document级别监听
    document.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-modal-trigger')) {
        openModal();
        // 如果有 data-close-menu 属性，关闭移动菜单
        if (e.target.hasAttribute('data-close-menu')) {
          document.body.classList.remove('mobile-menu-open');
        }
      }
    });
    
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<div 
  class="modal-overlay" 
  class:show={isVisible}
  onclick={handleOverlayClick} 
  role="dialog" 
  aria-modal="true"
>
  <div class="modal-content" onclick={(e) => e.stopPropagation()}>
    <button class="modal-close" onclick={closeModal} aria-label="关闭">×</button>
    <h2 class="modal-title">联系我们</h2>
    <div class="contact-info">
      <div class="info-item">
        <strong>服务热线：</strong>400-888-8888
      </div>
      <div class="info-item">
        <strong>咨询邮箱：</strong>contact@qianlvtong.com
      </div>
      <div class="info-item">
        <strong>公司地址：</strong>贵州省贵阳市观山湖区金融城
      </div>
      <div class="info-item">
        <strong>工作时间：</strong>周一至周五 9:00-18:00
      </div>
      <p class="tips">
        感谢您对黔绿融通的关注！我们将竭诚为您提供绿色金融服务。
      </p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" onclick={closeModal}>关闭</button>
    </div>
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-overlay.show {
    display: flex;
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
  
  .contact-info .info-item {
    padding: 15px 0;
    border-bottom: 1px solid #f3f4f6;
  }
  
  .contact-info strong {
    color: var(--primary);
  }
  
  .contact-info .tips {
    padding-top: 15px;
    color: #6b7280;
    font-size: 14px;
  }
  
  .modal-footer {
    margin-top: 25px;
    text-align: center;
  }
  
  .btn {
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }
  
  .btn-primary {
    background: var(--primary);
    color: #fff;
  }
  
  .btn-primary:hover {
    background: var(--primary-dark);
  }
</style>
