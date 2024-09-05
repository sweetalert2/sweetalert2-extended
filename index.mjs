import Swal from 'sweetalert2';

export const showSwal = () => {
  Swal.fire({
    title: 'Hello from the index.mjs file!',
    willOpen: () => {
      console.log('original willOpen');
    }
  });
}
