import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/core";

import {
    Camera,
    CameraResultType,
    CameraSource,
    Photo
} from "@capacitor/camera"

import { Filesystem, Directory } from "@capacitor/filesystem" 
import { Preferences } from "@capacitor/preferences"
import { Capacitor } from "@capacitor/core";

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([])

    const takePhoto = async () => {
        // call the camera to get the photo
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        })
        // display the photos
        const fileName = new Date().getTime() + ".jpeg";
        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ];
        setPhotos(newPhotos)
    }

    return {
        photos,
        takePhoto,
    }
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}