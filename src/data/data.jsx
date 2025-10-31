// Collects header components dynamically from headersList/index.js
import * as Headers from '../components/headersList';
// Object.values(Headers) will be an array of components

const pages = Object.values(Headers).map((HeaderComponent, idx, title) => ({
    id: idx + 1,
    title: title,
    Component: HeaderComponent,
}));

export default pages;
