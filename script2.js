// const swh = document.getElementById('switch');

// swh.addEventListener('click', (e) => {
//     if (swh.classList.contains('dark')) {
//         swh.classList.remove('dark');
//     } else {
//         swh.classList.add('dark');
//     }
// });

function switchClass(){
    const body = document.querySelector('body');
    // if (body.classList.contains('dark')) {
    //     body.classList.remove('dark');
    // } else {
    //     body.classList.add('dark');
    // }
    body.classList.toggle('dark');
  }