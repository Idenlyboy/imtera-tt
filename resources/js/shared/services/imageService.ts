export const onError = (event: Event & { target: HTMLImageElement }) => {
    event.target.src = '/images/pictures/test.jpg';
}