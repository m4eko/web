window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('policy-last-modified').textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
});