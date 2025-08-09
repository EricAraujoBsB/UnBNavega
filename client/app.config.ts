import 'dotenv/config';

export default {
  expo: {
    name: 'UnBNavega',
    slug: 'unbnavega',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    assetBundlePatterns: ['**/*'],
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
    ios: {
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GMAP_KEY,
      },
    },
    android: {
      package: 'com.myapp.unbnavega', // personalize conforme necessário
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GMAP_KEY,
        },
      },
    },
  },
};
