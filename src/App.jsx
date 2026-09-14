import React, { useRef, useState } from 'react';
import { RoomProvider } from './context/RoomContext';
import { RoomCanvas } from './components/3d/RoomCanvas';
import { TopNavbar } from './components/ui/TopNavbar';
import { FurnitureCatalog } from './components/ui/FurnitureCatalog';
import { ActionButtons } from './components/ui/ActionButtons';
import { PhotoModal } from './components/ui/PhotoModal';
import { GalleryModal } from './components/ui/GalleryModal';

export default function App() {
  const canvasRef = useRef(null);

  // Modals
  const [photoOpen, setPhotoOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <RoomProvider>
      <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-stone-950 via-zinc-950 to-stone-900 font-sans select-none">
        {/* Top Navbar */}
        <TopNavbar />

        {/* 3D Interactive Cozy Dungeon Canvas with Cutaway Vault View */}
        <RoomCanvas canvasRef={canvasRef} />

        {/* Poki-Style Right-Hand Category & Prop Catalog Shelf */}
        <FurnitureCatalog />

        {/* Poki-Style Bottom-Left Chunky Action Buttons (Camera, Gallery, Sound) */}
        <ActionButtons
          onOpenPhoto={() => setPhotoOpen(true)}
          onOpenGallery={() => setGalleryOpen(true)}
        />

        {/* Photo Mode Snapshot Modal */}
        <PhotoModal
          isOpen={photoOpen}
          onClose={() => setPhotoOpen(false)}
          canvasRef={canvasRef}
        />

        {/* Saved Snapshots Gallery Modal */}
        <GalleryModal
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          onOpenPhoto={() => setPhotoOpen(true)}
        />
      </div>
    </RoomProvider>
  );
}
