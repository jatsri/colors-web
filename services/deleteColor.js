import getFetch from '../lib/getFetch';

export default (id) => {
    const fetch = getFetch();
    return () => {
        return fetch(`http://localhost:3000/colors/${id}`, { method: 'DELETE' })
    }
}
