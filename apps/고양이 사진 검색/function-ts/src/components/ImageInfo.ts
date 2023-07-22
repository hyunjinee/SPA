import { $ } from '../shared/dom';
import { CatDetail } from '../shared/interface';

export const renderImageInfo = async (detail: CatDetail) => {
  const $imageInfo = document.createElement('div');
  $imageInfo.className = 'image-info';
  $imageInfo.classList.remove('fade');

  $('#app')?.append($imageInfo);

  $imageInfo.innerHTML = `
    <div class="content-wrapper">
      <div class="title">
        <span>${detail.name}</span>
        <div class="close">x</div>
      </div>
      <img src="${detail.url}" alt="${detail.name}"/>
      <div class="description">
        <div>성격: ${detail.temperament}</div>
        <div>태생: ${detail.origin}</div>
      </div>
    </div>
  `;

  $imageInfo.style.display = 'block';

  document.addEventListener('click', (e) => {
    if (
      e.target === $imageInfo ||
      e.target === $('.close') ||
      e.target === $('.content-wrapper img')
    ) {
      $imageInfo.style.display = 'none';
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
      $imageInfo.style.display = 'none';
    }
  });
};

// export default class ImageInfo {
//   $imageInfo = null;
//   data = null;

//   constructor({ $target, data }) {
//     const $imageInfo = document.createElement('div');
//     $imageInfo.className = 'ImageInfo';
//     this.$imageInfo = $imageInfo;
//     $target.appendChild($imageInfo);

//     this.data = data;

//     this.render();
//   }

//   setState(nextData) {
//     this.data = nextData;
//     this.render();
//   }

//   render() {
//     if (this.data.visible) {
//       const { name, url, temperament, origin } = this.data.image;

//       this.$imageInfo.classList.remove('fade');

//       document.addEventListener('click', (e) => {
//         if (
//           e.target == document.querySelector('.ImageInfo') ||
//           e.target == document.querySelector('.close') ||
//           e.target == document.querySelector('.content-wrapper img')
//         ) {
//           this.$imageInfo.style.display = 'none';
//           this.$imageInfo.classList.add('fade');
//         }
//       });
//       document.addEventListener('keydown', (e) => {
//         if (e.keyCode == 27) {
//           this.$imageInfo.style.display = 'none';
//           this.$imageInfo.classList.add('fade');
//         }
//       });

//       this.$imageInfo.innerHTML = `
//         <div class="content-wrapper">
//           <div class="title">
//             <span>${name}</span>
//             <div class="close">x</div>
//           </div>
//           <img src="${url}" alt="${name}"/>
//           <div class="description">
//             <div>성격: ${temperament}</div>
//             <div>태생: ${origin}</div>
//           </div>
//         </div>`;
//       this.$imageInfo.style.display = 'block';
//     } else {
//       this.$imageInfo.style.display = 'none';
//     }
//   }
// }
