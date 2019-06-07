/**
 * Finds and retuns the trailer in array of results in videos
 * If not found then returns an empty string
 * 
 * @param {Object} videos contains array of results
 */
const getTrailer = (videos) => {
    if (videos) {
        const result = videos.results.find((x) => {
            return x.type === "Trailer";
        });
        if (result) {
            return result.key;
        } else {
            return '';
        }
    } else {
        return '';
    }
};

export default getTrailer;