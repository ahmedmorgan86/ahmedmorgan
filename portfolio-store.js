/**
 * Portfolio Data Store
 * Provides unified state management between index.html and admin.html
 */
(function(window) {
  'use strict';

  const STORAGE_KEY = 'ahmedmorgan_site_data_v1';
  const AUTH_KEY = 'ahmedmorgan_admin_auth_v1';
  const DEFAULT_PIN = '123456'; // Default admin password / PIN

  const PortfolioStore = {
    /**
     * Get current data from localStorage or fallback to default data
     */
    getData: function() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && parsed.profile && parsed.projects) {
            return parsed;
          }
        }
      } catch (err) {
        console.warn('Failed to parse stored portfolio data:', err);
      }
      return this.getDefaultData();
    },

    /**
     * Get the default baseline data
     */
    getDefaultData: function() {
      if (window.DEFAULT_PORTFOLIO_DATA) {
        return JSON.parse(JSON.stringify(window.DEFAULT_PORTFOLIO_DATA));
      }
      return null;
    },

    /**
     * Save data to localStorage
     */
    saveData: function(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        window.dispatchEvent(new CustomEvent('portfolioDataUpdated', { detail: data }));
        return true;
      } catch (err) {
        console.error('Failed to save data to localStorage:', err);
        return false;
      }
    },

    /**
     * Reset data to default factory settings
     */
    resetData: function() {
      try {
        localStorage.removeItem(STORAGE_KEY);
        const defaults = this.getDefaultData();
        window.dispatchEvent(new CustomEvent('portfolioDataUpdated', { detail: defaults }));
        return defaults;
      } catch (err) {
        console.error('Failed to reset portfolio data:', err);
        return null;
      }
    },

    /**
     * Export data as a downloadable JSON file
     */
    exportJSON: function() {
      const data = this.getData();
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'site-data.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },

    /**
     * Import JSON string and apply to store
     */
    importJSON: function(jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        if (!parsed || !parsed.profile || !parsed.projects) {
          throw new Error('الملف غير صالح أو تنقصه أقسام الموقع الأساسية');
        }
        return this.saveData(parsed);
      } catch (err) {
        console.error('Invalid JSON import:', err);
        throw err;
      }
    },

    /**
     * Simple Auth check for Admin panel
     */
    checkAuth: function() {
      return sessionStorage.getItem(AUTH_KEY) === 'authenticated';
    },

    login: function(pin) {
      const savedPin = localStorage.getItem('ahmedmorgan_admin_pin') || DEFAULT_PIN;
      if (pin === savedPin) {
        sessionStorage.setItem(AUTH_KEY, 'authenticated');
        return true;
      }
      return false;
    },

    logout: function() {
      sessionStorage.removeItem(AUTH_KEY);
    },

    changePin: function(oldPin, newPin) {
      const currentPin = localStorage.getItem('ahmedmorgan_admin_pin') || DEFAULT_PIN;
      if (oldPin !== currentPin) {
        return { success: false, message: 'كلمة المرور الحالية غير صحيحة' };
      }
      if (!newPin || newPin.length < 4) {
        return { success: false, message: 'كلمة المرور يجب أن لا تقل عن 4 رموز' };
      }
      localStorage.setItem('ahmedmorgan_admin_pin', newPin);
      return { success: true, message: 'تم تغيير كلمة المرور بنجاح' };
    }
  };

  window.PortfolioStore = PortfolioStore;
})(window);
