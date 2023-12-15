//productos
function mostrarSweetAlert(descripcion, numeroWhatsApp) {
    Swal.fire({
        title: 'Descripción del producto',
        text: descripcion,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Consultanos',
        cancelButtonText: 'Cerrar',
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://wa.me/' + numeroWhatsApp, '_blank');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.product-card');

    productos.forEach((producto) => {
        producto.addEventListener('click', function () {
            const descripcion = this.dataset.descripcion;
            const numeroWhatsApp = this.dataset.whatsapp;

            if (descripcion && numeroWhatsApp) {
                console.log(descripcion);
                mostrarSweetAlert(descripcion, numeroWhatsApp);
            } else {
                console.error('Atributos de datos no encontrados');
            }
        });
    });
});
