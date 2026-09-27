module.exports = function (api) {
  api.cache(true);

  return {
    // NativeWind v5 applies its rewrite via Metro. The v4 `nativewind/babel`
    // preset and jsxImportSource setting must stay removed.
    presets: ['babel-preset-expo'],
  };
};
