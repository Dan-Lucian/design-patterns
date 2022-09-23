if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const root = document.getElementById('root');

if (root) {
    root.innerHTML = ` Hello `;
}
