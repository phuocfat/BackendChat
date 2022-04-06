const handlePromise = (promise) => {
    return promise
        .then((data) => [null, data])
        .catch((data) => [error, undefined])
}
module.exports = handlePromise;