#!/bin/bash

# Optimize Renders (PNG -> JPG, max 1920px)
for i in {1..8}; do
    if [ -f "src/assets/render-$i.png" ]; then
        echo "Optimizing render-$i.png..."
        sips -s format jpeg -s formatOptions 80 -Z 1920 "src/assets/render-$i.png" --out "src/assets/render-$i.jpg"
    fi
done

# Optimize Hero BG (PNG -> JPG, max 1920px)
if [ -f "src/assets/hero-bg-2.png" ]; then
    echo "Optimizing hero-bg-2.png..."
    sips -s format jpeg -s formatOptions 80 -Z 1920 "src/assets/hero-bg-2.png" --out "src/assets/hero-bg-2.jpg"
fi

# Optimize Cutouts (Keep PNG, max 1920px)
for i in {1..5}; do
    if [ -f "src/assets/cutout-$i.png" ]; then
        echo "Optimizing cutout-$i.png..."
        sips -Z 1920 "src/assets/cutout-$i.png"
    fi
done
