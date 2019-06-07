import _ from 'lodash';
/**
 * Finds the movies with matching search string and returns them
 * 
 * @param {String} value search string
 * @param {Array} data array of objects of movies
 */
const regexpFilter = (value, data) => {
    const re = new RegExp(_.escapeRegExp(value), 'i');
    const isMatch = (res) => re.test(res.title);
    return _.filter(data, isMatch);
};

export default regexpFilter;