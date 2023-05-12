import React from 'react';

export interface SmoothGalleryProps {
  imageUrls: string[];
}

export function SmoothGallery({ imageUrls }: SmoothGalleryProps) {
  return (
    <div className="flex h-96 gap-4">
      {imageUrls.map((url) => (
        <div
          key={url}
          style={{
            backgroundImage: `url("${url}")`,
          }}
          className="flex-1 rounded-lg bg-center bg-no-repeat bg-auto transition-all duration-500 ease-in-out hover:flex-[5]"
        />
      ))}
    </div>
  );
}
