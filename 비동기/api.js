fetch()
    .then((response) => response.json())
    .then((json) => console.log('data', json))
    .catch((error) => {
        console.log(error);
    });
// try/catch
const fetchData = async () => {
    try {
        'https://www.google.com'
        const response = await fetch(

        );
        const data = await response.json();
        console.log('data' data);

    } catch (error) {
        'https://www.google.com'
        console.log('error', error);
    }
};
fetchData();
