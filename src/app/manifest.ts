import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WAKe',
    start_url: '/',
    display: 'standalone',
    background_color: '#27D395',
    theme_color: '#27D395',
  };
}
