import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WAKe',
    start_url: '/',
    display: 'standalone',
    background_color: '#00E507',
    theme_color: '#00E507',
  };
}
