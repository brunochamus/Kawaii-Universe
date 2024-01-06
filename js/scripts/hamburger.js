document.getElementById('open').addEventListener('click', function () {
    document.getElementById('nav').style.display = 'block';
    document.getElementById('open').style.display = 'none';
    document.getElementById('close').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function () {
    document.getElementById('nav').style.display = 'none';
    document.getElementById('open').style.display = 'block';
    document.getElementById('close').style.display = 'none';
});