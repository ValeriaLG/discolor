/**
 * Collection of useful or general purpose helper functions
 */

import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
dayjs.extend(Calendar);


/**
 * Random string generator.
 *
 * @returns {string} A randomly generated string
 */
export const randomString = () => {
  return Math.random().toString(36).substring(7);
}

/**
 * Generates the current date in the format
 *
 * @returns {string} The relative time that the message was posted
 */
export const getDate = () => {

  return dayjs().calendar(null, {
    sameDay: '[Today at] h:mm A',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
  });
};
