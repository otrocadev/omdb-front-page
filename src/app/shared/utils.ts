export function onImageError(event: Event): void {
  const imgElement = event.target as HTMLImageElement;
  imgElement.src = '/images/default_media_img.webp';
}
