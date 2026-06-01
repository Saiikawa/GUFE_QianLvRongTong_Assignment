<script>
  import { onMount } from 'svelte';
  import { t, locale } from '$lib/i18n/index.js';
  
  let currentIndex = $state(0);
  let timer = null;
  
  const slides = [
    {
      titleKey: 'banner.platform',
      subtitleKey: 'banner.platformSub',
      image: '/image/微信图片_20260510160412_19_186.jpg',
      buttons: [
        { textKey: 'banner.carbonProducts', route: '/carbon' },
        { textKey: 'banner.greenLoan', route: '/products' }
      ]
    },
    {
      titleKey: 'banner.credit',
      subtitleKey: 'banner.creditSub',
      image: '/image/微信图片_20260510160839_23_186.jpg',
      buttons: [
        { textKey: 'banner.learnMore', route: '/products' },
        { textKey: 'banner.loanCalculator', route: '/calculator' }
      ]
    },
    {
      titleKey: 'banner.carbon',
      subtitleKey: 'banner.carbonSub',
      image: '/image/微信图片_20260510160856_25_186.png',
      buttons: [
        { textKey: 'banner.carbonProducts', route: '/carbon' },
        { textKey: 'banner.contactNow', action: 'contact' }
      ]
    }
  ];
  
  function goTo(index) {
    currentIndex = index;
  }
  
  function next() {
    currentIndex = (currentIndex + 1) % slides.length;
  }
  
  function prev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }
  
  function startAutoPlay() {
    timer = setInterval(next, 5000);
  }
  
  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
    }
  }
  
  onMount(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  });
</script>

<div class="banner-slider" onmouseenter={stopAutoPlay} onmouseleave={startAutoPlay}>
  <div class="banner-slides">
    {#each slides as slide, index}
      <div 
        class="banner-slide" 
        class:active={currentIndex === index}
        style="background-image: url('{slide.image}'); background-size: cover; background-position: center;"
      >
        <div class="banner-overlay">
          <div class="banner-content">
            <h1>{$t(slide.titleKey)}</h1>
            <p>{$t(slide.subtitleKey)}</p>
            <div class="banner-btns">
              {#each slide.buttons as btn}
                {#if btn.route}
                  <a href={btn.route} class="btn-primary" class:secondary={btn.route !== '/carbon'}>{$t(btn.textKey)}</a>
                {:else}
                  <button class="btn-secondary" data-modal-trigger="contact">{$t(btn.textKey)}</button>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <div class="banner-indicators">
    {#each slides as _, index}
      <button 
        class="indicator" 
        class:active={currentIndex === index}
        onclick={() => goTo(index)}
        aria-label="跳转到第{index + 1}张"
      ></button>
    {/each}
  </div>
  
  <button class="banner-arrow arrow-left" onclick={prev} aria-label="上一张">‹</button>
  <button class="banner-arrow arrow-right" onclick={next} aria-label="下一张">›</button>
</div>

<style>
  .banner-slider {
    position: relative;
    overflow: hidden;
    height: 450px;
  }
  
  .banner-slides {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .banner-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
  
  .banner-slide.active {
    opacity: 1;
    z-index: 1;
  }
  
  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.6) 0%, rgba(5, 150, 105, 0.5) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .banner-content {
    text-align: center;
    max-width: 800px;
    padding: 20px;
  }
  
  .banner-content h1 {
    color: #fff;
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 15px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .banner-content p {
    color: rgba(255, 255, 255, 0.95);
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .banner-btns {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .banner-btns :global(.btn-primary),
  .banner-btns :global(.btn-secondary) {
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    border: none;
  }
  
  .banner-btns :global(.btn-primary) {
    background: #fff;
    color: var(--primary);
  }
  
  .banner-btns :global(.btn-primary:hover) {
    background: #f0fdf4;
    transform: translateY(-2px);
  }
  
  .banner-btns :global(.btn-secondary) {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
  
  .banner-btns :global(.btn-secondary:hover) {
    background: rgba(255, 255, 255, 0.25);
    border-color: #fff;
  }
  
  .banner-indicators {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 10;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }
  
  .indicator:hover {
    background: rgba(255, 255, 255, 0.8);
  }
  
  .indicator.active {
    background: #fff;
    width: 36px;
    border-radius: 6px;
  }
  
  .banner-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    border: none;
  }
  
  .banner-arrow:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  
  .arrow-left {
    left: 20px;
  }
  
  .arrow-right {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    .banner-slider {
      height: 380px;
    }
    
    .banner-content h1 {
      font-size: 26px;
    }
    
    .banner-content p {
      font-size: 15px;
    }
    
    .banner-btns {
      flex-direction: column;
      align-items: center;
    }
    
    .banner-btns :global(.btn-primary),
    .banner-btns :global(.btn-secondary) {
      width: 200px;
    }
  }
</style>
