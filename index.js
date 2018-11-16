/* #1, #2
console.log('[test][index.js][1]');

const date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(`[test][index.js][2] ${date}`);
*/

/* #3, #4 */
import moment from 'moment';
console.log('[test][index.js][webpack][1]');

const date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(`[test][index.js][webpack][2] ${date}`);
