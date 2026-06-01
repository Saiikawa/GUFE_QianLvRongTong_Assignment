import { writable, derived } from 'svelte/store';
import { translations } from './translations.js';

// 获取初始语言（优先从 localStorage 读取）
function getInitialLocale() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('locale');
    if (saved && (saved === 'zh' || saved === 'en')) {
      return saved;
    }
  }
  return 'zh';
}

// 创建语言状态
export const locale = writable(getInitialLocale());

// 持久化语言设置
locale.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', value);
  }
});

// 翻译函数 store
export const t = derived(locale, ($locale) => {
  const dict = translations[$locale];
  
  return function translate(key) {
    const keys = key.split('.');
    let result = dict;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // 如果找不到翻译，返回 key
      }
    }
    
    return result;
  };
});

// 切换语言
export function toggleLocale() {
  locale.update((current) => (current === 'zh' ? 'en' : 'zh'));
}

// 设置语言
export function setLocale(newLocale) {
  if (newLocale === 'zh' || newLocale === 'en') {
    locale.set(newLocale);
  }
}
