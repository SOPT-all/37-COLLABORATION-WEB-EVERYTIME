#!/bin/bash

# img_ad1
magick src/assets/images/img_ad1.webp -resize 780x208 src/assets/images/img_ad1-1x.webp
magick src/assets/images/img_ad1.webp -resize 1560x416 src/assets/images/img_ad1-2x.webp
magick src/assets/images/img_ad1.webp -resize 2340x624 src/assets/images/img_ad1-3x.webp

# img_ad2
magick src/assets/images/img_ad2.webp -resize 280x187 src/assets/images/img_ad2-1x.webp
magick src/assets/images/img_ad2.webp -resize 560x374 src/assets/images/img_ad2-2x.webp
magick src/assets/images/img_ad2.webp -resize 840x561 src/assets/images/img_ad2-3x.webp

# img_ad3
magick src/assets/images/img_ad3.webp -resize 280x187 src/assets/images/img_ad3-1x.webp
magick src/assets/images/img_ad3.webp -resize 560x374 src/assets/images/img_ad3-2x.webp
magick src/assets/images/img_ad3.webp -resize 840x561 src/assets/images/img_ad3-3x.webp

# img_ad4
magick src/assets/images/img_ad4.webp -resize 280x187 src/assets/images/img_ad4-1x.webp
magick src/assets/images/img_ad4.webp -resize 560x374 src/assets/images/img_ad4-2x.webp
magick src/assets/images/img_ad4.webp -resize 840x561 src/assets/images/img_ad4-3x.webp

echo "✅ 모든 이미지 리사이징 완료!"