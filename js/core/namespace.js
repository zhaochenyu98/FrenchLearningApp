(function initializeFrenchLearningNamespace(global) {
  const FR = global.FR || {};

  FR.data = FR.data || {};
  FR.renderers = FR.renderers || {};
  FR.runtime = FR.runtime || {};

  FR.storage = FR.storage || {
    get(key, fallback = null) {
      try {
        const value = global.localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch (error) {
        console.warn(`Could not read saved preference: ${key}`, error);
        return fallback;
      }
    },

    set(key, value) {
      try {
        global.localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.warn(`Could not save preference: ${key}`, error);
        return false;
      }
    },

    getJson(key, fallback) {
      const value = this.get(key);
      if (value === null) return fallback;
      try {
        return JSON.parse(value);
      } catch (error) {
        console.warn(`Could not parse saved preference: ${key}`, error);
        return fallback;
      }
    },

    setJson(key, value) {
      return this.set(key, JSON.stringify(value));
    }
  };

  global.FR = FR;
})(window);
