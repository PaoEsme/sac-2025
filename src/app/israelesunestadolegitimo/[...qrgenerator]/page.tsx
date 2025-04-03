'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { StaticCanvas } from 'fabric';

import { headwearParts } from '@/components/character-editor/headwear-parts';
import { headParts } from '@/components/character-editor/head-parts';
import { patternParts } from '@/components/character-editor/patterns';
import torso from '@/assets/character-editor/body/torso.png';
import hands from '@/assets/character-editor/body/hands.png';

import { loadImage, applyInvertFilter, createSVG, SVG_SLEEVE, SVG_TORSO } from '@/utils/canvasUtils';

export default function Page() {
    const scaleFactor = 1.5;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasInstance, setCanvasInstance] = useState<StaticCanvas | null>(null);
    const params = useParams();
    const qrgenerator = params.qrgenerator as string[];
    const [userId, headwearId, headId, patternId, playerColor, patternTone] = qrgenerator;

    useEffect(() => {
        const partCategories = [headParts, headwearParts, patternParts];
        const selectedImages = [
            partCategories[0][Number(headwearId)],
            partCategories[1][Number(headId)],
            partCategories[2][Number(patternId)],
        ];

        if (!canvasRef.current) return;

        const canvas = new StaticCanvas(canvasRef.current, {
            width: 500,
            height: 500,
        });

        // Cargar y agregar las imágenes al canvas
        const loadAndDrawImages = async () => {
            try {
                
                // Figura 1
                await loadAndAddImage(torso.src, { left: (-90 * scaleFactor), top: (-8 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) }, canvas);
                const svg1 = await createSVG(SVG_SLEEVE.replace(/COLOR/g, playerColor), true);
                if (svg1) {
                    svg1.set({ left: (50 * scaleFactor), top: (208 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) });
                    canvas.add(svg1);
                }
                const svg2 = await createSVG(SVG_TORSO.replace(/COLOR/g, playerColor));
                if (svg2) {
                    svg2.set({ left: (85 * scaleFactor), top: (196 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) });
                    canvas.add(svg2);
                }
                await loadAndAddImage(hands.src, { left: (-90 * scaleFactor), top: (-8 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) }, canvas);

                // Partes seleccionadas en figura 1
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    if (!part) continue;
                    const img = await loadImage(part.src.src, { left: (-90 * scaleFactor), top: (-8 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    canvas.add(img);
                }
                
                setCanvasInstance(canvas);

                // Renderizar todo
                canvas.renderAll();
                
            } catch (error) {
                console.error(error);
            }
        };

        const loadAndAddImage = async (src: string, options: object | undefined, canvas: StaticCanvas) => {
            const img = await loadImage(src, options);
            canvas.add(img);
        };

        loadAndDrawImages()
        
        return () => {
            canvas.dispose(); // Cleanup
        };
    }, [headId, headwearId, patternId, patternTone, playerColor, userId,]);

    
    const downloadImage = () => {
        try {
            const dataUrl = canvasInstance?.toDataURL({ format: 'png', multiplier: 2 });
            if (!dataUrl) return;

            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = `character-${userId}.png`;
            a.click();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-[92dvh] bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Thumbnail</h1>
            <canvas ref={canvasRef} className="border border-gray-300" width={500} height={500} />
            <button
                onClick={downloadImage}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Download Image
            </button>
        </div>
    );
}