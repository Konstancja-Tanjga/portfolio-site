#!/bin/sh
# Encode the two Playwright recordings (rec.js) into the clips on the page.
# The first 2.2 s of each recording, the page loading, are trimmed; the rest
# is kept at 12 fps. The poster is the frame at 5 s.
C=../../site/public/work/ogolnopolska-strefa-talentu/clips
for n in ambassador story; do
  f=$(ls rec/$n/*.webm)
  ffmpeg -v error -y -ss 2.2 -i "$f" -r 12 -an -c:v libx264 -pix_fmt yuv420p -crf 26 -movflags +faststart "$C/generator-$n.mp4"
  ffmpeg -v error -y -ss 2.2 -i "$f" -r 12 -an -c:v libvpx-vp9 -b:v 0 -crf 38 "$C/generator-$n.webm"
  ffmpeg -v error -y -ss 5 -i "$f" -frames:v 1 /tmp/poster.png && cwebp -quiet -q 80 /tmp/poster.png -o "$C/generator-$n.webp"
done
